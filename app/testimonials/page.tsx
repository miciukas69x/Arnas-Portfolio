"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, Quote } from 'lucide-react';

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
  {
    name: 'Marius Petraitis',
    role: 'Founder, TechFlow',
    text: {
      lt: 'Arnas transformavo mūsų rinkodaros strategiją. Dabar turime aiškų kelią į priekį ir matome konkretų augimą.',
      en: 'Arnas transformed our marketing strategy. Now we have a clear path forward and see concrete growth.',
    },
  },
  {
    name: 'Elena Žukauskienė',
    role: 'Marketing Lead, FashionHub',
    text: {
      lt: 'Puikus darbas su prekės ženklu. Mūsų atpažįstamumas padidėjo, o klientų bazė išaugo pastebimai.',
      en: 'Excellent work with brand identity. Our recognition increased and our customer base grew significantly.',
    },
  },
  {
    name: 'Rokas Navickas',
    role: 'CEO, Digital Solutions',
    text: {
      lt: 'Profesionalus, greitas ir efektyvus. Arnas supranta, kaip derinti kūrybiškumą su duomenimis.',
      en: 'Professional, fast, and effective. Arnas understands how to combine creativity with data.',
    },
  },
];

export default function TestimonialsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Button
                asChild
                variant="ghost"
                className="mb-8"
              >
                <Link href="/">
                  <ArrowLeft size={16} className="mr-2" />
                  {t('cta.backToHome')}
                </Link>
              </Button>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                {t('testimonials.title')}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {t('testimonials.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                >
                  <Card className="h-full bg-card/50 border-border/50 hover-glow transition-all duration-300 hover:border-primary/30">
                    <CardContent className="p-6">
                      <Quote size={24} className="text-primary/50 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 leading-relaxed">
                        &ldquo;{testimonial.text[language]}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
