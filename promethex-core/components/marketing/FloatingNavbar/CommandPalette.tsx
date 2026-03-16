import { Sparkles, X } from 'lucide-react';
import type { CommandPaletteProps } from './navbar.types';

export function CommandPalette({
  searchQuery,
  onQueryChange,
  onSearch,
  onClose,
}: CommandPaletteProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
      onClose();
    }
    if (e.key === 'Escape') {
      onQueryChange('');
      onClose();
    }
  };

  return (
    <div className="flex items-center gap-3 flex-1 px-2 bg-[var(--navbar-palette-bg)]">
      <Sparkles size={16} className="text-[var(--navbar-text-muted)] shrink-0" />
      <input
        autoFocus
        type="text"
        value={searchQuery}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pregúntale a la IA de Promethex..."
        aria-label="Buscar en el sitio"
        className="flex-1 bg-transparent outline-none text-[var(--navbar-text)]
                   placeholder:text-[var(--navbar-text-muted)] font-montserrat text-sm"
      />
      <button
        onClick={onClose}
        aria-label="Cerrar búsqueda"
        className="text-[var(--navbar-text-muted)] hover:text-[var(--navbar-text)] transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
