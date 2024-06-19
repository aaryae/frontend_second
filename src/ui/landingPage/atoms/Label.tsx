const Label = ({ value,required=true}: { value: string,required?:boolean }) => {
  return (
    <label className='block text-gray-700 text-sm font-bold mb-2 uppercase tracking-wide' htmlFor={value}>
      {value} {required?<span className="text-red-700">*</span>:''}
    </label>
  )
}

export default Label
