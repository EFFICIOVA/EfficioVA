import React, { useState, useEffect } from 'react';
import { Home, Info, Mail, Briefcase, DollarSign, MessageSquare, Menu, X, CheckCircle, Lightbulb, Zap, Users, Shield, BookOpen, Search, Calendar, Package, Star, Film, Edit, Repeat } from 'lucide-react';

// --- Helper Components (Simulating ShadCN-like elements with Tailwind) ---
const Button = ({ children, className = '', variant = 'default', ...props }) => {
  let baseClasses = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md';
  if (variant === 'default') {
    baseClasses += ' bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300';
  } else if (variant === 'outline') {
    baseClasses += ' border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-100';
  } else if (variant === 'secondary') {
    baseClasses += ' bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300';
  }
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Input = ({ className = '', type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
      {...props}
    />
  );
};

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 mb-2 ${className}`} {...props}>
      {children}
    </label>
  );
};

// --- Global Service Definitions for Consistency ---
const ALL_SERVICE_OPTIONS_FLAT = [
  "Inbox & Email Management",
  "Document Organization",
  "Monthly Inbox Cleaning",
  "Customer Communication (reply drafting, message optimization)",
  "Simple Marketing Content (email templates, brochures, social media captions)",
  "Form & Survey Management",
  "Video Editing",
  "Custom GPT Creation (tailored chatbots for personal or business use)",
  "Basic Research (summarizing and formatting info as needed)",
  "Social Media Content Planning",
  "Document Proofreading",
  "Client Follow-up Templates"
];

// --- Page Components ---

// Homepage Component
const HomePage = ({ navigate }) => (
  <section className="py-20 md:py-32 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-b-3xl shadow-inner mx-auto px-4">
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
        Unlock Your Potential with Efficio VA
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-100">
        Streamline your operations, reclaim your time, and focus on what truly matters.
        Efficio VA provides expert virtual assistant services tailored to your unique business needs.
      </p>

      {/* Tiered Service Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up delay-200">
        <Card className="p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <Package className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic Plan</h3>
          <p className="text-gray-600 mb-4">Essential support for daily tasks.</p>
          <Button variant="outline" className="mt-auto" onClick={() => navigate('services')}>Learn More</Button>
        </Card>
        <Card className="p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <Star className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Plan</h3>
          <p className="text-gray-600 mb-4">Enhanced support for growing businesses.</p>
          <Button variant="outline" className="mt-auto" onClick={() => navigate('services')}>Learn More</Button>
        </Card>
        <Card className="p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <Zap className="h-10 w-10 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Plan</h3>
          <p className="text-gray-600 mb-4">Comprehensive solutions for ultimate efficiency.</p>
          <Button variant="outline" className="mt-auto" onClick={() => navigate('services')}>Learn More</Button>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="animate-fade-in-up delay-300">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Let Efficio VA handle the details so you can focus on strategic growth.
        </p>
        <Button className="text-xl px-10 py-4" onClick={() => navigate('contact')}>
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);

// About Page Component
const AboutPage = () => {
  // Removed all image-related states and effects

  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          About Efficio VA
        </h2>
        {/* Changed grid to a single column as there's no image */}
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Removed the entire image div */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Efficio VA was founded with a clear vision: to empower small businesses and individuals
              by providing top-tier virtual administrative and operational support. We are a **West African based**
              company, understanding the unique dynamics of the region while serving clients globally.
              We understand the challenges of managing a growing business, and our mission is to alleviate
              your workload, allowing you to focus on core strategies and innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team comprises highly skilled and dedicated virtual assistants, each
              committed to delivering exceptional results. We pride ourselves on our
              proactive approach, attention to detail, and ability to seamlessly integrate
              with your existing workflows.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Efficiency</h4>
              <p className="text-gray-600">We optimize processes and leverage tools to deliver maximum output with minimal effort, ensuring your time and resources are utilized effectively.</p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Clarity</h4>
              <p className="text-gray-600">We believe in clear communication, transparent reporting, and straightforward solutions, keeping you informed every step of the way.</p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Professionalism</h4>
              <p className="text-gray-600">Our commitment to high standards, reliability, and integrity ensures that every interaction and task is handled with the utmost professionalism.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Page Component
const ServicesPage = ({ navigate }) => { // Added navigate prop
  const [showPrices, setShowPrices] = useState(false); // State to toggle price visibility

  const serviceItems = {
    basic: [
      { icon: <Mail className="h-6 w-6 text-blue-500" />, text: "Inbox & Email Management" },
      { icon: <BookOpen className="h-6 w-6 text-blue-500" />, text: "Document Organization" },
      { icon: <BookOpen className="h-6 w-6 text-blue-500" />, text: "Monthly Inbox Cleaning" },
    ],
    standard: [
      { icon: <Users className="h-6 w-6 text-green-500" />, text: "Customer Communication (reply drafting, message optimization)" },
      { icon: <Lightbulb className="h-6 w-6 text-green-500" />, text: "Simple Marketing Content (email templates, brochures, social media captions)" },
      { icon: <Calendar className="h-6 w-6 text-green-500" />, text: "Form & Survey Management" },
      { icon: <BookOpen className="h-6 w-6 text-green-500" />, text: "Monthly Inbox Cleaning" },
      { icon: <Film className="h-6 w-6 text-green-500" />, text: "Video Editing" },
    ],
    premium: [
      { icon: <Zap className="h-6 w-6 text-purple-500" />, text: "Custom GPT Creation (tailored chatbots for personal or business use)" },
      { icon: <Search className="h-6 w-6 text-purple-500" />, text: "Basic Research (summarizing and formatting info as needed)" },
      { icon: <Edit className="h-6 w-6 text-purple-500" />, text: "Social Media Content Planning" },
      { icon: <BookOpen className="h-6 w-6 text-purple-500" />, text: "Document Proofreading" },
      { icon: <Repeat className="h-6 w-6 text-purple-500" />, text: "Client Follow-up Templates" },
    ]
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          Our Services
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic Plan Card */}
          <Card className="flex flex-col animate-fade-in-up delay-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Basic Plan</h3>
            <p className="text-gray-600 text-center mb-6">Essential support for daily administrative tasks.</p>
            <ul className="space-y-3 flex-grow">
              {serviceItems.basic.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              {showPrices ? (
                <p className="text-3xl font-extrabold text-blue-600">GHS 1000<span className="text-lg text-gray-500">/month</span></p>
              ) : (
                <Button variant="outline" onClick={() => setShowPrices(true)}>View Pricing</Button>
              )}
              <Button className="mt-4 w-full" onClick={() => navigate('contact')}>Contact Now</Button> {/* Added Contact Now button */}
            </div>
          </Card>

          {/* Standard Plan Card */}
          <Card className="flex flex-col border-2 border-green-500 animate-fade-in-up delay-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Standard Plan</h3>
            <p className="text-gray-600 text-center mb-6">Includes all Basic services, plus:</p>
            <ul className="space-y-3 flex-grow">
              {/* No strikethrough for inherited services */}
              {serviceItems.basic.map((item, index) => (
                <li key={`basic-std-${index}`} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
              {serviceItems.standard.map((item, index) => (
                <li key={`std-${index}`} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              {showPrices ? (
                <p className="text-3xl font-extrabold text-green-600">GHS 1500<span className="text-lg text-gray-500">/month</span></p>
              ) : (
                <Button onClick={() => setShowPrices(true)}>View Pricing</Button>
              )}
              <Button className="mt-4 w-full" onClick={() => navigate('contact')}>Contact Now</Button> {/* Added Contact Now button */}
            </div>
          </Card>

          {/* Premium Plan Card */}
          <Card className="flex flex-col animate-fade-in-up delay-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Premium Plan</h3>
            <p className="text-gray-600 text-center mb-6">Includes all Standard services, plus:</p>
            <ul className="space-y-3 flex-grow">
              {/* No strikethrough for inherited services */}
              {serviceItems.basic.map((item, index) => (
                <li key={`basic-prem-${index}`} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
              {serviceItems.standard.map((item, index) => (
                <li key={`std-prem-${index}`} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
              {serviceItems.premium.map((item, index) => (
                <li key={`prem-${index}`} className="flex items-start text-gray-700">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              {showPrices ? (
                <p className="text-3xl font-extrabold text-purple-600">GHS 2500<span className="text-lg text-gray-500">/month</span></p>
              ) : (
                <Button variant="outline" onClick={() => setShowPrices(true)}>View Pricing</Button>
              )}
              <Button className="mt-4 w-full" onClick={() => navigate('contact')}>Contact Now</Button> {/* Added Contact Now button */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Pricing Page Component
const PricingPage = ({ navigate }) => (
  <section className="py-16 md:py-24 bg-gray-50 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
        Flexible Pricing Plans
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Basic Plan Pricing */}
        <Card className="flex flex-col items-center text-center p-8 animate-fade-in-up delay-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h3>
          <p className="text-5xl font-extrabold text-blue-600 mb-6">
            GHS 1000<span className="text-xl text-gray-500">/month</span>
          </p>
          <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Inbox & Email Management</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Document Organization</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Monthly Inbox Cleaning</li>
          </ul>
          <Button onClick={() => navigate('contact')} className="w-full">Choose Basic</Button>
        </Card>

        {/* Standard Plan Pricing */}
        <Card className="flex flex-col items-center text-center p-8 border-2 border-green-500 animate-fade-in-up delay-200">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Standard Plan</h3>
          <p className="text-5xl font-extrabold text-green-600 mb-6">
            GHS 1500<span className="text-xl text-gray-500">/month</span>
          </p>
          <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> All Basic Plan features</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Customer Communication</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Simple Marketing Content</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Form & Survey Management</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Monthly Inbox Cleaning</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Video Editing</li>
          </ul>
          <Button onClick={() => navigate('contact')} className="w-full">Choose Standard</Button>
        </Card>

        {/* Premium Plan Pricing */}
        <Card className="flex flex-col items-center text-center p-8 animate-fade-in-up delay-300">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Premium Plan</h3>
          <p className="text-5xl font-extrabold text-purple-600 mb-6">
            GHS 2500<span className="text-lg text-gray-500">/month</span>
          </p>
          <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> All Standard Plan features</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Custom GPT Creation</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Basic Research</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Social Media Content Planning</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Document Proofreading</li>
            <li className="flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Client Follow-up Templates</li>
          </ul>
          <Button onClick={() => navigate('contact')} className="w-full">Choose Premium</Button>
        </Card>
      </div>
    </div>
  </section>
);

// Testimonials Page Component
const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Efficio VA transformed our workflow! Their efficiency in managing our inbox and documents saved us countless hours every week.",
      author: "Ama Mensah", // Ghanaian name
      title: "Small Business Owner"
    },
    {
      quote: "The marketing content they helped us create was outstanding. Professional, engaging, and perfectly aligned with our brand.",
      author: "Chidi Okoro", // Nigerian name
      title: "Marketing Manager"
    },
    {
      quote: "Their custom chatbot solution was a game-changer for our customer support. It's incredibly intuitive and handles queries flawlessly.",
      author: "Emily R.",
      title: "Tech Startup Founder"
    },
    {
      quote: "Reliable, professional, and incredibly helpful. Efficio VA is an invaluable partner for our growing real estate business.",
      author: "David L.",
      title: "Real Estate Broker"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 flex flex-col justify-between animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selectedServices: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // IMPORTANT: This is YOUR Formspree form endpoint!
  // It has been updated with the URL you provided: https://formspree.io/f/xldljzga
  const FORMSPREE_FORM_URL = "https://formspree.io/f/xldljzga";

  const efficioEmail = "efficiovirtualassistantservice@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const currentServices = prev.selectedServices;
      if (currentServices.includes(service)) {
        return {
          ...prev,
          selectedServices: currentServices.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...currentServices, service]
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for Formspree
      const dataToSend = {
        name: formData.name,
        _replyto: formData.email, // Formspree uses _replyto to set the reply-to header
        message: formData.message,
        'Services Interested In': formData.selectedServices.join(', ') // Custom field for Formspree
      };

      const response = await fetch(FORMSPREE_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setSubmitMessage('Your inquiry has been sent successfully! We will get back to you within 24 hours.');
        setMessageType('success');
        setFormData({ name: '', email: '', message: '', selectedServices: [] }); // Clear form
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitMessage(errorData.error || 'Failed to send inquiry. Please try again later.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Network error or other issue:', error);
      setSubmitMessage('An error occurred. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          Get In Touch
        </h2>
        <Card className="p-8 animate-fade-in-up delay-100">
          <p className="text-lg text-gray-700 text-center mb-8">
            Have questions or ready to get started? Send us a message!
          </p>
          <p className="text-md text-gray-600 text-center mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            All messages and consultation requests are sent directly to our email address.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Service Selection Buttons */}
            <div>
              <Label>I'm interested in (select all that apply):</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {ALL_SERVICE_OPTIONS_FLAT.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`
                      px-4 py-2 rounded-lg border-2 text-sm font-medium
                      transition-colors duration-200
                      ${formData.selectedServices.includes(service)
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }
                    `}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your needs and how Efficio VA can help..."
                required
              />
            </div>
            {submitMessage && (
              <p className={`text-center font-medium ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
            <Button
              type="submit"
              className="w-full text-lg py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
          </form>
        </Card>
        <div className="mt-12 text-center text-gray-700 animate-fade-in-up delay-200">
          <p className="flex items-center justify-center mb-2">
            <Mail className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-blue-600 font-medium select-all">{efficioEmail}</span>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            We aim to respond to all inquiries within 24 business hours.
          </p>
        </div>
      </div>
    </section>
  );
};

// Inquiries Page Component (REMOVED as per user's request to skip Firestore)
// This page relied on Firestore, so it's no longer part of the application.
const InquiriesPage = () => (
    <section className="py-16 md:py-24 px-4 text-center bg-yellow-50">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8">Inquiries Page Removed</h2>
            <p className="text-yellow-700 text-lg">
                The Inquiries dashboard has been removed as we are no longer using Firestore.
            </p>
            <p className="text-yellow-600 text-sm mt-4">
                Your contact form submissions will now be sent directly to your email via Formspree.
            </p>
        </div>
    </section>
);


// --- Main App Component ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle navigation
  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Render the current page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage navigate={navigate} />;
      case 'pricing':
        return <PricingPage navigate={navigate} />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      case 'inquiries': // This case will now render the placeholder page
        return <InquiriesPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-100 text-gray-900">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md py-4 px-6 fixed w-full z-50 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={() => navigate('home')} className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">
            Efficio VA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              onClick={() => navigate('home')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <Home className="inline-block mr-1 h-5 w-5" /> Home
            </a>
            <a
              href="#"
              onClick={() => navigate('about')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <Info className="inline-block mr-1 h-5 w-5" /> About
            </a>
            <a
              href="#"
              onClick={() => navigate('services')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'services' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <Briefcase className="inline-block mr-1 h-5 w-5" /> Services
            </a>
            <a
              href="#"
              onClick={() => navigate('pricing')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'pricing' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <DollarSign className="inline-block mr-1 h-5 w-5" /> Pricing
            </a>
            <a
              href="#"
              onClick={() => navigate('testimonials')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'testimonials' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <MessageSquare className="inline-block mr-1 h-5 w-5" /> Testimonials
            </a>
            <a
              href="#"
              onClick={() => navigate('contact')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'}`}
            >
              <Mail className="inline-block mr-1 h-5 w-5" /> Contact
            </a>
            {/* Removed Inquiries Link from Desktop Navigation */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-7 w-7 text-gray-700" /> : <Menu className="h-7 w-7 text-gray-700" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-slide-down rounded-b-xl">
            <nav className="flex flex-col items-center space-y-4">
              <a
                href="#"
                onClick={() => navigate('home')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <Home className="inline-block mr-2 h-6 w-6" /> Home
              </a>
              <a
                href="#"
                onClick={() => navigate('about')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <Info className="inline-block mr-2 h-6 w-6" /> About
              </a>
              <a
                href="#"
                onClick={() => navigate('services')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'services' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <Briefcase className="inline-block mr-2 h-6 w-6" /> Services
              </a>
              <a
                href="#"
                onClick={() => navigate('pricing')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <DollarSign className="inline-block mr-2 h-6 w-6" /> Pricing
              </a>
              <a
                href="#"
                onClick={() => navigate('testimonials')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'testimonials' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <MessageSquare className="inline-block mr-2 h-6 w-6" /> Testimonials
              </a>
              <a
                href="#"
                onClick={() => navigate('contact')}
                className={`text-xl font-medium hover:text-blue-600 transition-colors flex items-center ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700'}`}
              >
                <Mail className="inline-block mr-2 h-6 w-6" /> Contact
              </a>
              {/* Removed Inquiries Link from Mobile Navigation */}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-20"> {/* pt-20 to offset fixed header */}
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 mt-auto rounded-t-xl">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Efficio VA</p>
          {/* Removed "All rights reserved", "Privacy Policy", and "Terms of Service" */}
        </div>
      </footer>

      {/* Global Styles & Animations */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        /* Custom animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        /* Delay utilities for animations */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default App;
