import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/scholarship',
  title: 'LDN Decks Trades Scholarship | $500 Annual Award',
  description: 'LDN Decks awards a $500 annual scholarship to Virginia students pursuing careers in construction, carpentry, or skilled trades. Apply now.',
});

export default function ScholarshipPage() {
  return (
    <main>
      <Breadcrumbs />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>LDN Decks Trades Scholarship</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>$500 annual scholarship for Virginia students pursuing careers in construction, carpentry, or skilled trades</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2026 Application Period: Open</p>
          <p>Applications are accepted year-round. The scholarship is awarded annually to one Virginia student pursuing a career in the skilled trades. Deadline: December 31, 2026.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>About the Scholarship</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>At LDN Decks, we believe the skilled trades are the backbone of every community. From the carpenters who frame our homes to the electricians who wire our outdoor living spaces, tradespeople make Northern Virginia a better place to live.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>That&apos;s why we created the <strong>LDN Decks Trades Scholarship</strong> &mdash; a $500 annual award to support Virginia students who are pursuing careers in construction, carpentry, deck building, electrical work, plumbing, HVAC, or other skilled trades.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>We&apos;ve been building custom decks and outdoor living spaces in Northern Virginia for over 24 years. We know firsthand that this industry needs talented, passionate people &mdash; and we want to help the next generation get started.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Eligibility Requirements</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Must be a <strong>Virginia resident</strong></li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Currently enrolled or accepted at a <strong>Virginia college, community college, or trade school</strong></li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Pursuing a degree, certificate, or apprenticeship in <strong>construction, carpentry, building trades, architecture, civil engineering, electrical, plumbing, or HVAC</strong></li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Minimum <strong>2.5 GPA</strong> (or equivalent for trade programs)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Must submit a <strong>500-word essay</strong> on the topic below</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Essay Topic</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
            <p style={{ fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>&ldquo;Describe why you chose a career in the skilled trades and how you plan to make an impact in your community through your work. What does craftsmanship mean to you?&rdquo;</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>How to Apply</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Write your 500-word essay</strong> on the topic above</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Include your full name, school name, program of study, and expected graduation date</strong></li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Email your essay</strong> to <a href="mailto:office@ldndecks.com" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>office@ldndecks.com</a> with subject line: &ldquo;LDN Decks Trades Scholarship 2026&rdquo;</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Deadline:</strong> December 31, 2026</li>
          </ol>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Scholarship Details</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {[
                  ['Award Amount', '$500 (one-time payment)'],
                  ['Frequency', 'Annually (one recipient per year)'],
                  ['Deadline', 'December 31, 2026'],
                  ['Announcement', 'January 15, 2027'],
                  ['Payment', 'Paid directly to the student\'s institution'],
                  ['Renewable', 'Previous recipients may reapply'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '200px' }}>{row[0]}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why We Support the Trades</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The construction industry in Northern Virginia faces a growing skilled labor shortage. As experienced deck builders, we see this challenge every day &mdash; talented tradespeople are retiring faster than new ones are entering the field. This scholarship is our small contribution to reversing that trend.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We encourage students at <strong>NOVA Community College</strong>, <strong>George Mason University</strong>, <strong>Virginia Tech</strong>, <strong>Germanna Community College</strong>, and other Virginia institutions to apply. Whether you&apos;re studying construction management, learning carpentry at a trade school, or pursuing an apprenticeship, we want to hear from you.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Questions? Email us at <a href="mailto:office@ldndecks.com" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>office@ldndecks.com</a> or call <a href="tel:+15716557207" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</a>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>About LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks is Northern Virginia&apos;s top-rated custom deck builder, serving Loudoun, Fairfax, Prince William, Arlington, and Stafford counties since 2001. We are a <strong>Trex Platinum Partner</strong> (top 1% nationally) and <strong>TimberTech Certified Installer</strong>, specializing in premium composite decks, screened porches, pergolas, and outdoor living spaces. <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Learn more about us &rarr;</Link></p>

        </div>
      </article>

      <ContactHome />
    </main>
  );
}
