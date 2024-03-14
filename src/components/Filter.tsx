const Filter = () => {
  return (
    <div className='container mt-5'>
      <form className=''>
        <div className='mb-3'>
          <select
            aria-label='Select your country'
            id='category'
            name='category'
            className='form-control'
          >
            <option value='all'>All categories</option>
            <option value='volvo'>Groceries</option>
            <option value='saab'>Utilities</option>
            <option value='mercedes'>Entertainment</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
