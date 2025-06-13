
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Book, 
  Calendar, 
  User, 
  Users, 
  Cog, 
  Search, 
  Clock, 
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const modules = [
  {
    id: 'central',
    title: 'CENTRAL',
    description: 'Painel com preview de relatórios diários, vendas gerais, vendas por vendedor e indicadores importantes.',
    icon: Calendar,
    color: 'bg-blue-500',
    features: ['Relatórios Diários', 'Dashboard de Vendas', 'Indicadores KPI', 'Alertas Automáticos']
  },
  {
    id: 'users',
    title: 'USUÁRIOS',
    description: 'Gestão completa de usuários do sistema com controle de permissões e níveis de acesso.',
    icon: User,
    color: 'bg-green-500',
    features: ['Cadastro de Usuários', 'Controle de Permissões', 'Configuração de Comissões', 'Gestão de Senhas']
  },
  {
    id: 'people',
    title: 'PESSOAS',
    description: 'Cadastro e gestão de clientes, fornecedores e transportadoras do sistema.',
    icon: Users,
    color: 'bg-purple-500',
    features: ['Cadastro de Clientes', 'Gestão de Fornecedores', 'Transportadoras', 'Histórico de Transações']
  },
  {
    id: 'products',
    title: 'PRODUTOS',
    description: 'Controle completo do catálogo de produtos com classificações e movimentações.',
    icon: Cog,
    color: 'bg-orange-500',
    features: ['Cadastro de Produtos', 'Classificações', 'Ficha Kardex', 'Controle de Preços']
  },
  {
    id: 'stock',
    title: 'ESTOQUE',
    description: 'Gestão de estoque com controle de entrada, saída e transferências entre filiais.',
    icon: Search,
    color: 'bg-red-500',
    features: ['Controle de Quantidades', 'Balanço de Estoque', 'Transferências', 'Relatórios de Movimento']
  },
  {
    id: 'financial',
    title: 'FINANCEIRO',
    description: 'Controle financeiro completo com movimento de caixa e relatórios gerenciais.',
    icon: TrendingUp,
    color: 'bg-cyan-500',
    features: ['Movimento de Caixa', 'Fechamentos', 'Formas de Pagamento', 'Relatórios Financeiros']
  },
  {
    id: 'accounts-payable',
    title: 'CONTAS A PAGAR',
    description: 'Gestão de contas a pagar com controle de vencimentos e relatórios de pagamentos.',
    icon: Clock,
    color: 'bg-yellow-500',
    features: ['Contas Variáveis e Fixas', 'Controle de Vencimentos', 'Baixa de Pagamentos', 'Relatórios']
  },
  {
    id: 'accounts-receivable',
    title: 'CONTAS A RECEBER',
    description: 'Controle de recebimentos com integração automática das vendas a crediário.',
    icon: Calendar,
    color: 'bg-pink-500',
    features: ['Lançamentos Automáticos', 'Controle de Inadimplência', 'Quitação de Contas', 'Relatórios de Cobrança']
  }
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
          <Book className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Manual do Sistema RETAGUARDA
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Painel central que engloba todos os módulos do sistema de gestão empresarial. 
          Navegue pelos módulos abaixo para acessar a documentação completa de cada funcionalidade.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Documentação Oficial
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            Versão 2024.1
          </Badge>
        </div>
      </div>

      {/* Screenshot Placeholder */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Preview do Sistema
          </CardTitle>
          <CardDescription>
            Visão geral da interface principal do sistema RETAGUARDA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Book className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Screenshot do Sistema Principal</p>
              <p className="text-sm">Imagem será inserida aqui</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Módulos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${module.color} text-white`}>
                  <module.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Módulo
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {module.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {module.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-2">Principais funcionalidades:</p>
                  <ul className="space-y-1">
                    {module.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                    {module.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        + {module.features.length - 3} outras funcionalidades
                      </li>
                    )}
                  </ul>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Acessar Módulo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">9</div>
            <p className="text-sm text-muted-foreground">Módulos Disponíveis</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">100+</div>
            <p className="text-sm text-muted-foreground">Funcionalidades</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <p className="text-sm text-muted-foreground">Suporte Disponível</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">2024.1</div>
            <p className="text-sm text-muted-foreground">Versão Atual</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
