import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../store/FormdataReducer";
import classes from "./message.module.css";
import { upload_Data } from "../store/FormdataReducer";
import { replace } from "../store/FormdataReducer";

const MessageInp = (props) => {
  const { feedBackNum, message, saved: savedArrData , averageRating} = useSelector((state) => state.formdata);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(formAction.enterMessage(e.target.value));
  };

  useEffect(()=>{
    dispatch(upload_Data({savedArrData, averageRating}))
  },[savedArrData, averageRating, dispatch])

  useEffect(()=>{
    dispatch(replace())
  },[dispatch])

  const submitHandler = () => {
    dispatch(
      formAction.submitRating({
        id: Math.random(),
        message: message,
        rate: feedBackNum,
      })
    );
  };

  const isValid = feedBackNum && message.length >= 10
  
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="enter your text"
        onChange={changeHandler}
        className={classes.input}
        value={message}
      />
      <button className={classes.button} onClick={submitHandler} disabled={!isValid}>
        Submit
      </button>
    </div>
  );
};

export default MessageInp;
