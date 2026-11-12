import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './context/AuthContext'
import { ContentProvider } from './context/ContentContext'
import { LanguageProvider } from './context/LanguageContext'
import { About } from './pages/About'
import { AlbumDetail } from './pages/AlbumDetail'
import { Equipment } from './pages/Equipment'
import { Home } from './pages/Home'
import { Quote } from './pages/Quote'
import { Work } from './pages/Work'
import { AdminAlbums } from './pages/admin/AdminAlbums'
import { AdminLayout } from './pages/admin/AdminLayout'
import { AdminLogin } from './pages/admin/AdminLogin'
import { AdminOverview } from './pages/admin/AdminOverview'
import { AdminQuotes } from './pages/admin/AdminQuotes'
import { AdminSettings } from './pages/admin/AdminSettings'
import { AdminSite } from './pages/admin/AdminSite'

export default function App() {
  return (
    <LanguageProvider>
      <ContentProvider>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="work/:id" element={<AlbumDetail />} />
                <Route path="about" element={<About />} />
                <Route path="equipment" element={<Equipment />} />
                <Route path="quote" element={<Quote />} />
                <Route path="admin/login" element={<AdminLogin />} />
                <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<AdminOverview />} />
                  <Route path="site" element={<AdminSite />} />
                  <Route path="albums" element={<AdminAlbums />} />
                  <Route path="quotes" element={<AdminQuotes />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ContentProvider>
    </LanguageProvider>
  )
}
