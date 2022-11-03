import React from 'react'

const InputCheckboxes = ({
    label,
    data
}) => {
    return (
        <div className='relative w-full'>
            <h3 class="mb-4 font-semibold text-gray-900">{label}</h3>
            <ul class="w-full h-48 overflow-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                {
                    Array(data.length).fill().map((_, index) => (
                        <li class="w-full rounded-t-lg border-b border-gray-200" key={index}>
                            <div class="flex items-center pl-3">
                                <input id={data[index]} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" />
                                <label for={data[index]} class="py-3 ml-2 w-full text-sm font-medium text-gray-900 cursor-pointer">{data[index]}</label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default InputCheckboxes