interface buttontype{
   value: string; 
   icons: React.ReactNode;
   type:'button' | 'submit' | 'reset' 
  }

const Button = ({ value, icons, type }: buttontype) => {
  return (
    <button className='bg-[#991010] text-white py-3 px-6 m-1 rounded-lg  hover:-translate-y-1 hover:bg-[#742e24] transition-all flex gap-2'
    type={type}
    >
      {icons} {value}
    </button>
  )
}

export default Button
