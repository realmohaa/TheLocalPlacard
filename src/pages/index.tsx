import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Navbar from '@/components/Nav';
import Announcement from '@/components/Announcement';
import Slider from '@/components/Slider';
import Footer from '@/components/Footer';
import Featured from '@/components/Featured';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='overflow-x-hidden'>
        <Navbar />
        <Announcement/>
        <Slider/>
        <Featured/>
        <Footer/>
      </main>
    </Layout>
  );
}
