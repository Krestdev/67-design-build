import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './locale-switcher-select';
import { LocaleGroup } from '@/types/types';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const locales:LocaleGroup[] = routing.locales.map(x=>({lang:x, title: t(x)}))

  return (
    <LocaleSwitcherSelect defaultValue={t(locale)} locales={locales}/>
  );
}