
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Monitor, ShoppingCart, CreditCard, Calculator } from 'lucide-react';

export function PDVScreenshots() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Monitor className="h-5 w-5 mr-2" />
            Tela Principal do PDV
          </CardTitle>
          <CardDescription>Interface principal com caixa aberto e pronto para vendas</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Screenshot - Tela Principal PDV</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Tela de Vendas
          </CardTitle>
          <CardDescription>Interface de vendas com produtos e totais</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Screenshot - Tela de Vendas</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Tela de Pagamento
          </CardTitle>
          <CardDescription>Finalização com formas de pagamento e descontos</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <CreditCard className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Screenshot - Tela de Pagamento</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            Fechamento de Caixa
          </CardTitle>
          <CardDescription>Conferência e fechamento do caixa diário</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Calculator className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Screenshot - Fechamento de Caixa</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}
