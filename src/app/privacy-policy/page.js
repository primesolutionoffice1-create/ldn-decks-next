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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px', lineHeight: '1.6', color: '#333' }}>
      <h1>Privacy Policy</h1>
      <p>Last Updated: April 2026</p>
      
      <section style={{ marginTop: '40px' }}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide to us directly, such as when you request a free quote, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and details about your project.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>2. Cookies and Web Beacons</h2>
        <p>
          Like any other website, Loudoun Decks uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>3. Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>4. Our Advertising Partners</h2>
        <p>
          Some of advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below:
        </p>
        <ul>
          <li>Google: <a href="https://policies.google.com/technologies/ads" target="_blank">https://policies.google.com/technologies/ads</a></li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>5. Third Party Privacy Policies</h2>
        <p>
          Loudoun Decks's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. If you make a request, we have one month to respond to you.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>7. GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, the right to rectification, the right to erasure, the right to restrict processing, and the right to data portability.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at office@ldndecks.com.
        </p>
      </section>
    </div>
  );
}
