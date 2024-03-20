import { categories } from '../constants/categories';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      aria-label='Select your country'
      id='category'
      name='category'
      className='form-select'
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value=''>All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
