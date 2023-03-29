import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" basename={window.location.pathname || ''}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


