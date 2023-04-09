import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../store/FormdataReducer";
import classes from "./roundedButton.module.css";

const RateNum = () => {
    const dispatch = useDispatch();
    const num = useSelector(state=>state.formdata.feedBackNum)
  const clickHandler = (e) => {
    dispatch(formAction.enterNum(+e.target.value))
  };

  return (
    <ul className={classes.cont}>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="1"
          checked={num === 1}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="2"
          checked={num === 2}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="3"
          checked={num === 3}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="4"
          checked={num === 4}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="5"
          checked={num === 5}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="6"
          checked={num === 6}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="7"
          checked={num === 7}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="8"
          checked={num === 8}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="9"
          checked={num === 9}
        />
      </li>
      <li>
        <input
          type="radio"
          className={classes.rounded}
          readOnly
          onClick={clickHandler}
          value="10"
          checked={num === 10}
        />
      </li>
    </ul>
  );
};

export default RateNum;
