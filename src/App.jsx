import { useState, useEffect } from "react";
import Header from "./1Header/Header";
import Main from "./2Main/Main";
import Footer from "./3Footer/Footer";
import More from "./components/More";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cellular from "./Folder/Page2/Cellular/Cellular";
import Profiled from "./Folder/Page2/Profiled/Profiled";
import Accessroies from "./Folder/Page2/Aksesuar/Accessories";
import Naves from "./Folder/Page3/Naves/Naves";
import Greenhouse from "./Folder/Page3/GreenHouse/Greenhouse";
import styled from "styled-components";
import { BounceLoader } from "react-spinners";
import Gazebos from "./Folder/Page3/Gazebos/Gazebos";
import Obstacles from "./Folder/Page3/Obstacles/Obstacles";
import Agriculture from "./Folder/Page3/Agriculture/Agriculture";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader>
          <BounceLoader color="#179bd7" loading={loading} size={80} />
        </Loader>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route>
              <Route exact path="/" element={<Main />} />
              <Route path="/more-info/" element={<More />} />
              <Route path="/cellular-polycarbonate/" element={<Cellular />} />
              <Route path="/profiled-polycarbonate/" element={<Profiled />} />
              <Route path="/accessories/" element={<Accessroies />} />
              <Route path="/naveslar/" element={<Naves />} />
              <Route path="/issiqxonalar/" element={<Greenhouse />} />
              <Route path="/gazebos/" element={<Gazebos />} />
              <Route path="/tosiqlar/" element={<Obstacles />} />
              <Route path="/qishloq-xojaligi/" element={<Agriculture />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
