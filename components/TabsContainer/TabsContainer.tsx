import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  TabProps,
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TabsProps,
  BackgroundProps,
  HStack,
  StackProps,
  Text,
} from '@chakra-ui/react';

export interface TabsContainerProps extends StackProps {
  tabsProps?: Partial<TabsProps>;
  tabListProps?: Partial<TabListProps>;
  tabProps?: Partial<TabProps>;
  tabPanelsProps?: Partial<TabPanelsProps>;
  tabPanelProps?: Partial<TabPanelProps>;
  showBorderBottom?: boolean;
  containerBg?: BackgroundProps['backgroundColor'];

  tabList: string[];
  tabPanels: React.ReactChild[];
  tabPanelHeader?: React.ReactChild;
  onClickTab?: (t: string) => void;
  onTabChange?: (i: number) => void;
  defaultIndex?: number | undefined;
}

export const TabsContainer = ({
  tabsProps,
  tabListProps,
  tabProps,
  tabPanelsProps,
  tabPanelProps,
  showBorderBottom = false,
  containerBg,
  tabList,
  tabPanels,
  tabPanelHeader,
  onClickTab,
  onTabChange,
  defaultIndex,
  ...props
}: TabsContainerProps): JSX.Element => {
  return (
    <VStack
      alignItems='start'
      h='auto'
      w='100%'
      paddingInline='4rem'
      {...props}
      bgColor={containerBg}
    >
      <Tabs
        w='100%'
        h='100%'
        rounded='10px'
        {...tabsProps}
        borderBottom={showBorderBottom ? '' : 'transparent'}
        onChange={onTabChange}
        defaultIndex={defaultIndex}
      >
        <TabList {...tabListProps}>
          {tabList.map((title) => (
            <Tab key={title} {...tabProps} onClick={() => onClickTab?.(title)}>
              <Text fontSize={20}>{title}</Text>
            </Tab>
          ))}
        </TabList>
        <HStack px={4}>{tabPanelHeader}</HStack>
        <TabPanels {...tabPanelsProps}>
          {tabPanels.map((panel, i) => (
            <TabPanel key={i} {...tabPanelProps}>
              {panel}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default TabsContainer;
