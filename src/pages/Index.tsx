
import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Dashboard } from '@/components/modules/Dashboard';
import { Central } from '@/components/modules/Central';
import { Users } from '@/components/modules/Users';
import { People } from '@/components/modules/People';
import { Products } from '@/components/modules/Products';
import { Stock } from '@/components/modules/Stock';
import { Financial } from '@/components/modules/Financial';
import { AccountsPayable } from '@/components/modules/AccountsPayable';
import { AccountsReceivable } from '@/components/modules/AccountsReceivable';
import { PDV } from '@/components/modules/PDV';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [favorites, setFavorites] = useState<string[]>(['dashboard', 'central']);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState<string[]>(['dashboard']);

  const handleModuleChange = (module: string) => {
    setActiveModule(module);
    // Adicionar ao histórico
    setHistory(prev => {
      const newHistory = [module, ...prev.filter(item => item !== module)];
      return newHistory.slice(0, 10); // Manter apenas os últimos 10
    });
  };

  const toggleFavorite = (module: string) => {
    setFavorites(prev => 
      prev.includes(module) 
        ? prev.filter(fav => fav !== module)
        : [...prev, module]
    );
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard': return <Dashboard />;
      case 'central': return <Central />;
      case 'users': return <Users />;
      case 'people': return <People />;
      case 'products': return <Products />;
      case 'stock': return <Stock />;
      case 'financial': return <Financial />;
      case 'accounts-payable': return <AccountsPayable />;
      case 'accounts-receivable': return <AccountsReceivable />;
      case 'pdv': return <PDV />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="flex h-screen">
          <Sidebar 
            isOpen={sidebarOpen}
            activeModule={activeModule}
            onModuleSelect={handleModuleChange}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            history={history}
          />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header 
              onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeModule={activeModule}
            />
            
            <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              <div className="container mx-auto px-6 py-8">
                {renderActiveModule()}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
