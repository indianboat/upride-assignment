const CustomRadioButton = ({ onChange, values, selectedOption }) => {
  return (
    <div className='flex bg-neutral-200 rounded-full p-1 gap-x-2'>
      <label className={`cursor-pointer rounded-full py-2 px-4 ${selectedOption === 'active'
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 text-gray-600'
        }`}>
        <input
          type="radio"
          className="hidden text-blue-500"
          value={values[0]}
          checked={selectedOption === values[0]}
          onChange={onChange}
        />
        <span className="ml-2">Active</span>
      </label>
      <label className={`cursor-pointer rounded-full py-2 px-4 ${selectedOption === 'completed'
        ? 'bg-green-500 text-white'
        : 'bg-gray-200 text-gray-600'
        }`}>
        <input
          type="radio"
          className="hidden text-green-500"
          value={values[1]}
          checked={selectedOption === values[1]}
          onChange={onChange}
        />
        <span className="ml-2">Completed</span>
      </label>
      <label className={`cursor-pointer rounded-full py-2 px-4 ${selectedOption === 'cancelled'
        ? 'bg-red-500 text-white'
        : 'bg-gray-200 text-gray-600'
        }`}>
        <input
          type="radio"
          className="hidden text-red-500"
          value={values[2]}
          checked={selectedOption === values[2]}
          onChange={onChange}
        />
        <span className="ml-2">Cancelled</span>
      </label>
    </div>
  );
};

export default CustomRadioButton;
