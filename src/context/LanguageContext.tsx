import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getUi, type UiKey } from '../i18n/translations'
import type { Lang, LocalizedString } from '../types'

const LANG_KEY = 'bella-brick-pavers-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: UiKey) => string
  L: (value: LocalizedString | string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY)
  return saved === 'pt' ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang)

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const t = useCallback((key: UiKey) => getUi(lang)[key], [lang])

  const L = useCallback(
    (value: LocalizedString | string) => {
      if (typeof value === 'string') return value
      return value[lang] || value.en || value.pt || ''
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, t, L }),
    [lang, setLang, t, L],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
