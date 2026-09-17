import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ title, description, keywords, canonicalUrl, canonical, schema, ogImage }) => {
  const siteTitle = 'Çanakkale Yabancı Danışmanlık | İkamet ve Çalışma İzni | Sarıbaş Danışmanlık';
  const fullTitle = title ? `${title} | Sarıbaş Danışmanlık` : siteTitle;

  const defaultDescription = "Çanakkale, Manisa, Balıkesir ve İzmir'de yabancıların ikamet izni, çalışma izni ve vatandaşlık başvuruları için profesyonel destek. Göç İdaresi randevusu ve dosya takibinde Çanakkale'nin en güvenilir danışmanlık ofisiyiz.";
  const finalDescription = description || defaultDescription;

  const defaultKeywords = "çanakkale yabancı danışmanlık, çanakkale ikamet izni, çanakkale çalışma izni, manisa yabancı danışmanlık, izmir göç danışmanlık, sarıbaş danışmanlık";
  const finalCanonical = canonicalUrl || canonical;

  return (
    <Helmet htmlAttributes={{ lang: 'tr' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="robots" content="index, follow" />
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;