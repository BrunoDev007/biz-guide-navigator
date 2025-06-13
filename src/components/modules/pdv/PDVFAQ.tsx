
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function PDVFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perguntas Frequentes - PDV</CardTitle>
        <CardDescription>Dúvidas comuns sobre o uso do sistema PDV</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>O que fazer se o caixa não abrir?</AccordionTrigger>
            <AccordionContent>
              Se aparecer a mensagem de caixa fechado, clique em "OK", informe o valor de abertura 
              (geralmente o troco deixado no caixa) e confirme. O sistema estará pronto para vendas.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="faq-2">
            <AccordionTrigger>Como aplicar desconto em uma venda?</AccordionTrigger>
            <AccordionContent>
              Na tela de pagamento, procure o campo "Desconto" ou pressione F9. Você pode aplicar 
              desconto em valor (R$) ou percentual (%). Atenção: alguns usuários podem não ter 
              permissão para aplicar descontos.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="faq-3">
            <AccordionTrigger>Como cancelar uma venda já finalizada?</AccordionTrigger>
            <AccordionContent>
              Acesse o módulo "Notas", localize a venda pelo número ou data, e clique em "Cancelar". 
              Você precisará informar o motivo do cancelamento. Atenção: nem todos os usuários 
              têm permissão para cancelar vendas.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="faq-4">
            <AccordionTrigger>Qual a diferença entre Sangria e Suprimento?</AccordionTrigger>
            <AccordionContent>
              <strong>Sangria:</strong> Saída de dinheiro do caixa para pagamentos externos 
              (ex: compra de material). <br/>
              <strong>Suprimento:</strong> Entrada de dinheiro no caixa sem ser venda 
              (ex: troco deixado pelo proprietário).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="faq-5">
            <AccordionTrigger>Como consultar o crediário de um cliente?</AccordionTrigger>
            <AccordionContent>
              No módulo Caixa, selecione "Crediário". Digite o nome ou código do cliente para 
              visualizar todas as dív idas pendentes. Você pode receber pagamentos parciais ou 
              totais diretamente nesta tela.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
