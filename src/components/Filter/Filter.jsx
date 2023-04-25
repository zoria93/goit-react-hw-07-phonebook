import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { Label, Span, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilters = e => {
    const phones = e.target.value;
    dispatch(changeFilter(phones));
  };

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" name="filter" onChange={handleChangeFilters} />
    </Label>
  );
};
