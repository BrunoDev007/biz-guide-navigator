
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  User, 
  Clock, 
  ArrowDown, 
  ArrowUp,
  DollarSign,
  Package,
  AlertTriangle,
  BarChart3,
  PieChart,
  Eye,
  Play
} from 'lucide-react';

const dashboardSections = [
  {
    title: 'Vendas Gerais',
    description: 'Acompanhe o desempenho geral das vendas com métricas em tempo real',
    icon: TrendingUp,
    color: 'bg-green-500',
    metrics: ['Vendas do Dia', 'Vendas do Mês', 'Meta vs Realizado', 'Comparativo do Período']
  },
  {
    title: 'Vendas por Vendedor',
    description: 'Performance individual de cada vendedor com ranking e comissões',
    icon: User,
    color: 'bg-blue-500',
    metrics: ['Ranking de Vendedores', 'Comissões Calculadas', 'Metas Individuais', 'Histórico de Performance']
  },
  {
    title: 'Aniversariantes',
    description: 'Lista de clientes aniversariantes para ações de marketing',
    icon: Calendar,
    color: 'bg-purple-500',
    metrics: ['Aniversariantes do Dia', 'Aniversariantes da Semana', 'Campanhas Sugeridas', 'Histórico de Contatos']
  },
  {
    title: 'Estoque Mínimo',
    description: 'Alertas de produtos com estoque baixo ou zerado',
    icon: AlertTriangle,
    color: 'bg-red-500',
    metrics: ['Produtos em Falta', 'Estoque Crítico', 'Sugestões de Compra', 'Relatório de Rupturas']
  },
  {
    title: 'Contas a Pagar',
    description: 'Resumo das contas vencidas e a vencer',
    icon: ArrowUp,
    color: 'bg-orange-500',
    metrics: ['Vencidas Hoje', 'Vencimento em 7 dias', 'Total em Atraso', 'Fluxo de Pagamentos']
  },
  {
    title: 'Contas a Receber',
    description: 'Controle de recebimentos e inadimplência',
    icon: ArrowDown,
    color: 'bg-cyan-500',
    metrics: ['Recebimentos do Dia', 'Títulos Vencidos', 'Previsão de Recebimento', 'Índice de Inadimplência']
  }
];

export function Central() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-4">
          <Calendar className="h-8 w-8 text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo CENTRAL</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dashboard principal com preview de relatórios diários e indicadores essenciais para gestão do negócio
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Dashboard</Badge>
          <Badge variant="outline">Tempo Real</Badge>
          <Badge variant="secondary">Relatórios</Badge>
        </div>
      </div>

      {/* Video Tutorial Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial em Vídeo
          </CardTitle>
          <CardDescription>
            Aprenda a usar o módulo Central em 5 minutos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Módulo Central</p>
              <p className="text-sm">Player de vídeo será inserido aqui</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Screenshot da Interface */}
      <Card>
        <CardHeader>
          <CardTitle>Interface do Dashboard Central</CardTitle>
          <CardDescription>
            Visualização da tela principal com todos os widgets e relatórios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 10} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Screenshot do Dashboard Central</p>
              <p className="text-sm">Imagem da interface será inserida aqui</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Seções do Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardSections.map((section, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${section.color} text-white`}>
                  <section.icon className="h-6 w-6" />
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Detalhes
                </Button>
              </div>
              <CardTitle className="text-lg">{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Métricas disponíveis:</p>
                <ul className="space-y-1">
                  {section.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Perguntas Frequentes - Módulo Central</CardTitle>
          <CardDescription>
            Dúvidas comuns sobre o uso do dashboard e relatórios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como interpretar os gráficos de vendas?</AccordionTrigger>
              <AccordionContent>
                Os gráficos de vendas mostram a evolução das vendas ao longo do tempo. As barras verdes indicam vendas acima da meta, 
                enquanto as vermelhas mostram vendas abaixo da meta. Use os filtros para visualizar por período, vendedor ou produto específico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Com que frequência os dados são atualizados?</AccordionTrigger>
              <AccordionContent>
                Os dados do dashboard são atualizados em tempo real. Vendas, estoque e movimentações financeiras são refletidas 
                imediatamente após o lançamento no sistema. Alguns relatórios consolidados são atualizados a cada 15 minutos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como configurar alertas de estoque mínimo?</AccordionTrigger>
              <AccordionContent>
                No módulo Produtos, defina a quantidade mínima para cada item. Quando o estoque atingir esse nível, 
                um alerta aparecerá automaticamente no dashboard Central. Você também pode configurar notificações por email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Posso personalizar quais widgets aparecem no dashboard?</AccordionTrigger>
              <AccordionContent>
                Sim! Use o botão "Configurar Dashboard" no canto superior direito para escolher quais widgets exibir, 
                alterar o tamanho e a posição dos cards, e definir filtros padrão para cada seção.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Ações Rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesso direto às funcionalidades mais utilizadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <PieChart className="h-6 w-6" />
              <span className="text-sm">Relatório de Vendas</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Ranking Vendedores</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Estoque Crítico</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Fluxo de Caixa</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
