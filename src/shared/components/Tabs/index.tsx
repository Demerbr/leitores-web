// components/Tabs.tsx
import * as RadixTabs from '@radix-ui/react-tabs';
import React from 'react';

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
};

type TabProps = {
  value: string;
  children: React.ReactNode;
};

type TabContentProps = {
  value: string;
  children: React.ReactNode;
};

const Tabs = ({ defaultValue, children }: TabsProps) => (
  <RadixTabs.Root defaultValue={defaultValue}>
    {children}
  </RadixTabs.Root>
);

const TabsList = ({ children }: { children: React.ReactNode }) => (
  <RadixTabs.List className="flex border-b border-accent">
    {children}
  </RadixTabs.List>
);

const TabTrigger = ({ value, children }: TabProps) => (
  <RadixTabs.Trigger
    value={value}
    className="px-4 py-2 text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 data-[state=active]:bg-accent data-[state=active]:font-bold"
  >
    {children}
  </RadixTabs.Trigger>
);

const TabContent = ({ value, children }: TabContentProps) => (
  <RadixTabs.Content value={value} className="py-4">
    {children}
  </RadixTabs.Content>
);

Tabs.List = TabsList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;