import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/CheckoutPage';
import CompletionPage from './pages/CompletionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout/:productId" element={<CheckoutPage />} />
        <Route path="/completion" element={<CompletionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
