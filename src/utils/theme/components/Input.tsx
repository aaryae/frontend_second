import inputtype from '@interface/components.interface'

const Input = ({ type, placeholder, id }: inputtype) => {
  return (
    <>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  )
}

export default Input
