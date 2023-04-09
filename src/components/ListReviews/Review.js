import { useSelector } from "react-redux";

import Sreview from "./Sreview";

const Review=()=>{
    const enteredData = useSelector(state=>state.formdata)
    return(
        <div>
            {enteredData.saved.map(item=>{
                return <Sreview key={item.id} id={item.id} rate={item.rate} message={item.message} />
            })}
        </div>
    )
}

export default Review;