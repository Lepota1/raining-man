import { SearchBar } from "./components/SearchBar";

import cityNames from "./assets/cityNames.json";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="flex flex-row justify-between   w-full ">
      <SearchBar data={cityNames} />
      <Calendar />
    </div>
  );
}

export default App;
