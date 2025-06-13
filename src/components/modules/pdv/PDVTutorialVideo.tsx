
import { Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function PDVTutorialVideo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Play className="h-5 w-5 mr-2" />
          Tutorial Completo - PDV
        </CardTitle>
        <CardDescription>
          Aprenda a usar todas as funcionalidades do sistema PDV
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Vídeo Tutorial - PDV Completo</p>
            <p className="text-sm">Duração: 25 minutos</p>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
