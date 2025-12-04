"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, type Service } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProtectedRoute from '@/components/ProtectedRoute';
import { ArrowLeft, Plus, X, Edit, ExternalLink, Save, Palette, Facebook, Search, MessageCircle, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconOptions = [
  { value: 'Palette', label: 'Palette', icon: Palette },
  { value: 'Facebook', label: 'Facebook', icon: Facebook },
  { value: 'Search', label: 'Search', icon: Search },
  { value: 'MessageCircle', label: 'Message Circle', icon: MessageCircle },
  { value: 'Lightbulb', label: 'Lightbulb', icon: Lightbulb },
];

function AdminServicesPage() {
  const { language, t } = useLanguage();
  const [localServices, setLocalServices] = useState(services);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({
    id: '',
    icon: Palette,
    titleKey: '',
    descKey: '',
    features: { lt: [], en: [] },
    overview: { lt: '', en: '' },
    benefits: { lt: [], en: [] },
    process: [],
    deliverables: { lt: [], en: [] },
    pricing: { lt: '', en: '' },
    gradient: 'from-blue-500 to-purple-600',
  });
  const [featureInput, setFeatureInput] = useState({ lt: '', en: '' });
  const [benefitInput, setBenefitInput] = useState({ lt: '', en: '' });
  const [deliverableInput, setDeliverableInput] = useState({ lt: '', en: '' });
  const [processStep, setProcessStep] = useState({ title: { lt: '', en: '' }, description: { lt: '', en: '' } });

  const getIconComponent = (iconName: string): LucideIcon => {
    const icon = iconOptions.find(i => i.value === iconName);
    return icon ? icon.icon : Palette;
  };

  const handleAddService = () => {
    if (!formData.id || !formData.titleKey || !formData.descKey) {
      alert(language === 'lt' ? 'Užpildykite visus privalomus laukus' : 'Please fill all required fields');
      return;
    }

    const newService: Service = {
      id: formData.id,
      icon: formData.icon || Palette,
      titleKey: formData.titleKey,
      descKey: formData.descKey,
      features: formData.features || { lt: [], en: [] },
      overview: formData.overview || { lt: '', en: '' },
      benefits: formData.benefits || { lt: [], en: [] },
      process: formData.process || [],
      deliverables: formData.deliverables || { lt: [], en: [] },
      pricing: formData.pricing,
      gradient: formData.gradient || 'from-blue-500 to-purple-600',
    };

    if (editingId) {
      setLocalServices(localServices.map(s => s.id === editingId ? newService : s));
      setEditingId(null);
    } else {
      setLocalServices([...localServices, newService]);
    }

    resetForm();
    alert(language === 'lt' ? 'Paslauga išsaugota!' : 'Service saved!');
  };

  const handleEditService = (service: Service) => {
    setFormData(service);
    setEditingId(service.id);
    setIsAdding(true);
  };

  const handleRemoveService = (id: string) => {
    if (confirm(language === 'lt' ? 'Ar tikrai norite pašalinti šią paslaugą?' : 'Are you sure you want to remove this service?')) {
      setLocalServices(localServices.filter((s) => s.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      icon: Palette,
      titleKey: '',
      descKey: '',
      features: { lt: [], en: [] },
      overview: { lt: '', en: '' },
      benefits: { lt: [], en: [] },
      process: [],
      deliverables: { lt: [], en: [] },
      pricing: { lt: '', en: '' },
      gradient: 'from-blue-500 to-purple-600',
    });
    setFeatureInput({ lt: '', en: '' });
    setBenefitInput({ lt: '', en: '' });
    setDeliverableInput({ lt: '', en: '' });
    setProcessStep({ title: { lt: '', en: '' }, description: { lt: '', en: '' } });
    setIsAdding(false);
    setEditingId(null);
  };

  const addFeature = () => {
    if (featureInput.lt || featureInput.en) {
      setFormData({
        ...formData,
        features: {
          lt: [...(formData.features?.lt || []), featureInput.lt],
          en: [...(formData.features?.en || []), featureInput.en],
        },
      });
      setFeatureInput({ lt: '', en: '' });
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: {
        lt: formData.features?.lt.filter((_, i) => i !== index) || [],
        en: formData.features?.en.filter((_, i) => i !== index) || [],
      },
    });
  };

  const addBenefit = () => {
    if (benefitInput.lt || benefitInput.en) {
      setFormData({
        ...formData,
        benefits: {
          lt: [...(formData.benefits?.lt || []), benefitInput.lt],
          en: [...(formData.benefits?.en || []), benefitInput.en],
        },
      });
      setBenefitInput({ lt: '', en: '' });
    }
  };

  const removeBenefit = (index: number) => {
    setFormData({
      ...formData,
      benefits: {
        lt: formData.benefits?.lt.filter((_, i) => i !== index) || [],
        en: formData.benefits?.en.filter((_, i) => i !== index) || [],
      },
    });
  };

  const addDeliverable = () => {
    if (deliverableInput.lt || deliverableInput.en) {
      setFormData({
        ...formData,
        deliverables: {
          lt: [...(formData.deliverables?.lt || []), deliverableInput.lt],
          en: [...(formData.deliverables?.en || []), deliverableInput.en],
        },
      });
      setDeliverableInput({ lt: '', en: '' });
    }
  };

  const removeDeliverable = (index: number) => {
    setFormData({
      ...formData,
      deliverables: {
        lt: formData.deliverables?.lt.filter((_, i) => i !== index) || [],
        en: formData.deliverables?.en.filter((_, i) => i !== index) || [],
      },
    });
  };

  const addProcessStep = () => {
    if (processStep.title.lt || processStep.title.en) {
      setFormData({
        ...formData,
        process: [...(formData.process || []), processStep],
      });
      setProcessStep({ title: { lt: '', en: '' }, description: { lt: '', en: '' } });
    }
  };

  const removeProcessStep = (index: number) => {
    setFormData({
      ...formData,
      process: formData.process?.filter((_, i) => i !== index) || [],
    });
  };

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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                {language === 'lt' ? 'Paslaugų Valdymas' : 'Services Management'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'lt'
                  ? 'Valdykite paslaugas ir jų aprašymus'
                  : 'Manage services and their descriptions'}
              </p>
            </div>
            <Button onClick={() => setIsAdding(!isAdding)}>
              <Plus className="h-4 w-4 mr-2" />
              {language === 'lt' ? 'Pridėti' : 'Add'}
            </Button>
          </div>

          {/* Add/Edit Form */}
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8"
            >
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>
                    {editingId
                      ? language === 'lt' ? 'Redaguoti Paslaugą' : 'Edit Service'
                      : language === 'lt' ? 'Pridėti Naują Paslaugą' : 'Add New Service'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>ID *</Label>
                      <Input
                        value={formData.id}
                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                        placeholder="branding"
                        disabled={!!editingId}
                      />
                    </div>
                    <div>
                      <Label>Icon</Label>
                      <Select
                        value={iconOptions.find(i => i.icon === formData.icon)?.value || 'Palette'}
                        onValueChange={(value) => setFormData({ ...formData, icon: getIconComponent(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {iconOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                <div className="flex items-center gap-2">
                                  <Icon className="h-4 w-4" />
                                  {option.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Title Key *</Label>
                      <Input
                        value={formData.titleKey}
                        onChange={(e) => setFormData({ ...formData, titleKey: e.target.value })}
                        placeholder="services.branding.title"
                      />
                    </div>
                    <div>
                      <Label>Description Key *</Label>
                      <Input
                        value={formData.descKey}
                        onChange={(e) => setFormData({ ...formData, descKey: e.target.value })}
                        placeholder="services.branding.desc"
                      />
                    </div>
                    <div>
                      <Label>Gradient</Label>
                      <Input
                        value={formData.gradient}
                        onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                        placeholder="from-blue-500 to-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Overview (LT)</Label>
                    <Textarea
                      value={formData.overview?.lt || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          overview: { ...formData.overview, lt: e.target.value } as { lt: string; en: string },
                        })
                      }
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label>Overview (EN)</Label>
                    <Textarea
                      value={formData.overview?.en || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          overview: { ...formData.overview, en: e.target.value } as { lt: string; en: string },
                        })
                      }
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label>Pricing (LT) - Optional</Label>
                    <Textarea
                      value={formData.pricing?.lt || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, lt: e.target.value } as { lt: string; en: string },
                        })
                      }
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>Pricing (EN) - Optional</Label>
                    <Textarea
                      value={formData.pricing?.en || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, en: e.target.value } as { lt: string; en: string },
                        })
                      }
                      rows={2}
                    />
                  </div>

                  {/* Features */}
                  <div>
                    <Label>Features</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                      <Input
                        placeholder="Feature (LT)"
                        value={featureInput.lt}
                        onChange={(e) => setFeatureInput({ ...featureInput, lt: e.target.value })}
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder="Feature (EN)"
                          value={featureInput.en}
                          onChange={(e) => setFeatureInput({ ...featureInput, en: e.target.value })}
                        />
                        <Button type="button" onClick={addFeature} variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {formData.features && (formData.features.lt.length > 0 || formData.features.en.length > 0) && (
                      <div className="space-y-2">
                        {formData.features[language].map((item, index) => (
                          <div key={index} className="p-2 bg-muted rounded flex items-center justify-between">
                            <span className="text-sm">{item}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFeature(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <div>
                    <Label>Benefits</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                      <Input
                        placeholder="Benefit (LT)"
                        value={benefitInput.lt}
                        onChange={(e) => setBenefitInput({ ...benefitInput, lt: e.target.value })}
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder="Benefit (EN)"
                          value={benefitInput.en}
                          onChange={(e) => setBenefitInput({ ...benefitInput, en: e.target.value })}
                        />
                        <Button type="button" onClick={addBenefit} variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {formData.benefits && (formData.benefits.lt.length > 0 || formData.benefits.en.length > 0) && (
                      <div className="space-y-2">
                        {formData.benefits[language].map((item, index) => (
                          <div key={index} className="p-2 bg-muted rounded flex items-center justify-between">
                            <span className="text-sm">{item}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeBenefit(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Process Steps */}
                  <div>
                    <Label>Process Steps</Label>
                    <div className="space-y-2 mb-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Input
                          placeholder="Step title (LT)"
                          value={processStep.title.lt}
                          onChange={(e) => setProcessStep({ ...processStep, title: { ...processStep.title, lt: e.target.value } })}
                        />
                        <Input
                          placeholder="Step title (EN)"
                          value={processStep.title.en}
                          onChange={(e) => setProcessStep({ ...processStep, title: { ...processStep.title, en: e.target.value } })}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Textarea
                          placeholder="Step description (LT)"
                          value={processStep.description.lt}
                          onChange={(e) => setProcessStep({ ...processStep, description: { ...processStep.description, lt: e.target.value } })}
                          rows={2}
                        />
                        <Textarea
                          placeholder="Step description (EN)"
                          value={processStep.description.en}
                          onChange={(e) => setProcessStep({ ...processStep, description: { ...processStep.description, en: e.target.value } })}
                          rows={2}
                        />
                      </div>
                      <Button type="button" onClick={addProcessStep} variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Step
                      </Button>
                    </div>
                    {formData.process && formData.process.length > 0 && (
                      <div className="space-y-2">
                        {formData.process.map((step, index) => (
                          <div key={index} className="p-3 bg-muted rounded-lg flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{step.title[language]}</p>
                              <p className="text-xs text-muted-foreground">{step.description[language]}</p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeProcessStep(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Deliverables */}
                  <div>
                    <Label>Deliverables</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                      <Input
                        placeholder="Deliverable (LT)"
                        value={deliverableInput.lt}
                        onChange={(e) => setDeliverableInput({ ...deliverableInput, lt: e.target.value })}
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder="Deliverable (EN)"
                          value={deliverableInput.en}
                          onChange={(e) => setDeliverableInput({ ...deliverableInput, en: e.target.value })}
                        />
                        <Button type="button" onClick={addDeliverable} variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {formData.deliverables && (formData.deliverables.lt.length > 0 || formData.deliverables.en.length > 0) && (
                      <div className="space-y-2">
                        {formData.deliverables[language].map((item, index) => (
                          <div key={index} className="p-2 bg-muted rounded flex items-center justify-between">
                            <span className="text-sm">{item}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDeliverable(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleAddService} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      {language === 'lt' ? 'Išsaugoti' : 'Save'}
                    </Button>
                    <Button onClick={resetForm} variant="outline">
                      {language === 'lt' ? 'Atšaukti' : 'Cancel'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {localServices.length === 0 ? (
              <Card className="bg-card/50 border-border/50 sm:col-span-2 lg:col-span-3">
                <CardContent className="py-12 text-center text-muted-foreground">
                  {language === 'lt' ? 'Paslaugų nėra' : 'No services'}
                </CardContent>
              </Card>
            ) : (
              localServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemoveService(service.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="text-lg sm:text-xl mb-2">
                          {t(service.titleKey)}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          {t(service.descKey)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Link href={`/services/${service.id}`} target="_blank" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {language === 'lt' ? 'Peržiūrėti' : 'View'}
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditService(service)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            {language === 'lt' ? 'Redaguoti' : 'Edit'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default function AdminServicesPageWrapper() {
  return (
    <ProtectedRoute>
      <AdminServicesPage />
    </ProtectedRoute>
  );
}
