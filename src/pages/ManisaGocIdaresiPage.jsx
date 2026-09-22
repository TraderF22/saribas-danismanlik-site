import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Users, 
  GraduationCap, 
  Briefcase, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock,
  MapPin,
  Phone,
  Building,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const ManisaGocIdaresiPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905419552375?text=Merhaba,%20Manisa%20Göç%20İdaresi%20ve%20ikamet%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const ikametTypes = [
    {
      title: "Aile İkamet İzni (Evlilik)",
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      desc: "Manisa'da Türk vatandaşı ile evli yabancılar veya Türkiye'de yasal çalışma izni olan personelin eş ve çocukları için düzenlenen ikamet türüdür.",
      badge: "Vatandaşlık Yolu"
    },
    {
      title: "Kısa Dönem İkamet İzni",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      desc: "Taşınmaz konut sahibi yabancılar, Manisa OSB'de ticari bağlantı ve iş görüşmesi yapanlar veya Türkçe öğrenim kursuna katılanlar için.",
      badge: "Taşınmaz / Ticari"
    },
    {
      title: "Öğrenci İkamet İzni",
      icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
      desc: "Manisa Celal Bayar Üniversitesi'nde ön lisans, lisans veya lisansüstü eğitim gören yabancı uyruklu öğrenciler için yasal oturma izni.",
      badge: "MCBÜ Öğrencileri"
    },
    {
      title: "Uzun Dönem İkamet İzni",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      desc: "Türkiye'de kesintisiz en az 8 yıl ikamet izni ile yaşamış, düzenli gelire sahip yabancılara verilen süresiz oturma iznidir.",
      badge: "Süresiz İkamet"
    }
  ];

  const districts = [
    { name: "Yunusemre & Şehzadeler", desc: "Manisa merkez ilçelerinde ikamet eden yabancılar, Manisa OSB fabrika personeli aileleri ve üniversite öğrencileri." },
    { name: "Turgutlu", desc: "Toprak sanayi, seramik, tuğla fabrikaları ve tarımsal işletmelerde çalışan yabancıların ikamet ve adres bildirim işlemleri." },
    { name: "Akhisar", desc: "Zeytin ve zeytinyağı işletmeleri, sanayi tesisleri ve kırsal alan yabancı ikamet süreçleri." },
    { name: "Salihli", desc: "Jeotermal seracılık, tarım-hayvancılık ve kurumsal işletmelerde yabancı ikamet ve çalışma koordinasyonu." },
    { name: "Soma & Kırkağaç", desc: "Maden, enerji tesisleri ve kavun/tarım üretimi odaklı yabancı ikamet işlemleri." },
    { name: "Alaşehir & Sarıgöl", desc: "Bağcılık, kuru üzüm ihracat tesisleri ve kırsal bölge yabancı personel işlemleri." }
  ];

  const faqs = [
    {
      question: "Manisa İl Göç İdaresi Müdürlüğü nerede?",
      answer: "Manisa İl Göç İdaresi Müdürlüğü, Yunusemre ilçesinde (Uncubozköy Mahallesi civarında) hizmet vermektedir. Manisa'nın tüm ilçelerindeki (Turgutlu, Akhisar, Salihli vb.) yabancıların randevu ve parmak izi işlemleri bu merkezden yürütülür."
    },
    {
      question: "Manisa'da ikamet izni başvurusu nasıl yapılır?",
      answer: "İlk başvuru veya uzatma başvuruları Göç İdaresi Başkanlığı'nın e-ikamet (e-ikamet.goc.gov.tr) portalı üzerinden yapılır. Sistemden alınan randevu formunda belirtilen gün ve saatte gerekli evraklarla İl Göç İdaresi'ne gidilir."
    },
    {
      question: "Manisa'da yabancı eşimle evlendim, hangi belgeler gerekir?",
      answer: "Uluslararası aile cüzdanı, Türk eşin gelir belgesi (bordro veya vergi levhası), adli sicil kaydı, vukuatlı nüfus kayıt örneği, yabancı eşin pasaport fotokopisi, biyometrik fotoğraf ve geçerli özel sağlık sigortası gerekmektedir."
    },
    {
      question: "İkamet izni başvurum ne kadar sürede sonuçlanır?",
      answer: "Manisa İl Göç İdaresi'nde eksiksiz hazırlanan dosyalar ortalama 30-60 gün içerisinde sonuçlanmaktadır. Onaylanan kart PTT Kargo ile Manisa'daki adresinize gönderilir."
    },
    {
      question: "Manisa'da çalışma izni olan yabancının eşi ikamet izni alabilir mi?",
      answer: "Evet. Türkiye'de yasal çalışma izni olan yabancının eşi ve çocukları, sponsor (destekleyici) olarak çalışma izni sahibinin üzerinden Aile İkamet İzni alabilirler."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sarıbaş Danışmanlık - Manisa Göç İdaresi ve İkamet İzni Rehberi",
        "description": "Manisa İl Göç İdaresi e-ikamet randevu, aile ikamet izni, yabancı evlilik ve öğrenci ikameti başvurularında Manisa ofisimizle profesyonel danışmanlık.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manisa",
          "addressRegion": "Ege",
          "addressCountry": "TR"
        },
        "telephone": "0541 955 2375",
        "url": "https://saribasdanismanlik.com/manisa-goc-idaresi",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Manisa İkamet İzni Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manisa e-İkamet Randevu Alma"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aile İkamet İzni Danışmanlığı"
              }
            }
          ]
        }
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
        title="Manisa İl Göç İdaresi ve İkamet İzni Rehberi 2026"
        description="Manisa İl Göç İdaresi e-ikamet randevusu, aile ikamet izni, yabancı evlilik ve öğrenci ikameti işlemleri. Yunusemre, Turgutlu, Akhisar ve Salihli uzman danışmanlık."
        keywords="manisa göç idaresi, manisa ikamet izni, manisa yabancı danışmanlık, manisa oturma izni randevu, turgutlu yabancı işlemleri, akhisar göç idaresi, salihli yabancı danışmanlık, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/manisa-goc-idaresi"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#152a45] to-[#0f1d30] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Building className="w-4 h-4 text-blue-300" />
              <span>Manisa Ofisimiz ile Birebir Destek</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Manisa Göç İdaresi & <br />
              <span className="text-blue-400">İkamet İzni Danışmanlığı</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Manisa İl Göç İdaresi randevu alma, aile ikamet izni dosya hazırlığı, yabancı evlilik prosedürleri ve adres tescilinde Manisa ofisimizle yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>0541 955 2375 - Manisa İletişim</span>
              </a>
              <Link
                to="/manisa-calisma-izni"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Manisa Çalışma İzni Sayfası</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İkamet İzni Türleri */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Manisa'da Sunduğumuz İkamet İzni Hizmetleri
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İkamet türünüze göre eksiksiz dosya hazırlıyor, randevu günü mülakat desteği sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ikametTypes.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{t.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.desc}</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-blue-600 transition-colors"
                >
                  <span>Evrak Listesi ve Bilgi Al</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manisa İlçeleri */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Manisa'nın Tüm İlçelerine Danışmanlık
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İlçeniz neresi olursa olsun, Manisa İl Göç İdaresi randevunuzu eksiksiz yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {districts.map((d, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold text-lg text-[#1e3a5f] mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <h4>{d.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Manisa İkamet İzni Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Manisa'da ikamet başvurusu yapacak yabancıların en çok merak ettiği hususlar.
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
          <h2 className="text-3xl font-bold mb-4">Manisa'da İkamet İzninizi Riskin Ötesine Taşıyın</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Manisa ofisimizle iletişime geçin, Göç İdaresi sürecinizi profesyonel danışmanlıkla güvenle tamamlayın.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>0541 955 2375 - Manisa WhatsApp Hattı</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ManisaGocIdaresiPage;
