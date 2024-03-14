import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  description: string;
  amount: number;
  category: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    const existingData = localStorage.getItem(data.category);
    let newData = [];
    if (existingData) {
      newData = JSON.parse(existingData);
    }
    newData.push(data);
    localStorage.setItem(data.category, JSON.stringify(newData));

    reset();
    reset({ category: '' });
  };

  return (
    <form className='container mt-4 mb-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description', { required: true, maxLength: 10 })}
          type='text'
          id='description'
          placeholder='Description here...'
          className='form-control'
        />
        {errors.description?.type === 'required' && (
          <p className='text-danger'>You left description field empty </p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { required: true })}
          type='text'
          id='amount'
          placeholder='Amount here...'
          className='form-control'
        />
        {errors.amount?.type === 'required' && (
          <p className='text-danger'>Amount is required</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='category'>Category</label>
        <select
          {...register('category', { required: true })}
          id='category'
          className='form-control'
        >
          {/* <option disabled>Choose category</option> */}
          <option value='groceries'>Groceries</option>
          <option value='utilities'>Utilities</option>
          <option value='entertainment'>Entertainment</option>
        </select>
        {errors.category?.type === 'required' && (
          <p className='text-danger'>Category is required </p>
        )}
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default Form;
