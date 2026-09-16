import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ title, description, keywords, canonicalUrl }) => {
  const siteTitle = 'Çanakkale Yabancı Danışmanlık | İkamet ve Çalışma İzni | Sarıbaş Danışmanlık';
  const fullTitle = title ? `${title} | Sarıbaş Danışmanlık` : siteTitle;

  const defaultDescription = "Çanakkale, Manisa, Balıkesir ve İzmir'de yabancıların ikamet izni, çalışma izni ve vatandaşlık başvuruları için profesyonel destek. Göç İdaresi randevusu ve dosya takibinde Çanakkale'nin en güvenilir danışmanlık ofisiyiz.";
  const finalDescription = description || defaultDescription;

  const defaultKeywords = "çanakkale yabancı danışmanlık, çanakkale ikamet izni, çanakkale çalışma izni, manisa yabancı danışmanlık, izmir göç danışmanlık, sarıbaş danışmanlık";

  return (
    <Helmet htmlAttributes={{ lang: 'tr' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEOHead;