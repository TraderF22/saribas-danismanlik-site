import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Baby, Tractor, Hotel, Building2, Globe2, FileText, CheckCircle2, AlertTriangle, Phone, ChevronDown, ChevronUp, HelpCircle, FileCheck, Factory } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
const ManisaCalismaiznPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = index => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const whatsappLink = "https://wa.me/905419552375?text=Merhaba,%20Manisa%20ve%20ilçeleri%20için%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";
  const sectors = [{
    title: "Hasta ve Yaşlı Bakımı Çalışma İzni",
    iconName: Users,
    iconColor: "text-rose-500",
    color: "from-rose-50 to-white",
    borderColor: "border-rose-100",
    content: ["Ev hizmetlerinde çalışacak yabancılar sadece hasta, yaşlı ve çocuk bakımı işlerinde çalıştırılabilir.", "Temizlikçi statüsünde izin alınamaz, bakım personeli olarak başvurulmalıdır.", "İşverenin ve bakılacak kişinin gelir düzeyi kriterlere uygun olmalıdır.", "Bakılacak kişinin 65 yaş üstü olması veya raporlu olması gerekir.", "Manisa merkez ve ilçelerindeki ev hizmetleri başvurularında en sık onay alan türdür."]
  }, {
    title: "Sanayi ve Fabrika Personeli İzni",
    iconName: Factory,
    iconColor: "text-slate-600",
    color: "from-slate-50 to-white",
    borderColor: "border-slate-100",
    content: ["Manisa Organize Sanayi Bölgesi (MOSB), Akhisar ve Turgutlu sanayi siteleri için özel süreç yönetimi.", "Mavi yaka (üretim) ve beyaz yaka (mühendis) yabancı personel istihdamı.", "Sanayi kuruluşları için 'Ödenmiş Sermaye' ve 'İhracat Tutarı' kriterlerine göre başvurular.", "Toplu çalışma izni başvurularında proje bazlı dosya hazırlığı."]
  }, {
    title: "Tarım ve Hayvancılık Sektörü",
    iconName: Tractor,
    iconColor: "text-green-600",
    color: "from-green-50 to-white",
    borderColor: "border-green-100",
    content: ["Akhisar, Salihli, Alaşehir, Saruhanlı ve Soma başta olmak üzere tarım işçisi ve çoban talepleri yönetilir.", "Hayvanların bulunduğu işletmeye ait tescil belgesi ve sigorta dosyası gereklidir.", "Tarım arazisinin büyüklüğü veya hayvan sayısı (büyükbaş/küçükbaş) kriterleri sağlanmalıdır.", "Geçici koruma kapsamındaki (Suriyeli) işçiler için tarım muafiyetleri ve özel izinler.", "Mevsimlik işçi ve sürekli çoban kadroları için ayrı prosedürler uygulanır."]
  }, {
    title: "Çocuk Bakımı Çalışma İzni",
    iconName: Baby,
    iconColor: "text-blue-500",
    color: "from-blue-50 to-white",
    borderColor: "border-blue-100",
    content: ["15 yaşından küçük çocuğu olan aileler yabancı bakıcı çalıştırabilir.", "Annenin çalışıyor olması başvurunun olumlu sonuçlanma ihtimalini artırır.", "Bakıcının çocukla iletişim kurabilecek düzeyde Türkçe veya ortak dil bilmesi önemlidir.", "Ailenin toplam hane halkı geliri asgari kriterleri karşılamalıdır."]
  }, {
    title: "Turizm ve Otelcilik",
    iconName: Hotel,
    iconColor: "text-amber-500",
    color: "from-amber-50 to-white",
    borderColor: "border-amber-100",
    content: ["Manisa merkez otelleri ve termal tesislerde (Spil, Kurşunlu vb.) yabancı personel istihdamı.", "Turizm işletme belgeli tesislerde değerlendirme kriterleri daha esnektir.", "Her 1 yabancı çalışan için 5 Türk vatandaşı çalışan şartı aranır (Bazı durumlarda esnetilebilir).", "Özellikle SPA terapisti, animatör ve karşılama personeli kadroları için uygundur."]
  }, {
    title: "Şahıs İşyeri / Şirket Kuruluşu",
    iconName: Building2,
    iconColor: "text-indigo-600",
    color: "from-indigo-50 to-white",
    borderColor: "border-indigo-100",
    content: ["Manisa'da kendi işini kurmak isteyen yabancılar için şirket kuruluşu ve çalışma izni.", "Başvuru için en az 6 ay süreli ikamet izni şartı aranır.", "İşyerinin ödenmiş sermayesi en az 100.000 TL olmalı ve 5 Türk personel istihdam edilmelidir.", "Vergi levhası, faaliyet belgesi ve ticaret sicil gazetesi gibi evraklar eksiksiz hazırlanır."]
  }, {
    title: "Yurtdışından İşçi Getirme",
    iconName: Globe2,
    iconColor: "text-cyan-600",
    color: "from-cyan-50 to-white",
    borderColor: "border-cyan-100",
    content: ["Henüz Türkiye'ye gelmemiş personeller için konsolosluk referanslı başvuru.", "Manisa'daki işveren adına dosya hazırlanır, yabancı kendi ülkesindeki Türk konsolosluğuna başvurur.", "Referans numarası ile sistem üzerinden onay süreci yönetilir.", "Ortalama işlem süresi 6-8 haftadır. Onay sonrası çalışma vizesi ile giriş yapılır."]
  }];
  const processSteps = ["Manisa'daki işletmenizin veya hanenizin durum analizi yapılır, uygun izin türü belirlenir.", "Yabancı personel ve işveren arasında yasal mevzuata uygun iş sözleşmesi hazırlanır.", "KEP ve E-İmza aracılığıyla Uluslararası İşgücü Genel Müdürlüğü sistemine işveren kaydı yapılır.", "Gerekli evraklar taranarak sisteme yüklenir ve başvuru onaya sunulur.", "Bakanlık değerlendirme süreci takip edilir (Ortalama 30 gün).", "Eksik evrak talebi olursa 30 günlük yasal süre içinde tamamlanır.", "Onaylanan izin sonrası SGK giriş işlemleri yapılır ve çalışma izni kartı PTT ile adrese gelir."];
  const faqs = [{
    question: "Manisa'da yabancı çalışma izni kaç günde sonuçlanır?",
    answer: "Bakanlığın yasal değerlendirme süresi 30 gündür. Ancak Manisa bölgesinden yapılan başvurularda yoğunluğa ve dosyanın türüne göre (ev hizmetleri veya sanayi) bu süreç 4-6 hafta arasında değişmektedir. Ek evrak istenmesi durumunda süreç uzayabilir."
  }, {
    question: "Manisa OSB'deki fabrikamda Suriyeli işçi çalıştırabilir miyim?",
    answer: "Evet, çalıştırabilirsiniz. Geçici Koruma Kapsamındaki (Suriyeli) yabancılar için kota uygulaması farklıdır. Çalışma izni alınarak istihdam sağlanabilir."
  }, {
    question: "Çalışma izni işyeri değişikliğinde geçerli midir?",
    answer: "Hayır, çalışma izni sadece başvurunun yapıldığı o işyeri ve adres için geçerlidir. Yabancı personel işten ayrılıp başka bir yere geçerse, yeni işveren tarafından sıfırdan izin alınması gerekir."
  }, {
    question: "Çalışma izni harçlarını kim öder?",
    answer: "Yasal olarak kesin bir hüküm olmamakla birlikte, çalışma izni işverene bağlı bir hak olduğu için harçları genellikle işveren karşılar. Ancak taraflar kendi aralarında anlaşarak bu masrafı paylaşabilir veya maaşından mahsup edebilir."
  }, {
    question: "Maaş ödemeleri nasıl yapılmalıdır?",
    answer: "Çalışma izni onaylanan personelin maaşı, başvuru formunda beyan edilen tutar üzerinden mutlaka banka aracılığıyla ödenmelidir. Elden ödeme yapılması durumunda ileride yasal ve cezai yaptırımlarla karşılaşılabilir."
  }];
  const seoData = {
    title: "Manisa Yabancı Çalışma İzni 2026: Fiyatlar ve Başvuru | Sarıbaş Danışmanlık",
    description: "Manisa'da yabancı çalışma izni nasıl alınır? Fabrika, tarım, bakıcı ve ev hizmetleri için 2026 başvuru şartları. Akhisar, Salihli ve Turgutlu danışmanlık.",
    keywords: "Manisa çalışma izni, Manisa yabancı danışmanlık, Akhisar çalışma izni, Salihli çalışma izni, Manisa bakıcı izni, Manisa sanayi çalışma izni",
    canonical: "https://saribasdanismanlik.com/manisa-calisma-izni"
  };
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Service",
      "serviceType": "Yabancı Çalışma İzni Danışmanlığı",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Sarıbaş Danışmanlık",
        "url": "https://saribasdanismanlik.com",
        "telephone": "+905419552375",
        "image": "https://saribasdanismanlik.com/images/manisa-logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manisa",
          "addressRegion": "Manisa",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "38.6191",
          "longitude": "27.4289"
        },
        "areaServed": [{
          "@type": "City",
          "name": "Manisa"
        }, {
          "@type": "City",
          "name": "Akhisar"
        }, {
          "@type": "City",
          "name": "Salihli"
        }, {
          "@type": "City",
          "name": "Turgutlu"
        }, {
          "@type": "City",
          "name": "Soma"
        }, {
          "@type": "City",
          "name": "Alaşehir"
        }]
      },
      "name": "Manisa Yabancı Çalışma İzni Başvuru Merkezi",
      "description": "Manisa ve ilçelerinde yabancı personel çalışma izni, ev hizmetleri, sanayi ve tarım işçisi izinleri için profesyonel danışmanlık."
    }, {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }]
  };
  return <>
      <SEOHead title={seoData.title} description={seoData.description} keywords={seoData.keywords} canonical={seoData.canonical} schema={schemaData} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3)',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#2d5a8f]/80 to-black/60 mix-blend-multiply"></div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-sm font-medium tracking-wider shadow-lg hover:bg-white/20 transition-colors">
             <a href="/" className="hover:text-white">SARIBAŞ DANIŞMANLIK</a>
             <span className="text-white/50">›</span>
             <span className="text-white"></span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Manisa Çalışma İzni:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100">
               Yabancı Çalışma İzni ve Danışmanlık Merkezi
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Manisa Merkez, Akhisar, Salihli ve Turgutlu'daki işletmeleriniz ve ev hizmetleriniz için yasal izin süreçlerini profesyonelce yönetiyoruz.
          </p>
          
          <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 ring-4 ring-green-500/20">
            <Phone className="w-6 h-6 fill-current" />
            Ücretsiz Danışın
          </motion.a>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, 10, 0]
      }} transition={{
        delay: 1,
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Manisa'da Yabancı Çalışma İzni Nedir?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Manisa çalışma izni, il genelindeki fabrika, tarım arazisi veya evlerde çalışacak yabancıların Uluslararası İşgücü Genel Müdürlüğü nezdinde yasal kayıt altına alınması işlemidir.
              Manisa, hem güçlü sanayisi (OSB) hem de verimli tarım arazileri nedeniyle yabancı istihdamının en yoğun olduğu illerdendir.
              Sarıbaş Danışmanlık olarak; <strong>Manisa, Akhisar, Salihli, Turgutlu, Soma ve Alaşehir</strong> başta olmak üzere tüm ilçelerde bakanlık yetkili e-imza ve KEP adresi üzerinden resmi başvuru işlemlerini yürütüyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectoral Information Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              Sektörlere Göre Çalışma İzni Türleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manisa'nın ekonomik dinamiklerine uygun çalışma izni türünü seçin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className={`group bg-gradient-to-b ${sector.color} border ${sector.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <sector.iconName className={`w-10 h-10 ${sector.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 min-h-[56px] flex items-center">
                  {sector.title}
                </h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {sector.content.map((item, i) => <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#1e3a5f]/60" />
                      <span>{item}</span>
                    </li>)}
                </ul>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-auto bg-white border border-gray-200 text-[#1e3a5f] font-semibold py-3 rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm">
                  <Phone className="w-4 h-4" />
                  Detaylı Bilgi Al
                </a>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a5f] rounded-3xl p-1 md:p-2 shadow-2xl overflow-hidden">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FileText className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
                  Gerekli Temel Belgeler
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">KEP ve E-İmza</h4>
                    <p className="text-gray-600 text-sm mt-1">Başvurular online sistem üzerinden işverene ait Elektronik İmza ve KEP adresi ile yapılır.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Geçerli Pasaport veya İkamet Kartı</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Pasaport süresi talep edilen izin süresinden en az 60 gün fazla olmalıdır. Varsa mevcut ikamet kartı fotokopisi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Biyometrik Fotoğraf</h4>
                    <p className="text-gray-600 text-sm mt-1">Yabancı personelin son 6 ay içinde çekilmiş, beyaz fonlu biyometrik fotoğraf.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sektörel Ek Belgeler</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Şirketler için: Vergi Levhası, Faaliyet Belgesi, Bilanço.<br />
                      Tarım için: ÇKS Belgesi veya Hayvan Varlığı Listesi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Adım Adım Başvuru Süreci
            </h2>
            <p className="text-gray-600">Manisa çalışma izni dosyanızın hazırlık aşamaları.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-500 text-right' : 'border-green-500 text-left'}`}>
                      <span className="text-5xl font-black text-gray-100 absolute -mt-10 mx-4 opacity-50 select-none">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 font-medium relative z-10">{step}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 shrink-0">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* International Labor Directorate Info */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-blue-300" />
                Yetkili Merci: Çalışma Bakanlığı
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Tüm çalışma izni başvuruları, Ankara'da bulunan Çalışma ve Sosyal Güvenlik Bakanlığı'na bağlı Uluslararası İşgücü Genel Müdürlüğü tarafından onaylanmaktadır. Sarıbaş Danışmanlık olarak süreci Ankara ile koordineli yürütüyoruz.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Building2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Bakanlık Adresi</h4>
                    <p className="text-blue-100 text-sm">İnönü Bulvarı no:42 Emek Mahallesi Çankaya/ ANKARA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Destek Hattı</h4>
                    <p className="text-blue-100 text-sm">ALO 170 (Çalışma Hayatı İletişim Merkezi)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
               <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" alt="Manisa Yabancı Çalışma İzni Başvuru Merkezi ve Danışmanlık Ofisi" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-light italic">
                  "Başvurular e-devlet entegrasyonu ile tamamen dijital ortamda yapılmakta olup, fiziki dosya gönderimi kaldırılmıştır."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 İzinsiz  Yabancı Çalıştırma Cezaları</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Manisa'da yapılan denetimlerde çalışma izni olmadan yabancı çalıştırdığı tespit edilen işverenlere ve yabancılara yüksek idari para cezaları uygulanmaktadır. Ayrıca yabancı personelin sınır dışı edilmesi (deport) riski vardır.
            </p>
            <a href="https://saribasdanismanlik.com/blog/2026-yabanci-calisma-izni-manisa-canakkale" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:underline">
              2026 Kaçak Çalıştırma Cezaları Hakkında Detaylı Bilgi →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8" />
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => toggleAccordion(index)} className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="px-6 pb-6">
                      <p className="text-gray-600 border-t border-gray-200 pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </div>
        </div>
      </section>
    </>;
};
export default ManisaCalismaiznPage;