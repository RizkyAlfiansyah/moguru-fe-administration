import React from 'react'

const Input = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className='w-full flex flex-col gap-2 justify-start items-start mb-4'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                pattern={type === 'tel' ? '[0-9]*' : null}
                name={name}
                placeholder={placeholder}
                className="w-full border-primary-200 border-2 rounded-lg p-1 px-2 focus:border-primary-200 focus:ring-primary-200 hover:border-primary-200 focus:outline-none placeholder:text-slate-400 placeholder:text-sm"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input