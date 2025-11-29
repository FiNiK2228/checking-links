import {Route, Routes} from 'react-router-dom'
import './App.css';
import {CheckingForPhishingURLs} from "./pages/CheckingForPhishingURLs/CheckingForPhishingURLs"
import GeneratorSafetyPasswords from "./pages/GeneratorSafetyPasswords/GeneratorSafetyPasswords"
import {SecurityChecklist} from "./pages/SecurityChecklist/SecurityChecklist"
function App() {
  return (
    <Routes>
          <Route path="/CheckingForPhishingURLs" element={<CheckingForPhishingURLs />} />
          <Route path="/GeneratorSafetyPasswords" element={<GeneratorSafetyPasswords />} />
          <Route path="/SecurityChecklist" element={<SecurityChecklist />} />
        </Routes>
  );
}

export default App;

