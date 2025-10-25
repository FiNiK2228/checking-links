import {Route, Routes} from 'react-router-dom'
import './App.css';
import {CheckingForPhishingURLs} from "./pages/CheckingForPhishingURLs/CheckingForPhishingURLs"
function App() {
  return (
    <Routes>
          <Route path="/CheckingForPhishingURLs" element={<CheckingForPhishingURLs />} />
        </Routes>
  );
}

export default App;

