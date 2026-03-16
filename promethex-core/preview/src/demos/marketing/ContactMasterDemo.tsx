import React from 'react';
import { ContactMaster } from '@promethex/core';

export function ContactMasterDemo() {
  return (
    <ContactMaster
      emailValue="hola@promethex.net"
      whatsappValue="+593 999 999 999"
      onSubmit={(data) => console.log('Form submitted:', data)}
      onEmailClick={() => console.log('Email clicked')}
      onWhatsAppClick={() => console.log('WhatsApp clicked')}
    />
  );
}
