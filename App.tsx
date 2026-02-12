// src/App.tsx

import React, { useState, useEffect } from 'react';
import {
  Home,
  FileText,
  CheckCircle,
  DollarSign,
  Users,
  PenTool,
  LayoutGrid,
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Cover } from './components/Cover';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Acceptance } from './components/Acceptance';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'cover', label: 'Cover', icon: Home },
  { id: 'introduction', label: 'Overview', icon: FileText },
  { id: 'services', label: 'Services', icon: LayoutGrid },
  { id: 'process', label: 'Process', icon: PenTool },
  { id: 'pricing', label: 'Investment', icon: DollarSign },
  { id: 'about', label: 'About Us', icon: Users },
  { id: 'acceptance', label: 'Next Steps', icon: CheckCircle },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('cover');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  // Smooth scroll handler
  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active navigation state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handlePackageSelect = (id: string, total: number) => {
    setSelectedPackageId(id);
  };

  return (
    <div className="flex min-h-screen bg-white text-slate-900 font-sans">
      {/* ✅ Sidebar */}
      <Sidebar
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* ✅ Main Content */}
      <main className="flex-1 md:ml-64 w-full transition-all duration-300">
        <Cover />
        <Introduction />
        <Services />
        <Process />
        <Pricing
          onSelectPackage={handlePackageSelect}
          selectedPackageId={selectedPackageId}
        />
        <About />
        <Acceptance />
      </main>
    </div>
  );
};

export default App;
