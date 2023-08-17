import { useEffect, useState } from "react";

import MonthsCircle from "./components/Circle/MonthsCircle";
import DaysCircle from "./components/Circle/DaysCircle";
import getMonths from "./hooks/getMonths";
import "./App.css";

function App() {
  const [numberOfMonth, setNumberOfMonth] = useState(0);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    let months = getMonths("1-1-2023", "12-1-2023");
    setMonths(months);
  }, []);

  return (
    <>
      <div id="container">
        <MonthsCircle
          months={months}
          setNumberOfMonth={setNumberOfMonth}
          numberOfMonth={numberOfMonth}
        />
        <DaysCircle months={months} numberOfMonth={numberOfMonth} />
      </div>
    </>
  );
}

export default App;
