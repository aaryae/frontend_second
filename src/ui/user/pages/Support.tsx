import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const Support = () => {
  return (
    <>
       <div className="bg-[#b5aa6f3b] py-60"
       
      >
        <div className="index  max-w-7xl mx-auto">
          <Heading value="Support Us" />
          <hr className="bg-black h-1"/>
          <div className="py-20">
            <Paragraph
              value="A nice thank you gives them a sense that your company cares about their business and wants them to have a positive experience with your brand even after the transaction is complete. You can never underestimate the value of customer appreciation!"
            />
            <Paragraph value="When your customers have a generally positive experience before and after their purchase, not only are they more likely to buy again, but they are also more likely to recommend your brand to a friend. However, you say “thank you for your business,” messages like this add to that experience and create stronger business relationships and a higher probably of converting them to repeat customers."/>
          
          </div>
            <hr />
          <div className="flex  gap-3 text-center justify-center items-center w-full p-4">
           <Link to="https://www.facebook.com/">
           <Facebook/>
           </Link>
           
            <Link to="https://www.instagram.com/">
            
            <Instagram/>
            </Link>
            <Link to="https://www.twitter.com/">
            
            <TwitterIcon/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
