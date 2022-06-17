
import "./App.css";
import data from "./components/data.js"
import TravelCard from "./components/TravelCard.js";


export default function App() {
  const travelJournalItems = data.map(item => {
    return <TravelCard 
    key={item.id}
    item={item} />
    
  })
  return (
    <>
      {travelJournalItems}
      
    </>
  );
}

