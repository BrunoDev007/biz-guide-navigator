
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Package, 
  ArrowUpDown, 
  BarChart3, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Play, 
  TrendingUp,
  ArrowRightLeft,
  Calculator
} from 'lucide-react';

const stockOperations = [
  {
    operation: 'Lançamento de Quantidades',
    description: 'Entrada manual de produtos no estoque com controle de origem',
    icon: ArrowUpDown,
    color: 'bg-blue-500',
    features: ['Entrada por compra', 'Entrada manual', 'Bonificações', 'Ajustes de inventário']
  },
  {
    operation: 'Balanço de Estoque',
    description: 'Conferência física do estoque com geração de relatórios de divergência',
    icon: Calculator,
    color: 'bg-green-500',
    features: ['Contagem física', 'Comparação com sistema', 'Ajustes automáticos', 'Relatório de diferenças']
  },
  {
    operation: 'Transferências',
    description: 'Movimentação de produtos entre matriz e filiais',
    icon: ArrowRightLeft,
    color: 'bg-purple-500',
    features: ['Entre filiais', 'Controle de trânsito', 'Documentos fiscais', 'Confirmação de recebimento']
  }
];

export function Stock() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-4">
          <Package className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo ESTOQUE</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gestão completa de estoque com controle de entrada, saída e transferências entre filiais
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Controle de Estoque</Badge>
          <Badge variant="outline">Movimentações</Badge>
          <Badge variant="secondary">Inventário</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Controle de Estoque
          </CardTitle>
          <CardDescription>
            Aprenda a gerenciar entradas, saídas e fazer balanço de estoque
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Módulo Estoque</p>
              <p className="text-sm">Duração: 20 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Operações de Estoque */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Operações Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stockOperations.map((operation, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${operation.color} text-white w-fit`}>
                  <operation.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{operation.operation}</CardTitle>
                <CardDescription>{operation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Funcionalidades:</p>
                  <ul className="space-y-2">
                    {operation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
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
              <ArrowUpDown className="h-5 w-5 mr-2" />
              Lançamento de Entrada
            </CardTitle>
            <CardDescription>Tela para registro de entrada de produtos</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ArrowUpDown className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Entrada de Produtos</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Balanço de Estoque
            </CardTitle>
            <CardDescription>Interface para contagem e conferência física</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Balanço de Estoque</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Alertas e Indicadores */}
      <Card>
        <CardHeader>
          <CardTitle>Indicadores de Estoque</CardTitle>
          <CardDescription>Alertas automáticos para gestão proativa do estoque</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-medium text-red-700 dark:text-red-300">Estoque Crítico</h3>
              <p className="text-sm text-red-600 dark:text-red-400">Produtos abaixo do mínimo</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <Package className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-medium text-yellow-700 dark:text-yellow-300">Estoque Zerado</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">Produtos sem saldo</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium text-green-700 dark:text-green-300">Giro de Estoque</h3>
              <p className="text-sm text-green-600 dark:text-green-400">Análise de movimentação</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do Módulo</CardTitle>
          <CardDescription>Recursos completos para controle de estoque</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ArrowUpDown className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Lançamento de Quantidades</h4>
                  <p className="text-sm text-muted-foreground">Entrada e saída manual com diversos tipos de movimentação e justificativas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calculator className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Balanço de Estoque</h4>
                  <p className="text-sm text-muted-foreground">Conferência física com impressão de folhas de contagem e ajustes automáticos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <ArrowRightLeft className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Transferências Entre Filiais</h4>
                  <p className="text-sm text-muted-foreground">Movimentação controlada com documentação fiscal e confirmação de recebimento.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios de Entrada</h4>
                  <p className="text-sm text-muted-foreground">Relatórios detalhados de todas as movimentações por período e tipo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Alertas Automáticos</h4>
                  <p className="text-sm text-muted-foreground">Notificações de estoque mínimo, produtos parados e análise de giro.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Análises Avançadas</h4>
                  <p className="text-sm text-muted-foreground">Curva ABC, sazonalidade, previsão de demanda e ponto de reposição.</p>
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
          <CardDescription>Dúvidas comuns sobre controle de estoque</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Como fazer uma entrada manual de produtos?</AccordionTrigger>
              <AccordionContent>
                Acesse "Lançamento de Quantidades" e selecione "Entrada Manual". Escolha o produto, 
                informe a quantidade, o motivo (bonificação, ajuste, etc.) e confirme. O sistema 
                automaticamente atualiza o saldo e registra na ficha Kardex do produto.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Como funciona o balanço de estoque?</AccordionTrigger>
              <AccordionContent>
                O balanço compara a quantidade física contada com o saldo do sistema. Imprima as folhas 
                de contagem, faça a conferência física, digite as quantidades encontradas e o sistema 
                mostrará as diferenças para aprovação dos ajustes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Posso transferir produtos entre filiais?</AccordionTrigger>
              <AccordionContent>
                Sim! Use "Transferências Matriz/Filial" para movimentar produtos. O sistema controla 
                produtos em trânsito, gera documentos fiscais quando necessário e só baixa do estoque 
                origem após confirmação do recebimento no destino.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Como configurar alertas de estoque mínimo?</AccordionTrigger>
              <AccordionContent>
                No cadastro do produto, defina as quantidades de "Estoque Mínimo" e "Estoque Máximo". 
                O sistema alertará no dashboard quando produtos atingirem o mínimo e sugerirá a 
                quantidade ideal para reposição baseada no histórico de vendas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
