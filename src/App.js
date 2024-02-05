import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="grade">
      <Sidebar />
      <div className="playlist-main">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Main searchInput={searchInput}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
