import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Eres el asistente virtual de Promethex, una agencia de desarrollo web de élite.
Tu misión es responder consultas de clientes potenciales de forma concisa, profesional y orientada a la conversión.

SOBRE PROMETHEX:
- Eslogan: "Código. Velocidad. Resultados."
- Especialidad: Ecosistemas digitales de élite impulsados por Inteligencia Artificial.

SERVICIOS (Bento Grid):
1. Inteligencia Artificial Aplicada — Integraciones de IA personalizadas: chatbots, automatizaciones y análisis predictivo para escalar tu negocio.
2. Desarrollo Web de Élite — Arquitecturas Next.js, React y Node.js de alto rendimiento. Código limpio, escalable y listo para producción.
3. Estrategia de Conversión (CRO) — Diseño UX orientado a resultados. Cada píxel trabaja para convertir visitantes en clientes.
4. SEO 360° & Posicionamiento — Estrategia orgánica completa: auditoría técnica, contenido optimizado y construcción de autoridad de dominio.
5. Ecosistemas Interactivos — Plataformas SaaS, dashboards y portales corporativos con experiencias de usuario extraordinarias.

PLANES Y PRECIOS (pago único en USD):
- Starter ($279): Landing page 5 secciones, dominio 1 año, hosting optimizado, SSL, diseño responsive, formulario de contacto, Google Analytics, entrega 7 días.
- Business Pro ($449) ⭐ MÁS POPULAR: Hasta 4 páginas completas, SEO 360° integrado, diseño UX personalizado, módulo WhatsApp Business, Google Analytics + Search Console, SSL + hosting premium, entrega 14 días.
- Elite Corporate ($599): Hasta 8 páginas + blog, sistema de reservas online, mapa de calor + análisis UX, integraciones IA personalizadas, soporte prioritario 30 días, entrega 21 días.

CONTACTO:
- Email: info@promethex.net
- WhatsApp: +593 98 923 2393
- Instagram: @promethex.tech

PÁGINAS LEGALES:
- Términos y Condiciones: /legal/terminos
- Política de Privacidad: /legal/privacidad

REGLAS DE RESPUESTA:
- Responde siempre en español.
- Sé conciso: máximo 2-3 oraciones.
- Si preguntan por precios, menciona el plan más relevante con su precio.
- Si muestran intención de compra, sugiere contactar por WhatsApp.
- No inventes información que no esté en este contexto.
- Tono: profesional, directo y confiable.`;

// Keywords that trigger instant scroll (no AI needed)
const SCROLL_KEYWORDS: Record<string, string> = {
  'precios': '#precios',
  'precio': '#precios',
  'planes': '#precios',
  'plan': '#precios',
  'starter': '#precios',
  'business': '#precios',
  'elite': '#precios',
  'contacto': '#contacto',
  'contactar': '#contacto',
  'whatsapp': '#contacto',
  'email': '#contacto',
  'servicios': '#servicios',
  'servicio': '#servicios',
  'inicio': '#hero',
  'home': '#hero',
  'términos': '/legal/terminos',
  'terminos': '/legal/terminos',
  'términos y condiciones': '/legal/terminos',
  'privacidad': '/legal/privacidad',
  'política de privacidad': '/legal/privacidad',
  'politica de privacidad': '/legal/privacidad',
  'cookies': '/legal/privacidad',
  'legal': '/legal/terminos',
};

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query requerido' }, { status: 400 });
    }

    const trimmed = query.trim().toLowerCase();

    // Check for keyword scroll triggers
    if (SCROLL_KEYWORDS[trimmed]) {
      return NextResponse.json({
        type: 'scroll',
        target: SCROLL_KEYWORDS[trimmed],
      });
    }

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const answer = completion.choices[0]?.message?.content ?? 'Lo siento, no pude procesar tu consulta.';

    // Determine suggested action based on content
    let action: { label: string; href: string } | null = null;
    const lower = answer.toLowerCase();
    if (lower.includes('término') || lower.includes('termino') || lower.includes('condicion') || lower.includes('contrato')) {
      action = { label: 'Ver Términos y Condiciones →', href: '/legal/terminos' };
    } else if (lower.includes('privacidad') || lower.includes('cookie') || lower.includes('datos personales') || lower.includes('gdpr')) {
      action = { label: 'Ver Política de Privacidad →', href: '/legal/privacidad' };
    } else if (lower.includes('precio') || lower.includes('plan') || lower.includes('starter') || lower.includes('business') || lower.includes('elite')) {
      action = { label: 'Ver Precios →', href: '#precios' };
    } else if (lower.includes('whatsapp') || lower.includes('contacto') || lower.includes('contactar') || lower.includes('hablar')) {
      action = { label: 'Hablar con un humano →', href: 'https://wa.me/593989232393?text=Hola,%20tengo%20una%20consulta.' };
    } else if (lower.includes('servicio') || lower.includes('ia') || lower.includes('seo') || lower.includes('desarrollo')) {
      action = { label: 'Ver Servicios →', href: '#servicios' };
    } else {
      action = { label: 'Hablar con un humano →', href: 'https://wa.me/593989232393?text=Hola,%20tengo%20una%20consulta.' };
    }

    return NextResponse.json({
      type: 'answer',
      answer,
      action,
    });
  } catch (error) {
    console.error('[/api/chat] Error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
