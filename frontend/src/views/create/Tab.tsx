import React from 'react';
import Import from '@/views/create/Import';
import New from '@/views/create/New';
import { Tabs } from "@chakra-ui/react"
import Private from '@/views/create/Private';
function Tab() {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-[16px] w-full">
      <div className="font-normal text-[24px] text-[#1A202C] leading-[31px] text-center not-italic max-w-[380px] mb-[35px]">
        Your LND Node Operation Information
      </div>
      <Tabs.Root defaultValue="import" variant="outline" justify="center" className="w-[480px]">
        <Tabs.List bg="bg.muted" rounded="l3" p="1">
          <Tabs.Trigger value="new" className="px-[12px]">
            New Wallet
          </Tabs.Trigger>
          <Tabs.Trigger value="import" className="px-[12px]">
            Your Own Mnemonic
          </Tabs.Trigger>
          <Tabs.Trigger value="private" className="px-[12px]">
            Your own private key
          </Tabs.Trigger>
          <Tabs.Indicator rounded="l2" />
        </Tabs.List>
        <Tabs.Content value="import"><Import/></Tabs.Content>
        <Tabs.Content value="new"><New/></Tabs.Content>
        <Tabs.Content value="private"><Private/></Tabs.Content>
      </Tabs.Root>
    </div>

  )
}

export default Tab
