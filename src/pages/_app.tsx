import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "../../i18n";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import AccessibilityBtn from '@/components/accessibilityBtn/AccessibilityBtn';

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        await i18n.reloadResources();
      } catch (error) {
        setError('Error loading translations');
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [i18n]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading translations</div>;
  }

  return (
    <>
    <Header />
    <AccessibilityBtn/>
    <Component  {...pageProps} /> 
    <Footer />
    </>
  )
}


