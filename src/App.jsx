import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/why-us" element={<InfoPage />} />
      <Route path="/process" element={<InfoPage />} />
      <Route path="/contact" element={<InfoPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
