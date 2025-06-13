import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Book, 
  Clock,
  User,
  Users,
  Calendar,
  Cog,
  Search,
  ShoppingCart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeModule: string;
  onModuleSelect: (module: string) => void;
  favorites: string[];
  onToggleFavorite: (module: string) => void;
  history: string[];
}

const modules = [
  { id: 'dashboard', title: 'RETAGUARDA', icon: Book, description: 'Painel Central' },
  { id: 'central', title: 'CENTRAL', icon: Calendar, description: 'Relatórios Diários' },
  { id: 'users', title: 'USUÁRIOS', icon: User, description: 'Gestão de Usuários' },
  { id: 'people', title: 'PESSOAS', icon: Users, description: 'Clientes e Fornecedores' },
  { id: 'products', title: 'PRODUTOS', icon: Cog, description: 'Cadastro de Produtos' },
  { id: 'stock', title: 'ESTOQUE', icon: Search, description: 'Controle de Estoque' },
  { id: 'financial', title: 'FINANCEIRO', icon: Calendar, description: 'Gestão Financeira' },
  { id: 'accounts-payable', title: 'CONTAS A PAGAR', icon: Clock, description: 'Controle de Pagamentos' },
  { id: 'accounts-receivable', title: 'CONTAS A RECEBER', icon: Calendar, description: 'Controle de Recebimentos' },
  { id: 'pdv', title: 'PDV - PONTO DE VENDA', icon: ShoppingCart, description: 'Sistema de Vendas' },
];

export function Sidebar({ isOpen, activeModule, onModuleSelect, favorites, onToggleFavorite, history }: SidebarProps) {
  const [showFavorites, setShowFavorites] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
      isOpen ? "w-80" : "w-16"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {isOpen && (
              <div>
                <h1 className="font-bold text-lg text-primary">Manual do Sistema</h1>
                <p className="text-sm text-muted-foreground">Gestão Empresarial</p>
              </div>
            )}
          </div>
        </div>

        <ScrollArea className="flex-1 px-2 py-4">
          {/* Favoritos */}
          {isOpen && favorites.length > 0 && (
            <div className="mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFavorites(!showFavorites)}
                className="w-full justify-start font-medium text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground mb-2"
              >
                <ChevronRight className={cn("h-3 w-3 mr-2 transition-transform", showFavorites && "rotate-90")} />
                Favoritos
              </Button>
              
              {showFavorites && (
                <div className="space-y-1 mb-4">
                  {favorites.map(fav => {
                    const module = modules.find(m => m.id === fav);
                    if (!module) return null;
                    
                    return (
                      <Button
                        key={fav}
                        variant={activeModule === fav ? "secondary" : "ghost"}
                        size="sm"
                        onClick={() => onModuleSelect(fav)}
                        className="w-full justify-start text-left"
                      >
                        <module.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                        <span className="truncate">{module.title}</span>
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Histórico */}
          {isOpen && history.length > 1 && (
            <div className="mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistory(!showHistory)}
                className="w-full justify-start font-medium text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground mb-2"
              >
                <ChevronRight className={cn("h-3 w-3 mr-2 transition-transform", showHistory && "rotate-90")} />
                Histórico Recente
              </Button>
              
              {showHistory && (
                <div className="space-y-1 mb-4">
                  {history.slice(1, 6).map(item => {
                    const module = modules.find(m => m.id === item);
                    if (!module) return null;
                    
                    return (
                      <Button
                        key={item}
                        variant="ghost"
                        size="sm"
                        onClick={() => onModuleSelect(item)}
                        className="w-full justify-start text-left opacity-75 hover:opacity-100"
                      >
                        <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                        <span className="truncate text-sm">{module.title}</span>
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <Separator className="my-4" />

          {/* Módulos principais */}
          <div className="space-y-2">
            {isOpen && (
              <h3 className="font-medium text-xs uppercase tracking-wide text-muted-foreground px-2 mb-3">
                Módulos do Sistema
              </h3>
            )}
            
            {modules.map((module) => (
              <div key={module.id} className="relative group">
                <Button
                  variant={activeModule === module.id ? "secondary" : "ghost"}
                  size={isOpen ? "default" : "sm"}
                  onClick={() => onModuleSelect(module.id)}
                  className={cn(
                    "w-full justify-start",
                    !isOpen && "px-2"
                  )}
                >
                  <module.icon className={cn("h-5 w-5 flex-shrink-0", isOpen && "mr-3")} />
                  {isOpen && (
                    <div className="flex-1 text-left">
                      <div className="font-medium">{module.title}</div>
                      <div className="text-xs text-muted-foreground">{module.description}</div>
                    </div>
                  )}
                  {isOpen && favorites.includes(module.id) && (
                    <Badge variant="secondary" className="ml-2">★</Badge>
                  )}
                </Button>
                
                {isOpen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onToggleFavorite(module.id)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {favorites.includes(module.id) ? '★' : '☆'}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
