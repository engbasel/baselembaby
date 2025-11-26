import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      description: 'Professional inquiries and project proposals',
      value: 'basel.a.embaby@gmail.com',
      link: 'mailto:basel.a.embaby@gmail.com',
      actionText: 'Send Email'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      description: 'Direct communication for urgent matters',
      value: '+20 01060417664',
      link: 'tel:+2001060417664',
      actionText: 'Call Now'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      description: 'Quick messaging for project discussions',
      value: '+20 01060417664',
      link: 'https://wa.me/2001060417664',
      actionText: 'Chat Now'
    },
    {
      icon: 'fab fa-telegram-plane',
      title: 'Telegram',
      description: 'Secure messaging for file sharing and discussions',
      value: '@baselembaby',
      link: 'https://t.me/baselembaby',
      actionText: 'Message'
    },
    {
      icon: 'fab fa-linkedin-in',
      title: 'LinkedIn',
      description: 'Professional networking and career opportunities',
      value: 'Basel Embaby',
      link: 'https://www.linkedin.com/in/basel-embaby-948671227/',
      actionText: 'Connect'
    },
    {
      icon: 'fab fa-discord',
      title: 'Discord',
      description: 'Community engagement and tech discussions',
      value: '@baselembaby',
      link: 'https://discord.com/users/baselembaby',
      actionText: 'Chat'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Contact from Portfolio',
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'new'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message
      alert('Thank you for your message! I will get back to you soon.');

      // Optional: Also open email client
      const mailtoLink = `mailto:basel.a.embaby@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;

    } catch (error) {
      console.error('Error saving message to Firebase:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card card" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="contact-icon">
                <i className={method.icon}></i>
              </div>
              <div className="contact-info">
                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-description">{method.description}</p>
                <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-value">{method.value}</span>
                  <span className="contact-action">
                    {method.actionText} <i className="fas fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h3 className="form-title">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="loading"></span> Sending...
                </>
              ) : (
                <>
                  Send Message <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
