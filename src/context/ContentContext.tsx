import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { DEFAULT_CONTENT, STORAGE_KEY } from '../data/defaultContent'
import type { ContentUpdater, Lang, QuoteRequest, SiteContent } from '../types'

interface ContentContextValue {
  content: SiteContent
  updateContent: (updater: ContentUpdater) => void
  setContent: (next: SiteContent) => void
  resetContent: () => void
  addQuoteRequest: (
    request: Omit<QuoteRequest, 'id' | 'createdAt'> & { lang?: Lang },
  ) => void
  deleteQuoteRequest: (id: string) => void
  exportJson: () => string
  importJson: (raw: string) => void
}

const ContentContext = createContext<ContentContextValue | null>(null)

function loadContent(): SiteContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_CONTENT
    return { ...DEFAULT_CONTENT, ...JSON.parse(raw) } as SiteContent
  } catch {
    return DEFAULT_CONTENT
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(loadContent)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
  }, [content])

  const setContent = useCallback((next: SiteContent) => {
    setContentState(next)
  }, [])

  const updateContent = useCallback((updater: ContentUpdater) => {
    setContentState((prev) => updater(prev))
  }, [])

  const resetContent = useCallback(() => {
    setContentState(DEFAULT_CONTENT)
  }, [])

  const addQuoteRequest = useCallback(
    (request: Omit<QuoteRequest, 'id' | 'createdAt'> & { lang?: Lang }) => {
      const entry: QuoteRequest = {
        ...request,
        lang: request.lang ?? 'en',
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      }
      setContentState((prev) => ({
        ...prev,
        quoteRequests: [entry, ...prev.quoteRequests],
      }))
    },
    [],
  )

  const deleteQuoteRequest = useCallback((id: string) => {
    setContentState((prev) => ({
      ...prev,
      quoteRequests: prev.quoteRequests.filter((q) => q.id !== id),
    }))
  }, [])

  const exportJson = useCallback(() => JSON.stringify(content, null, 2), [content])

  const importJson = useCallback((raw: string) => {
    const parsed = JSON.parse(raw) as SiteContent
    setContentState({ ...DEFAULT_CONTENT, ...parsed })
  }, [])

  const value = useMemo(
    () => ({
      content,
      updateContent,
      setContent,
      resetContent,
      addQuoteRequest,
      deleteQuoteRequest,
      exportJson,
      importJson,
    }),
    [
      content,
      updateContent,
      setContent,
      resetContent,
      addQuoteRequest,
      deleteQuoteRequest,
      exportJson,
      importJson,
    ],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}
