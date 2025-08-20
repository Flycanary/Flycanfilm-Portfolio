import React, { useState, useEffect } from 'react';
import { PROFILE_INFO } from '../constants';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import SparklesIcon from './icons/SparklesIcon';
import ErrorIcon from './icons/ErrorIcon';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Reset form when modal is closed
    if (!isOpen) {
      // Add a small delay to allow the closing animation to finish before resetting
      setTimeout(() => {
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setStatus('idle');
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call to a backend
    setTimeout(() => {
      // For demonstration, we'll randomly succeed or fail
      if (Math.random() < 0.2) { // 20% chance to fail
        setStatus('error');
      } else {
        console.log('Form submitted:', formData);
        setStatus('success');
        // Close modal after a delay
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    }, 1500);
  };
  
  const renderContent = () => {
    switch(status) {
      case 'success':
        return (
          <div className="text-center py-12">
            <SparklesIcon className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-text-secondary">Your message has been sent. I'll get back to you soon.</p>
          </div>
        );
      case 'error':
        return (
           <div className="text-center py-12">
            <ErrorIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-red-400">Submission Failed</h2>
            <p className="text-text-secondary mb-6">Oops! Something went wrong. Please try sending your message again.</p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-accent text-text-primary font-bold py-2 px-6 rounded-lg hover:bg-accent-hover transition-transform transform hover:scale-105"
            >
              Try Again
            </button>
          </div>
        );
      default: // 'idle' or 'sending'
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-text-primary">Contact {PROFILE_INFO.name}</h2>
              <p className="text-text-secondary mt-2 max-w-md mx-auto">I'd love to hear from you! Please contact me using this form for any inquiries or questions.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-text-secondary mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-text-secondary mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-transform transform hover:scale-105 shadow-lg disabled:bg-text-secondary disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        );
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="bg-secondary rounded-lg shadow-2xl w-full max-w-lg p-6 sm:p-8 relative transform transition-all animate-slide-in-up" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close form"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default ContactFormModal;
