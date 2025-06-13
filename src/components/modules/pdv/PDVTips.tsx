
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';

export function PDVTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          Dicas Importantes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Atalhos de Teclado</AlertTitle>
            <AlertDescription>
              Use os atalhos de teclado para agilizar o atendimento. F5 para pagamento, 
              F2 para cliente, F3 para produtos são os mais utilizados.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Permissões de Usuário</AlertTitle>
            <AlertDescription>
              Nem todos os usuários têm as mesmas permissões. Descontos, cancelamentos e 
              algumas consultas podem estar restritas.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Fechamento Diário</AlertTitle>
            <AlertDescription>
              Sempre faça o fechamento do caixa ao final do expediente. Confira os valores 
              fisicamente antes de informar no sistema.
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Backup de Dados</AlertTitle>
            <AlertDescription>
              Certifique-se de que o backup dos dados está funcionando corretamente. 
              Consulte o administrador do sistema regularmente.
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
}
