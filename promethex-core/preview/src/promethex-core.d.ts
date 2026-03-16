import type { ReactNode } from 'react'

declare module '@promethex/core' {
  export interface NavLink {
    label: string
    path: string
  }

  export interface FloatingNavbarProps {
    links: NavLink[]
    onNavigate: (path: string) => void
    sectionIds?: string[]
    onSectionChange?: (sectionId: string) => void
    onSearch?: (query: string) => void
    ctaLink?: NavLink
    logo?: ReactNode
    className?: string
    menuVariant?: 'overlay'
  }

  export function FloatingNavbar(props: FloatingNavbarProps): JSX.Element

  export interface HeroMasterProps {
    onPrimary?: () => void
    onSecondary?: () => void
    className?: string
  }

  export function HeroMaster(props: HeroMasterProps): JSX.Element

  export interface BentoServicesProps {
    className?: string;
  }

  export function BentoServices(props: BentoServicesProps): JSX.Element;

  export interface PricingMasterProps {
    onSelectStarter?: () => void;
    onSelectBusiness?: () => void;
    onSelectElite?: () => void;
    className?: string;
  }

  export function PricingMaster(props: PricingMasterProps): JSX.Element;

  export interface PromethexLogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
  }

  export function PromethexLogo(props: PromethexLogoProps): JSX.Element

  export interface ContactMasterProps {
    onSubmit?: (data: { name: string; company: string; email: string; message: string }) => void;
    onEmailClick?: () => void;
    onWhatsAppClick?: () => void;
    emailValue?: string;
    whatsappValue?: string;
    className?: string;
  }

  export function ContactMaster(props: ContactMasterProps): JSX.Element;

  export interface FooterMasterProps {
    onNavigate?: (path: string) => void;
    className?: string;
  }

  export function FooterMaster(props: FooterMasterProps): JSX.Element;
}
