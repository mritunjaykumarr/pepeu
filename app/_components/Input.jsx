'use client'
function Input({ placeholder, name, type, value, handleChange }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="bg-[#333] rounded-sm h-10 text-white p-2 py-2 outline-none"
    />
  );
}

export default Input;
