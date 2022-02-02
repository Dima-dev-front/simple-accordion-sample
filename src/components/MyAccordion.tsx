import React, { useState } from 'react';
import { Accordion, InputGroup, FormControl } from 'react-bootstrap';

interface Item {
  id: string;
  title: string;
  content: string;
}

interface Props {
  items: Item[];
  editItemTitle: (id: string, title: string) => void;
}

export const MyAccordion = ({ items, editItemTitle }: Props) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [editItemId, setEditItemId] = useState('');
  const [editTitleValue, setEditTitleValue] = useState('');

  const selectItemHandler = (id: string) => () => {
    setSelectedItem((prevId) => (prevId === id ? '' : id));
  };

  const titleClickHandler =
    (id: string, title: string) => (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      setEditItemId(id);
      setEditTitleValue(title);
    };

  const inputClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitleValue(e.target.value);
  };

  const onInputBlurHandler = () => {
    editItemTitle(editItemId, editTitleValue);
    setEditItemId('');
  };

  const onHeaderKeyDownHandler = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.stopPropagation();
    if (e.code === 'Tab' || e.code === 'Enter') {
      editItemTitle(editItemId, editTitleValue);
      setEditItemId('');
      return;
    }

    if (e.code === 'Escape') {
      setEditItemId('');
    }
  };

  return (
    <Accordion activeKey={selectedItem}>
      {items.map(({ id, title, content }) => (
        <Accordion.Item eventKey={id} key={id} onClick={selectItemHandler(id)}>
          <Accordion.Header>
            {id === editItemId ? (
              <InputGroup onClick={inputClickHandler}>
                <FormControl
                  value={editTitleValue}
                  onChange={inputChangeHandler}
                  onBlur={onInputBlurHandler}
                  onKeyDown={onHeaderKeyDownHandler}
                />
              </InputGroup>
            ) : (
              <span onClick={titleClickHandler(id, title)}>{title}</span>
            )}
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
