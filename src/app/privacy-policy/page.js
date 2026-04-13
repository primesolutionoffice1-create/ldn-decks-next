import React from 'react';

export const metadata = {
  alternates: {
    canonical: "https://ldndecks.com/privacy-policy"
  },
  title: "Privacy Policy",
  description: "Learn how Loudoun Decks protects your personal information and privacy."
};

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p>Last Updated: April 2026</p>
      
      <section style={{ marginTop: '40px' }}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide to us directly, such as when you request a free quote, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and details about your project.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and maintain our services, including responding to your inquiries, scheduling consultations, and sending updates related to your project.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at office@ldndecks.com.
        </p>
      </section>
    </div>
  );
}
