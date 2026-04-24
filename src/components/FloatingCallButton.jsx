"use client";
import React from 'react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+15716557207"
      aria-label="Call LDN Decks"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'var(--site-color, #d14817)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 1000,
        textDecoration: 'none',
        transition: 'transform 0.2s',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L5.62 9.79L6.62 10.79Z" />
      </svg>
    </a>
  );
}
