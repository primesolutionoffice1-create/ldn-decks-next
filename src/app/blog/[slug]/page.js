import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import styles from './BlogContent.module.css';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found | ldndecks' };
  return { title: `${post.title} | ldndecks` };
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pre-split the content by double newline to render paragraphs cleanly
  const paragraphs = post.content.split('\n\n');

  return (
    <article className={styles.articlePage}>
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
               {paragraphs.map((para, idx) => (
                 <p key={idx}>{para}</p>
               ))}
               
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
