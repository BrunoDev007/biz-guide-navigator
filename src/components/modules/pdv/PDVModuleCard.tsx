
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Keyboard, LucideIcon } from 'lucide-react';

interface PDVModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  keyboardShortcuts: string[];
  steps: string[];
}

export function PDVModuleCard({ title, description, icon: Icon, color, keyboardShortcuts, steps }: PDVModuleCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className={`inline-flex p-3 rounded-lg ${color} text-white w-fit`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Atalhos de Teclado */}
          <div>
            <p className="text-sm font-medium mb-2 flex items-center">
              <Keyboard className="h-4 w-4 mr-1" />
              Atalhos de Teclado:
            </p>
            <div className="flex flex-wrap gap-1">
              {keyboardShortcuts.map((shortcut, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {shortcut}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Passos */}
          <div>
            <p className="text-sm font-medium mb-2">Passos:</p>
            <ol className="space-y-1">
              {steps.map((step, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
