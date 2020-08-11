import React, { useState } from 'react';

const useSelect = (stateStart, options) => {
  // state custom hook
  const [state, updateState] = useState(stateStart);

  const SelectNews = () => (
    <select
      className='browser-default'
      value={state}
      onChange={(e) => updateState(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNews];
};

export default useSelect;
