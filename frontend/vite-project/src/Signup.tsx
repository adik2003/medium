
import { Auth } from "./Auth";
import { Quote } from "./Quote";

export function Signup(){
    return <>
   <div className="grid grid-cols-1 lg:grid-cols-2 ">

    <Auth></Auth>
    <div className="hidden lg:block">  <Quote></Quote></div>
 
   </div>
  
    </>
    
}
