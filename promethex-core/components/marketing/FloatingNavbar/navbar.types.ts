import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface FloatingNavbarProps {
  links: NavLink[];
  onNavigate: (path: string) => void;
  sectionIds?: string[];
  onSectionChange?: (sectionId: string) => void;
  onSearch?: (query: string) => void;
  ctaLink?: NavLink;
  logo?: ReactNode;
  className?: string;
  menuVariant?: 'overlay';
}

export interface NavbarIslandProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  isCommandOpen: boolean;
  activeSection: string;
  logo?: ReactNode;
  onToggleMenu: () => void;
  onToggleCommand: () => void;
  searchQuery: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: (query: string) => void;
  onCommandClose: () => void;
  reducedMotion: boolean;
}

export interface OverlayMenuProps {
  isOpen: boolean;
  links: NavLink[];
  ctaLink?: NavLink;
  onNavigate: (path: string) => void;
  onClose: () => void;
  reducedMotion: boolean;
}

export interface CommandPaletteProps {
  searchQuery: string;
  onQueryChange: (value: string) => void;
  onSearch: (query: string) => void;
  onClose: () => void;
}

export interface SectionIndicatorProps {
  activeSection: string;
  reducedMotion: boolean;
}
