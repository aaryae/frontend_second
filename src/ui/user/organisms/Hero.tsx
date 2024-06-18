import { image } from "@config/constant/image"
import Heading from "@ui/user/atoms/Heading"
import Paragraph from "@ui/user/atoms/Paragraph"
import UniqueHeading from "@ui/user/atoms/UniqueHeading"
import { Paperclip, ShoppingBagIcon } from "lucide-react"
import Navbar from "../../landingPage/organisms/Navbar"
import Button from "../atoms/ButtonPrimary"
import ButtonSecondary from "../atoms/ButtonSecondary"
import UserCard from "./AboutUs"

const Hero = () => {
  return (
    <>
    <div className="flex w-full justify-between relative" style={{ backgroundImage: `url(${image.landingbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className="overlay" >
    </div>
    <Navbar/>
    <div className="flex py-56 flex-col justify-center items-center text-white index gap-5 max-w-5xl mx-auto ">
       <UniqueHeading value="WELCOME TO OUR WEBSITE,"/>
        <Heading value= "Revamp Your Closet, Revitalize Your Confidence"/>
        <div className="max-w-3xl">

        <Paragraph value="Theaaryae is a fully Responsive Landing page Template in all devices for the perfect choice for your new startup or ongoing business. It is built with the latest bootstrap v5.3.2 You can simply update its contents, images, and scss according to your company info"/>
        </div>
        <div className="flex">
            <Button value="Purchase" icons={<ShoppingBagIcon/>}/>
            <ButtonSecondary theme={true} value="Documentation" icons={<Paperclip/>}/>
        </div>
    </div>
    </div>
    <UserCard/>
    </>
  )
}

export default Hero