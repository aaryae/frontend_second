import { LogIn } from "lucide-react"

const Login = () => {
  return (
    <div className="flex gap-1 justify-center items-center cursor-pointer">
        <LogIn color="#08c1b0" size={16}/>
        <span className="tracking-wider" >login</span>
    </div>
  )
}

export default Login