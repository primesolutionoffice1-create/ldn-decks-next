"use client";
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
       setStatus("success");
    }, 1500);
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoCol}>
             <h2>Reach Out Directly</h2>
             <p className={styles.infoDesc}>Our team reviews inquiries as they come in and responds as soon as possible during business hours.</p>
             
             <div className={styles.contactPoint}>
                <strong>Phone:</strong> <br/>
                <a href="tel:+15716557207">+1 (571) 655-7207</a>
             </div>
             
             <div className={styles.contactPoint}>
                <strong>Email:</strong> <br/>
                <a href="mailto:office@ldndecks.com">office@ldndecks.com</a>
             </div>
             
             <div className={styles.contactPoint}>
                <strong>Service Areas:</strong> <br/>
                Loudoun County, Fairfax County, Prince William County
             </div>
          </div>
          
          {/* Form Column */}
          <div className={styles.formCol}>
             {status === "success" ? (
               <div className={styles.successBlock}>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you to schedule your free consultation shortly.</p>
                  <button onClick={() => setStatus(null)} className={styles.submitBtn}>Send Another Message</button>
               </div>
             ) : (
                <form onSubmit={handleSubmit} className={styles.formBlock}>
                  <div className={styles.row}>
                     <div className={styles.inputGroup}>
                        <label>First Name <span className={styles.req}>*</span></label>
                        <input type="text" required placeholder="First Name" />
                     </div>
                     <div className={styles.inputGroup}>
                        <label>Last Name <span className={styles.req}>*</span></label>
                        <input type="text" required placeholder="Last Name" />
                     </div>
                  </div>
                  
                  <div className={styles.row}>
                     <div className={styles.inputGroup}>
                        <label>Email Address <span className={styles.req}>*</span></label>
                        <input type="email" required placeholder="you@example.com" />
                     </div>
                     <div className={styles.inputGroup}>
                        <label>Phone Number <span className={styles.req}>*</span></label>
                        <input type="tel" required placeholder="(555) 123-4567" />
                     </div>
                  </div>
                  
                  <div className={styles.inputGroup}>
                     <label>Address</label>
                     <input type="text" placeholder="123 Main St" />
                  </div>
                  
                  <div className={styles.row}>
                     <div className={styles.inputGroup}>
                        <label>City</label>
                        <input type="text" placeholder="e.g. Ashburn" />
                     </div>
                     <div className={styles.inputGroup} style={{flex: 0.5}}>
                        <label>State</label>
                        <input type="text" defaultValue="VA" />
                     </div>
                     <div className={styles.inputGroup} style={{flex: 0.5}}>
                        <label>ZIP</label>
                        <input type="text" placeholder="Zip Code" />
                     </div>
                  </div>
                  
                  <div className={styles.inputGroup}>
                     <label>Message <span className={styles.req}>*</span></label>
                     <textarea required rows="6" placeholder="Tell us about your deck or outdoor project..."></textarea>
                  </div>
                  
                  <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
                     {status === "submitting" ? "Sending..." : "Submit Message"}
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
