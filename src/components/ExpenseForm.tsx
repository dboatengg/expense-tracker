import { categories } from '../constants/categories';

const Form = () => {
  return (
    <>
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
            Amount
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
          <select id='category' className='form-select'>
            <option value=''></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </>
  );
};

export default Form;
