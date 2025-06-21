import React, { useState } from "react";

const faqs = [
  {
    question: "What's your return and exchange policy?",
    answer: "You can return or exchange items within 30 days of purchase with the original receipt."
  },
  {
    question: "How long does it take to personalize my order?",
    answer: "Personalized orders typically take 3-5 business days to process before shipping."
  },
  {
    question: "My referral link is not working, what do I do?",
    answer: "Please contact our support team with your referral link and we'll assist you."
  },
  {
    question: "Do you offer returns and repairs in-store?",
    answer: "Yes, returns and repairs are available at all our retail locations."
  },
  {
    question: "Where are your stores located?",
    answer: "You can find our store locations on the 'Store Locator' page of our website."
  },
  {
    question: "When will I receive my order?",
    answer: "Orders are delivered within 5-7 business days after shipping."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay."
  }
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name) newErrors.name = "Required field";
    if (!form.email) newErrors.email = "Required field";
    if (!form.reason) newErrors.reason = "Required field";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
    }
  };

  const handleFaqClick = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Responsive styles using vw/vh units
  const responsive = {
    container: {
      display: "flex",
      fontFamily: "sans-serif",
      minHeight: "100vh",
      padding: "0",
      paddingTop: "120px",
      flexDirection: "row",
      '@media (max-width: 900px)': {
        flexDirection: "column"
      }
    },
    left: {
      flex: 1,
      padding: "5vw 3vw 3vw 4vw",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
    },
    right: {
      flex: 1,
      padding: "5vw 2vw 3vw 3vw",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
    },
    h1: {
      fontWeight: 500,
      fontSize: "clamp(28px, 2.2vw, 48px)",
      marginBottom: "1.5vw",
      textAlign: "center"
    },
    h2: {
      fontWeight: 400,
      fontSize: "clamp(24px, 1.6vw, 36px)",
      marginBottom: "1.5vw"
    },
    p: {
      color: "#333",
      marginBottom: "2vw",
      textAlign: "center",
      fontSize: "clamp(16px, 0.9vw, 20px)",
      lineHeight: 1.6,
      maxWidth: "60ch",
      marginLeft: "auto",
      marginRight: "auto"
    },
    label: {
      fontWeight: 500,
      display: "block",
      marginBottom: "0.6vw",
      fontSize: "clamp(14px, 0.8vw, 18px)"
    },
    input: (error) => ({
      width: "100%",
      border: error ? "1px solid #d32f2f" : "1px solid #ccc",
      padding: "0.8vw 0.9vw",
      borderRadius: "0.3vw",
      fontSize: "clamp(14px, 0.8vw, 18px)",
      background: error ? "#fff6f6" : "#fff",
      boxSizing: "border-box",
      marginBottom: error ? 0 : "1vw"
    }),
    select: (error) => ({
      width: "100%",
      border: error ? "1px solid #d32f2f" : "1px solid #ccc",
      padding: "0.8vw 0.9vw",
      borderRadius: "0.3vw",
      fontSize: "clamp(14px, 0.8vw, 18px)",
      background: error ? "#fff6f6" : "#fff",
      boxSizing: "border-box",
      marginBottom: error ? 0 : "1.5vw"
    }),
    error: {
      color: "#d32f2f",
      fontSize: "clamp(12px, 0.7vw, 16px)",
      marginTop: "0.4vw",
      background: "#fff3f3",
      padding: "0.6vw 0.8vw",
      borderRadius: "0.3vw",
      marginBottom: "0.8vw",
      display: "flex",
      alignItems: "center"
    },
    button: {
      width: "100%",
      background: "#000",
      color: "#fff",
      padding: "1vw 0",
      fontSize: "clamp(16px, 0.9vw, 20px)",
      fontWeight: 600,
      border: "none",
      borderRadius: "0.3vw",
      cursor: "pointer",
      marginTop: "1.5vw"
    },
    faqList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontSize: "clamp(16px, 0.9vw, 18px)"
    },
    faqItem: (open) => ({
      marginBottom: open ? "0.7vw" : "1.5vw",
      cursor: "pointer",
      lineHeight: 1.4,
      transition: "margin 0.2s"
    }),
    faqIcon: (open) => ({
      fontWeight: 400,
      fontSize: "1.4vw",
      marginRight: "0.8vw",
      transition: "transform 0.2s",
      transform: open ? "rotate(45deg)" : "rotate(0)"
    }),
    faqAnswer: {
      marginTop: "0.5vw",
      marginLeft: "2.5vw",
      color: "#444",
      fontSize: "0.9vw",
      background: "#fafafa",
      borderLeft: "3px solid #eee",
      padding: "0.8vw 1vw"
    },
    allFaqs: {
      marginTop: "2vw",
      fontSize: "1vw"
    },
    pageTitle: {
      fontWeight: 600,
      fontSize: "clamp(28px, 2vw, 44px)",
      textAlign: "center",
      marginTop: "clamp(120px, 5vw, 160px)",
      marginBottom: "1vw"
    },
    form: (isMobile) => ({
      width: isMobile ? "90%" : "70%",
      maxWidth: isMobile ? "none" : "700px",
      marginLeft: isMobile ? 0 : "8vw"
    })
  };

  // Inline style workaround for media queries
  // You can use a CSS-in-JS library for real media queries in production

  // Responsive font size fallback for small screens
  const isMobile = window.innerWidth < 900;

  return (
    <>
      <div style={{
        ...responsive.container,
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between"
      }}>
        <div style={{
          ...responsive.left,
          paddingTop: isMobile ? "8vw" : "2.5vw"
        }}>
          <h2 style={{
            ...responsive.h1,
            fontSize: isMobile ? 28 : responsive.h1.fontSize
          }}>Get in touch</h2>
          <p style={{
            ...responsive.p,
            fontSize: isMobile ? 16 : responsive.p.fontSize
          }}>
            We typically respond in 1-2 business days. Already submitted a chat, form, or email? Please hold tight— we respond to messages in the order that they are received and we'll be with you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} noValidate style={responsive.form(isMobile)}>
            <div>
              <label style={{
                ...responsive.label,
                fontSize: isMobile ? 16 : responsive.label.fontSize
              }}>Name*</label>
              <input
                style={responsive.input(errors.name)}
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div style={responsive.error}>
                  <span style={{ marginRight: 4, fontSize: isMobile ? 16 : 18 }}>❗</span>Required field
                </div>
              )}
            </div>
            <div>
              <label style={{
                ...responsive.label,
                fontSize: isMobile ? 16 : responsive.label.fontSize
              }}>Last Name</label>
              <input
                style={responsive.input(false)}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={{
                ...responsive.label,
                fontSize: isMobile ? 16 : responsive.label.fontSize
              }}>Email*</label>
              <input
                style={responsive.input(errors.email)}
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div style={responsive.error}>
                  <span style={{ marginRight: 4, fontSize: isMobile ? 16 : 18 }}>❗</span>Required field
                </div>
              )}
            </div>
            <div>
              <label style={{
                ...responsive.label,
                fontSize: isMobile ? 16 : responsive.label.fontSize
              }}>Reason For Contact</label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                style={responsive.select(errors.reason)}
              >
                <option value="">Please select</option>
                <option value="order">Order Inquiry</option>
                <option value="returns">Returns</option>
                <option value="repairs">Repairs</option>
                <option value="other">Other</option>
              </select>
              {errors.reason && (
                <div style={responsive.error}>
                  <span style={{ marginRight: 4, fontSize: isMobile ? 16 : 18 }}>❗</span>Required field
                </div>
              )}
            </div>
            <button
              type="submit"
              style={{
                ...responsive.button,
                fontSize: isMobile ? 18 : responsive.button.fontSize
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div style={{
          ...responsive.right,
          paddingTop: isMobile ? "8vw" : "2.5vw"
        }}>
          <h2 style={{
            ...responsive.h2,
            fontSize: isMobile ? 24 : responsive.h2.fontSize
          }}>Top FAQs</h2>
          <ul style={responsive.faqList}>
            {faqs.map((faq, idx) => (
              <li
                key={idx}
                style={responsive.faqItem(openFaq === idx)}
                onClick={() => handleFaqClick(idx)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={responsive.faqIcon(openFaq === idx)}>+</span>
                  <span style={{ fontSize: isMobile ? 16 : "1.2vw" }}>{faq.question}</span>
                </div>
                {openFaq === idx && (
                  <div style={{
                    ...responsive.faqAnswer,
                    fontSize: isMobile ? 14 : responsive.faqAnswer.fontSize
                  }}>
                    {faq.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div style={{
            ...responsive.allFaqs,
            fontSize: isMobile ? 16 : responsive.allFaqs.fontSize
          }}>
            <a href="#" style={{ textDecoration: "none", color: "#000", fontWeight: 500 }}>ALL FAQS →</a>
          </div>
        </div>
      </div>
      {/* Visit Us Section */}
      <div style={{ width: '100%', margin: '60px 0 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <h2 style={{ fontWeight: 500, fontSize: 'clamp(24px, 6vh, 1.6vh)', marginBottom: '1.5vw', textAlign: 'center', }}>Visit Us</h2>
        <div style={{ width: '100%', maxWidth: '2000px', height: isMobile ? '50vh' : '60vh', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <iframe
            title="Business Bay Consultancy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.2171192264974!2d55.778199!3d25.6747366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a12e5f110ad%3A0xba58953756553d4e!2sBusiness%20Bay%20Consultancy%20FZE!5e0!3m2!1sen!2sae!4v1716820000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
