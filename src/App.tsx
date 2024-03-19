import { useState } from "react";
import { MyContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export type MyContextProps = {
  close: boolean;
  setClose: (value: boolean) => void;
};

function App() {
  const [close, setClose] = useState<boolean>(true);

  return (
    <MyContext.Provider value={{ close, setClose }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Destinations />} />
          <Route path="" element={<Crew />} />
          <Route path="" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
