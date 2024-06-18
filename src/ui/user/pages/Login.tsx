import { ArrowDownLeft } from "lucide-react"
import ButtonSecondary from "../atoms/ButtonSecondary"
import HeadingSecondary from "../atoms/HeadingSecondary"
import Label from "../atoms/Label"

const Login = () => {
  return (
 
        <div className="flex items-center justify-center py-72 bg-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" >
        <HeadingSecondary value="Login"/>
        <form>
          <div className="mb-4">
            <Label value="username"/>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <Label value="password"/>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
           <ButtonSecondary theme={false} value="Sign In" icons={<ArrowDownLeft/>}/>
          </div>
        </form>
      </div>
    </div>
  
  )
}

export default Login