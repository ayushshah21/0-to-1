import { useState } from "react";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-4">
    <RevenueCard title={"Amount Pending"} amount={'333,932.42'} orderCount={15}/>
    </div>
  );
}

export default App;
