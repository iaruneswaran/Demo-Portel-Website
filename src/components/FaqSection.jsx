import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "When will Nasro officially launch?",
      a: "We are currently rolling out private alpha testing to the top 500 waitlist participants. General early access begins next month, with a rolling batch invited every Tuesday."
    },
    {
      q: "How does the referral system work?",
      a: "Once you sign up, you'll receive a unique referral link. Whenever someone registers through your link, they secure their spot and you automatically skip 450 spots in line, plus unlock milestone rewards."
    },
    {
      q: "Can I use Nasro for my own product launch?",
      a: "Yes! Nasro is designed for developers, creators, and founders to launch their own viral waitlists with our drop-in widget or API in under 5 minutes."
    },
    {
      q: "How do you prevent referral fraud or spam bots?",
      a: "Nasro employs real-time disposable domain verification, IP rate-limiting, and behavioral heuristics to automatically discard temporary inboxes and fraudulent clicks."
    },
    {
      q: "Is early access completely free?",
      a: "Yes, joining the early access waitlist is 100% free. Plus, referring friends unlocks up to 1-year of free Pro membership upon launch."
    }
  ];

  return (
    <section className="section-faq" id="faq">
      <div className="section-header">
        <span className="section-tag">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-desc">
          Everything you need to know about the waitlist, the launch timeline, and referral rewards.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: '#64748b'
                  }}
                />
              </button>
              {isOpen && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
