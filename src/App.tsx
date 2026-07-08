import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { MenuPage } from './pages/MenuPage';
import { PayrollPage } from './pages/PayrollPage';
import { ReportingPage } from './pages/ReportingPage';
import { HostPage } from './pages/HostPage';
import { ToolsPage } from './pages/ToolsPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function HashUrlBackcompat() {
  const navigate = useNavigate();
  useEffect(() => {
    const raw = window.location.hash;
    if (raw.startsWith('#/')) {
      navigate(raw.slice(1), { replace: true });
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollManager />
      <HashUrlBackcompat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/reporting" element={<ReportingPage />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
