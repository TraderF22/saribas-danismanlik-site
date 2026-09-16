import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';
import SEOHead from '@/components/SEOHead';

const BlogPostPage = () => {
  const { slug } = useParams();

  const blogPosts = {
    'calisma-izni-degerlendirme-kriterleri-2026': {
      title: 'Çalışma İzni Değerlendirme Kriterleri 2026: Sermaye, İstihdam ve Mali Yeterlilik Şartları',
      category: 'Çalışma İzni',
      date: '2026-03-08',
      readTime: '10 dk',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      seoTitle: 'Çalışma İzni Değerlendirme Kriterleri 2026: Sermaye, İstihdam ve Mali Yeterlilik | Sarıbaş Danışmanlık',
      seoDescription: "Manisa ve Çanakkale'de yabancı çalışma izni başvurusu için 2026 güncel değerlendirme kriterleri. 500.000 TL sermaye şartı, 1'e 5 istihdam kuralı, şirket ortağı kriterleri. Profesyonel danışmanlık için Sarıbaş Danışmanlık.",
      seoKeywords: "çalışma izni değerlendirme kriterleri 2026, çalışma izni sermaye şartı, çalışma izni mali yeterlilik, yabancı çalışma izni Manisa, yabancı çalışma izni Çanakkale, çalışma izni istihdam şartı, yabancı şirket ortağı çalışma izni, 1'e 5 kuralı çalışma izni",
      canonicalUrl: 'https://saribasdanismanlik.com/blog/calisma-izni-degerlendirme-kriterleri-2026',
      contentIsJsx: true,
      faqSchema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Çalışma izni değerlendirme kriterleri ne zaman değişti?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Son önemli değişiklik 01/01/2025 tarihinde gerçekleşti. Ödenmiş sermaye eşiği 250.000 TL'den 500.000 TL'ye yükseltildi."
            }
          },
          {
            "@type": "Question",
            "name": "Her yabancı çalışan için 5 Türk vatandaşı çalıştırmak zorunlu mu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, '1'e 5 kuralı' genel kural olarak uygulanır. Ancak bazı muaf kategoriler (kilit personel, uluslararası anlaşmalar) bu şarttan muaf tutulabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Şirket ortağı yabancılar için sermaye şartı ne kadardır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Şirket ortağı yabancılar için hem şirketin ödenmiş sermayesi hem de yabancının kişisel sermaye tutarı en az 500.000 TL olmalıdır. Ortaklık payı en az %20 olması gerekir."
            }
          },
          {
            "@type": "Question",
            "name": "Uzatma başvurularında hangi kriterler geçerli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Uzatma başvurularında ilk başvuru tarihindeki mali yeterlilik kriterleri baz alınır. Yeni kriterler uygulanmaz, eski kriterler geçerli kalır."
            }
          },
          {
            "@type": "Question",
            "name": "Manisa'da çalışma izni başvurusu nereye yapılır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Çalışma izni başvurusu e-izin sistemi (https://e-izin.csgb.gov.tr) üzerinden Çalışma ve Sosyal Güvenlik Bakanlığı'na yapılır. Göç İdaresi'ne değil, ÇSGB'ye başvuru yapılmalıdır."
            }
          },
          {
            "@type": "Question",
            "name": "Çanakkale'de hangi sektörlerde yabancı çalışma izni daha kolay alınır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Çanakkale'de turizm, tarım, hayvancılık ve denizcilik sektörlerinde yabancı çalışma izni daha kolay alınabilir. Bu sektörlerde istihdam ve mali yeterlilik kriterleri daha esnek uygulanabilir."
            }
          },
          {
            "@type": "Question",
            "name": "Gönüllülük faaliyetleri için çalışma izni alınabilir mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hayır, gönüllülük faaliyetleri çalışma izni gerektirmez. Ancak herhangi bir ücret veya menfaat karşılığında yapılan faaliyetler çalışma izni kapsamına girer."
            }
          }
        ]
      },
      content: (
        <>
          <p><strong>Türkiye'de yabancı uyruklu bir kişi adına <Link to="/blog/calisma-izni-basvurusu-nasil-yapilir" className="text-blue-600 underline hover:text-blue-800">çalışma izni başvurusu</Link> yapılacağı zaman, başvurunun olumlu sonuçlanması için belirli şartların sağlanması gerekmektedir.</strong> Bu şartlar, Çalışma ve Sosyal Güvenlik Bakanlığı bünyesindeki Uluslararası İşgücü Genel Müdürlüğü (UİGM) tarafından belirlenen "Çalışma İzni Değerlendirme Kriterleri" ile düzenlenmektedir. Özellikle Manisa ve Çanakkale gibi sanayi, tarım ve hizmet sektörlerinin yoğun olduğu illerde faaliyet gösteren işverenler, yabancı personel çalıştırmak istediklerinde bu kriterleri mutlaka bilmeli ve başvuru öncesinde hazırlıklarını tamamlamalıdır.</p>

          <h2>Çalışma İzni Değerlendirme Kriterleri Nedir?</h2>
          <p>Çalışma izni Değerlendirme Kriterleri, 6735 Sayılı Uluslararası İşgücü Kanunu kapsamında, yabancı çalışma izni başvurularının değerlendirilmesinde esas alınan ölçütlerdir. Kriterlerin temel amacı; Türk işgücü piyasasının korunması, nitelikli yabancı istihdamının desteklenmesi ve kayıt dışı istihdamın önlenmesidir. Kriterler dört ana bölümden oluşur: A) Genel Değerlendirme Kriterleri, B) Sektör/Meslek Temelinde Özel Kriterler, C) Şirket Ortağı Yabancılara İlişkin Kriterler, Ç) Muaf Tutulan Yabancılar.</p>

          <h2>A. Genel Değerlendirme Kriterleri</h2>

          <h3>1. İstihdam Kriteri: Her 1 Yabancıya Karşı 5 Türk Vatandaşı</h3>
          <p>İşyerinde başvuru tarihi itibarıyla her bir yabancı çalışan için en az 5 Türk vatandaşının sigortalı olarak çalışıyor olması gerekir ("1'e 5 kuralı"). Örnek: Manisa OSB'de bir üretim tesisi 2 yabancı için başvuru yapacaksa en az 10 Türk vatandaşı SGK'lı olmalıdır.</p>

          <h3>2. Mali Yeterlilik Kriteri</h3>
          <p>Bilanço esasına tabi işyerlerinde (Ltd./A.Ş.) aşağıdaki şartlardan en az birinin sağlanması gerekir:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
            <tbody>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'left' }}><strong>Kriter</strong></th>
                <th style={{ border: '1px solid #d1d5db', padding: '12px', textAlign: 'left' }}><strong>Minimum Tutar</strong></th>
              </tr>
              <tr>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>Ödenmiş Sermaye</td>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>500.000 TL</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>Brüt Satışlar (Ciro)</td>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>800.000 TL</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>Son Yıl İhracat Tutarı</td>
                <td style={{ border: '1px solid #d1d5db', padding: '12px' }}>150.000 ABD Doları</td>
              </tr>
            </tbody>
          </table>

          <div style={{ backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '20px 0', borderRadius: '4px' }}>
            <p><strong>⚠️ Önemli Not:</strong> 01/01/2025 tarihinden itibaren ödenmiş sermaye eşiği <strong>500.000 TL</strong> olarak artırılmıştır.</p>
          </div>

          <h3>3. Yabancının Ücret Kriteri</h3>
          <p>Yabancıya ödenecek ücret asgari ücretin belirli bir katından az olamaz. Meslek grubuna göre 1 ila 6,5 katı arasında ücret beyanı istenir.</p>

          <h2>B. Sektörel Özel Değerlendirme Kriterleri</h2>
          <p>Manisa ve Çanakkale örnekleri: Sanayi/üretim (Manisa OSB), tarım/hayvancılık (Çanakkale/Manisa), turizm (Çanakkale), ev hizmetleri (bakıcı/temizlikçi).</p>

          <h2>C. Şirket Ortağı Yabancılara İlişkin Kriterler</h2>

          <h3>a) Sermaye ve Ortaklık Şartı</h3>
          <ul>
            <li>İşyerinin ödenmiş sermayesi en az 500.000 TL</li>
            <li>Yabancının sermaye tutarı en az 500.000 TL</li>
            <li>Ortaklık payı en az %20</li>
          </ul>

          <h3>b) İstihdam Şartı</h3>
          <p>En az 5 Türk vatandaşı istihdamı zorunlu. İlk <Link to="/blog/calisma-izni-basvurusu-nasil-yapilir" className="text-blue-600 underline hover:text-blue-800">çalışma izni başvurusu</Link> "şerhli" düzenlenir. 7. aydan itibaren 5 kişi istihdam şartı başlar.</p>

          <h3>c) 100.000 ABD Doları Muafiyeti</h3>
          <p>100.000 USD ve üzeri sermaye koyan yabancı ortaklar sermaye ve istihdam kriterlerinden muaf tutulur.</p>

          <h2>Ç. Kriterlerden Muaf Tutulan Yabancılar</h2>
          <p>Kilit personel, uluslararası anlaşmalar kapsamındakiler, doğrudan yabancı yatırım kapsamındaki şirketler.</p>

          <h2>Geçiş Hükümleri ve Uzatma Başvurularında Dikkat Edilecekler</h2>
          <p>Uzatma başvurularında ilk başvuru tarihindeki mali yeterlilik kriteri baz alınır. Eski kriterler uygulanır.</p>

          <h2>Değerlendirme Kriterlerini Sağlamayan Başvurulara Ne Olur?</h2>
          <p>6735 Sayılı Kanun md.9(e) ile reddedilir. 30 gün itiraz, 60 gün iptal davası hakkı var. Ayrıca izinsiz istihdam veya <Link to="/blog/2026-yabanci-calisma-izni-manisa-canakkale" className="text-blue-600 underline hover:text-blue-800">kaçak çalışma</Link> tespiti halinde ağır idari para <Link to="/blog/2026-yabanci-calisma-izni-manisa-canakkale" className="text-blue-600 underline hover:text-blue-800">ceza</Link>ları uygulanmaktadır.</p>

          <h2>Manisa ve Çanakkale'deki İşverenler İçin Pratik Rehber</h2>
          <p><strong>Başvuru Öncesi Kontrol Listesi:</strong></p>
          <ul>
            <li>✅ Mali yeterlilik kriterlerinden en az birini sağlıyor musunuz?</li>
            <li>✅ Her yabancı için 5 Türk vatandaşı çalıştırıyor musunuz?</li>
            <li>✅ Yabancının ücret beyanı asgari ücretin katlarına uygun mu?</li>
            <li>✅ Tüm belgeler hazır mı (bilanço, SGK bordrosu, vb.)?</li>
            <li>✅ Başvuru e-izin sistemi üzerinden yapılacak mı?</li>
          </ul>
          <p><strong>Önemli:</strong> Çalışma izni başvurusu Göç İdaresi'ne değil, Çalışma ve Sosyal Güvenlik Bakanlığı'na yapılır.</p>

          <h2>Sıkça Sorulan Sorular</h2>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>1. Çalışma izni değerlendirme kriterleri ne zaman değişti?</h3>
            <p>Son önemli değişiklik 01/01/2025 tarihinde gerçekleşti. Ödenmiş sermaye eşiği 250.000 TL'den 500.000 TL'ye yükseltildi.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>2. Her yabancı çalışan için 5 Türk vatandaşı çalıştırmak zorunlu mu?</h3>
            <p>Evet, "1'e 5 kuralı" genel kural olarak uygulanır. Ancak bazı muaf kategoriler (kilit personel, uluslararası anlaşmalar) bu şarttan muaf tutulabilir.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>3. Şirket ortağı yabancılar için sermaye şartı ne kadardır?</h3>
            <p>Şirket ortağı yabancılar için hem şirketin ödenmiş sermayesi hem de yabancının kişisel sermaye tutarı en az 500.000 TL olmalıdır. Ortaklık payı en az %20 olması gerekir.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>4. Uzatma başvurularında hangi kriterler geçerli?</h3>
            <p>Uzatma başvurularında ilk başvuru tarihindeki mali yeterlilik kriterleri baz alınır. Yeni kriterler uygulanmaz, eski kriterler geçerli kalır.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>5. Manisa'da çalışma izni başvurusu nereye yapılır?</h3>
            <p>Başvurular e-izin sistemi (https://e-izin.csgb.gov.tr) üzerinden Çalışma ve Sosyal Güvenlik Bakanlığı'na yapılır. <Link to="/manisa-calisma-izni" className="text-blue-600 underline hover:text-blue-800">Manisa çalışma izni</Link> süreçleri Göç İdaresi'nden değil ÇSGB'den yürütülür.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>6. Çanakkale'de hangi sektörlerde yabancı çalışma izni daha kolay alınır?</h3>
            <p>Çanakkale'de turizm, tarım, hayvancılık ve denizcilik sektörlerinde yabancı çalışma izni daha kolay alınabilir. Bu sektörlerde <Link to="/canakkale-calisma-izni" className="text-blue-600 underline hover:text-blue-800">Çanakkale çalışma izni</Link> için istihdam ve mali yeterlilik kriterleri daha esnek uygulanabilir.</p>
          </div>

          <div style={{ backgroundColor: '#f3f4f6', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>7. Gönüllülük faaliyetleri için çalışma izni alınabilir mi?</h3>
            <p>Hayır, gönüllülük faaliyetleri çalışma izni gerektirmez. Ancak herhangi bir ücret veya menfaat karşılığında yapılan faaliyetler çalışma izni kapsamına girer.</p>
          </div>

          <h2>Sonuç: Sarıbaş Danışmanlık ile İletişime Geçin</h2>
          <p>Çalışma izni değerlendirme kriterleri karmaşık ve sık değişen bir alandır. <strong>Manisa merkez ofisimiz ve Çanakkale danışmanlık hizmetlerimiz</strong> aracılığıyla, işverenler ve yabancı çalışanlar için profesyonel rehberlik sağlıyoruz. Başvuru öncesinde mutlaka danışmanlık alarak, başvurunuzun başarılı olmasını sağlayabilirsiniz.</p>
          <p><strong>Sarıbaş Danışmanlık ile iletişime geçin ve çalışma izni başvurunuzda başarılı olun!</strong></p>
        </>
      )
    },
    '2026-yabanci-calisma-izni-manisa-canakkale': {
      title: 'Manisa ve Çanakkale Yabancı Çalışma İzni Rehberi 2026: Güncel Cezalar ve Yasal Yükümlülükler',
      category: 'Çalışma İzni',
      date: '2026-01-19',
      readTime: '9 dk',
      image: 'https://images.unsplash.com/photo-1595847902982-f20169d4ddad',
      content: `
        <p>Türkiye'nin sanayi ve tarım lokomotiflerinden olan <strong>Manisa</strong> (özellikle Manisa Organize Sanayi Bölgesi - MOSB) yabancı işgücü istihdamının en yoğun olduğu illerimiz arasında yer almaktadır. Çanakkale Manisa'ya görece yabancı istihdamında daha az yer kaplasa da bu ilimizde de yine yabancı çalışanlar mevcuttur. Ancak 2026 yılı itibarıyla güncellenen mevzuat ve artan denetimler, işverenlerin yasal süreçleri çok daha titiz yönetmesini zorunlu kılmaktadır.</p>
        
        <h2>Manisa ve Çanakkale Sanayi Bölgelerinde SGK Denetimleri Artıyor</h2>
        <p>Özellikle Manisa ve Çanakkale illerindeki iş yerlerine ve organize sanayi bölgelerine <strong>Sosyal Güvenlik Kurumu (SGK)</strong> tarafından periyodik ve habersiz denetimler gerçekleştirilmektedir. Bu denetimlerde, yabancı personelin çalışma izninin olup olmadığı ve SGK bildirimlerinin doğruluğu sıkı bir şekilde kontrol edilmektedir. Bir iş yerinde izinsiz yabancı çalıştırıldığının tespit edilmesi, sadece idari para cezasıyla sınırlı kalmayan ve işletmenin teşviklerini de tehlikeye atan ağır yaptırımları beraberinde getirmektedir.</p>

        <h2>2026 Yılı Kaçak Yabancı Çalıştırma İdari Para Cezaları</h2>
        <p>6735 Sayılı Uluslararası İşgücü Kanunu uyarınca, çalışma izni bulunmayan bir yabancıyı istihdam etmenin bedeli 2026 yılında ciddi oranda artırılmıştır. Aşağıdaki tabloda, yapılan ihlale göre uygulanacak güncel ceza tutarları yer almaktadır:</p>
        
        <div class="overflow-x-auto my-6 rounded-lg shadow-sm border border-gray-200">
          <table class="min-w-full divide-y divide-gray-200 text-sm md:text-base">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 text-left font-bold text-[#1e3a5f] uppercase tracking-wider">İhlalin Türü (2026)</th>
                <th scope="col" class="px-6 py-4 text-left font-bold text-[#1e3a5f] uppercase tracking-wider w-1/3">Ceza Tutarı (TL)</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Çalışma izni bulunmayan yabancıyı çalıştıran işverenlere (Her bir yabancı için)</td>
                <td class="px-6 py-4 whitespace-nowrap font-bold text-red-600">102.503,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Çalışma izni olmaksızın bir işverene bağlı çalışan yabancıya</td>
                <td class="px-6 py-4 whitespace-nowrap font-bold text-red-600">40.977,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Çalışma izni olmaksızın bağımsız çalışan yabancıya</td>
                <td class="px-6 py-4 whitespace-nowrap font-bold text-red-600">82.010,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Bildirim yükümlülüğünü süresi içinde yerine getirmeyenlere (Her bir yabancı için)</td>
                <td class="px-6 py-4 whitespace-nowrap font-bold text-red-600">6.805,00 TL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="bg-yellow-50 p-4 border-l-4 border-yellow-500 text-gray-700 italic"><strong>Önemli Uyarı:</strong> Kanun uyarınca yukarıdaki fiillerin tekrarı halinde idari para cezaları <strong>bir kat artırılarak</strong> uygulanır.</p>

        <h2>Sınır Dışı (Deport) Sürecinde İşverenin Mali Sorumluluğu</h2>
        <p>Çalışma izni olmayan bir yabancının tespiti halinde, 6458 Sayılı Kanun gereğince yabancı sınır dışı edilir. Ancak bu sürecin tüm mali yükü işverene aittir. <strong>İlgili mevzuata göre işveren;</strong></p>
        <ul>
          <li>Yabancının sınır dışı edilene kadar <strong>Geri Gönderme Merkezi'ndeki (GGM) günlük konaklama ve maliyet bedellerini</strong> karşılamak zorundadır.</li>
          <li>Yabancının (ve varsa ailesinin) <strong>uçak bileti veya ülkelerine dönmeleri için gerekli yol masraflarını</strong> ödemekle yükümlüdür.</li>
          <li>Sınır dışı işlemi için devlet tarafından yapılan diğer tüm giderler de işverenden ayrıca tahsil edilir.</li>
        </ul>

        <h2>2026 Yılı Çalışma İzni Harç ve Değerli Kağıt Bedelleri</h2>
        <p>Çalışma izni başvurusu uygun bulunan işverenlerin, aşağıda belirtilen 2026 yılı güncel harç tutarlarını ve değerli kağıt bedelini yatırması gerekmektedir:</p>

        <div class="overflow-x-auto my-6 rounded-lg shadow-sm border border-gray-200">
          <table class="min-w-full divide-y divide-gray-200 text-sm md:text-base">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 text-left font-bold text-[#1e3a5f] uppercase tracking-wider">İzin Süresi / Türü</th>
                <th scope="col" class="px-6 py-4 text-left font-bold text-[#1e3a5f] uppercase tracking-wider">2026 Harç Tutarı (TL)</th>
                <th scope="col" class="px-6 py-4 text-left font-bold text-[#1e3a5f] uppercase tracking-wider">Değerli Kağıt Bedeli (TL)</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Süreli Çalışma İzni (1 Yıla Kadar)</td>
                <td class="px-6 py-4 whitespace-nowrap font-semibold">12.574,90 TL</td>
                <td class="px-6 py-4 whitespace-nowrap">964,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Süreli Çalışma İzni (2 Yıl Süreli)</td>
                <td class="px-6 py-4 whitespace-nowrap font-semibold">25.149,80 TL</td>
                <td class="px-6 py-4 whitespace-nowrap">964,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Süreli Çalışma İzni (3 Yıl Süreli)</td>
                <td class="px-6 py-4 whitespace-nowrap font-semibold">37.724,70 TL</td>
                <td class="px-6 py-4 whitespace-nowrap">964,00 TL</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-normal font-medium text-gray-900">Süresiz / Bağımsız Çalışma İzni</td>
                <td class="px-6 py-4 whitespace-nowrap font-semibold">125.802,20 TL</td>
                <td class="px-6 py-4 whitespace-nowrap">964,00 TL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Ödeme ve İade Koşulları:</strong></p>
        <ul>
          <li><strong>Ödeme Yeri:</strong> Harçlar, dijital.gib.gov.tr adresi üzerinden "Ödeme İşlem Referans Numarası" ve yabancının kimlik numarası ile yatırılmalıdır.</li>
          <li><strong>İade Yok:</strong> Yanlış yatırılan harçların iadesi mümkün değildir; bu nedenle ödeme yapılırken azami dikkat gösterilmelidir.</li>
          <li><strong>Zamanlama:</strong> Harçlar ancak Bakanlık tarafından gönderilen "Harç İstek Tebliği" maili geldikten sonra yatırılabilir.</li>
        </ul>

        <h2>Sıkça Sorulan Sorular (SSS)</h2>
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-bold text-[#1e3a5f]">Soru: Çalışma izni olmadan yabancı çalıştırmanın cezası nedir?</p>
            <p class="mt-2 text-gray-700">Cevap: 2026 yılı itibarıyla işveren, izinsiz çalıştırdığı her bir yabancı için 102.503,00 TL ceza öder. Ayrıca yabancının sınır dışı edilene kadar olan GGM konaklama ve ulaşım masrafları da işverenden tahsil edilir.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-bold text-[#1e3a5f]">Soru: Çalışma izni başvurusu reddedilirse ödenen harçlar iade edilir mi?</p>
            <p class="mt-2 text-gray-700">Cevap: Hayır, çalışma izni harçlarında yanlış yatırılma veya işlem iptali durumunda harç iadesi yapılmamaktadır.</p>
          </div>
        </div>

        <h2>Sarıbaş Danışmanlık ile Risklerinizi Yönetin</h2>
        <p>Manisa ve Çanakkale gibi sanayi bölgelerinde faaliyet gösteren işletmeler için mevzuat takibi hayati önem taşır. Hatalı işlemler ve kaçırılan bildirim süreleri, şirketiniz için telafisi güç mali kayıplara yol açabilir.</p>
        <p>Süreçlerinizi yasal zeminde, güvenle yönetmek ve 2026 güncel mevzuatına tam uyum sağlamak için <strong>Sarıbaş Danışmanlık</strong> uzman ekibiyle iletişime geçin. İşinizi şansa değil, uzmanına bırakın.</p>
        
        <p class="text-center font-bold text-lg mt-8 text-[#1e3a5f]">Sarıbaş Danışmanlık - Profesyonel Çözüm Ortağınız</p>
      `,
    },
    'calisma-izni-basvurusu-nasil-yapilir': {
      title: 'Çalışma İzni Başvurusu Nasıl Yapılır?',
      category: 'Çalışma İzni',
      date: '2026-01-05',
      readTime: '5 dk',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      content: `
        <p>Türkiye'de çalışmak isteyen yabancı uyruklu kişilerin çalışma izni alması zorunludur. Çalışma izni başvurusu, mevzuata uygun belgelerin hazırlanması ve doğru prosedürlerin takip edilmesiyle gerçekleştirilir.</p>
        
        <h2>Çalışma İzni Türleri</h2>
        <p>Türkiye'de üç ana çalışma izni türü bulunmaktadır:</p>
        <ul>
          <li><strong>Süreli Çalışma İzni:</strong> Belirli bir işveren için belirli bir süre çalışma hakkı verir.</li>
          <li><strong>Süresiz Çalışma İzni:</strong> En az 8 yıl kesintisiz çalışma izniyle çalışmış kişilere verilir.</li>
          <li><strong>Bağımsız Çalışma İzni:</strong> Kendi işini kurmak isteyen yabancılara tanınan izindir.</li>
        </ul>

        <h2>Gerekli Belgeler</h2>
        <p>Çalışma izni başvurusu için aşağıdaki belgelere ihtiyacınız vardır:</p>
        <ul>
          <li>Pasaport fotokopisi</li>
          <li>İkamet izni belgesi</li>
          <li>İş sözleşmesi</li>
          <li>Diploma ve sertifikalar</li>
          <li>SGK tescil belgesi</li>
          <li>Başvuru formu</li>
        </ul>

        <h2>Başvuru Süreci</h2>
        <p>Çalışma izni başvurusu e-Devlet üzerinden veya İl Göç İdaresi Müdürlüklerine şahsen yapılabilir. Başvuru sonrası belgeler kontrol edilir ve uygun görülürse çalışma izni verilir.</p>

        <p>Sarıbaş Danışmanlık olarak çalışma izni başvuru sürecinizin her aşamasında yanınızdayız. Mevzuata uygun belge hazırlığı ve başvuru takibi konusunda profesyonel destek sunuyoruz.</p>
      `,
    },
    'ikamet-izni-turleri-nelerdir': {
      title: 'İkamet İzni Türleri Nelerdir?',
      category: 'İkamet İzni',
      date: '2026-01-03',
      readTime: '7 dk',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      content: `
        <p>Türkiye'de yaşamak isteyen yabancı uyruklu kişilerin ikamet izni alması gerekmektedir. İkamet izni türleri, kişinin Türkiye'de bulunma amacına ve durumuna göre değişiklik gösterir.</p>

        <h2>Kısa Dönem İkamet İzni</h2>
        <p>En fazla bir yıl süreyle verilen bu izin, turistik amaçlarla veya kısa süreli kalmak isteyenler için uygundur. Yenilenebilir bir izin türüdür.</p>

        <h2>Aile İkamet İzni</h2>
        <p>Türk vatandaşı ile evli olan veya Türkiye'de ikamet izni olan yabancının aile bireylerinin başvurabileceği izin türüdür. Evlilik, soybağı gibi durumlar için geçerlidir.</p>

        <h2>Öğrenci İkamet İzni</h2>
        <p>Türkiye'de eğitim görmek isteyen yabancı öğrencilerin alması gereken izin türüdür. Üniversite veya dil okulu kaydı zorunludur.</p>

        <h2>Uzun Dönem İkamet İzni</h2>
        <p>En az 8 yıl kesintisiz ikamet etmiş yabancılara verilen süresiz ikamet hakkıdır. Bu izinle birçok sosyal haktan yararlanılabilir.</p>

        <p>İkamet izni başvurunuzda doğru türü seçmek ve gerekli belgeleri eksiksiz hazırlamak önemlidir. Sarıbaş Danışmanlık olarak size en uygun ikamet izni türünü belirlemenizde ve başvuru sürecinizde yardımcı oluyoruz.</p>
      `,
    },
    'turk-vatandasligi-basvuru-kosullari': {
      title: 'Türk Vatandaşlığı Başvuru Koşulları',
      category: 'Vatandaşlık',
      date: '2025-12-28',
      readTime: '8 dk',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
      content: `
          <p>Türk vatandaşlığı kazanmak için gerekli koşullar ve başvuru süreci detaylı bir inceleme gerektirir.</p>
          <h2>Genel Başvuru Yoluyla Vatandaşlık</h2>
          <p>5 yıl kesintisiz ikamet ve diğer şartları sağlayan yabancılar genel yolla vatandaşlık başvurusu yapabilirler.</p>
          <h2>Yatırım Yoluyla Vatandaşlık</h2>
          <p>Belirli tutarda gayrimenkul yatırımı veya sermaye yatırımı yapan yabancılar istisnai olarak vatandaşlık kazanabilir.</p>
          <p>Sarıbaş Danışmanlık olarak vatandaşlık başvurularınızda hukuki destek sağlıyoruz.</p>
        `
    },
    'ogrenci-ikamet-izni-rehberi': {
      title: 'Öğrenci İkamet İzni Rehberi',
      category: 'İkamet İzni',
      date: '2025-12-20',
      readTime: '6 dk',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      content: `
          <p>Türkiye'de eğitim gören yabancı öğrencilerin alması gereken öğrenci ikamet izni hakkında bilinmesi gerekenler.</p>
          <h2>Başvuru Şartları</h2>
          <p>Öğrenci belgesi, sağlık sigortası ve adres beyanı gibi temel belgeler gereklidir.</p>
          <h2>Süreç</h2>
          <p>Online başvuru sonrası Göç İdaresi'ne randevu tarihinde belgeler teslim edilir.</p>
        `
    },
    'calisma-izni-yenileme-sureci': {
      title: 'Çalışma İzni Yenileme Süreci',
      category: 'Çalışma İzni',
      date: '2025-12-15',
      readTime: '4 dk',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      content: `
          <p>Çalışma izninin süresi dolmadan önce yenileme başvurusu yapılması gerekmektedir.</p>
          <h2>Ne Zaman Başvurulmalı?</h2>
          <p>İzin süresinin bitimine 60 gün kala başvuru süreci başlatılabilir.</p>
          <h2>Önemli Noktalar</h2>
          <p>SGK primlerinin düzenli ödenmiş olması ve işletmenin mali yeterliliklerini koruması önemlidir.</p>
        `
    }
  };

  const post = blogPosts[slug] || {
    title: 'Blog Yazısı Bulunamadı',
    category: '',
    date: '',
    readTime: '',
    image: '',
    content: '<p>Aradığınız blog yazısı bulunamadı.</p>',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
  };

  const relatedPosts = Object.entries(blogPosts)
    .filter(([key, p]) => key !== slug && p.category === post.category)
    .map(([key, p]) => ({ ...p, slug: key }))
    .slice(0, 2);

  if (relatedPosts.length < 2) {
    const otherPosts = Object.entries(blogPosts)
      .filter(([key, p]) => key !== slug && p.category !== post.category)
      .map(([key, p]) => ({ ...p, slug: key }))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  // Helper text extraction for default SEO description
  const extractText = (content) => {
    if (typeof content === 'string') {
      return content.substring(0, 160).replace(/<[^>]*>/g, '');
    }
    return ''; // for JSX content, SEO description should be provided in the object
  };

  return (
    <>
      <SEOHead
        title={post.seoTitle || post.title}
        description={post.seoDescription || extractText(post.content)}
        keywords={post.seoKeywords || `${post.category}, yabancılar mevzuatı, göç danışmanlığı, manisa, çanakkale, 2026, yabancı çalışma izni`}
        canonicalUrl={post.canonicalUrl}
      />
      
      {post.faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(post.faqSchema)}
          </script>
        </Helmet>
      )}

      <article className="bg-white">
        {post.image && (
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title.includes('Manisa') ? "Manisa OSB yabancı personel çalışma izni danışmanlığı 2026" : post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#2d5a8f] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Blog'a Dön
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 border-b border-gray-100 pb-10">
              <span className="inline-block bg-[#1e3a5f] text-white px-4 py-1.5 rounded-md text-sm font-semibold mb-6 uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-8 leading-[1.2]">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>{post.date ? new Date(post.date).toLocaleDateString('tr-TR') : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>{post.readTime} okuma süresi</span>
                </div>
              </div>
            </div>

            <div
              className="
                max-w-none text-gray-800
                text-[17px] md:text-[18px] leading-7 md:leading-8

                [&_p]:my-5
                [&_p]:text-gray-800

                [&_strong]:text-[#1e3a5f]
                [&_strong]:font-semibold

                [&_h2]:mt-12 [&_h2]:mb-5
                [&_h2]:text-2xl md:[&_h2]:text-3xl
                [&_h2]:font-bold
                [&_h2]:text-[#1e3a5f]
                [&_h2]:border-b [&_h2]:border-gray-200
                [&_h2]:pb-3

                [&_h3]:mt-10 [&_h3]:mb-4
                [&_h3]:text-xl md:[&_h3]:text-2xl
                [&_h3]:font-bold
                [&_h3]:text-[#1e3a5f]

                [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc
                [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal
                [&_li]:my-2
                [&_li]:leading-7 md:[&_li]:leading-8
                [&_li::marker]:text-[#1e3a5f]

                [&_table]:w-full
                [&_table]:border-collapse
                [&_table]:my-8
                [&_table]:text-[15px] md:[&_table]:text-[16px]

                [&_th]:bg-gray-50
                [&_th]:text-left
                [&_th]:font-bold
                [&_th]:text-[#1e3a5f]
                [&_th]:uppercase
                [&_th]:tracking-wider
                [&_th]:px-4 md:[&_th]:px-6
                [&_th]:py-3 md:[&_th]:py-4
                [&_th]:border [&_th]:border-gray-200

                [&_td]:px-4 md:[&_td]:px-6
                [&_td]:py-3 md:[&_td]:py-4
                [&_td]:border [&_td]:border-gray-200
                [&_td]:align-top

                [&_blockquote]:my-8
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#1e3a5f]
                [&_blockquote]:pl-5
                [&_blockquote]:italic
                [&_blockquote]:text-gray-700
              "
            >
              {post.contentIsJsx ? (
                post.content
              ) : (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
            </div>

          </motion.div>
        </div>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <span className="inline-block bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                    {relatedPost.title}
                  </h3>
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="text-[#1e3a5f] font-semibold hover:text-[#2d5a8f] transition-colors"
                  >
                    Devamını Oku →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPostPage;