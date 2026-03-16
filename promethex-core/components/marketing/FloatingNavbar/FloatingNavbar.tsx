import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { FloatingNavbarProps } from './navbar.types';
import { useScrollDetection } from './useScrollDetection';
import { useActiveSection } from './useActiveSection';
import { NavbarIsland } from './NavbarIsland';
import { OverlayMenu } from './OverlayMenu';
import { AIPopover } from './AIPopover';

const CSS_VARIABLES = [
  '--navbar-bg',
  '--navbar-border',
  '--navbar-glow',
  '--navbar-glow-idle',
  '--navbar-text',
  '--navbar-text-muted',
  '--navbar-contact-bg',
  '--navbar-contact-text',
  '--navbar-overlay-bg',
  '--navbar-palette-bg',
];

export function FloatingNavbar({
  links,
  onNavigate,
  sectionIds,
  onSectionChange,
  onSearch,
  ctaLink,
  logo,
  className,
}: FloatingNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiPopoverOpen, setAiPopoverOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiAction, setAiAction] = useState<{ label: string; href: string } | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const scrolled = useScrollDetection(20);
  const { activeSection } = useActiveSection(sectionIds ?? []);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (activeSection) {
      onSectionChange?.(activeSection);
    }
  }, [activeSection]); // eslint-disable-line react-hooks/exhaustive-deps

  // DEV: warn about missing CSS variables
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    if (typeof document === 'undefined') return;

    const style = getComputedStyle(document.documentElement);
    CSS_VARIABLES.forEach((variable) => {
      const value = style.getPropertyValue(variable).trim();
      if (!value) {
        console.warn(
          `[FloatingNavbar] CSS variable "${variable}" is not defined. Add it to your theme.`
        );
      }
    });
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(true);
    setIsCommandOpen(false);
  };

  const handleToggleCommand = () => {
    setIsCommandOpen(true);
    setIsMenuOpen(false);
  };

  const handleCommandClose = () => {
    setIsCommandOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = async (query: string) => {
    if (!query.trim()) return;

    // Call parent onSearch for any external handling
    onSearch?.(query);

    // Open popover and start loading
    setAiPopoverOpen(true);
    setAiLoading(true);
    setAiAnswer(null);
    setAiAction(null);
    setAiError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (data.type === 'scroll') {
        // Keyword match — scroll and close popover
        setAiPopoverOpen(false);
        onNavigate(data.target);
        return;
      }

      if (data.error) {
        setAiError('No pude conectarme. Intenta de nuevo.');
      } else {
        setAiAnswer(data.answer);
        setAiAction(data.action);
      }
    } catch {
      setAiError('Error de conexión. Verifica tu internet.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleAIActionClick = (href: string) => {
    setAiPopoverOpen(false);
    if (href.startsWith('#')) {
      onNavigate(href);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={className}>
      <div className="relative">
        <NavbarIsland
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          isCommandOpen={isCommandOpen}
          activeSection={activeSection}
          logo={logo}
          onToggleMenu={handleToggleMenu}
          onToggleCommand={handleToggleCommand}
          searchQuery={searchQuery}
          onQueryChange={setSearchQuery}
          onSearchSubmit={handleSearchSubmit}
          onCommandClose={handleCommandClose}
          reducedMotion={reducedMotion}
        />
        <AIPopover
          isOpen={aiPopoverOpen}
          isLoading={aiLoading}
          answer={aiAnswer}
          action={aiAction}
          error={aiError}
          onClose={() => setAiPopoverOpen(false)}
          onActionClick={handleAIActionClick}
        />
      </div>
      <OverlayMenu
        isOpen={isMenuOpen}
        links={links}
        ctaLink={ctaLink}
        onNavigate={onNavigate}
        onClose={() => setIsMenuOpen(false)}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
