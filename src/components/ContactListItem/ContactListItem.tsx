import React from 'react';
import { Item, Phone, Button } from './ContactsListItem.styled';
import { IContactsItem } from '../../types/appTypes';

export const ContactListItem:React.FC<IContactsItem> = ({ name, number, onClick })=> {
  return (
    <Item>
      <p>
        {name}:<Phone>{number}</Phone>
      </p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
}

