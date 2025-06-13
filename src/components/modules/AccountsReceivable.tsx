
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Eye, 
  Play, 
  Clock,
  Receipt,
  UserCheck
} from 'lucide-react';

const receivableTypes = [
  {
    type: 'Lançamentos Automáticos',
    description: 'Gerados automaticamente pelas vendas a crediário no PDV',
    icon: TrendingUp,
    color: 'bg-blue-500',
    features: ['Vendas a prazo', 'Parcelamento automático', 'Integração PDV', 'Sem digitação manual']
  },
  {
    type: 'Lançamentos Manuais',
    description: 'Cadastrados manualmente para situações específicas',
    icon: FileText,
    color: 'bg-green-500',
    features: ['Empréstimos', 'Serviços prestados', 'Vendas externas', 'Ajustes diversos']
  }
];

export function AccountsReceivable() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-pink-500/10 rounded-full mb-4">
          <DollarSign className="h-8 w-8 text-pink-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo CONTAS A RECEBER</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Controle de recebimentos com integração automática das vendas a crediário
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Contas a Receber</Badge>
          <Badge variant="outline">Recebimentos</Badge>
          <Badge variant="secondary">Cobrança</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Contas a Receber
          </CardTitle>
          <CardDescription>
            Aprenda a gerenciar recebimentos e controlar inadimplência
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Contas a Receber</p>
              <p className="text-sm">Duração: 14 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Tipos de Lançamentos */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tipos de Lançamentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {receivableTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${type.color} text-white w-fit`}>
                  <type.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{type.type}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Características:</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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
              <FileText className="h-5 w-5 mr-2" />
              Lançamento Manual
            </CardTitle>
            <CardDescription>Interface para cadastro manual de recebíveis</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Lançamento Manual</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="h-5 w-5 mr-2" />
              Quitação de Conta
            </CardTitle>
            <CardDescription>Tela para baixa de recebimentos</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Receipt className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Quitação de Conta</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard de Recebimentos */}
      <Card>
        <CardHeader>
          <CardTitle>Situação dos Recebimentos</CardTitle>
          <CardDescription>Resumo da carteira de clientes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium text-green-700 dark:text-green-300">Recebido Hoje</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">R$ 4.680</p>
              <p className="text-sm text-green-600 dark:text-green-400">8 pagamentos</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Vence Hoje</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ 2.340</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">6 contas</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-medium text-red-700 dark:text-red-300">Em Atraso</h3>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">R$ 5.120</p>
              <p className="text-sm text-red-600 dark:text-red-400">12 contas</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-medium text-purple-700 dark:text-purple-300">A Receber</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">R$ 28.900</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Total carteira</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do Módulo</CardTitle>
          <CardDescription>Recursos completos para gestão de recebimentos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Lançamentos Automáticos</h4>
                  <p className="text-sm text-muted-foreground">Integração total com vendas a prazo - sem necessidade de digitação manual.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Lançamentos Manuais</h4>
                  <p className="text-sm text-muted-foreground">Cadastro de contas especiais com parcelamento e controle personalizado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Receipt className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Quitação de Contas</h4>
                  <p className="text-sm text-muted-foreground">Baixa de recebimentos com desconto/juros e integração ao financeiro.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios de Cobrança</h4>
                  <p className="text-sm text-muted-foreground">Contas pagas, pendentes, atrasadas e análise de inadimplência.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <UserCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Controle de Clientes</h4>
                  <p className="text-sm text-muted-foreground">Histórico de pagamentos e análise de comportamento de cada cliente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Alertas de Cobrança</h4>
                  <p className="text-sm text-muted-foreground">Notificações automáticas de vencimento e controle de inadimplência.</p>
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
          <CardDescription>Dúvidas comuns sobre contas a receber</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>As vendas a prazo aparecem automaticamente?</AccordionTrigger>
              <AccordionContent>
                Sim! Toda venda feita no PDV com forma de pagamento "A Prazo" é automaticamente lançada 
                no contas a receber. O sistema cria as parcelas conforme configurado na venda, 
                sem necessidade de digitação adicional.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Como receber uma conta com desconto por antecipação?</AccordionTrigger>
              <AccordionContent>
                Na tela de quitação, você pode aplicar desconto para pagamentos antecipados. 
                Informe o valor do desconto e confirme o recebimento. O sistema registra o valor 
                líquido recebido e atualiza automaticamente o controle financeiro.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Posso parcelar um lançamento manual?</AccordionTrigger>
              <AccordionContent>
                Sim! No lançamento manual, informe o valor total e número de parcelas. O sistema 
                criará automaticamente os vencimentos mensais. Você pode personalizar valores e 
                datas individualmente se necessário.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Como controlar clientes inadimplentes?</AccordionTrigger>
              <AccordionContent>
                Use o relatório "Contas Atrasadas" para identificar inadimplentes. O sistema pode 
                bloquear automaticamente novos crediários para clientes em atraso. Configure os 
                dias de tolerância nas configurações do módulo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
