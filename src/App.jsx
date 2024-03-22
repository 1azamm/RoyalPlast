import React from "react";
import Header from "./1Header/Header";
import Main from "./2Main/Main";
import Footer from "./3Footer/Footer";
import More from "./components/More";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cellular from "./Folder/Page2/Cellular/Cellular";
import Profiled from "./Folder/Page2/Profiled/Profiled";
import Accessroies from "./Folder/Page2/Aksesuar/Accessories";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route exact path="/" element={<Main />} />
            <Route path="/more-info/" element={<More />} />
            <Route path="/cellular-polycarbonate/" element={<Cellular />} />
            <Route path="/profiled-polycarbonate/" element={<Profiled />} />
            <Route path="/accessories/" element={<Accessroies />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
