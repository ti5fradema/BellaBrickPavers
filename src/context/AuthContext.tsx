import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { AUTH_KEY } from '../data/defaultContent'
import { useContent } from './ContentContext'

interface AuthContextValue {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { content } = useContent()
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === '1',
  )

  const login = useCallback(
    (password: string) => {
      if (password === content.adminPassword) {
        sessionStorage.setItem(AUTH_KEY, '1')
        setIsAuthenticated(true)
        return true
      }
      return false
    },
    [content.adminPassword],
  )

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
