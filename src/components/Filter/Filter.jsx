import { FilterField, Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterAction } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <Wrapper>
      <FilterField
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="filter by name"
      />
    </Wrapper>
  );
};
