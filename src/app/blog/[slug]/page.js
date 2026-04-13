import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import styles from './BlogContent.module.css';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };
  return { 
    title: `${post.title}`,
    description: post.excerpt,
    alternates: {
      canonical: `https://ldndecks.com/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://ldndecks.com/blog/${post.slug}`,
      images: [post.image]
    }
  };
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pre-split the content by double newline to render paragraphs cleanly
  const paragraphs = post.content.split('\n\n');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [`https://ldndecks.com${post.image}`],
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Organization",
      "name": post.author,
      "url": "https://ldndecks.com"
    }],
    "description": post.excerpt
  };

  return (
    <article className={styles.articlePage}>
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
       />

       {/* Hero Image Block */}
       <div className={styles.heroSection}>
          <div className={styles.imgWrapper}>
             <Image src={post.image} alt={post.title} fill className={styles.heroImg} priority sizes="100vw" />
             <div className={styles.imgOverlay}>
                <div className={styles.containerLarge}>
                  <Link href="/blog" className={styles.backLink}>&larr; Back to News</Link>
                  <h1 className={styles.title}>{post.title}</h1>
                  <div className={styles.meta}>
                     <span className={styles.author}>By {post.author}</span>
                     <span className={styles.divider}>•</span>
                     <span className={styles.date}>{post.date}</span>
                  </div>
                </div>
             </div>
          </div>
       </div>

       {/* Article Content Block */}
       <div className={styles.contentSection}>
          <div className={styles.containerNarrow}>
             <div className={styles.contentBody}>
               <p className={styles.leadParagraph}>{post.excerpt}</p>
               {paragraphs.map((para, idx) => {
                 // Check if it's an H2 or H3 heading
                 if (para.startsWith('## ')) {
                   return <h2 key={idx} style={{ marginTop: '40px', marginBottom: '20px', color: '#111' }}>{para.replace('## ', '')}</h2>
                 }
                 if (para.startsWith('### ')) {
                   return <h3 key={idx} style={{ marginTop: '30px', marginBottom: '15px', color: '#222' }}>{para.replace('### ', '')}</h3>
                 }
                 return <p key={idx}>{para}</p>
               })}
               
               <div className={styles.conclusionBox}>
                 <h3>Ready to upgrade your outdoor living space?</h3>
                 <p>Contact Loudoun Decks today for a free estimate and planning consultation.</p>
                 <Link href="/contact" className={styles.ctaBtn}>Get Started</Link>
               </div>
             </div>
          </div>
       </div>
    </article>
  );
}
