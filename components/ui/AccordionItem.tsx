'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/content'

export default function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-brand/30 rounded-xl overflow-hidden bg-[#1a1a1a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 text-left text-text-main font-medium flex items-center justify-between hover:text-accent transition-colors duration-200 cursor-pointer"
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <span
          className="text-accent text-xl ml-4 flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-text-main/65 leading-relaxed text-sm border-t border-brand/20 pt-4">
          {item.answer}
        </div>
      )}
    </div>
  )
}
