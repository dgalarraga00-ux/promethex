export const siteConfig = {
  name: 'Promethex',
  tagline: 'Desarrollo de Software de Élite',
  whatsapp: {
    number: '593989232393',
    message: 'Hola Promethex, deseo cotizar un proyecto de ingeniería.',
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`
    },
  },
  instagram: {
    url: 'https://www.instagram.com/promethex.tech/',
  },
}

// ── Services ──────────────────────────────────────────────────────────────────

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export const services: ServiceItem[] = [
  {
    id: 'web',
    title: 'Páginas Web Ultrarrápidas',
    description:
      'Diseños modernos y optimizados para SEO que cargan al instante para maximizar la retención de clientes.',
    icon: '⚡',
  },
  {
    id: 'apps',
    title: 'Apps a Medida',
    description:
      'Desarrollo de sistemas complejos, desde plataformas de delivery con mapas hasta paneles de administración seguros.',
    icon: '⚙️',
  },
  {
    id: 'ai',
    title: 'Automatizaciones con IA',
    description:
      'Integramos Inteligencia Artificial para optimizar procesos y atención al cliente en tu negocio.',
    icon: '🤖',
  },
]

// ── Pricing ───────────────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string
  name: string
  price: string
  focus: string
  deliveryDays: number
  features: string[]
  highlighted: boolean // true for the recommended plan
  whatsappUrl: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$279',
    focus: 'Arquitectura de Presencia. Landing de alto impacto.',
    deliveryDays: 5,
    highlighted: false,
    whatsappUrl: 'https://wa.me/593989232393?text=Hola%20Promethex,%20quiero%20el%20plan%20Starter.',
    features: [
      'Landing Page de 5 secciones',
      'Dominio y Hosting (1 año)',
      '1 Correo corporativo',
      'Diseño adaptable (responsive)',
      'Galería social integrada',
      'Certificado SSL',
      'Google Maps embebido',
      'Carga Ultra Rápida',
    ],
  },
  {
    id: 'business',
    name: 'Business Pro',
    price: '$449',
    focus: 'Plataforma de Autoridad. Multi-página, SEO 360°.',
    deliveryDays: 10,
    highlighted: true,
    whatsappUrl: 'https://wa.me/593989232393?text=Hola%20Promethex,%20quiero%20el%20plan%20Business%20Pro.',
    features: [
      'Todo lo del plan Starter',
      'Hasta 4 páginas internas',
      '4 correos corporativos',
      'Diseño 100% personalizado (sin plantillas)',
      'Optimización SEO 360°',
      'Google Analytics integrado',
      'Sección de Testimonios',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Corporate',
    price: '$599',
    focus: 'Ecosistema Interactivo. Lógica de negocio, Reservas/Cotizadores, Análisis UX.',
    deliveryDays: 15,
    highlighted: false,
    whatsappUrl: 'https://wa.me/593989232393?text=Hola%20Promethex,%20quiero%20el%20plan%20Elite.',
    features: [
      'Todo lo del plan Business Pro',
      'Hasta 8 páginas internas',
      '10 correos corporativos',
      'Integración de sistemas (Reservas / Cotizadores)',
      'Módulo de blog o portafolio',
      'Mapas de calor y análisis UX',
      'UX de alta retención',
    ],
  },
]

// ── IA-Ready ──────────────────────────────────────────────────────────────────

export interface IAReadyItem {
  id: string
  title: string
  description: string
  icon: string
}

export const iaReadyItems: IAReadyItem[] = [
  {
    id: 'catalog',
    title: 'Web Catálogo IA',
    description:
      'Catálogos inteligentes con búsqueda semántica y recomendaciones personalizadas en tiempo real.',
    icon: '🧠',
  },
  {
    id: 'ecommerce',
    title: 'Tiendas Online con Pagos',
    description:
      'E-commerce integrado con Payphone y Visa, optimizado para conversión y experiencia de usuario.',
    icon: '🛒',
  },
  {
    id: 'flows',
    title: 'Soluciones con Flujos de IA',
    description:
      'Automatización de procesos de negocio mediante agentes IA entrenados para tu industria.',
    icon: '🔄',
  },
]

// ── Why Us ────────────────────────────────────────────────────────────────────

export interface WhyUsItem {
  id: string
  title: string
  description: string
  icon: string
}

export const whyUsItems: WhyUsItem[] = [
  {
    id: 'custom',
    title: 'Cero plantillas',
    description:
      'Arquitectura de software escalable diseñada desde cero. Cada línea de código construida para tu negocio.',
    icon: '🏗️',
  },
  {
    id: 'tech',
    title: 'Tecnología de Élite',
    description:
      'Usamos el mismo stack tecnológico que las empresas líderes del mundo: Next.js, TypeScript y Tailwind.',
    icon: '🚀',
  },
  {
    id: 'results',
    title: 'Enfoque en resultados',
    description:
      'Construimos herramientas tecnológicas diseñadas para vender, retener clientes y ser rentables.',
    icon: '📈',
  },
]

// ── Elite Stack ───────────────────────────────────────────────────────────────

export interface StackItem {
  name: string
  description: string
  badge: string
}

export const stackItems: StackItem[] = [
  { name: 'Next.js', description: 'Framework React de producción', badge: 'Next.js' },
  { name: 'TypeScript', description: 'Tipado estático de élite', badge: 'TypeScript' },
  { name: 'Tailwind CSS', description: 'Diseño utility-first moderno', badge: 'Tailwind CSS' },
  { name: 'Node.js', description: 'Runtime de alto rendimiento', badge: 'Node.js' },
  { name: 'Vercel', description: 'Deploy global en millisegundos', badge: 'Vercel' },
]

// ── Portfolio ─────────────────────────────────────────────────────────────────

export const portfolioContent = {
  title: 'Proyectos con Propósito: Casos de Éxito',
  subtitle: 'En Promethex, convertimos visiones en activos digitales rentables.',
  description:
    'Dominar el tráfico de Google y consolidar la reputación de tu negocio no es casualidad; es ingeniería. Desarrollamos arquitecturas web diseñadas para captar clientes y posicionarte como líder. Somos la agencia desde Ecuador que impulsa proyectos de E-commerce y plataformas escalables para toda Latinoamérica.',
}

export const customSoftware = {
  title: 'Desarrollo a Medida & IA',
  description:
    'Construimos soluciones complejas: SaaS, Apps de Delivery, Dashboards e Integración de IA. Cotización bajo requerimiento.',
  cta: 'Solicitar cotización →',
}

// ── Services Grid ──────────────────────────────────────────────────────────────

export interface ServiceGridItem {
  id: string
  title: string
  description: string
  icon: string // emoji
}

export const servicesGridContent = {
  title: 'Impulsa tu presencia en línea con nuestros servicios',
  intro:
    'En Promethex potenciamos tu negocio con ingeniería digital de primer nivel. Creamos sitios modernos, veloces y optimizados para Google, diseñados para captar clientes y generar resultados tangibles. Transformamos tu visión en una herramienta real de crecimiento para el mercado de Ecuador y Latinoamérica.',
}

export const serviceGridItems: ServiceGridItem[] = [
  {
    id: 'web-design',
    title: 'Diseño Web',
    description:
      'Sitios modernos, funcionales y optimizados para convertir visitantes en clientes. Velocidad impecable y UX de primer nivel.',
    icon: '🖥️',
  },
  {
    id: 'seo',
    title: 'Posicionamiento SEO',
    description:
      'Aumentamos tu visibilidad en Google con estrategias que realmente funcionan. Más tráfico, más clientes.',
    icon: '🚀',
  },
  {
    id: 'email',
    title: 'Correo Corporativo',
    description:
      'Profesionalismo para tu negocio con correos empresariales seguros y confiables.',
    icon: '✉️',
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento Web',
    description:
      'Seguridad, actualizaciones periódicas y resolución de problemas para que tu sitio nunca se detenga.',
    icon: '🔧',
  },
]

// ── Consultation ──────────────────────────────────────────────────────────────

export const consultationContent = {
  label: 'CONSULTORÍA GRATUITA',
  title: '¿Tu proyecto necesita una dirección clara?',
  subtitle: 'Solicita una Consultoría Técnica Estratégica sin costo.',
  body: 'Nuestro equipo de ingeniería en Promethex está listo para resolver tus dudas sobre escalabilidad, diseño y tecnología. Te ayudamos a tomar la decisión más inteligente para el futuro digital de tu negocio.',
  cta: '💬 Agendar Consultoría',
  whatsappUrl: 'https://www.instagram.com/promethex.tech/',
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'cost',
    question: '¿Cuánto cuesta una solución web en Ecuador?',
    answer:
      'El costo depende de la complejidad de la arquitectura. En Promethex ofrecemos planes desde $279 para landing pages de alto rendimiento hasta sistemas personalizados. Todos incluyen consultoría inicial y despliegue profesional.',
  },
  {
    id: 'time',
    question: '¿En cuánto tiempo entregan el proyecto?',
    answer:
      'Nuestros tiempos de desarrollo son ágiles: desde 5 días para modelos Starter hasta 15-20 días para ecosistemas corporativos complejos.',
  },
  {
    id: 'location',
    question: '¿Trabajan con clientes fuera de Quito?',
    answer:
      'Operamos desde Quito para todo el Ecuador y Latinoamérica. Gracias a nuestra metodología remota de ingeniería, hemos desarrollado proyectos escalables sin fronteras geográficas.',
  },
  {
    id: 'seo',
    question: '¿Las páginas se posicionan en Google?',
    answer:
      'Absolutamente. Al construir con Next.js, tu sitio tiene una ventaja nativa en velocidad y SEO técnico sobre la competencia que usa herramientas tradicionales.',
  },
  {
    id: 'hosting',
    question: '¿Incluyen dominio y hosting?',
    answer:
      'Sí, todos nuestros planes incluyen dominio .com, hosting profesional y correos corporativos durante el primer año sin costo adicional.',
  },
  {
    id: 'difference',
    question: '¿Qué diferencia a Promethex?',
    answer:
      'No somos una agencia de diseño común; somos una oficina de ingeniería de software. No usamos plantillas limitadas; creamos arquitecturas escalables, rápidas y diseñadas para convertir visitantes en ingresos.',
  },
]
