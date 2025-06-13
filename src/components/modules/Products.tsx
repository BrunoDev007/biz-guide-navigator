
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  BarChart3, 
  Tag, 
  DollarSign, 
  Eye, 
  Play, 
  FileText,
  Archive,
  TrendingUp
} from 'lucide-react';

const productCategories = [
  {
    type: 'Matéria-Prima',
    description: 'Produtos utilizados na fabricação de outros produtos',
    icon: Archive,
    color: 'bg-blue-500',
    features: ['Controle de lotes', 'Validade', 'Composição', 'Fornecedores']
  },
  {
    type: 'Mercadoria',
    description: 'Produtos prontos para venda direta ao consumidor',
    icon: Package,
    color: 'bg-green-500',
    features: ['Código de barras', 'Preços de venda', 'Promoções', 'Estoque mínimo']
  },
  {
    type: 'Serviços',
    description: 'Serviços prestados que podem ser vendidos',
    icon: TrendingUp,
    color: 'bg-purple-500',
    features: ['Tempo de execução', 'Recursos necessários', 'Precificação', 'Comissões']
  }
];

export function Products() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 rounded-full mb-4">
          <Package className="h-8 w-8 text-orange-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo PRODUTOS</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Controle completo do catálogo de produtos com classificações, preços e movimentações detalhadas
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Catálogo</Badge>
          <Badge variant="outline">Precificação</Badge>
          <Badge variant="secondary">Kardex</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Gestão de Produtos
          </CardTitle>
          <CardDescription>
            Aprenda a cadastrar produtos e usar a ficha Kardex para controle detalhado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Módulo Produtos</p>
              <p className="text-sm">Duração: 18 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Tipos de Produtos */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Classificação de Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${category.color} text-white w-fit`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.type}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Características:</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
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
              <Plus className="h-5 w-5 mr-2" />
              Cadastro de Produto
            </CardTitle>
            <CardDescription>Interface completa para cadastro de novos produtos</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Plus className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Cadastro de Produto</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Ficha Kardex
            </CardTitle>
            <CardDescription>Histórico detalhado de movimentações do produto</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Ficha Kardex</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do Módulo</CardTitle>
          <CardDescription>Recursos completos para gestão do catálogo de produtos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Plus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Cadastro de Produtos</h4>
                  <p className="text-sm text-muted-foreground">Formulário completo com código, descrição, unidade, classificação e preços.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Tag className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Classificação Avançada</h4>
                  <p className="text-sm text-muted-foreground">Organização por categorias, grupos e subgrupos para melhor controle.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Controle de Preços</h4>
                  <p className="text-sm text-muted-foreground">Múltiplas tabelas de preço, promoções e descontos automáticos.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Ficha Kardex</h4>
                  <p className="text-sm text-muted-foreground">Histórico completo de entradas, saídas e saldos do produto.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Edit className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Correção de Informações</h4>
                  <p className="text-sm text-muted-foreground">Ajustes de estoque, preços e dados do produto com log de alterações.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios Detalhados</h4>
                  <p className="text-sm text-muted-foreground">Listagens, etiquetas, curva ABC e relatórios de movimentação.</p>
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
          <CardDescription>Dúvidas comuns sobre gestão de produtos</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Qual a diferença entre matéria-prima e mercadoria?</AccordionTrigger>
              <AccordionContent>
                Matéria-prima são produtos que serão transformados ou utilizados na fabricação de outros produtos. 
                Mercadoria são produtos prontos para venda direta ao consumidor final. Esta classificação afeta 
                o controle fiscal e os relatórios de custos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Como funciona a ficha Kardex?</AccordionTrigger>
              <AccordionContent>
                A ficha Kardex registra cronologicamente todas as movimentações do produto: entradas (compras), 
                saídas (vendas), transferências e ajustes de estoque. Mostra data, documento, quantidade, 
                valor unitário e saldo atual, permitindo rastreabilidade completa.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Posso ter múltiplas tabelas de preço?</AccordionTrigger>
              <AccordionContent>
                Sim! Você pode criar diferentes tabelas de preço (à vista, a prazo, atacado, varejo) e 
                associá-las a clientes específicos. O sistema automaticamente aplica a tabela correta 
                durante a venda baseada no perfil do cliente.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Como fazer ajustes manuais de estoque?</AccordionTrigger>
              <AccordionContent>
                Use a função "Entrada/Saída Manual" para ajustar quantidades. Sempre informe o motivo 
                (inventário, perda, bonificação, etc.) pois isso afeta os relatórios contábeis. 
                O sistema registra automaticamente na ficha Kardex.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
