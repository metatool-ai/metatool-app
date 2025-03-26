'use client';

import { LegalDoc } from '../legal-doc';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  
  return (
    <LegalDoc 
      title={t('legal.pages.privacy.title')}
      description={t('legal.pages.privacy.description')}
      lastUpdated="March 26, 2024"
    >
      <h2>{t('legal.pages.privacy.content.intro')}</h2>
      <p>
        {t('legal.pages.privacy.content.disclaimer')}
      </p>
      <p>
        <strong>{t('legal.pages.privacy.content.note')}</strong>
      </p>

      <h2>{t('legal.pages.privacy.content.thirdParty')}</h2>
      <p>
        {t('legal.pages.privacy.content.thirdParty')}
      </p>

      <h2>{t('legal.pages.contact.title')}</h2>
      <p>
        {t('legal.pages.contact.content.description')}
      </p>
      <ul>
        <li>
          <Link href="/legal/contact">{t('legal.pages.contact.title')}</Link>
        </li>
      </ul>
    </LegalDoc>
  );
}
