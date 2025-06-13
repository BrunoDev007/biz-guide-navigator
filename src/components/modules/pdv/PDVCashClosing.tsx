
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Calculator, Equal, ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';

export function PDVCashClosing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="h-5 w-5 mr-2" />
          Fechamento de Caixa - Detalhado
        </CardTitle>
        <CardDescription>
          Processo completo de fechamento com conferência e diferenças
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center text-green-700">
                  <Equal className="h-4 w-4 mr-2" />
                  Caixa Correto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quando o valor contado é igual ao total do sistema
                </p>
                <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                  Diferença = R$ 0,00
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center text-blue-700">
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Sobra
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quando o valor contado é maior que o total do sistema
                </p>
                <Badge variant="outline" className="mt-2 text-blue-600 border-blue-600">
                  Diferença = + R$ XX,XX
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center text-red-700">
                  <ArrowDown className="h-4 w-4 mr-2" />
                  Falta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quando o valor contado é menor que o total do sistema
                </p>
                <Badge variant="outline" className="mt-2 text-red-600 border-red-600">
                  Diferença = - R$ XX,XX
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              O campo "Conferência" deve ser preenchido com o valor realmente contado no caixa.
              O sistema calculará automaticamente a diferença e indicará se há sobra ou falta.
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
}
