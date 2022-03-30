import { useField, useFormikContext } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function MyDateInput({ label, ...props }) {
  const {setFieldValue} = useFormikContext();
  const [field, meta] = useField(props);


  return (
    <div className="flex flex-col" error={meta.touched && meta.error ? 1 : 0}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && meta.error ? (
        <label className='text-red-600'>{meta.error}</label>
      ) : null}
    </div>
  )
}