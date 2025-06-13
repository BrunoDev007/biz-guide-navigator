
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Users, 
  UserPlus, 
  Building, 
  Truck, 
  Edit, 
  Trash2, 
  Eye, 
  Play, 
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const personTypes = [
  {
    type: 'Clientes',
    description: 'Cadastro de pessoas físicas e jurídicas que compram produtos/serviços',
    icon: Users,
    color: 'bg-blue-500',
    features: ['Dados pessoais completos', 'Histórico de compras', 'Limites de crédito', 'Condições especiais']
  },
  {
    type: 'Fornecedores',
    description: 'Empresas e pessoas que fornecem produtos para revenda',
    icon: Building,
    color: 'bg-green-500',
    features: ['Dados comerciais', 'Condições de pagamento', 'Histórico de compras', 'Avaliação de fornecedor']
  },
  {
    type: 'Transportadoras',
    description: 'Empresas responsáveis pela entrega de produtos aos clientes',
    icon: Truck,
    color: 'bg-orange-500',
    features: ['Dados da empresa', 'Tabela de fretes', 'Áreas de atuação', 'Prazos de entrega']
  }
];

export function People() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 rounded-full mb-4">
          <Users className="h-8 w-8 text-purple-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo PESSOAS</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cadastro e gestão completa de clientes, fornecedores e transportadoras do sistema
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Gestão de Pessoas</Badge>
          <Badge variant="outline">CRM</Badge>
          <Badge variant="secondary">Relacionamentos</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial - Cadastro de Pessoas
          </CardTitle>
          <CardDescription>
            Aprenda a cadastrar e gerenciar clientes, fornecedores e transportadoras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Módulo Pessoas</p>
              <p className="text-sm">Duração: 12 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Tipos de Pessoas */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tipos de Cadastro</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personTypes.map((personType, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${personType.color} text-white w-fit`}>
                  <personType.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{personType.type}</CardTitle>
                <CardDescription>{personType.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Recursos principais:</p>
                  <ul className="space-y-2">
                    {personType.features.map((feature, featureIndex) => (
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
              <UserPlus className="h-5 w-5 mr-2" />
              Cadastro de Cliente
            </CardTitle>
            <CardDescription>Formulário completo para cadastro de novos clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <UserPlus className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Cadastro de Cliente</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Cadastro de Fornecedor
            </CardTitle>
            <CardDescription>Interface para cadastro de fornecedores</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Building className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Cadastro de Fornecedor</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do Módulo</CardTitle>
          <CardDescription>Principais recursos disponíveis para gestão de pessoas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <UserPlus className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Cadastro Completo</h4>
                  <p className="text-sm text-muted-foreground">Formulários detalhados com validação de dados e campos obrigatórios.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Edit className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Edição de Cadastros</h4>
                  <p className="text-sm text-muted-foreground">Alteração de informações existentes com histórico de modificações.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Relatórios Detalhados</h4>
                  <p className="text-sm text-muted-foreground">Listagens personalizadas com filtros avançados e exportação.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Consulta Rápida</h4>
                  <p className="text-sm text-muted-foreground">Busca avançada por nome, documento, telefone ou endereço.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trash2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Exclusão Segura</h4>
                  <p className="text-sm text-muted-foreground">Remoção de cadastros com verificação de dependências no sistema.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Múltiplos Contatos</h4>
                  <p className="text-sm text-muted-foreground">Gerenciamento de telefones, emails e endereços alternativos.</p>
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
          <CardDescription>Dúvidas comuns sobre o cadastro de pessoas</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Como cadastrar um cliente pessoa jurídica?</AccordionTrigger>
              <AccordionContent>
                No formulário de cadastro, selecione "Pessoa Jurídica" e preencha os campos obrigatórios: 
                Razão Social, Nome Fantasia, CNPJ, Inscrição Estadual (se houver), endereço completo e dados de contato. 
                O sistema valida automaticamente o CNPJ digitado.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Posso ter múltiplos endereços para o mesmo cliente?</AccordionTrigger>
              <AccordionContent>
                Sim! Cada pessoa pode ter endereço principal (cobrança) e endereços alternativos (entrega). 
                Na aba "Endereços" do cadastro, você pode adicionar quantos endereços forem necessários, 
                definindo qual é o padrão para faturamento e entrega.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>Como definir limite de crédito para clientes?</AccordionTrigger>
              <AccordionContent>
                Na aba "Financeiro" do cadastro do cliente, defina o valor do limite de crédito. 
                O sistema alertará automaticamente quando o cliente atingir esse limite em vendas a prazo. 
                Você também pode configurar se vendas acima do limite devem ser bloqueadas ou apenas alertadas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>É possível importar cadastros de planilha Excel?</AccordionTrigger>
              <AccordionContent>
                Sim! Use a funcionalidade "Importar Dados" no menu principal do módulo. 
                O sistema disponibiliza um modelo de planilha com os campos obrigatórios. 
                Após o upload, você pode revisar os dados antes de confirmar a importação.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
