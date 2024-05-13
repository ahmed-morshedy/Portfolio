/* eslint-disable no-unused-vars */

import Home from "./home/Home";
import Work from "./work/work.jsx";
import Cards from "./card/Card.jsx";
import NavBar from "./nav/nav";

function App() {
  return (
    <>
      {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <NavBar />
      <Home />
      <Work />
    </>
  );
}
export default App;
