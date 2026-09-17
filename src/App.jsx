import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import BlogPostPage_IlDegisikligi from '@/pages/BlogPostPage_IlDegisikligi.jsx';
import CanakkaleGocIdaresiPage from '@/pages/CanakkaleGocIdaresiPage';
import CanakkaleYabancilarPage from '@/pages/CanakkaleYabancilarPage';
import CanakkaleCalismaiznPage from '@/pages/CanakkaleCalismaiznPage';
import ManisaCalismaiznPage from '@/pages/ManisaCalismaiznPage';
import CalismaIzniHesaplamaPage from '@/pages/CalismaIzniHesaplamaPage';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/il-degisikligi-calisma-izni" element={<BlogPostPage_IlDegisikligi />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/canakkale-goc-idaresi" element={<CanakkaleGocIdaresiPage />} />
          <Route path="/canakkale-yabancilar-rehberi" element={<CanakkaleYabancilarPage />} />
          <Route path="/canakkale-calisma-izni" element={<CanakkaleCalismaiznPage />} />
          <Route path="/manisa-calisma-izni" element={<ManisaCalismaiznPage />} />
          <Route path="/calisma-izni-maliyet-hesaplama" element={<CalismaIzniHesaplamaPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;