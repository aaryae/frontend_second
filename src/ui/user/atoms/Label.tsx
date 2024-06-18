
const Label = ({value}:{value:string}) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase tracking-wide" htmlFor={value}>
              {value}
            </label>
  )
}

export default Label