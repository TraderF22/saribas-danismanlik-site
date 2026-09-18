import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Baby, 
  Tractor, 
  Hotel, 
  Building2, 
  Globe2, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MapPin,
  Compass
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import CalculatorBanner from '@/components/CalculatorBanner';

const BalikesirCalismaiznPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905548743308?text=Merhaba,%20Balıkesir%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const sectors = [
    {
      title: "Tarım ve Hayvancılık Sektörü",
      icon: <Tractor className="w-10 h-10 text-green-600" />,
      color: "from-green-50 to-white",
      borderColor: "border-green-100",
      districts: "Gönen, Manyas, Susurluk, Havran, İvrindi",
      content: [
        "Balıkesir'in Gönen ve Manyas ovalarında çeltik/tarım işçiliği, Susurluk ve Bigadiç'te büyükbaş ve küçükbaş hayvancılık için yabancı çalışan talebi çok yüksektir.",
        "Hayvan işletmesine kayıtlı en az belirlenen sayıda büyükbaş veya küçükbaş hayvan varlığı (küpe kaydı) bulunmalıdır.",
        "İşletmeye ait aktif bir SGK işyeri dosyası ve Çiftçi Kayıt Sistemi (ÇKS) belgesi hazır olmalıdır.",
        "Afgan çobanlar, Türkmen ve Gürcü tarım çalışanları için mevzuata uygun yasal başvuru dosyası hazırlanır.",
        "İzinsiz çoban ve tarım işçisi çalıştırmanın yüksek para cezası riskini ortadan kaldıran yasal çözümler sunuyoruz."
      ]
    },
    {
      title: "Hasta ve Yaşlı Bakımı Çalışma İzni",
      icon: <Users className="w-10 h-10 text-rose-500" />,
      color: "from-rose-50 to-white",
      borderColor: "border-rose-100",
      districts: "Edremit, Ayvalık, Burhaniye, Balıkesir Merkez",
      content: [
        "Edremit Körfezi ve Ayvalık başta olmak üzere Balıkesir'de ikamet eden yaşlı ve bakım ihtiyacı olan vatandaşlarımız için ev hizmetleri çalışma izni alınmaktadır.",
        "Ev hizmetlerinde sadece hasta, yaşlı ve çocuk bakımı işlerinde yabancı çalıştırılabilir; temizlikçi adı altında izin verilmez.",
        "Yaşlı bakımında bakılacak kişinin 65 yaş ve üzerinde olması veya doktor raporlu kronik rahatsızlığı bulunması gerekir.",
        "İşverenin yabancı personelin maaşını ve sigorta primlerini karşılayabilecek resmi gelir düzeyine sahip olması şarttır.",
        "Türkmenistan, Özbekistan, Gürcistan ve Azerbaycan uyruklu deneyimli bakıcıların başvuru süreçlerini eksiksiz yürütüyoruz."
      ]
    },
    {
      title: "Sanayi ve Fabrika Personeli",
      icon: <Building2 className="w-10 h-10 text-indigo-600" />,
      color: "from-indigo-50 to-white",
      borderColor: "border-indigo-100",
      districts: "Bandırma OSB, Balıkesir Merkez OSB, Gönen Deri İhtisas",
      content: [
        "Balıkesir ve Bandırma Organize Sanayi Bölgelerinde üretim yapan fabrikalar için yabancı mühendis, teknik eleman ve uzman personel izinleri.",
        "İşyerinde her 1 yabancı çalışan için en az 5 Türk vatandaşı sigortalı çalışan bulunması genel kuraldır.",
        "İşletmenin ödenmiş sermayesi, ciro veya ihracat rakamları 2026 Çalışma Bakanlığı değerlendirme kriterlerine uygun olmalıdır.",
        "Gerekli işyeri açma ve çalışma ruhsatı, vergi levhası ve bilanço analizleri tarafımızca incelenir.",
        "Kurumsal işletmelerin dosya hazırlığı, vekaletle e-imza işlemleri ve ret riskini önleyen danışmanlık."
      ]
    },
    {
      title: "Turizm ve Otelcilik Sektörü",
      icon: <Hotel className="w-10 h-10 text-amber-500" />,
      color: "from-amber-50 to-white",
      borderColor: "border-amber-100",
      districts: "Ayvalık, Cunda, Erdek, Marmara Adası, Burhaniye",
      content: [
        "Kuzey Ege ve Marmara kıyılarındaki oteller, tatil köyleri ve butik tesisler için sezonluk veya yıllık yabancı personel istihdamı.",
        "Turizm işletme belgeli veya belediye ruhsatlı konaklama tesislerinde kat görevlisi, servis ve mutfak personeli izinleri.",
        "Yabancı personelin nitelikli dil bilmesi turizm tesisleri başvurularında onay şansını ciddi şekilde artırır.",
        "Sezon öncesi yapılan başvurularla sezon ortasında kaçak işçi denetimi ve ceza risklerinden korunursunuz.",
        "Toplu yabancı personel istihdam eden tesisler için hızlı dosya hazırlığı ve bürokratik takip."
      ]
    },
    {
      title: "Çocuk Bakımı Çalışma İzni",
      icon: <Baby className="w-10 h-10 text-blue-500" />,
      color: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      districts: "Balıkesir Merkez (Altıeylül, Karesi), Bandırma",
      content: [
        "Evinde 15 yaşından küçük çocuğu bulunan aileler, yabancı çocuk bakıcısı (dadı) çalıştırmak için yasal başvuru yapabilir.",
        "Anne ve babanın gelir düzeyi yabancının asgari ücreti ve sigortasını karşılayacak düzeyde belgelenmelidir.",
        "Bakıcının çocukla iletişimi ve Türkiye'de yasal ikametinin bulunması veya yurtdışı konsolosluk kanalıyla gelmesi sağlanır.",
        "Tüm başvuru formları, iş sözleşmesi ve Çalışma Bakanlığı izin harç takipleri tarafımızca yönetilir."
      ]
    },
    {
      title: "Yurtdışından İşçi Getirme (Konsolosluk Kanalı)",
      icon: <Globe2 className="w-10 h-10 text-cyan-600" />,
      color: "from-cyan-50 to-white",
      borderColor: "border-cyan-100",
      districts: "Tüm Balıkesir İl ve İlçeleri",
      content: [
        "Yabancı personel henüz Türkiye'ye gelmemişse, Balıkesir'deki işveren adına yurtdışı çalışma izni süreci başlatılır.",
        "Hazırlanan yasal evraklar ve sözleşmeler yabancı adaya iletilerek kendi ülkesindeki Türk Konsolosluğuna başvuru yaptırılır.",
        "Konsolosluktan alınan referans kodu ile Türkiye'deki sistemden resmi onay başvurusu tamamlanır.",
        "Onaylanan izinle yabancı çalışma vizesi alarak Türkiye'ye yasal giriş yapar ve doğrudan sigortası başlatılır."
      ]
    }
  ];

  const districts = [
    { name: "Bandırma", desc: "Sanayi kuruluşları, liman lojistiği, kanatlı beyaz et entegre tesisleri ve yabancı teknik personel izinleri." },
    { name: "Edremit", desc: "Körfez bölgesinde emekli nüfusunun yoğun olduğu Akçay, Güre ve Altınoluk'ta hasta ve yaşlı bakıcı izinleri, zeytincilik." },
    { name: "Gönen", desc: "Çeltik üretimi, deri sanayi, büyükbaş/küçükbaş hayvancılık işletmeleri ve yabancı tarım işçisi/çoban izinleri." },
    { name: "Ayvalık & Cunda", desc: "Turizm tesisleri, butik oteller, gastronomi sektörü ve yazlık villa hasta/çocuk bakıcılığı izinleri." },
    { name: "Balıkesir Merkez (Karesi & Altıeylül)", desc: "Balıkesir OSB fabrikaları, kurumsal şirketler, ev hizmetleri ve Göç İdaresi koordinasyon işlemleri." },
    { name: "Erdek & Marmara", desc: "Marmara ve Avşa adaları ile Erdek kıyılarında turizm ve balıkçılık sektörleri personel izinleri." },
    { name: "Manyas & Susurluk", desc: "Büyükbaş süt hayvancılığı, besi çiftlikleri ve tarımsal işletmelerde yabancı çoban ve çiftlik personeli." },
    { name: "Burhaniye & Havran", desc: "Zeytin ve zeytinyağı işletmeleri, tarımsal hasat işçiliği ve kırsal kalkınma çalışma izinleri." }
  ];

  const processSteps = [
    "İşletmenizin (fabrika, çiftlik, otel) veya ev işvereninizin durumuna göre gerekli evrak listesi çıkarılır.",
    "Yapılacak işin statüsüne (hasta bakıcı, çoban, teknik uzman, servis personeli) uygun yasal iş sözleşmesi hazırlanır.",
    "İşverenin e-imzası ile Uluslararası İşgücü Genel Müdürlüğü sistemi üzerinden yetkilendirme alınır.",
    "Çalışma ve Sosyal Güvenlik Bakanlığı sistemine eksiksiz başvuru girişi yapılır.",
    "Bakanlık değerlendirme süreci yakından takip edilir; ek belge talebi olursa derhal yanıtlanır.",
    "Onaylanan çalışma izni kartı PTT ile işveren adresine teslim edilir.",
    "Yasal süresi içinde SGK işe giriş bildirgesi verilerek yabancının resmi çalışması başlatılır."
  ];

  const faqs = [
    {
      question: "Balıkesir'de yabancı çalışma izni başvurusu nereye yapılır?",
      answer: "Yabancı çalışma izinleri doğrudan Çalışma ve Sosyal Güvenlik Bakanlığı Uluslararası İşgücü Genel Müdürlüğü'nün dijital e-izin sistemi üzerinden yapılır. Balıkesir İl Göç İdaresi sadece ikamet izinleri ile ilgilenir; çalışma izni onaylandığında bu kart aynı zamanda yasal ikamet (oturma) izni yerine geçer."
    },
    {
      question: "Gönen veya Manyas'ta hayvancılık için çoban çalışma izni nasıl alınır?",
      answer: "Hayvancılık işletmesinin İl/İlçe Tarım Müdürlüğü'ne kayıtlı aktif işletme numarası, güncel küpeli hayvan varlığı ve SGK işyeri numarası olmalıdır. İşletme büyüklüğüne göre Afganistan veya diğer uyruklu çalışanlar için tarım-hayvancılık çalışma izni başvurusu yapılabilir. Sarıbaş Danışmanlık olarak dosyanızı mevzuata uygun şekilde hazırlıyoruz."
    },
    {
      question: "Edremit veya Ayvalık'ta yabancı hasta bakıcısı çalıştırmak için şartlar nelerdir?",
      answer: "Bakılacak kişinin 65 yaş üzerinde olması veya heyet raporlu bir hastalığı/engeli bulunması gerekir. İşverenin resmi gelirinin yabancının net asgari ücreti ve SGK primlerini karşılamaya yeterli olması zorunludur. Ev hizmetlerinde temizlik adı altında çalışma izni verilmemekte, yalnızca bakım odaklı izinler onaylanmaktadır."
    },
    {
      question: "Bandırma veya Balıkesir OSB fabrikalarında 5 Türk çalışan kuralı nedir?",
      answer: "Şirket ve fabrika başvurularında temel kural, çalıştırılacak her 1 yabancı için işyerinde en az 5 Türk vatandaşı sigortalı çalışan bulunmasıdır. Ayrıca şirketin ödenmiş sermayesinin en az 100.000 TL olması veya brüt satışlarının Bakanlık kriterlerine uyması beklenir."
    },
    {
      question: "Çalışma izni olan yabancının ayrıca ikamet (oturma) izni alması gerekir mi?",
      answer: "Hayır. 6735 sayılı Uluslararası İşgücü Kanunu uyarınca onaylanan yabancı çalışma izni kartı, geçerlilik süresi boyunca aynı zamanda yasal 'İkamet İzni' yerine geçer. Yabancının ayrıca Göç İdaresi'ne gidip oturma izni almasına gerek yoktur."
    },
    {
      question: "Balıkesir'de kaçak yabancı işçi çalıştırmanın 2026 yılı cezası ne kadardır?",
      answer: "Çalışma izni olmadan kaçak yabancı çalıştıran işverenlere her bir yabancı çalışan için 2026 yılı tarifesiyle on binlerce liralık yüksek idari para cezası uygulanır. Ayrıca yabancının sınır dışı (deport) edilmesi, seyahat masrafları ve Türkiye'ye giriş yasağı masrafları da işverenden tahsil edilir."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Balıkesir Yabancı Çalışma İzni Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Sarıbaş Danışmanlık",
          "telephone": "0554 874 3308",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Balıkesir",
            "addressRegion": "Marmara",
            "addressCountry": "TR"
          }
        },
        "areaServed": [
          "Balıkesir",
          "Bandırma",
          "Edremit",
          "Gönen",
          "Ayvalık",
          "Burhaniye",
          "Manyas",
          "Susurluk",
          "Erdek"
        ],
        "description": "Balıkesir'de Bandırma sanayi, Gönen tarım-hayvancılık çoban izinleri, Edremit ve Ayvalık hasta/yaşlı bakımı ve turizm yabancı çalışma izni danışmanlığı."
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
        title="Balıkesir Çalışma İzni: 2026 Başvuru Rehberi ve Danışmanlık"
        description="Balıkesir'de yabancı çalışma izni nasıl alınır? Bandırma sanayi fabrikaları, Gönen tarım-hayvancılık, Edremit ve Ayvalık yabancı hasta bakıcı izinleri 2026 başvuru rehberi."
        keywords="balıkesir çalışma izni, balıkesir yabancı çalışma izni 2026, bandırma yabancı işçi izni, edremit yabancı bakıcı izni, gönen hayvancılık çalışma izni, balıkesir göç idaresi yabancı danışmanlık, balıkesir oturma izni, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/balikesir-calisma-izni"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#1e3a5f]/85 to-black/70 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-sm font-medium tracking-wider shadow-lg">
            SARIBAŞ DANIŞMANLIK • BALIKESİR BÖLGE HİZMETİ
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Balıkesir Çalışma İzni:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-emerald-200">
              2026 Başvuru ve Danışmanlık Rehberi
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Bandırma sanayisinden Gönen hayvancılığına, Edremit ve Ayvalık evde bakıcı hizmetlerine kadar tüm yabancı çalışma izni süreçlerini yasal güvenceyle sonuçlandırıyoruz.
          </p>
          
          <motion.a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 ring-4 ring-green-500/20"
          >
            <Phone className="w-6 h-6 fill-current" />
            Balıkesir İçin Ücretsiz Danışın
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Introduction / Definition Snippet */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/60 p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6">
              Balıkesir'de Yabancı Çalışma İzni ve Danışmanlık Hizmetimiz
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Balıkesir; Bandırma'daki güçlü sanayi kuruluşları, Gönen ve Manyas'taki yoğun tarım-hayvancılık faaliyetleri ve Edremit Körfezi ile Ayvalık'taki turizm ve bakıcı talepleriyle Türkiye'de yabancı işgücüne en çok ihtiyaç duyan illerin başında gelir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Sarıbaş Danışmanlık</strong> olarak Balıkesir genelinde; işletmelerin, çiftlik sahiplerinin ve evinde hasta/yaşlı baktıran ailelerin Çalışma ve Sosyal Güvenlik Bakanlığı nezdindeki izin süreçlerini %100 yasal prosedürlere uygun şekilde takip ediyor, ret riskini ortadan kaldırıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Districts Breakdown Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-800 font-semibold text-sm tracking-wider uppercase mb-2">
              <Compass className="w-4 h-4" />
              Tüm İlçelerde Aktif Hizmet
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">
              Balıkesir İlçelerine Göre Yabancı Çalışma İzni Alanları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{d.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Information Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              Balıkesir Sektörlerine Göre Çalışma İzni Türleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sektörünüzün yasal gerekliliklerine göre hazırlanmış başvuru modellerimizi inceleyin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-gradient-to-b ${sector.color} border ${sector.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
              >
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 min-h-[56px] flex items-center">
                  {sector.title}
                </h3>
                <div className="mb-4 inline-block text-xs font-semibold px-2.5 py-1 bg-blue-100/70 text-blue-900 rounded-md">
                  Öncelikli Bölgeler: {sector.districts}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {sector.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#1e3a5f]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-auto bg-white border border-gray-200 text-[#1e3a5f] font-semibold py-3 rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Balıkesir Dosyanız İçin Danışın
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Hesaplayıcı Banner */}
      <CalculatorBanner cityName="Balıkesir" />

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
                  Balıkesir Başvurularında Gerekli Temel Belgeler
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">İşverene Ait E-İmza (Elektronik İmza)</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Şirket yetkilisinin, çiftlik sahibinin veya ev işvereninin adına kayıtlı geçerli elektronik imza gereklidir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Geçerli Pasaport & Biyometrik Fotoğraf</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yabancıya ait en az 60 gün geçerlilik marjı bulunan pasaport ile son 6 ayda çekilmiş beyaz fon biyometrik fotoğraf.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sektörel Resmi Belgeler</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Tarım-hayvancılık için ÇKS ve hayvan varlığı listesi; şirketler için vergi levhası ve ticaret sicil gazetesi; ev hizmetleri için vukuatlı nüfus kayıt örneği ve gelir belgesi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Doğru Hazırlanmış İş Sözleşmesi</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Bakanlığın taban ücret tarifelerine ve görev tanımına uygun özel iş sözleşmesi hazırlanmalıdır. Hatalı sözleşmeler başvurunun doğrudan reddedilmesine neden olur.
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Balıkesir'de Başvuru Süreci Nasıl İşler?
            </h2>
            <p className="text-gray-600">Başvurunuzu 7 aşamada güvenle tamamlıyoruz.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Balıkesir İl Göç İdaresi Bilgisi Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-300" />
                Balıkesir İl Göç İdaresi Müdürlüğü Bilgileri
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Yabancıların ikamet tezkeresi, adres tescili ve kayıt güncellemeleri Balıkesir İl Göç İdaresi tarafından yürütülür. Çalışma izni onaylanan yabancıların ikamet hakları otomatik olarak güvenceye kavuşur.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Müdürlük Adresi</h4>
                    <p className="text-blue-100 text-sm">Paşa Alanı Mah. 226. Sok. No:16/A Karesi / BALIKESİR</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">İletişim & Santral</h4>
                    <p className="text-blue-100 text-sm">0 (266) 246 36 60 / 61 / 62</p>
                    <p className="text-blue-100 text-sm mt-1">balikesir@goc.gov.tr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                alt="Balıkesir Danışmanlık Hizmetleri" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-light italic">
                  "Balıkesir ve ilçelerinde yabancı personel istihdamında resmi başvuru ve yasal izin güvencesi sunuyoruz."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Balıkesir'de Kaçak Yabancı Çalıştırmanın Ağır Cezaları
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              İzinsiz yabancı çalıştırmak; çiftlikler, fabrikalar ve ev işverenleri için her bir yabancı başına çok yüksek idari para cezaları ve yabancının derhal sınır dışı edilmesiyle sonuçlanır. 2026 yılı güncel ceza tarifesi ve risklerden kaçınmak için profesyonel danışmanlık alın.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:underline"
            >
              Cezalarla Karşılaşmadan Dosyanızı Yasal Hale Getirin →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8" />
              Balıkesir Çalışma İzni Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 border-t border-gray-200 pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BalikesirCalismaiznPage;
