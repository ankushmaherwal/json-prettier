import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - JSON Formatter / Prettifier',
  description: 'Get in touch with us for feedback, suggestions, or support. We love hearing from our users!',
  keywords: 'contact us, feedback, support, JSON tools, developer tools',
};

export default function ContactUs() {
  return <ContactForm />;
}
