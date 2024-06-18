
const Button = ({value,icons}:{value:string, icons:React.ReactNode}) => {
  return (
    <button className="bg-[#08c1b0] py-3 px-6 m-1 rounded-lg  hover:-translate-y-1 hover:bg-[#af4133] transition-all flex gap-2"> {icons} {value}</button>
  )
}

export default Button;