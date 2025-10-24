import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdsterraAd } from '@/components/AdsterraAd';

export const metadata: Metadata = {
  title: 'Contact Us - JSON Formatter / Prettifier',
  description: 'Get in touch with us for feedback, suggestions, or support. We love hearing from our users!',
  keywords: 'contact us, feedback, support, JSON tools, developer tools',
};

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="/contact-us" />
      
      {/* Adsterra Ad - After Header */}
      <AdsterraAd />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}
