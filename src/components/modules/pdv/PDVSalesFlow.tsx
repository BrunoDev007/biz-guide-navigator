
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users } from 'lucide-react';

export function PDVSalesFlow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fluxo de Vendas Detalhado</CardTitle>
        <CardDescription>Processo completo de uma venda do início ao fim</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Venda SEM Cliente
            </h4>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span className="text-sm">Adicionar itens à venda</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span className="text-sm">Pressionar F5 ou clicar em "Pagamento"</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                <span className="text-sm">Escolher forma de pagamento</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                <span className="text-sm">Clicar em "Registrar Pagamento"</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">5</span>
                <span className="text-sm">Finalizar venda</span>
              </li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Venda COM Cliente
            </h4>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                <span className="text-sm">Adicionar itens à venda</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                <span className="text-sm">Clicar em "Cliente" (F2)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                <span className="text-sm">Selecionar ou cadastrar cliente</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                <span className="text-sm">Pressionar F5 ou clicar em "Pagamento"</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">5</span>
                <span className="text-sm">Escolher forma de pagamento</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center mr-2 mt-0.5">6</span>
                <span className="text-sm">Finalizar venda</span>
              </li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
