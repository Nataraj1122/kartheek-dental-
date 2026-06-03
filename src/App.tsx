/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';

// A wrapper for the main website interface
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#f8fafc]">
    <Navigation />
    <main className="flex-grow">
      {children}
    </main>
    <Chatbot />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/services/:id" element={
          <MainLayout>
            <ServiceDetail />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}
