
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  DollarSign, 
  Calculator, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  PieChart, 
  Eye, 
  Play, 
  Printer,
  BarChart3,
  Calendar
} from 'lucide-react';

const financialFeatures = [
  {
    feature: 'Movimento de Caixa',
    description: 'Consulta detalhada de todas as movimentações financeiras do dia',
    icon: Calculator,
    color: 'bg-blue-500',
    details: ['Entradas por vendas', 'Saídas por pagamentos', 'Saldo atual', 'Conferência diária']
  },
  {
    feature: 'Fechamentos',
    description: 'Impressão de relatórios de fechamento diário, semanal e mensal',
    icon: Printer,
    color: 'bg-green-500',
    details: ['Fechamento diário', 'Resumo semanal', 'Consolidado mensal', 'Comparativos']
  },
  {
    feature: 'Formas de Pagamento',
    description: 'Cadastro e configuração das formas de pagamento aceitas',
    icon: CreditCard,
    color: 'bg-purple-500',
    details: ['Dinheiro', 'Cartões', 'PIX', 'Cheques', 'Crediário']
  }
];

export function Financial() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-full mb-4">
          <DollarSign className="h-8 w-8 text-cyan-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo FINANCEIRO</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Controle financeiro completo com movimento de caixa, fechamentos e relatórios gerenciais
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Financeiro</Badge>
          <Badge variant="outline">Caixa</Badge>
          <Badge variant="secondary">Relatórios</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Controle Financeiro
          </CardTitle>
          <CardDescription>
            Aprenda a usar as ferramentas financeiras e gerar relatórios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Módulo Financeiro</p>
              <p className="text-sm">Duração: 15 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Funcionalidades Financeiras */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {financialFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${feature.color} text-white w-fit`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.feature}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Recursos:</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                        {detail}
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
              <Calculator className="h-5 w-5 mr-2" />
              Movimento de Caixa
            </CardTitle>
            <CardDescription>Tela principal de consulta financeira</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Movimento de Caixa</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Relatórios Financeiros
            </CardTitle>
            <CardDescription>Interface de geração de relatórios</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Relatórios Financeiros</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard Financeiro */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Financeiro</CardTitle>
          <CardDescription>Visão geral dos indicadores financeiros principais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium text-green-700 dark:text-green-300">Receitas</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">R$ 25.430</p>
              <p className="text-sm text-green-600 dark:text-green-400">Hoje</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <TrendingUp className="h-8 w-8 text-red-500 mx-auto mb-2 rotate-180" />
              <h3 className="font-medium text-red-700 dark:text-red-300">Despesas</h3>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">R$ 8.750</p>
              <p className="text-sm text-red-600 dark:text-red-400">Hoje</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <DollarSign className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Saldo Caixa</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ 16.680</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Atual</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <PieChart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-medium text-purple-700 dark:text-purple-300">Margem</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">65.6%</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Bruta</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades Detalhadas */}
      <Card>
        <CardHeader>
          <CardTitle>Recursos do Módulo</CardTitle>
          <CardDescription>Funcionalidades completas para gestão financeira</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calculator className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Consulta de Movimento</h4>
                  <p className="text-sm text-muted-foreground">Visualização detalhada de todas as movimentações por período e forma de pagamento.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Printer className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Impressão de Fechamentos</h4>
                  <p className="text-sm text-muted-foreground">Relatórios de fechamento com totalizadores e conferência de valores.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CreditCard className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Formas de Pagamento</h4>
                  <p className="text-sm text-muted-foreground">Configuração completa de modalidades aceitas com taxas e prazos.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios Gerenciais</h4>
                  <p className="text-sm text-muted-foreground">Análises detalhadas de performance, margem e indicadores financeiros.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Gráficos e Análises</h4>
                  <p className="text-sm text-muted-foreground">Visualizações gráficas de evolução, comparativos e tendências.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Históricos Detalhados</h4>
                  <p className="text-sm text-muted-foreground">Consulta de movimentações passadas com filtros avançados.</p>
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
          <CardDescription>Dúvidas comuns sobre o módulo financeiro</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Como consultar o movimento de caixa do dia?</AccordionTrigger>
              <AccordionContent>
                Acesse "Movimento de Caixa" no módulo Financeiro. O sistema mostra todas as entradas (vendas) 
                e saídas (pagamentos) do dia atual. Use os filtros de data para consultar períodos específicos 
                e visualizar detalhes por forma de pagamento.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Como imprimir o fechamento diário?</AccordionTrigger>
              <AccordionContent>
                Em "Fechamentos", selecione a data desejada e clique em "Gerar Relatório". O sistema produz 
                um resumo completo com vendas por forma de pagamento, total de entradas, saídas e saldo final. 
                O relatório pode ser impresso ou exportado em PDF.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Como cadastrar novas formas de pagamento?</AccordionTrigger>
              <AccordionContent>
                Em "Formas de Pagamento", clique em "Nova Forma". Configure o nome, se é à vista ou prazo, 
                taxa de desconto/acréscimo, prazo para compensação e se deve gerar contas a receber. 
                Salve e a nova forma estará disponível no PDV.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Os valores batem automaticamente com as vendas?</AccordionTrigger>
              <AccordionContent>
                Sim! O módulo financeiro se integra automaticamente com as vendas. Cada venda gera 
                movimentação no caixa conforme a forma de pagamento usada. Pagamentos de contas também 
                são registrados automaticamente quando efetuados pelos módulos de contas a pagar/receber.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
