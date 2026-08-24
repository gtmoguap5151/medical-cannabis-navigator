import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

const SITE_NAME = 'Medical Cannabis Navigator';

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setOg('og:description', description);
    }
    setOg('og:title', fullTitle);
    setOg('og:site_name', SITE_NAME);
    setOg('og:type', 'website');
    if (path) setOg('og:url', `https://medicalcannabisnavigator.com${path}`);
  }, [title, description, path]);

  return null;
}
