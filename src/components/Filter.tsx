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
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>$5.00</td>
            <td>Utilities</td>
            <td>
              <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
