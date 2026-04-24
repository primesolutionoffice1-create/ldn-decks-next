"use client";
import React, { useState } from 'react';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

export default function ROICalculator() {
  const [cost, setCost] = useState(25000);

  // Based on Remodeling Magazine Cost vs Value report data for South Atlantic region 2026
  const roiPercentage = 0.68;
  const estimatedValueIncrease = Math.round(cost * roiPercentage);

  const fmt = (n) => '$' + n.toLocaleString();

  return (
    <main style={{ background: '#fff', color: '#1a202c', minHeight: '100vh' }}>
      <section style={{ background: '#2d3748', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Deck ROI Calculator Northern Virginia</h1>
          <p style={{ color: '#cbd5e0', fontSize: '1.2rem' }}>
            Calculate how much a new custom deck adds to your home&apos;s resale value
            in the Loudoun, Fairfax, and Prince William markets.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Input Side */}
            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Project Details</h2>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Estimated Project Cost</label>
                <input
                  type="range"
                  min="10000"
                  max="150000"
                  step="5000"
                  value={cost}
                  onChange={(e) => setCost(parseInt(e.target.value))}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d14817' }}>{fmt(cost)}</div>
              </div>

              <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#64748b' }}>
                <strong>Note:</strong> ROI is calculated based on the 2026 South Atlantic average of 68.3% for composite deck additions.
              </div>
            </div>

            {/* Result Side */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '1rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Estimated Value Increase</span>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: '#2d3748', margin: '0.5rem 0' }}>{fmt(estimatedValueIncrease)}</div>
              </div>

              <div style={{ background: '#fff5f2', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <p style={{ margin: 0, fontWeight: 700, color: '#d14817' }}>
                  A {fmt(cost)} deck in Northern Virginia typically yields a {fmt(estimatedValueIncrease)} increase in appraised value.
                </p>
              </div>

              <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Decks are one of the highest-ROI home improvements in the DC Metro area, often beating kitchens and bathrooms in terms of percentage of cost recovered at sale.
              </p>

              <Link href="/contact" style={{ display: 'block', background: '#2d3748', color: '#fff', padding: '18px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
                Get an Accurate Quote
              </Link>
            </div>

          </div>

          <div style={{ marginTop: '5rem', borderTop: '1px solid #e2e8f0', paddingTop: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Northern Virginia Decks Have High ROI</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Extended Outdoor Season</h4>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>NoVA homeowners value outdoor space for 9-10 months of the year, making functional decks a "must-have" for buyers.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Appraised Value vs. Market Value</h4>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>While appraisals follow strict percentages, the "curb appeal" and "wow factor" of a custom deck often drives bidding wars in competitive markets like Ashburn or McLean.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
