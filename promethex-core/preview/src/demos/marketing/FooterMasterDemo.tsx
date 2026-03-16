import React from 'react';
import { FooterMaster } from '@promethex/core';

export function FooterMasterDemo() {
  return (
    <FooterMaster
      onNavigate={(path) => console.log('Navigate:', path)}
    />
  );
}
