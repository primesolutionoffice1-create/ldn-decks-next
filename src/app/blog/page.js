import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import BlogList from '@/components/BlogList';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/blog"
  },
  title: "Blog & Insights | ldndecks",
  description: "Read the latest tips, tricks, and guides on outdoor residential decking and living."
};

export default function BlogPage() {
  return (
    <main>
       <BlogHeader />
       <BlogList />
    </main>
  );
}
