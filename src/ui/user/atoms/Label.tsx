
const Label = ({value}:{value:string}) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={value}>
              {value}
            </label>
  )
}

export default Label