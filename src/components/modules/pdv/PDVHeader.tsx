
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PDVHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-4">
        <ShoppingCart className="h-8 w-8 text-blue-500" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Módulo PDV - Ponto de Venda</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Manual completo e interativo para operação do sistema de Ponto de Venda
      </p>
      <div className="flex items-center justify-center space-x-2 mt-4">
        <Badge variant="default">Vendas</Badge>
        <Badge variant="outline">Caixa</Badge>
        <Badge variant="secondary">Clientes</Badge>
        <Badge variant="outline">Produtos</Badge>
      </div>
    </div>
  );
}
