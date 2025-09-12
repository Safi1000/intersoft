import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Contact <span className="text-[#24c4c4]">Intersoft</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our expert team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need cutting-edge electronics solutions or innovative software development, 
                our team is ready to bring your vision to life. Contact us today to discuss your project.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#24c4c4]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:contact@intersoft-intl.com" className="hover-underline text-gray-300">
                      contact@intersoft-intl.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#24c4c4]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:+1-555-INTERSOFT" className="hover-underline text-gray-300">
                      +1 (555) INTERSOFT
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#24c4c4]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#24c4c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-300">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-[#24c4c4]/10 to-[#bc3723]/10 rounded-lg p-6 border border-white/10">
              <h3 className="font-bold mb-4">Office Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Monday - Friday</p>
                  <p className="text-white">8:00 AM - 6:00 PM PST</p>
                </div>
                <div>
                  <p className="text-gray-400">Saturday</p>
                  <p className="text-white">9:00 AM - 2:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#24c4c4] focus:outline-none focus:ring-2 focus:ring-[#24c4c4]/20 transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#24c4c4] focus:outline-none focus:ring-2 focus:ring-[#24c4c4]/20 transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#24c4c4] focus:outline-none focus:ring-2 focus:ring-[#24c4c4]/20 transition-colors text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#24c4c4] focus:outline-none focus:ring-2 focus:ring-[#24c4c4]/20 transition-colors text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="electronics">Electronics Solutions</option>
                    <option value="software">Software Development</option>
                    <option value="iot">IoT Development</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#24c4c4] focus:outline-none focus:ring-2 focus:ring-[#24c4c4]/20 transition-colors text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="submit-btn"
                >
                  Send Message
                  <svg className="w-5 h-5 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover-underline text-lg">Electronics Solutions</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover-underline text-lg">Software Development</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover-underline text-lg">IoT Development</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover-underline text-lg">Enterprise Solutions</a>
          </div>
        </div>
      </div>
    </div>
  );
}