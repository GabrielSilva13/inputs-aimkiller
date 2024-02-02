import 'server-only'

export type Locale = 'en' | 'br' | 'es'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  br: () => import('./dictionaries/br.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
