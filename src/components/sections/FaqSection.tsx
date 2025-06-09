
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: "Can I use NiPay without a smartphone?",
      answer: "Yes! NiPay works with USSD codes on any phone. Just dial our simple code and manage your account through text messages."
    },
    {
      question: "Do I need a bank account?",
      answer: "No bank account needed. NiPay works directly with your MTN Mobile Money, Airtel Money, or existing mobile wallet."
    },
    {
      question: "How much can I borrow?",
      answer: "Your borrowing limit grows with your daily sales. Start small and build up as your business transactions increase. Most SMEs start with 10K-50K RWF limits."
    },
    {
      question: "Is NiPay licensed?",
      answer: "We're working with regulated partners and pilot lenders while building towards full licensing. Your money safety is our top priority."
    },
    {
      question: "Is my money safe?",
      answer: "Yes. Your money stays with MTN, Airtel, or your bank. NiPay doesn't hold your funds - we just help you access credit based on your transaction history."
    },
    {
      question: "What if I can't repay on time?",
      answer: "Repayments are automatic and small - taken as a percentage of your incoming sales. No fixed due dates means no late fees or stress."
    },
    {
      question: "How do you know how much I can borrow?",
      answer: "NiPay analyzes your mobile money transaction patterns to understand your business flow and sets safe borrowing limits."
    },
    {
      question: "Can NiPay help me track my business?",
      answer: "Yes! Get 6 months free access to our business tracking tools - monitor sales, stock, and customer invoices all in one place."
    }
  ];

  return (
    <SectionWrapper id="faq" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 text-center text-gray-900">
          Common Questions
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 lg:mb-16 text-center text-gray-600 leading-relaxed">
          Everything you need to know about NiPay
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white rounded-lg border border-gray-200 px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-lg lg:text-xl py-4 text-gray-900 hover:text-nipay-green">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base lg:text-lg pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/250788123456?text=Hi%20NiPay%2C%20I%20have%20a%20question%20about', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8"
          >
            <MessageCircle className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
