import { SearchBar } from "./components/SearchBar";

import cityNames from "./assets/cityNames.json";

function App() {
  return (
    <div>
      <SearchBar data={cityNames} />
    </div>
  );
}

export default App;
