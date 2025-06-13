
import { PDVHeader } from './pdv/PDVHeader';
import { PDVTutorialVideo } from './pdv/PDVTutorialVideo';
import { PDVModuleGrid } from './pdv/PDVModuleGrid';
import { PDVScreenshots } from './pdv/PDVScreenshots';
import { PDVCashModule } from './pdv/PDVCashModule';
import { PDVSalesFlow } from './pdv/PDVSalesFlow';
import { PDVCashClosing } from './pdv/PDVCashClosing';
import { PDVFAQ } from './pdv/PDVFAQ';
import { PDVTips } from './pdv/PDVTips';

export function PDV() {
  return (
    <div className="space-y-8">
      <PDVHeader />
      <PDVTutorialVideo />
      <PDVModuleGrid />
      <PDVScreenshots />
      <PDVCashModule />
      <PDVSalesFlow />
      <PDVCashClosing />
      <PDVFAQ />
      <PDVTips />
    </div>
  );
}
