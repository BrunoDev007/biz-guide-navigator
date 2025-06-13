
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  CreditCard, 
  Calendar, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign, 
  Eye, 
  Play, 
  Clock,
  Receipt,
  TrendingUp
} from 'lucide-react';

const accountTypes = [
  {
    type: 'Contas Variáveis',
    description: 'Pagamentos que variam conforme o consumo ou necessidade',
    icon: TrendingUp,
    color: 'bg-blue-500',
    examples: ['Energia elétrica', 'Telefone', 'Água', 'Fornecedores']
  },
  {
    type: 'Contas Fixas',
    description: 'Pagamentos com valor e data fixos todos os meses',
    icon: Calendar,
    color: 'bg-green-500',
    examples: ['Aluguel', 'Financiamentos', 'Seguros', 'Salários']
  }
];

export function AccountsPayable() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-yellow-500/10 rounded-full mb-4">
          <CreditCard className="h-8 w-8 text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo CONTAS A PAGAR</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gestão completa de contas a pagar com controle de vencimentos e relatórios de pagamentos
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Contas a Pagar</Badge>
          <Badge variant="outline">Vencimentos</Badge>
          <Badge variant="secondary">Pagamentos</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Contas a Pagar
          </CardTitle>
          <CardDescription>
            Aprenda a gerenciar vencimentos e controlar pagamentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Contas a Pagar</p>
              <p className="text-sm">Duração: 12 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Tipos de Contas */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tipos de Contas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountTypes.map((account, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${account.color} text-white w-fit`}>
                  <account.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{account.type}</CardTitle>
                <CardDescription>{account.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Exemplos:</p>
                  <ul className="space-y-2">
                    {account.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Screenshots das Funcionalidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Cadastro de Conta
            </CardTitle>
            <CardDescription>Interface para lançamento de novas contas</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Cadastro de Conta</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="h-5 w-5 mr-2" />
              Baixa de Pagamento
            </CardTitle>
            <CardDescription>Tela para quitação de contas</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Receipt className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Baixa de Pagamento</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard de Contas */}
      <Card>
        <CardHeader>
          <CardTitle>Situação Atual das Contas</CardTitle>
          <CardDescription>Resumo dos vencimentos e pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-medium text-red-700 dark:text-red-300">Vencidas</h3>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">R$ 3.240</p>
              <p className="text-sm text-red-600 dark:text-red-400">5 contas</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-medium text-yellow-700 dark:text-yellow-300">Hoje</h3>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">R$ 1.580</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">3 contas</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Próximos 7 dias</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ 8.920</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">12 contas</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium text-green-700 dark:text-green-300">Pagas no Mês</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">R$ 15.470</p>
              <p className="text-sm text-green-600 dark:text-green-400">23 contas</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do Módulo</CardTitle>
          <CardDescription>Recursos completos para gestão de contas a pagar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Cadastro de Contas</h4>
                  <p className="text-sm text-muted-foreground">Lançamento de contas variáveis e fixas com parcelamento automático.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Receipt className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Baixa de Pagamentos</h4>
                  <p className="text-sm text-muted-foreground">Quitação com desconto/juros e integração automática ao financeiro.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Controle de Vencimentos</h4>
                  <p className="text-sm text-muted-foreground">Alertas automáticos e agenda de pagamentos com notificações.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios Detalhados</h4>
                  <p className="text-sm text-muted-foreground">Contas pagas, pendentes, vencidas e fluxo de pagamentos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Controle Financeiro</h4>
                  <p className="text-sm text-muted-foreground">Projeções de fluxo de caixa e análise de gastos por categoria.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Alertas Automáticos</h4>
                  <p className="text-sm text-muted-foreground">Notificações de vencimento por email e no dashboard do sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Perguntas Frequentes</CardTitle>
          <CardDescription>Dúvidas comuns sobre contas a pagar</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Como cadastrar uma conta parcelada?</AccordionTrigger>
              <AccordionContent>
                No cadastro da conta, informe o valor total e o número de parcelas. O sistema calculará 
                automaticamente o valor de cada parcela e criará os vencimentos mensais. 
                Você pode ajustar valores individuais se necessário.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Posso pagar uma conta com desconto ou juros?</AccordionTrigger>
              <AccordionContent>
                Sim! Na tela de baixa de pagamento, você pode aplicar desconto (pagamento antecipado) 
                ou acréscimo (juros por atraso). O sistema calcula automaticamente e registra o valor 
                real pago no controle financeiro.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Como configurar contas fixas mensais?</AccordionTrigger>
              <AccordionContent>
                Marque a opção "Conta Fixa" no cadastro e defina o dia de vencimento. O sistema criará 
                automaticamente a conta no próximo mês após o pagamento da atual. Ideal para aluguel, 
                financiamentos e outras despesas recorrentes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Os pagamentos aparecem no financeiro automaticamente?</AccordionTrigger>
              <AccordionContent>
                Sim! Quando você quita uma conta a pagar, o sistema automaticamente registra a saída 
                no módulo financeiro, reduzindo o saldo do caixa. Isso mantém o controle financeiro 
                sempre atualizado e preciso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
