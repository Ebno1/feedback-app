import Card from "../UI/Card";
import RateNum from "./RateNum";
import MessageInp from "./MessageInp";
import classes from './dataentry.module.css';

const DataEntry=(props)=>{
    const clickHandler=()=>{
        props.dataHandler()
    }
    return (
        <Card className={classes.card}>
            <h2>How would you rate your experiance?</h2>
            <RateNum />
            <MessageInp onClick={clickHandler} />
        </Card>
    )
}

export default DataEntry;