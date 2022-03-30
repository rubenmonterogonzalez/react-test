import { useField } from 'formik'
import React from 'react'

export default function MySelectInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  
  return (
    <div className="flex flex-col" error={meta.touched && meta.error ? 1 : 0}>
      <label>{label}</label>
      <select
        className="my-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400 border-[1px] px-2 focus:outline-none focus:ring-transparent focus:border-slate-200"
        value={field.value}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <label className='text-red-600'>{meta.error}</label>
      ) : null}
    </div>
  )
}
