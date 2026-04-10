"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    
    return { label, href };
  });

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <div className={styles.container}>
        <div className={styles.item}>
          <Link href="/" className={styles.link}>Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className={styles.separator}>/</span>
              {index === breadcrumbs.length - 1 ? (
                <span className={styles.current}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className={styles.link}>{crumb.label}</Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}

