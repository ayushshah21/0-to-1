import React from 'react'

interface InputLabelProps {
    labelName: string;
    placeholder: string;
    type?: string;
    value: string,
    onChange: (value: string) => void
  }


const InputLabel = ({ labelName, placeholder, type, value, onChange }: InputLabelProps) => {
  return (
    <div className="flex flex-col justify-start items-start mt-2">
      <label className="block text-md font-bold text-gray-900 dark:text-white">
        {labelName}
      </label>
      <input
        className="md:w-96 lg: w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="new-password"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputLabel