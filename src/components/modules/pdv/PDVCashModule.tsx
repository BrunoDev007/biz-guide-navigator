
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, PlusCircle, CreditCard, ArrowDown, ArrowUp } from 'lucide-react';

const cashModules = [
  {
    id: 'opening',
    title: 'Abertura',
    description: 'Abertura do caixa com valor inicial',
    icon: PlusCircle,
    color: 'bg-green-600',
    process: 'Realizada automaticamente ao abrir o PDV com valor informado pelo operador'
  },
  {
    id: 'installment',
    title: 'Crediário',
    description: 'Consulta e recebimento de dívidas',
    icon: CreditCard,
    color: 'bg-blue-600',
    process: 'Consultar dívidas do cliente e receber pagamentos de vendas no crediário'
  },
  {
    id: 'closing',
    title: 'Fechamento',
    description: 'Fechamento do caixa com conferência',
    icon: Calculator,
    color: 'bg-red-600',
    process: 'Exibe total por forma de pagamento, permite conferência e mostra diferenças'
  },
  {
    id: 'withdrawal',
    title: 'Sangria',
    description: 'Saída de valores do caixa',
    icon: ArrowDown,
    color: 'bg-orange-600',
    process: 'Saída de valor para pagamentos externos, exige motivo e valor'
  },
  {
    id: 'supply',
    title: 'Suprimento',
    description: 'Entrada de valores no caixa',
    icon: ArrowUp,
    color: 'bg-purple-600',
    process: 'Entrada de valor sem ser venda (ex: troco), exige motivo e valor'
  }
];

export function PDVCashModule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="h-6 w-6 mr-2" />
          Módulo CAIXA
        </CardTitle>
        <CardDescription>
          Gestão completa do caixa com abertura, fechamento, sangria e suprimento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cashModules.map((cashModule, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className={`inline-flex p-2 rounded-lg ${cashModule.color} text-white w-fit`}>
                  <cashModule.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{cashModule.title}</CardTitle>
                <CardDescription className="text-sm">{cashModule.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cashModule.process}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
