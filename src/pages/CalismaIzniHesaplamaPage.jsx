import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Building2, 
  Tractor, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Phone, 
  MessageCircle, 
  FileText, 
  Briefcase, 
  ShieldCheck, 
  BadgePercent, 
  ChevronDown, 
  Sparkles,
  Info,
  DollarSign
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

// 2026 Resmî Rakamları ve Parametreleri (ÇSGB & UİGM Resmî Tebliğleri)
const DEFAULT_BRUT_ASGARI_UCRET = 26005.50; // 2026 tahmini brüt asgari ücret (TL)
const DEGERLI_KAGIT_BEDELI_2026 = 964.00; // 2026 Resmî Değerli Kâğıt Bedeli

const HARCLAR_2026 = {
  1: 12574.90, // 1 Yıla kadar (1 yıl dahil)
  2: 25149.80, // 2 Yıl süreli
  3: 37724.70, // 3 Yıl süreli
  gecici_koruma: 4677.90, // Geçici Koruma 1 Yıl
  suresiz: 125802.20 // Süresiz / Bağımsız
};

const MESLEK_KATSAYILARI = [
  {
    id: 'ev_ve_diger',
    unvan: 'Ev Hizmetleri, İmalat, Sanayi, Satış & Diğer Meslekler',
    katsayi: 1.0,
    aciklama: 'Bakanlıkça asgari ücret seviyesinde (1 katı) kabul edilen iş kolları.',
    ornek: 'Ev hizmetlisi, satış danışmanı, fabrika üretim elemanı, garson, mutfak personeli'
  },
  {
    id: 'uzman_usta',
    unvan: 'Uzmanlık ve Ustalık Gerektiren İşler',
    katsayi: 2.0,
    aciklama: 'Asgari ücretin en az 2 katı maaş ödenmesi zorunludur.',
    ornek: 'Tekniker, usta, aşçıbaşı, uzman pazarlamacı, teknisyen, şantiye şefi yardımcısı'
  },
  {
    id: 'diger_yonetici',
    unvan: 'Diğer Yöneticiler (Bölüm / Birim Müdürleri)',
    katsayi: 3.0,
    aciklama: 'Asgari ücretin en az 3 katı maaş ödenmesi zorunludur.',
    ornek: 'Şube müdürü, departman amiri, operasyon yöneticisi, İK yöneticisi'
  },
  {
    id: 'muhendis_mimar',
    unvan: 'Mühendis ve Mimarlar',
    katsayi: 4.0,
    aciklama: 'Asgari ücretin en az 4 katı maaş ödenmesi zorunludur.',
    ornek: 'İnşaat/yazılım/makine mühendisi, iç mimar, şehir plancısı'
  },
  {
    id: 'ust_duzey_pilot',
    unvan: 'Üst Düzey Yöneticiler ve Pilotlar',
    katsayi: 5.0,
    aciklama: 'Asgari ücretin en az 5 katı maaş ödenmesi zorunludur.',
    ornek: 'Genel müdür, CEO, şirket direktörü, kaptan pilot, genel koordinatör'
  }
];

const CalismaIzniHesaplamaPage = () => {
  const [activeTab, setActiveTab] = useState('maliyet'); // maliyet | sirket_kriter | hayvancilik

  // --- SEKME 1: MALİYET HESAPLAYICI STATE ---
  const [secilenMeslek, setSecilenMeslek] = useState('ev_ve_diger');
  const [secilenSure, setSecilenSure] = useState(1);
  const [brutAsgariUcret, setBrutAsgariUcret] = useState(DEFAULT_BRUT_ASGARI_UCRET);

  // --- SEKME 2: ŞİRKET KRİTER VE İSTİSNA TESTİ STATE ---
  const [calisanStatu, setCalisanStatu] = useState('standart');
  const [turkCalisanSayisi, setTurkCalisanSayisi] = useState(5);
  const [yabanciSayisi, setYabanciSayisi] = useState(1);
  const [yillikCiro, setYillikCiro] = useState(15000000);
  const [odenmisSermaye, setOdenmisSermaye] = useState(600000);
  const [sirketTuru, setSirketTuru] = useState('faaliyette'); // yeni | faaliyette | yabanci_ortak

  // --- SEKME 3: HAYVANCILIK & ÇOBAN STATE ---
  const [hayvanTuru, setHayvanTuru] = useState('kucukbas');
  const [hayvanSayisi, setHayvanSayisi] = useState(250);

  // --- SSS AKORDİYON STATE ---
  const [activeFaq, setActiveFaq] = useState(null);

  // MALİYET HESAPLAMALARI
  const maliyetHesabi = useMemo(() => {
    const meslek = MESLEK_KATSAYILARI.find(m => m.id === secilenMeslek) || MESLEK_KATSAYILARI[0];
    const zorunluBrutMaas = brutAsgariUcret * meslek.katsayi;
    
    // SGK İşveren Payı (~%22.5 standart işveren hissesi + işsizlik)
    const sgkIsverenMaliyeti = zorunluBrutMaas * 0.225;
    const toplamAylikIsverenMaliyeti = zorunluBrutMaas + sgkIsverenMaliyeti;
    
    // Tahmini Net Maaş (~%71.5 civarı net ele geçen)
    const tahminiNetMaas = zorunluBrutMaas * 0.715;

    // Resmî Harçlar
    const harcTutari = secilenSure === 'gecici_koruma' 
      ? HARCLAR_2026.gecici_koruma 
      : (HARCLAR_2026[secilenSure] || HARCLAR_2026[1]);
    const kartBedeli = DEGERLI_KAGIT_BEDELI_2026;
    const toplamBakanlikOdemesi = harcTutari + kartBedeli;

    // Yıllık Toplam Maliyet (Aylık maaş x 12 + Harçlar)
    const yillikToplamMaliyet = (toplamAylikIsverenMaliyeti * 12) + toplamBakanlikOdemesi;

    return {
      meslek,
      zorunluBrutMaas,
      tahminiNetMaas,
      sgkIsverenMaliyeti,
      toplamAylikIsverenMaliyeti,
      harcTutari,
      kartBedeli,
      toplamBakanlikOdemesi,
      yillikToplamMaliyet
    };
  }, [secilenMeslek, secilenSure, brutAsgariUcret]);

  // ŞİRKET KRİTER VE UYGUNLUK ANALİZİ
  const kriterAnalizi = useMemo(() => {
    let uygun = true;
    let istisnaUygulandi = false;
    let istisnaNedeni = '';
    const mesajlar = [];

    // 1. STATÜ BAZLI İSTİSNA KONTROLÜ (Kullanıcı Talebi & Resmî Mevzuat)
    if (calisanStatu === 'turk_evli') {
      istisnaUygulandi = true;
      istisnaNedeni = 'Türk vatandaşı ile evli olan veya anne/baba/çocuğu Türk vatandaşı olan yabancılar değerlendirme kriterlerinden muaftır.';
      mesajlar.push('✅ Türk vatandaşı ile evli yabancılar için 5 Türk çalışan şartı ve şirket mali yeterlilik kriteri aranmaz.');
    } else if (calisanStatu === 'turk_soylu') {
      istisnaUygulandi = true;
      istisnaNedeni = 'Türk soylu yabancılar için Bakanlıkça istihdam ve mali kriter istisnası uygulanabilmektedir.';
      mesajlar.push('✅ Türk soylu belgesi ibraz edildiğinde 5 Türk şartından muafiyet veya kolaylaştırılmış istisna uygulanır.');
    } else if (calisanStatu === 'insani_ikamet') {
      istisnaUygulandi = true;
      istisnaNedeni = 'İnsani ikamet izni sahipleri için 5 Türk çalışan şartı uygulanmamaktadır.';
      mesajlar.push('✅ İnsani ikamet izni bulunan yabancılar için 5 Türk şartı aranmaz.');
    } else if (calisanStatu === 'gecici_koruma') {
      istisnaUygulandi = true;
      istisnaNedeni = 'Geçici koruma (Suriye) kapsamındaki yabancılarda 5 Türk kuralı aranmaz; işyerindeki toplam çalışan kotası (%10) dikkate alınır.';
      mesajlar.push('✅ Geçici koruma kapsamında 5 Türk şartı yoktur.');
    } else if (calisanStatu === 'yasal_kalis_istisnasi') {
      istisnaUygulandi = true;
      istisnaNedeni = 'Son 3 yılda en az 1 yıl yasal ikamet/çalışma izni ile kalmış yabancılarda (en fazla 3 yabancı ile sınırlı) istihdam kriteri uygulanmaz.';
      if (yabanciSayisi > turkCalisanSayisi) {
        uygun = false;
        mesajlar.push('❌ Bu istisnada işyerindeki yabancı sayısı Türk vatandaşı sayısından fazla olamaz.');
      } else {
        mesajlar.push('✅ Son 3 yılda 1 yıl yasal kalış istisnası kapsamındadır.');
      }
    }

    // 2. CİRO İSTİSNASI KONTROLÜ (50 MİLYON TL KURALI)
    const ciroIstisnasiAktif = yillikCiro >= 50000000 && yabanciSayisi <= 5;
    if (ciroIstisnasiAktif && !istisnaUygulandi) {
      istisnaUygulandi = true;
      istisnaNedeni = 'Son yıl net satış tutarı 50.000.000 TL üzerinde olduğu için ilk 5 yabancıya kadar 5 Türk istihdam şartı aranmaz!';
      mesajlar.push('💡 50 Milyon TL Net Satış İstisnası: 5 yabancı personele kadar 5 Türk kuralından tam muafsınız.');
    }

    // 3. 5 TÜRK KURALI KONTROLÜ (İstisna uygulanmıyorsa)
    const gerekenTurkSayisi = yabanciSayisi * 5;
    if (!istisnaUygulandi) {
      if (turkCalisanSayisi >= gerekenTurkSayisi) {
        mesajlar.push(`✅ 5 Türk Kuralı Sağlandı: ${yabanciSayisi} yabancı için gereken ${gerekenTurkSayisi} Türk personele sahipsiniz (Mevcut: ${turkCalisanSayisi}).`);
      } else {
        uygun = false;
        const eksik = gerekenTurkSayisi - turkCalisanSayisi;
        mesajlar.push(`❌ 5 Türk Şartı Eksik: ${yabanciSayisi} yabancı çalıştırabilmek için en az ${gerekenTurkSayisi} Türk personel olmalı. ${eksik} Türk çalışan eksiğiniz bulunuyor.`);
      }
    }

    // 4. MALİ YETERLİLİK KONTROLÜ (Sermaye / Ciro)
    if (!istisnaUygulandi) {
      if (sirketTuru === 'yeni') {
        if (odenmisSermaye >= 500000) {
          mesajlar.push('✅ Yeni Kurulan Şirket Sermaye Şartı Sağlandı (En az 500.000 TL).');
        } else {
          uygun = false;
          mesajlar.push(`❌ Sermaye Yetersiz: Yeni kurulan şirketlerde ödenmiş sermaye en az 500.000 TL olmalıdır (Mevcut: ${odenmisSermaye.toLocaleString('tr-TR')} TL).`);
        }
      } else if (sirketTuru === 'faaliyette') {
        if (odenmisSermaye >= 500000 || yillikCiro >= 8000000) {
          mesajlar.push('✅ Mali Yeterlilik Sağlandı: 500.000 TL sermaye veya 8.000.000 TL ciro eşiğini karşılıyorsunuz.');
        } else {
          uygun = false;
          mesajlar.push('❌ Mali Yeterlilik Sağlanamadı: Ödenmiş sermaye en az 500.000 TL VEYA net satışlar en az 8.000.000 TL olmalıdır.');
        }
      }
    }

    return {
      uygun,
      istisnaUygulandi,
      istisnaNedeni,
      mesajlar,
      gerekenTurkSayisi
    };
  }, [calisanStatu, turkCalisanSayisi, yabanciSayisi, yillikCiro, odenmisSermaye, sirketTuru]);

  // HAYVANCILIK & ÇOBAN HESABI (12.06.2025 Bakanlık Duyurusu)
  const hayvancilikHesabi = useMemo(() => {
    let tabanKriter = 200;
    let turAdi = 'Küçükbaş';

    if (hayvanTuru === 'kucukbas') {
      tabanKriter = 200;
      turAdi = 'Küçükbaş (Koyun/Keçi)';
    } else if (hayvanTuru === 'besi') {
      tabanKriter = 100;
      turAdi = 'Büyükbaş Besi';
    } else if (hayvanTuru === 'sut') {
      tabanKriter = 50;
      turAdi = 'Büyükbaş Süt';
    } else if (hayvanTuru === 'karma') {
      tabanKriter = 75;
      turAdi = 'Karma (Besi ve Süt)';
    }

    const hakSayisi = Math.min(3, Math.floor(hayvanSayisi / tabanKriter));
    const sonrakiHakIcinGereken = hakSayisi < 3 ? (hakSayisi + 1) * tabanKriter - hayvanSayisi : 0;

    return {
      turAdi,
      tabanKriter,
      hakSayisi,
      sonrakiHakIcinGereken,
      yeterli: hakSayisi >= 1
    };
  }, [hayvanTuru, hayvanSayisi]);

  const whatsappMesaji = useMemo(() => {
    if (activeTab === 'maliyet') {
      return `Merhaba Sarıbaş Danışmanlık, web sitenizdeki 2026 Çalışma İzni Maliyet Hesaplama aracını kullandım. Pozisyon: ${maliyetHesabi.meslek.unvan}, İzin Süresi: ${secilenSure} Yıl, Hesaplanan Toplam Resmi Masraf: ${maliyetHesabi.toplamBakanlikOdemesi.toLocaleString('tr-TR')} TL. Dosya hazırlığı ve başvuru süreci için danışmanlık almak istiyorum.`;
    } else if (activeTab === 'sirket_kriter') {
      return `Merhaba Sarıbaş Danışmanlık, web sitenizdeki Şirket Kriter Uygunluk Testini yaptım. Statü: ${calisanStatu}, Türk Çalışan: ${turkCalisanSayisi}, Talep Edilen Yabancı: ${yabanciSayisi}. Uygunluk sonucumu değerlendirmek ve çalışma izni başvurusu yapmak için bilgi almak istiyorum.`;
    } else {
      return `Merhaba Sarıbaş Danışmanlık, 12.06.2025 ÇSGB duyurusuna göre Çoban Çalışma İzni hesaplaması yaptım. Hayvan türüm: ${hayvancilikHesabi.turAdi}, Adet: ${hayvanSayisi}. Çoban çalışma izni başvurusu için teklif almak istiyorum.`;
    }
  }, [activeTab, maliyetHesabi, secilenSure, calisanStatu, turkCalisanSayisi, yabanciSayisi, hayvancilikHesabi, hayvanSayisi]);

  const whatsappUrl = `https://wa.me/905548743308?text=${encodeURIComponent(whatsappMesaji)}`;

  const faqItems = [
    {
      q: '2026 yılı yabancı çalışma izni harç ve değerli kağıt bedeli ne kadardır?',
      a: 'Resmî Gazete’de yayımlanan Harçlar Kanunu Genel Tebliği (Seri No: 98) ve Muhasebat Tebliği uyarınca: 1 yıllık çalışma izni harcı 12.574,90 TL, Değerli Kâğıt Bedeli ise 964,00 TL’dir. Toplam resmî ödeme 13.538,90 TL’dir.'
    },
    {
      q: 'Türk vatandaşı ile evli olan yabancıların çalışma izninde 5 Türk şartı var mı?',
      a: 'HAYIR. Türk vatandaşı ile evli olan veya anne, baba ya da çocuğu Türk vatandaşı olan yabancılar için 5 Türk çalışan istihdam şartı ve şirket mali yeterlilik (sermaye/ciro) kriterleri aranmaz.'
    },
    {
      q: 'İnsani ikamet ve geçici koruma (Suriye) sahiplerinde 5 Türk şartı aranır mı?',
      a: 'HAYIR. İnsani ikamet izni bulunan yabancılar ile geçici koruma kapsamındaki yabancılar için işyerinde 5 Türk vatandaşı çalıştırma zorunluluğu bulunmamaktadır.'
    },
    {
      q: '50 Milyon TL ciro istisnası nedir, kimler faydalanabilir?',
      a: 'Bakanlık güncel değerlendirme kriterlerine göre son yıl net satış tutarı 50.000.000 TL veya üzerinde olan işyerlerinde, istihdam edilecek ilk 5 yabancı personel için 5 Türk çalışan istihdam etme kriteri uygulanmaz.'
    },
    {
      q: 'Yabancı personele asgari ücretin katları şeklinde maaş ödemek zorunlu mudur?',
      a: 'EVET. Bakanlık değerlendirme kriterlerine göre üst düzey yönetici ve pilotlara en az 5 katı, mühendis/mimarlara en az 4 katı, diğer yöneticilere en az 3 katı, uzman/ ustalara en az 2 katı brüt asgari ücret üzerinden SGK primi yatırılması ve bankadan maaş ödenmesi yasal zorunluluktur.'
    },
    {
      q: 'Hayvancılık işletmelerinde yabancı çoban izni nasıl alınır?',
      a: '12.06.2025 tarihli Bakanlık düzenlemesine göre: En az 200 küçükbaş, 100 büyükbaş besi, 50 büyükbaş süt veya 75 büyükbaş karma hayvan varlığına sahip ve HBS (Hayvan Bilgi Sistemi) kaydı bulunan işletmeler, katları oranında (işletme başına en fazla 3 yabancıya kadar) yabancı çoban/hayvan bakıcısı izni alabilmektedir.'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "2026 Yabancı Çalışma İzni Maliyet ve Kriter Hesaplama Aracı",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "provider": {
      "@type": "Organization",
      "name": "Sarıbaş Danışmanlık",
      "url": "https://saribasdanismanlik.com"
    },
    "description": "ÇSGB 2026 resmî harçları, asgari ücret katsayıları, 5 Türk kuralı, istisnalar ve çoban kotası hesaplama aracı."
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEOHead
        title="2026 Yabancı Çalışma İzni Maliyet ve Kriter Hesaplama Aracı | Sarıbaş Danışmanlık"
        description="2026 resmî ÇSGB harçları (12.574,90 TL), değerli kâğıt (964 TL), 5 Türk şartı, ciro istisnası ve zorunlu brüt maaş katsayılarını anında hesaplayın."
        canonicalUrl="https://saribasdanismanlik.com/calisma-izni-maliyet-hesaplama"
        schema={schemaData}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#0f233d] via-[#1e3a5f] to-[#2d5a8f] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>ÇSGB ve UİGM 2026 Resmî Mevzuatı ile Tam Uyumlu</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            2026 Yabancı Çalışma İzni <br className="hidden sm:inline" />
            <span className="text-amber-400">Maliyet ve Kriter Hesaplayıcı</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            İşletmeniz için yabancı personel istihdam maliyetlerini (Bakanlık harcı, değerli kâğıt, SGK primi ve zorunlu maaş katsayıları), 5 Türk şartını ve sektörel istisnaları saniyeler içinde hesaplayın.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-2 border border-slate-200 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setActiveTab('maliyet')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === 'maliyet'
                ? 'bg-[#1e3a5f] text-white shadow-md'
                : 'text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50'
            }`}
          >
            <Calculator className="w-5 h-5 text-amber-400" />
            <span>1. Maliyet & Harç Hesaplama</span>
          </button>

          <button
            onClick={() => setActiveTab('sirket_kriter')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === 'sirket_kriter'
                ? 'bg-[#1e3a5f] text-white shadow-md'
                : 'text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>2. 5 Türk & Şirket Kriter Testi</span>
          </button>

          <button
            onClick={() => setActiveTab('hayvancilik')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === 'hayvancilik'
                ? 'bg-[#1e3a5f] text-white shadow-md'
                : 'text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50'
            }`}
          >
            <Tractor className="w-5 h-5 text-amber-500" />
            <span>3. Hayvancılık & Çoban İzni</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AnimatePresence mode="wait">
          {/* TAB 1: MALİYET & HARÇ HESAPLAMA */}
          {activeTab === 'maliyet' && (
            <motion.div
              key="maliyet"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Sol: Girdi Formu */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a5f]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Çalışma Pozisyonu ve Süre Bilgileri</h2>
                    <p className="text-xs text-slate-500">Bakanlığın zorunlu tuttuğu maaş katsayısı ve resmî harç tutarları</p>
                  </div>
                </div>

                {/* 1. Pozisyon / Meslek Seçimi */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Yabancı Personelin Görevi / Pozisyonu:
                  </label>
                  <div className="space-y-2.5">
                    {MESLEK_KATSAYILARI.map((meslek) => (
                      <div
                        key={meslek.id}
                        onClick={() => setSecilenMeslek(meslek.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          secilenMeslek === meslek.id
                            ? 'border-[#1e3a5f] bg-blue-50/60 ring-2 ring-[#1e3a5f]/20'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-slate-900">{meslek.unvan}</span>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                            {meslek.katsayi}x Asgari Ücret
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{meslek.aciklama}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. İzin Süresi Seçimi */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Talep Edilen Çalışma İzni Süresi:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 1, label: '1 Yıl', desc: 'İlk Başvuru / Uzatma' },
                      { id: 2, label: '2 Yıl', desc: 'Uzatma Dönemi' },
                      { id: 3, label: '3 Yıl', desc: 'Uzatma Dönemi' },
                      { id: 'gecici_koruma', label: 'Geçici Koruma', desc: '1 Yıl Standart' }
                    ].map((sure) => (
                      <button
                        key={sure.id}
                        type="button"
                        onClick={() => setSecilenSure(sure.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          secilenSure === sure.id
                            ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-sm">{sure.label}</div>
                        <div className={`text-[10px] mt-0.5 ${secilenSure === sure.id ? 'text-blue-100' : 'text-slate-400'}`}>
                          {sure.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Brüt Asgari Ücret Ayarı (Referans) */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">2026 Brüt Asgari Ücret:</span>{' '}
                    {brutAsgariUcret.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                  </div>
                  <span className="text-[11px] text-slate-500">Mevzuat Referans Tabanı</span>
                </div>
              </div>

              {/* Sağ: Maliyet Özeti Kartı */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 sticky top-24">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-lg">Maliyet Hesaplama Dökümü</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                      2026 Resmî
                    </span>
                  </div>

                  {/* Kalemler */}
                  <div className="space-y-4 my-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Zorunlu Brüt Maaş:</span>
                      <span className="font-bold text-slate-900">
                        {maliyetHesabi.zorunluBrutMaas.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Tahmini Net Maaş:</span>
                      <span className="font-medium text-slate-700">
                        ~{maliyetHesabi.tahminiNetMaas.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Aylık SGK İşveren Payı:</span>
                      <span className="font-medium text-slate-700">
                        ~{maliyetHesabi.sgkIsverenMaliyeti.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                      </span>
                    </div>

                    <div className="p-3 bg-blue-50/70 rounded-xl flex justify-between items-center text-sm font-semibold text-[#1e3a5f]">
                      <span>Toplam Aylık İşveren Maliyeti:</span>
                      <span>{maliyetHesabi.toplamAylikIsverenMaliyeti.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                    </div>

                    <div className="pt-3 border-t border-dashed border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Bakanlığa Ödenecek Resmî Harçlar (Tek Seferlik)
                      </div>
                      <div className="flex justify-between items-center text-sm mb-1.5">
                        <span className="text-slate-600">Çalışma İzni Harcı:</span>
                        <span className="font-semibold text-slate-800">
                          {maliyetHesabi.harcTutari.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-slate-600">Değerli Kâğıt Bedeli:</span>
                        <span className="font-semibold text-slate-800">
                          {maliyetHesabi.kartBedeli.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
                        </span>
                      </div>
                      <div className="p-2.5 bg-amber-50 rounded-lg flex justify-between items-center text-xs font-bold text-amber-900 border border-amber-200/60">
                        <span>Bakanlık Resmî Toplamı:</span>
                        <span>{maliyetHesabi.toplamBakanlikOdemesi.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span>
                      </div>
                    </div>
                  </div>

                  {/* Toplam Kart */}
                  <div className="bg-[#1e3a5f] text-white p-4 rounded-xl text-center mb-6">
                    <div className="text-xs text-blue-200">1. Yıl Tahmini Toplam Bütçe (Maaş + SGK + Harç)</div>
                    <div className="text-2xl font-black mt-1 text-amber-300">
                      {maliyetHesabi.yillikToplamMaliyet.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} TL
                    </div>
                  </div>

                  {/* CTA Butonları */}
                  <div className="space-y-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp'tan Teklif ve Dosya Danışmanlığı Al</span>
                    </a>

                    <a
                      href="tel:05548743308"
                      className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 text-[#1e3a5f]" />
                      <span>Uzmanımızı Arayın: 0554 874 3308</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ŞİRKET KRİTER VE 5 TÜRK UYGUNLUK TESTİ */}
          {activeTab === 'sirket_kriter' && (
            <motion.div
              key="kriter"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Sol: Girdi Formu */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Şirket Verileri ve İstisna Durumları</h2>
                    <p className="text-xs text-slate-500">5 Türk kuralı, sermaye/ciro ve mevzuat istisna uygunluk denetimi</p>
                  </div>
                </div>

                {/* Yabancının Özel Statüsü / İstisnalar */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Yabancı Çalışanın Özel Durumu / İstisna Kapsamı:
                  </label>
                  <select
                    value={calisanStatu}
                    onChange={(e) => setCalisanStatu(e.target.value)}
                    className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none"
                  >
                    <option value="standart">Standart Yabancı Personel (Genel Kriterlere Tabi)</option>
                    <option value="turk_evli">💍 Türk Vatandaşı ile Evli (5 Türk Şartından Muaf!)</option>
                    <option value="turk_soylu">🇹🇷 Türk Soylu Yabancı (İstisna Uygulanabilir)</option>
                    <option value="insani_ikamet">🕊️ İnsani İkamet İzni Sahibi (5 Türk Şartı Yok!)</option>
                    <option value="gecici_koruma">📋 Geçici Koruma (Suriye) Kapsamında (5 Türk Şartı Yok!)</option>
                    <option value="yasal_kalis_istisnasi">⏳ Son 3 Yılda En Az 1 Yıl Yasal Kalmış (3 Yabancıya Kadar İstisna)</option>
                  </select>
                  <p className="text-xs text-slate-500 mt-1.5 flex items-center space-x-1">
                    <Info className="w-3.5 h-3.5 text-blue-500" />
                    <span>Özel statülerde Bakanlık 5 Türk çalışan ve mali yeterlilik şartlarını aramamaktadır.</span>
                  </p>
                </div>

                {/* Şirket Türü */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Şirketin Faaliyet Durumu:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSirketTuru('faaliyette')}
                      className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                        sirketTuru === 'faaliyette'
                          ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Faaliyette Olan Şirket
                    </button>
                    <button
                      type="button"
                      onClick={() => setSirketTuru('yeni')}
                      className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                        sirketTuru === 'yeni'
                          ? 'border-[#1e3a5f] bg-[#1e3a5f] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      Yeni Kurulan Şirket (Cari Yıl)
                    </button>
                  </div>
                </div>

                {/* Çalışan Sayıları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mevcut Türk Çalışan Sayısı:
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={turkCalisanSayisi}
                      onChange={(e) => setTurkCalisanSayisi(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Çalıştırılacak Yabancı Sayısı:
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={yabanciSayisi}
                      onChange={(e) => setYabanciSayisi(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Finansal Bilgiler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Ödenmiş Sermaye (TL):
                    </label>
                    <input
                      type="number"
                      step="50000"
                      value={odenmisSermaye}
                      onChange={(e) => setOdenmisSermaye(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">Bakanlık Alt Sınırı: 500.000 TL</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Son Yıl Net Satış Cirosu (TL):
                    </label>
                    <input
                      type="number"
                      step="1000000"
                      value={yillikCiro}
                      onChange={(e) => setYillikCiro(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">50 Milyon TL üstü 5 yabancıya muafiyet sağlar</span>
                  </div>
                </div>
              </div>

              {/* Sağ: Kriter Analiz Sonuç Kartı */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 sticky top-24">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                    <h3 className="font-bold text-slate-900 text-lg">Kriter Değerlendirme Raporu</h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        kriterAnalizi.uygun
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      {kriterAnalizi.uygun ? 'BAŞVURUYA UYGUN' : 'EKSİKLİK TESPİT EDİLDİ'}
                    </span>
                  </div>

                  {/* Büyük Durum Kartı */}
                  <div
                    className={`p-5 rounded-xl border mb-6 ${
                      kriterAnalizi.uygun
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50/70 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {kriterAnalizi.uygun ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-base">
                          {kriterAnalizi.uygun
                            ? 'Şirketiniz Çalışma İzni Kriterlerini Karşılıyor!'
                            : 'Mevzuat Kriterlerinde Eksiklik Var!'}
                        </div>
                        <div className="text-xs mt-1 leading-relaxed opacity-90">
                          {kriterAnalizi.istisnaUygulandi
                            ? kriterAnalizi.istisnaNedeni
                            : kriterAnalizi.uygun
                            ? `${yabanciSayisi} yabancı çalışan için 5 Türk şartı ve sermaye kriteri sağlanmaktadır.`
                            : 'Gereken şartlar tamamlanmadan yapılan başvurular Bakanlıkça doğrudan reddedilmektedir.'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Madde Madde Kontrol Listesi */}
                  <div className="space-y-2.5 mb-6">
                    {kriterAnalizi.mesajlar.map((msg, i) => (
                      <div key={i} className="text-xs p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                        {msg}
                      </div>
                    ))}
                  </div>

                  {/* Dönüşüm / CTA */}
                  <div className="space-y-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Dosyanızı Ücretsiz İnceleyelim</span>
                    </a>

                    <a
                      href="tel:05548743308"
                      className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 text-[#1e3a5f]" />
                      <span>Manisa / Çanakkale Ofisimizle Görüşün</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: HAYVANCILIK & ÇOBAN İZNİ (12.06.2025 DUYURUSU) */}
          {activeTab === 'hayvancilik' && (
            <motion.div
              key="hayvancilik"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Sol: Girdi Formu */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                    <Tractor className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Hayvancılık İşletmesi Çoban Kotası</h2>
                    <p className="text-xs text-slate-500">12.06.2025 ÇSGB ve Tarım Bakanlığı Resmî Duyurusu Kriterleri</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    İşletmenizin Hayvancılık Türü:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'kucukbas', baslik: 'Küçükbaş Hayvancılık', taban: 'En az 200 Koyun / Keçi' },
                      { id: 'besi', baslik: 'Büyükbaş Besi', taban: 'En az 100 Büyükbaş' },
                      { id: 'sut', baslik: 'Büyükbaş Süt', taban: 'En az 50 Büyükbaş' },
                      { id: 'karma', baslik: 'Karma (Besi & Süt)', taban: 'En az 75 Büyükbaş' }
                    ].map((tur) => (
                      <div
                        key={tur.id}
                        onClick={() => setHayvanTuru(tur.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          hayvanTuru === tur.id
                            ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900">{tur.baslik}</div>
                        <div className="text-xs text-amber-700 font-semibold mt-1">{tur.taban}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Kayıtlı Hayvan Sayınız (HBS Kaydı Esastır):
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={hayvanSayisi}
                    onChange={(e) => setHayvanSayisi(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-xl font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    * Hayvan varlığınızın Tarım ve Orman Bakanlığı Hayvan Bilgi Sistemine (HBS) kayıtlı ve güncel olması şarttır.
                  </p>
                </div>

                {/* Duyuru Şartları Bilgi Notu */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="font-bold text-slate-800 flex items-center space-x-1.5">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>12.06.2025 Tarihli Resmî Duyuru Kuralları:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>Belirlenen kriterlerin her bir katı için 1 yabancı çoban/hayvan bakıcısı izni verilir.</li>
                    <li>Aynı hayvancılık işletmesinde en fazla <strong>3 (üç) yabancıya kadar</strong> çalışma izni düzenlenebilir.</li>
                    <li>Başvurular hem yurt içinden (yasal ikameti olanlar) hem yurt dışından konsolosluk kanalıyla yapılabilir.</li>
                  </ul>
                </div>
              </div>

              {/* Sağ: Çoban Kotası Sonuç Kartı */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 sticky top-24">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                    <h3 className="font-bold text-slate-900 text-lg">Çoban İzni Kontenjanınız</h3>
                    <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
                      HBS Esaslı
                    </span>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl shadow-sm mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-100">
                      Çalıştırabileceğiniz Yabancı Çoban Sayısı
                    </div>
                    <div className="text-5xl font-black my-2">{hayvancilikHesabi.hakSayisi}</div>
                    <div className="text-xs text-amber-100">
                      (Maksimum işletme üst sınırı: 3 Kişi)
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600 mb-6">
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span>İşletme Türü:</span>
                      <span className="font-semibold text-slate-900">{hayvancilikHesabi.turAdi}</span>
                    </div>
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span>Kişi Başı Asgari Taban:</span>
                      <span className="font-semibold text-slate-900">{hayvancilikHesabi.tabanKriter} Adet</span>
                    </div>
                    {hayvancilikHesabi.hakSayisi < 3 && hayvancilikHesabi.sonrakiHakIcinGereken > 0 && (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900">
                        💡 <strong>+1 İlave Çoban İzni İçin:</strong> {hayvancilikHesabi.sonrakiHakIcinGereken} adet daha hayvan kaydı gereklidir.
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="space-y-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Çoban Çalışma İzni Başvurusu Yap</span>
                    </a>

                    <a
                      href="tel:05548743308"
                      className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 text-[#1e3a5f]" />
                      <span>Bilgi Alın: 0554 874 3308</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SIKÇA SORULAN SORULAR BÖLÜMÜ */}
        <section className="mt-16 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Yabancı Çalışma İzni ve Kriterler Hakkında SSS
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) mevzuatına dair işverenlerin en çok merak ettiği konular
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      activeFaq === index ? 'rotate-180 text-[#1e3a5f]' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ALT KURUMSAL CTA BANNER */}
        <section className="mt-12 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-8 sm:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Çalışma İzni Başvurunuzu Riske Atmayın!
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6 leading-relaxed">
              Bakanlık değerlendirme kriterleri, istisna maddeleri ve evrak hazırlığı profesyonel uzmanlık gerektirir. Hatalı başvurular 1 yıl boyunca yeniden başvuru engeline yol açabilir.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ile Dosyanızı İnceletin</span>
              </a>
              <a
                href="tel:05548743308"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-[#1e3a5f] hover:bg-slate-100 font-bold py-3.5 px-6 rounded-xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#1e3a5f]" />
                <span>Hemen Arayın: 0554 874 3308</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CalismaIzniHesaplamaPage;
