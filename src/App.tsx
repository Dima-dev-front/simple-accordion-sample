import React, { useState } from 'react';
import { MyAccordion } from './components/MyAccordion';

const initialItems = [
  {
    id: 'item-1',
    title: 'Accordion Item #1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at molestie neque. Vestibulum varius libero sit amet odio maximus ultricies',
  },
  {
    id: 'item-2',
    title: 'Accordion Item #2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at molestie neque. Vestibulum varius libero sit amet odio maximus ultricies',
  },
  {
    id: 'item-3',
    title: 'Accordion Item #3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at molestie neque. Vestibulum varius libero sit amet odio maximus ultricies',
  },
  {
    id: 'item-4',
    title: 'Accordion Item #4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at molestie neque. Vestibulum varius libero sit amet odio maximus ultricies',
  },
  {
    id: 'item-5',
    title: 'Accordion Item #5',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at molestie neque. Vestibulum varius libero sit amet odio maximus ultricies',
  },
];

export const App = () => {
  const [items, setItems] = useState(initialItems);

  const editItemTitle = (id: string, title: string) => {
    setItems((prevItems) => {
      const ind = prevItems.findIndex((item) => item.id === id);

      return [
        ...prevItems.slice(0, ind),
        { ...prevItems[ind], title },
        ...prevItems.slice(ind + 1),
      ];
    });
  };

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row align-items-center" style={{ height: '100%' }}>
        <div className="col">
          <MyAccordion items={items} editItemTitle={editItemTitle} />
        </div>
      </div>
    </div>
  );
};
