import { useSelector } from "react-redux";
import "./App.css";
import DataEntry from "./components/dataEntry/DataEntry";
import Review from "./components/ListReviews/Review";

function App() {
  const storeObj = useSelector((state) => state.formdata);
  
  return (
    <div className="App">
      <h1>FeedBack App</h1>
      <DataEntry />
      {storeObj.saved.length > 0 && (
        <div className="contFlex">
          <div>{storeObj.saved.length} Reviews</div>
          <div>Average rating: {storeObj.averageRating}</div>
        </div>
      )}
      <Review />
    </div>
  );
}

export default App;
