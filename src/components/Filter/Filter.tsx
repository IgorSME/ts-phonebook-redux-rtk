import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeFilterValue } from '../../Redux/filterSlice';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import React from 'react';

export const Filter =() =>{
  const dispatch = useDispatch();
  const value = useSelector(changeFilterValue);
  const onChangeFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}
