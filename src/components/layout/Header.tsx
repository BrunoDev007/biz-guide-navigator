
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Book, 
  Calendar,
  User,
  Users,
  Cog,
  Clock,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeModule: string;
}

const moduleNames: Record<string, string> = {
  'dashboard': 'RETAGUARDA',
  'central': 'CENTRAL',
  'users': 'USUÁRIOS',
  'people': 'PESSOAS',
  'products': 'PRODUTOS',
  'stock': 'ESTOQUE',
  'financial': 'FINANCEIRO',
  'accounts-payable': 'CONTAS A PAGAR',
  'accounts-receivable': 'CONTAS A RECEBER',
};

const getBreadcrumb = (activeModule: string) => {
  const moduleName = moduleNames[activeModule] || 'Dashboard';
  return [
    { name: 'Manual do Sistema', href: '#' },
    { name: moduleName, href: '#' }
  ];
};

export function Header({ onToggleSidebar, searchQuery, onSearchChange, activeModule }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const breadcrumb = getBreadcrumb(activeModule);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onToggleSidebar}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumb.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                <span className={index === breadcrumb.length - 1 ? 'text-foreground font-medium' : ''}>
                  {item.name}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar no manual..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Claro</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Escuro</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Monitor className="mr-2 h-4 w-4" />
                <span>Sistema</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
