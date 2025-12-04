"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jonas Kazlauskas',
    role: 'CEO, TechStart',
    text: {
      lt: 'Arnas padėjo mums sukurti prekės ženklą, kuris tikrai atspindi mūsų verslą. Rezultatai viršijo lūkesčius.',
      en: 'Arnas helped us create a brand that truly reflects our business. The results exceeded expectations.',
    },
  },
  {
    name: 'Laura Petraitytė',
    role: 'Founder, BeautyBox',
    text: {
      lt: 'Profesionalus požiūris ir puikūs rezultatai. Mūsų pardavimai išaugo 150% per pirmus 3 mėnesius.',
      en: 'Professional approach and great results. Our sales grew by 150% in the first 3 months.',
    },
  },
  {
    name: 'Tomas Rimkus',
    role: 'Marketing Director, GreenLife',
    text: {
      lt: 'Geriausia investicija, kurią padarėme rinkodaroje. Arnas tikrai supranta, kaip pasiekti tikslinę auditoriją.',
      en: 'The best investment we made in marketing. Arnas truly understands how to reach the target audience.',
    },
  },
  {
    name: 'Greta Stankevičiūtė',
    role: 'E-commerce Owner',
    text: {
      lt: 'Nuo pat pradžių jaučiausi patikimose rankose. Komunikacija buvo sklandžia, o rezultatai kalbėjo patys už save.',
      en: 'From the start, I felt I was in good hands. Communication was smooth, and the results spoke for themselves.',
    },
  },
  {
    name: 'Paulius Jonaitis',
    role: 'Startup Founder',
    text: {
      lt: 'Arnas ne tik sukūrė puikią kampaniją, bet ir išmokė mane suprasti rinkodaros pagrindus. Neįkainojama patirtis.',
      en: 'Arnas not only created a great campaign but also taught me to understand the basics of marketing. Invaluable experience.',
    },
  },
  {
    name: 'Ieva Balčiūnaitė',
    role: 'Brand Manager',
    text: {
      lt: 'Kūrybiškas, atsakingas ir visada pasiruošęs padėti. Rekomenduoju visiems, ieškantiems tikrų rezultatų.',
      en: 'Creative, responsible, and always ready to help. I recommend to anyone looking for real results.',
    },
  },
];

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedTestimonials = isMobile ? testimonials.slice(0, 2) : testimonials;

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.03, duration: 0.3, ease: 'easeOut' }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover-glow transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    &ldquo;{testimonial.text[language]}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center text-xs sm:text-sm font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <Button
            asChild
            className="rounded-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-border"
          >
            <Link href="/testimonials">
              {t('cta.viewAll')}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}