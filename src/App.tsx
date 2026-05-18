import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ArchLayout } from './components/ArchLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentProvider } from './context/ContentContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<ArchLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/cenik" element={<PricingPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContentProvider>
    </BrowserRouter>
  );
}
