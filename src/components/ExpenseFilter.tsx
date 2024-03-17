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
      <option value='Groceries'>Groceries</option>
      <option value='Utilities'>Utilities</option>
      <option value='Entertainment'>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
