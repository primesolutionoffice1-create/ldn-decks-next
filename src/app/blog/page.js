import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import BlogList from '@/components/BlogList';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Deck Building Blog & Tips',
  description: 'Expert advice on deck materials, maintenance, design trends, and outdoor living ideas for Northern Virginia homeowners.',
});

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <BlogList />
    </main>
  );
}
