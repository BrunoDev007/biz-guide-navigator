
import { PDVModuleCard } from './PDVModuleCard';
import { 
  Monitor, 
  ShoppingCart, 
  Settings, 
  CreditCard, 
  X, 
  Users, 
  Package, 
  FileText 
} from 'lucide-react';

const pdvModules = [
  {
    id: 'main-screen',
    title: 'Tela Principal',
    description: 'Interface principal do PDV com abertura de caixa',
    icon: Monitor,
    color: 'bg-blue-500',
    keyboardShortcuts: ['F1 - Ajuda', 'F2 - Cliente', 'F3 - Produtos'],
    steps: [
      'Verificar se o caixa está aberto',
      'Clicar em "OK" se aparecer mensagem de caixa fechado',
      'Informar valor de abertura do caixa',
      'Confirmar com "OK" para iniciar vendas'
    ]
  },
  {
    id: 'sales',
    title: 'Vendas',
    description: 'Realizar vendas, importar orçamentos e editar pedidos',
    icon: ShoppingCart,
    color: 'bg-green-500',
    keyboardShortcuts: ['F5 - Pagamento', 'F2 - Cliente', 'F3 - Produtos', 'F4 - Desconto'],
    steps: [
      'Adicionar itens à venda',
      'Selecionar cliente (opcional)',
      'Pressionar F5 ou clicar em "Pagamento"',
      'Escolher forma de pagamento',
      'Finalizar venda'
    ]
  },
  {
    id: 'other-operations',
    title: 'Outras Operações',
    description: 'Orçamentos, faturamento e devoluções',
    icon: Settings,
    color: 'bg-purple-500',
    keyboardShortcuts: ['F6 - Orçamento', 'F7 - Faturar', 'F8 - Devolução'],
    steps: [
      'Criar orçamentos para clientes',
      'Faturar notas fiscais',
      'Processar devoluções',
      'Editar pedidos existentes'
    ]
  },
  {
    id: 'payment',
    title: 'Pagamento',
    description: 'Finalização de vendas com diferentes formas de pagamento',
    icon: CreditCard,
    color: 'bg-indigo-500',
    keyboardShortcuts: ['F5 - Confirmar', 'F9 - Desconto', 'ESC - Cancelar'],
    steps: [
      'Selecionar forma de pagamento',
      'Aplicar desconto (se permitido)',
      'Confirmar valores',
      'Registrar pagamento'
    ]
  },
  {
    id: 'cancel',
    title: 'Cancelar',
    description: 'Cancelamento de vendas em andamento',
    icon: X,
    color: 'bg-red-500',
    keyboardShortcuts: ['ESC - Cancelar', 'F10 - Confirmar'],
    steps: [
      'Pressionar ESC durante a venda',
      'Informar motivo do cancelamento',
      'Confirmar cancelamento',
      'Retornar à tela principal'
    ]
  },
  {
    id: 'clients',
    title: 'Clientes',
    description: 'Cadastro e gestão de clientes',
    icon: Users,
    color: 'bg-cyan-500',
    keyboardShortcuts: ['F2 - Selecionar', 'F11 - Novo', 'F12 - Editar'],
    steps: [
      'Buscar cliente existente',
      'Cadastrar novo cliente',
      'Editar dados do cliente',
      'Vincular à venda atual'
    ]
  },
  {
    id: 'products',
    title: 'Produtos',
    description: 'Consulta de produtos, estoque e preços',
    icon: Package,
    color: 'bg-orange-500',
    keyboardShortcuts: ['F3 - Buscar', 'ENTER - Selecionar', 'TAB - Próximo'],
    steps: [
      'Buscar por código ou nome',
      'Verificar estoque disponível',
      'Consultar preço de venda',
      'Adicionar à venda'
    ]
  },
  {
    id: 'notes',
    title: 'Notas',
    description: 'Consulta e reimpressão de vendas',
    icon: FileText,
    color: 'bg-teal-500',
    keyboardShortcuts: ['F4 - Consultar', 'F6 - Imprimir', 'F8 - Cancelar'],
    steps: [
      'Consultar vendas do dia',
      'Filtrar por data específica',
      'Imprimir 2ª via',
      'Cancelar vendas (se permitido)'
    ]
  }
];

export function PDVModuleGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdvModules.map((module, index) => (
          <PDVModuleCard
            key={index}
            title={module.title}
            description={module.description}
            icon={module.icon}
            color={module.color}
            keyboardShortcuts={module.keyboardShortcuts}
            steps={module.steps}
          />
        ))}
      </div>
    </div>
  );
}
