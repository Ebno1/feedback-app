import { useDispatch } from "react-redux";
import { formAction } from "../store/FormdataReducer";
import Card from "../UI/Card";
import classes from './sreview.module.css';

const Sreview=(props)=>{
    const dispatcher = useDispatch()
    const deleteHandler=()=>{
        dispatcher(formAction.remove(props.id))
    }
    const editHandler=()=>{
        dispatcher(formAction.edit(props.id))
    }
    return <Card className={classes.cont}>
        <div className={classes.review}>{props.rate}</div>
        <p>{props.message}</p>
        <button className={classes.closer} onClick={deleteHandler}>&#2612;</button>
        <button className={classes.editer} onClick={editHandler}>&#2612;</button>
    </Card>
}

export default Sreview;