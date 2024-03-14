import { FormEvent } from 'react';

const Form = () => {
  const handleClick = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className='container mt-4 mb-4'>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          type='text'
          id='description'
          placeholder='Description here...'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Description
        </label>
        <input
          type='text'
          id='amount'
          placeholder='Amount here...'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='category'>Category</label>
        <select id='category' name='category' className='form-control'>
          <option disabled>Choose category</option>
          <option value='volvo'>Groceries</option>
          <option value='saab'>Utilities</option>
          <option value='mercedes'>Entertainment</option>
        </select>
      </div>
      <button onClick={handleClick} className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
