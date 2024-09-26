import React, { useId } from 'react'

const Input = React.forwardRef(function Input( {label, type='type', className='', ...props}, ref){
    const id= useId();

    return(
        <div className='w-full'>
            {label&& <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-50 w-full ${className}`} id={id} type={type} ref={ref} {...props}/>
        </div>
    )

})

export default Input
