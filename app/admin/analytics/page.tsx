"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProtectedRoute from '@/components/ProtectedRoute';
import { ArrowLeft, Users, Eye, MousePointerClick, TrendingUp, FileText, Calendar } from 'lucide-react';

function AdminAnalyticsPage() {
  const { language } = useLanguage();

  // Mock analytics data - in production, this would come from an analytics service
  const stats = [
    {
      label: language === 'lt' ? 'Visitors' : 'Visitors',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: language === 'lt' ? 'Page Views' : 'Page Views',
      value: '5,678',
      change: '+8%',
      icon: Eye,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      label: language === 'lt' ? 'Clicks' : 'Clicks',
      value: '2,345',
      change: '+15%',
      icon: MousePointerClick,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      label: language === 'lt' ? 'Growth' : 'Growth',
      value: '+23%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const recentActivity = [
    {
      type: language === 'lt' ? 'Naujas projekto peržiūrėjimas' : 'New project view',
      item: 'TechStart Rebrand',
      time: '2 minutes ago',
      icon: FileText,
    },
    {
      type: language === 'lt' ? 'Paslaugos peržiūrėjimas' : 'Service view',
      item: 'Branding',
      time: '15 minutes ago',
      icon: FileText,
    },
    {
      type: language === 'lt' ? 'Skambučio rezervacija' : 'Call booking',
      item: 'New booking',
      time: '1 hour ago',
      icon: Calendar,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-6">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {language === 'lt' ? 'Atgal į Valdymo Skydelį' : 'Back to Dashboard'}
              </Button>
            </Link>
          </div>
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              {language === 'lt' ? 'Analitika' : 'Analytics'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'lt'
                ? 'Peržiūrėkite svetainės statistiką ir veiklos duomenis'
                : 'View website statistics and activity data'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <span className="text-xs font-medium text-green-500">{stat.change}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>
                  {language === 'lt' ? 'Paskutinė Veikla' : 'Recent Activity'}
                </CardTitle>
                <CardDescription>
                  {language === 'lt'
                    ? 'Naujausi svetainės įvykiai'
                    : 'Latest website events'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.type}</p>
                          <p className="text-xs text-muted-foreground">{activity.item}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>
                  {language === 'lt' ? 'Populiariausi Puslapiai' : 'Popular Pages'}
                </CardTitle>
                <CardDescription>
                  {language === 'lt'
                    ? 'Dažniausiai lankomi puslapiai'
                    : 'Most visited pages'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: '/', views: 1234 },
                    { page: '/services', views: 856 },
                    { page: '/case-studies', views: 642 },
                    { page: '/story', views: 421 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium">{item.page}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.views} {language === 'lt' ? 'peržiūrų' : 'views'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              {language === 'lt'
                ? 'Pastaba: Tai yra demonstraciniai duomenys. Produkcinėje versijoje čia būtų integruota tikra analitikos sistema (pvz., Google Analytics, Plausible).'
                : 'Note: This is demo data. In production, this would integrate with a real analytics service (e.g., Google Analytics, Plausible).'}
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default function AdminAnalyticsPageWrapper() {
  return (
    <ProtectedRoute>
      <AdminAnalyticsPage />
    </ProtectedRoute>
  );
}

