
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api, FAQItem } from '@/services/api';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FaqSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await api.getFAQs();
        setFaqs(data);
      } catch (error) {
        console.error('Failed to fetch FAQs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <SectionWrapper id="faq">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      
      {isLoading ? (
        <div className="animate-pulse space-y-4 max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-muted rounded-md"></div>
          ))}
        </div>
      ) : (
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      
      <div className="mt-12 text-center">
        <p>
          Have more questions? <a href="mailto:info@nipay.rw" className="text-nipay-green hover:underline">Contact our team</a>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
