import React from 'react';

const Dropdown = ({ title, options,func }) => {
  return (
    <div className="relative inline-block w-48">
    

      <select
        defaultValue="0" onChange={func}
        name="format"
        className="w-full p-2 pr-8 text-zinc-200 bg-[] border border-zinc-600 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-[#6557cc] focus:border-[#6557cc]
                   cursor-pointer appearance-none hover:bg-[#1f1e24] transition-colors"
      >
       <option value="0"  disabled>
        {title}
       </option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

     
    </div>
  );
};

export default Dropdown;
