import {Route, Routes} from 'react-router-dom'
import './App.css';
import {CheckingForPhishingURLs} from "./pages/CheckingForPhishingURLs/CheckingForPhishingURLs"
import GeneratorSafetyPasswords from "./pages/GeneratorSafetyPasswords/GeneratorSafetyPasswords"
function App() {
  return (
    <Routes>
          <Route path="/CheckingForPhishingURLs" element={<CheckingForPhishingURLs />} />
          <Route path="/GeneratorSafetyPasswords" element={<GeneratorSafetyPasswords />} />
        </Routes>
  );
}

export default App;

