import { Auth2 } from "./Auth2";
import { Quote } from "./Quote";

export function Signin(){
    return <div className="grid grid-cols-1 lg:grid-cols-2">

        <Auth2></Auth2>

        <div className="hidden lg:block"><Quote></Quote></div>
        
        
        </div>
}