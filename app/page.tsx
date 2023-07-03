'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Mars } from '@/components/Mars';
import { TabsContainer } from '@/components/TabsContainer';
import { RoverName } from '../types/photo.interface';
import styles from './page.module.css';

export default function Home() {
  const [tabs, setTabs] = useState<string[]>([]);
  const [currentStatus, setCurrentStatus] = useState<RoverName>(
    RoverName.Curiosity
  );

  const tabPanels = [
    <Mars
      key={RoverName.Curiosity}
      name={RoverName.Curiosity}
      status={currentStatus}
    />,
    <Mars
      key={RoverName.Opportunity}
      name={RoverName.Opportunity}
      status={currentStatus}
    />,
    <Mars
      key={RoverName.Spirit}
      name={RoverName.Spirit}
      status={currentStatus}
    />,
  ];

  const handleClickTab = (option: string): void =>
    setCurrentStatus(option as RoverName);

  useEffect(() => {
    setTabs(Object.values(RoverName));
  }, []);

  return (
    <ChakraProvider>
      <main className={styles.main}>
        <TabsContainer
          padding={0}
          tabListProps={{ backgroundColor: 'grey6', paddingInline: 6 }}
          tabProps={{
            fontSize: 13,
            paddingLeft: '0px',
            paddingRight: '0px',
            marginLeft: '20px',
            _selected: {
              color: 'gray90',
              fontWeight: 'bold',
              borderBottom: '2px solid var(--chakra-colors-mvmntBlue)',
            },
          }}
          tabPanelProps={{ backgroundColor: 'white' }}
          tabList={tabs}
          tabPanels={tabPanels}
          onClickTab={handleClickTab}
        />
      </main>
    </ChakraProvider>
  );
}
