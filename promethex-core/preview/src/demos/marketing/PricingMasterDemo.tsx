import { PricingMaster } from '@promethex/core'

export default function PricingMasterDemo() {
  return (
    <PricingMaster
      onSelectStarter={() => console.log('Starter selected')}
      onSelectBusiness={() => console.log('Business Pro selected')}
      onSelectElite={() => console.log('Elite Corporate selected')}
    />
  )
}
