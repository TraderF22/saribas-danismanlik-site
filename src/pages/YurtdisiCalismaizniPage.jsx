import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, 
  Building2, 
  Users, 
  Tractor, 
  Hotel, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  Landmark,
  BadgeAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import CalculatorBanner from '@/components/CalculatorBanner';

const YurtdisiCalismaizniPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905419552375?text=Merhaba,%20yurtdışından%20işçi%20getirme%20ve%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const processSteps = [
    {
      step: 1,
      title: "İş Sözleşmesi & Ön Hazırlık",
      desc: "İşveren ve yabancı personel adayı arasında Çalışma Bakanlığı standartlarına uygun iki dilli İş Sözleşmesi hazırlanır. Gerekli diploma, mesleki yeterlilik ve kimlik evrakları kontrol edilir.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      step: 2,
      title: "T.C. Konsolosluğu Başvurusu & Referans Numarası",
      desc: "Yabancı personel adayı, kendi ülkesindeki T.C. Büyükelçiliği veya Başkonsolosluğu'na randevu ile giderek iş sözleşmesini ibraz eder ve 16 haneli Çalışma Vizesi Referans Numarası alır.",
      icon: <Landmark className="w-6 h-6 text-amber-600" />
    },
    {
      step: 3,
      title: "10 Gün İçinde Bakanlık e-İzin Başvurusu",
      desc: "Konsolosluk referans numarası alındıktan sonra en geç 10 iş günü içinde Türkiye'deki işveren adına Çalışma ve Sosyal Güvenlik Bakanlığı sistemine online başvuru eksiksiz yüklenir.",
      icon: <FileCheck className="w-6 h-6 text-indigo-600" />
    },
    {
      step: 4,
      title: "Bakanlık Değerlendirmesi & Harç Ödemesi",
      desc: "Çalışma Bakanlığı başvuruyu inceler (ortalama 15-30 gün). Onay çıktığında çalışma izni harcı ve değerli kağıt bedeli vergi dairesi veya anlaşmalı bankalar aracılığıyla ödenir.",
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      step: 5,
      title: "Çalışma Vizesi Basımı & Türkiye'ye Giriş",
      desc: "Ödeme sonrası yabancı aday konsolosluğa pasaportunu vererek Çalışma Vizesi etiketini bastırır. Vize ile birlikte Türkiye'ye yasal olarak giriş yapar.",
      icon: <PlaneTakeoff className="w-6 h-6 text-rose-600" />
    },
    {
      step: 6,
      title: "SGK İşe Girişi & Kart Teslimi",
      desc: "Yabancının Türkiye'ye giriş yaptığı tarihten itibaren 30 gün içinde işveren tarafından SGK işe giriş bildirgesi verilir. Resmi çalışma izni kartı işyeri adresine teslim edilir.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />
    }
  ];

  const targetCountries = [
    { name: "Özbekistan & Türkmenistan", desc: "Hasta/yaşlı bakımı, tekstil, sanayi ve tarım sektörlerinde en çok tercih edilen deneyimli personel kaynağı." },
    { name: "Gürcistan & Azerbaycan", desc: "Kültürel ve dil yakınlığı ile özellikle ev hizmetleri, hasta bakımı ve teknik kadrolarda hızlı entegrasyon." },
    { name: "Filipinler", desc: "İngilizce bilen çocuk bakıcısı (dadı), otelcilik ve turizm tesisleri için nitelikli yabancı personel istihdamı." },
    { name: "Mısır, Hindistan & Pakistan", desc: "Sanayi kuruluşları, mühendislik, bilişim, kaynakçılık ve ağır sanayi teknik eleman ihtiyaçları." },
    { name: "Kırgızistan & Kazakistan", desc: "Turizm sezonunda otel resepsiyon, servis, animasyon ve misafir ilişkileri personeli." }
  ];

  const faqs = [
    {
      question: "Yurtdışından işçi getirmek ne kadar sürer?",
      answer: "Yurtdışı konsolosluk kanalıyla çalışma izni süreci; konsolosluk randevusunun alınması, Bakanlık incelemesi ve vize basımı dahil olmak üzere ortalama 4 ila 8 hafta arasında tamamlanmaktadır."
    },
    {
      question: "Konsolosluk referans numarasının süresi ne kadardır?",
      answer: "Yabancı adayın T.C. Konsolosluğu'ndan aldığı referans numarası ile Türkiye'den işveren tarafından 10 iş günü içinde Bakanlık sistemine başvuru yapılması zorunludur. 10 günlük süre aşılırsa referans numarası iptal olur ve konsolosluk sürecinin baştan başlatılması gerekir."
    },
    {
      question: "Yurtdışından evime hasta bakıcısı getirebilir miyim?",
      answer: "Evet. 65 yaş üstü hasta veya bakıma muhtaç bir yakınınız varsa ve ailenizin resmi geliri yeterliyse, Özbekistan, Türkmenistan veya Filipinler gibi ülkelerden konsolosluk kanalıyla yasal hasta bakıcısı getirebilirsiniz."
    },
    {
      question: "Fabrikamız için yurtdışından teknik eleman getirebilir miyiz?",
      answer: "Evet. Şirketinizin 5 Türk çalışan şartını ve mali yeterlilik kriterlerini sağlaması koşuluyla, Türkiye'de bulunması güç uzmanlık gerektiren pozisyonlar (mühendis, yazılımcı, teknik operatör) için yurt dışından personel transferi yapılabilir."
    },
    {
      question: "Yurtdışı çalışma izni harçları ne kadardır (2026)?",
      answer: "2026 yılı için 1 yıllık süreli çalışma izni harcı 11.237,40 TL, değerli kağıt bedeli ise 1.120,00 TL'dir. Ayrıca konsoloslukta vize işlem harcı tahsil edilmektedir. Güncel maliyetleri 'Çalışma İzni Maliyet Hesaplayıcı' sayfamızdan hesaplayabilirsiniz."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Yurtdışından İşçi Getirme ve Çalışma İzni Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Sarıbaş Danışmanlık",
          "telephone": "0541 955 2375",
          "url": "https://saribasdanismanlik.com/"
        },
        "description": "Türkiye'deki işverenler için yurt dışından yabancı personel getirme, T.C. konsolosluk referans numarası alma ve Çalışma Bakanlığı yasal izin süreçleri takibi.",
        "areaServed": ["İzmir", "Manisa", "Balıkesir", "Çanakkale", "Bursa", "Türkiye"],
        "url": "https://saribasdanismanlik.com/yurtdisi-calisma-izni"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Yurtdışı Çalışma İzni ve İşçi Getirme Rehberi 2026"
        description="Yurtdışından yabancı işçi getirme süreci, T.C. konsolosluk referans numarası, Çalışma Bakanlığı başvurusu ve çalışma vizesi alma şartları. Profesyonel danışmanlık."
        keywords="yurtdışı çalışma izni, yurtdışından işçi getirme 2026, çalışma vizesi referans numarası, yabancı işçi getirme şartları, konsolosluk çalışma izni başvurusu, özbekistan işçi getirme, filipinler dadı getirme, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/yurtdisi-calisma-izni"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#152a45] to-[#0f1d30] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Globe2 className="w-4 h-4 text-blue-300" />
              <span>Yurtdışından Yasal Personel Transferi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Yurtdışı Çalışma İzni & <br />
              <span className="text-blue-400">İşçi Getirme Danışmanlığı</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Fabrikanız, tarım işletmeniz veya ev hizmetleriniz için yurt dışından personel getirme sürecini T.C. Konsolosluğu referans numarasından çalışma vizesine kadar uçtan uca yönetiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Yurtdışı İzin Uzmanına WhatsApp'tan Ulaşın</span>
              </a>
              <Link
                to="/calisma-izni-maliyet-hesaplama"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>2026 Harç & Maliyet Hesapla</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Adımda Yurtdışından İşçi Getirme Aşamaları */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Yurtdışından İşçi Getirme Adım Adım Nasıl İşler?
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Konsolosluk başvurusundan SGK işe girişine kadar tüm süreç 6 temel aşamadan oluşur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{s.icon}</div>
                    <span className="text-sm font-bold w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hedef Ülkeler ve İş Alanları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              En Çok Personel Getirdiğimiz Ülkeler
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Sektörünüze en uygun nitelikli iş gücünün bulunduğu ülkeler ve yasal izin detayları.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetCountries.map((c, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200/80 p-6 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold text-lg text-[#1e3a5f] mb-2">
                  <Globe2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <h4>{c.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Hesaplayıcı Banner */}
      <CalculatorBanner />

      {/* SSS Bölümü */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Yurtdışı Çalışma İzni Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Yurtdışından işçi getirmek isteyen işverenlerin en çok merak ettiği sorular.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alt CTA Bölümü */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Yurtdışından Personel Getirmek İçin Hemen Başvurun</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            10 günlük konsolosluk referans süresini kaçırmamak ve ret riskini önlemek için profesyonel danışmanlık desteğimizden yararlanın.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>0541 955 2375 - WhatsApp İletişim</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default YurtdisiCalismaizniPage;
