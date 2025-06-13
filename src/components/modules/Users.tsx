
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Shield, 
  UserPlus, 
  Key, 
  Trash2, 
  Settings, 
  Eye, 
  Play, 
  CheckCircle,
  AlertCircle,
  Users as UsersIcon,
  Lock
} from 'lucide-react';

const userTypes = [
  {
    type: 'ADMIN',
    description: 'Acesso total ao sistema com todas as permissões',
    icon: Shield,
    color: 'bg-red-500',
    permissions: ['Cadastro de usuários', 'Configurações do sistema', 'Relatórios gerenciais', 'Backup e restore']
  },
  {
    type: 'Operador de Caixa',
    description: 'Focado em operações de venda e atendimento ao cliente',
    icon: User,
    color: 'bg-blue-500',
    permissions: ['Vendas no PDV', 'Consulta de produtos', 'Recebimentos', 'Relatórios de vendas']
  },
  {
    type: 'Vendedor',
    description: 'Perfil para vendedores externos com acesso limitado',
    icon: UsersIcon,
    color: 'bg-green-500',
    permissions: ['Cadastro de clientes', 'Consulta de preços', 'Pedidos de venda', 'Comissões']
  }
];

const tutorialSteps = [
  {
    step: 1,
    title: 'Acessar Módulo de Usuários',
    description: 'Entre no sistema com perfil ADMIN e navegue até o módulo Usuários',
    completed: true
  },
  {
    step: 2,
    title: 'Criar Novo Usuário',
    description: 'Clique em "Novo Usuário" e preencha os dados básicos (nome, login, email)',
    completed: true
  },
  {
    step: 3,
    title: 'Definir Perfil de Acesso',
    description: 'Selecione o tipo de usuário (ADMIN, Operador, Vendedor) e configure permissões específicas',
    completed: true
  },
  {
    step: 4,
    title: 'Configurar Comissões',
    description: 'Para vendedores, defina percentuais de comissão por produto ou categoria',
    completed: false
  },
  {
    step: 5,
    title: 'Definir Senha Inicial',
    description: 'Configure senha temporária que deverá ser alterada no primeiro acesso',
    completed: false
  },
  {
    step: 6,
    title: 'Ativar Usuário',
    description: 'Confirme a criação e ative o usuário no sistema',
    completed: false
  }
];

export function Users() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-4">
          <User className="h-8 w-8 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo USUÁRIOS</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gestão completa de usuários do sistema com controle de permissões, perfis de acesso e configuração de comissões
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Badge variant="default">Gestão de Usuários</Badge>
          <Badge variant="outline">Controle de Acesso</Badge>
          <Badge variant="secondary">Segurança</Badge>
        </div>
      </div>

      {/* Video Tutorial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2" />
            Tutorial Completo - Gestão de Usuários
          </CardTitle>
          <CardDescription>
            Aprenda a criar e gerenciar usuários do sistema passo a passo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Vídeo Tutorial - Gestão de Usuários</p>
              <p className="text-sm">Duração: 15 minutos</p>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* Tutorial Passo a Passo */}
      <Card>
        <CardHeader>
          <CardTitle>Tutorial Passo a Passo</CardTitle>
          <CardDescription>
            Siga este guia para criar e configurar usuários no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Progresso do Tutorial</h3>
              <span className="text-sm text-muted-foreground">3 de 6 passos concluídos</span>
            </div>
            <Progress value={50} className="mb-6" />
            
            <div className="space-y-4">
              {tutorialSteps.map((step) => (
                <div key={step.step} className={`flex items-start space-x-4 p-4 rounded-lg border ${step.completed ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-900'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}>
                    {step.completed ? <CheckCircle className="h-4 w-4" /> : step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tipos de Usuário */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tipos de Usuário</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userTypes.map((userType, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg ${userType.color} text-white w-fit`}>
                  <userType.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{userType.type}</CardTitle>
                <CardDescription>{userType.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-3">Permissões principais:</p>
                  <ul className="space-y-2">
                    {userType.permissions.map((permission, permIndex) => (
                      <li key={permIndex} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Screenshots das Telas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="h-5 w-5 mr-2" />
              Tela de Cadastro
            </CardTitle>
            <CardDescription>Interface para criação de novos usuários</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <UserPlus className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Cadastro de Usuário</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Configuração de Permissões
            </CardTitle>
            <CardDescription>Tela para definir perfis de acesso</CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={4 / 3} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Shield className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Screenshot - Configuração de Permissões</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>

      {/* Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades Disponíveis</CardTitle>
          <CardDescription>Principais recursos do módulo de usuários</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <UserPlus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Cadastro de Usuários</h4>
                  <p className="text-sm text-muted-foreground">Criação de novos usuários com dados completos e validação de campos obrigatórios.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Controle de Permissões</h4>
                  <p className="text-sm text-muted-foreground">Definição granular de acessos por módulo e funcionalidade do sistema.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Settings className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Configuração de Comissões</h4>
                  <p className="text-sm text-muted-foreground">Definição de percentuais de comissão para vendedores por produto ou categoria.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Key className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Gestão de Senhas</h4>
                  <p className="text-sm text-muted-foreground">Alteração de senhas, definição de políticas e controle de acesso temporário.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trash2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Exclusão de Cadastros</h4>
                  <p className="text-sm text-muted-foreground">Remoção segura de usuários com validação de dependências no sistema.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Auditoria de Acesso</h4>
                  <p className="text-sm text-muted-foreground">Histórico de logins e ações realizadas por cada usuário no sistema.</p>
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
          <CardDescription>Dúvidas comuns sobre gestão de usuários</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Como criar um usuário com acesso limitado?</AccordionTrigger>
              <AccordionContent>
                No cadastro do usuário, selecione o perfil "Operador de Caixa" ou "Vendedor" ao invés de "ADMIN". 
                Em seguida, na aba "Permissões", desmarque os módulos que o usuário não deve acessar. 
                Você pode customizar as permissões módulo por módulo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>Como configurar comissões para vendedores?</AccordionTrigger>
              <AccordionContent>
                Na tela de cadastro do vendedor, acesse a aba "Comissões". Você pode definir um percentual geral 
                ou percentuais específicos por categoria de produto. As comissões são calculadas automaticamente 
                nas vendas e aparecem nos relatórios de comissões.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger>O que acontece ao excluir um usuário?</AccordionTrigger>
              <AccordionContent>
                Antes de excluir, o sistema verifica se existem vendas ou movimentações vinculadas ao usuário. 
                Se existirem, você pode optar por desativar o usuário (recomendado) ou transferir os registros 
                para outro usuário ativo antes da exclusão definitiva.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger>Como recuperar senha de usuário?</AccordionTrigger>
              <AccordionContent>
                Usuários ADMIN podem resetar senhas de outros usuários na tela de gestão. O usuário receberá 
                uma senha temporária que deve ser alterada no primeiro login. Para usuário ADMIN, 
                entre em contato com o suporte técnico.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
