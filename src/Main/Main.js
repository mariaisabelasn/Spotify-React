import "./Main.css";
import "../vars.css";

import Playlist1 from "../assets/playlist/1.jpeg";
import Playlist2 from "../assets/playlist/2.png";
import Playlist3 from "../assets/playlist/3.jpeg";
import Playlist4 from "../assets/playlist/4.jpeg";
import Playlist5 from "../assets/playlist/5.jpeg";
import Playlist6 from "../assets/playlist/6.jpeg";
import Playlist7 from "../assets/playlist/7.jpeg";
import Playlist8 from "../assets/playlist/8.jpeg";
import Playlist9 from "../assets/playlist/9.jpeg";
import Playlist10 from "../assets/playlist/10.jpeg";
import Playlist11 from "../assets/playlist/11.jpeg";
import Playlist12 from "../assets/playlist/12.jpeg";
import Playlist13 from "../assets/playlist/13.jpeg";
import Playlist14 from "../assets/playlist/14.jpeg";
import Playlist15 from "../assets/playlist/15.jpeg";
import Artist from "./artist/artist";

const Main = ({ searchInput }) => {
  const getGreeting = () => {
    const localTime = new Date();

    const hours = localTime.getHours();

    if (hours >= 6 && hours < 12) {
      return "Bom dia";
    } else if (hours >= 12 && hours < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const playlists = [
    { image: Playlist1, name: "Boas festas" },
    { image: Playlist2, name: "Feitos para você" },
    { image: Playlist3, name: "Lançamentos" },
    { image: Playlist4, name: "Creators" },
    { image: Playlist5, name: "Para treinar" },
    { image: Playlist6, name: "Podcasts" },
    { image: Playlist7, name: "Sertanejo" },
    { image: Playlist8, name: "Samba e pagode" },
    { image: Playlist9, name: "Funk" },
    { image: Playlist10, name: "MPB" },
    { image: Playlist11, name: "Rock" },
    { image: Playlist12, name: "Hip Hop" },
    { image: Playlist13, name: "Indie" },
    { image: Playlist14, name: "Relax" }
  ];

  return (
    <div className="playlist-container">
      {searchInput ? (
        <Artist searchInput={searchInput} />
      ) : (
        <div id="result-playlists">
          <div className="playlist">
            <h1 id="greeting">{getGreeting()}</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
              {playlists.map((playlist, index) => (
                  <div className="cards" key={index}>
                    <div className={`cards card${(index % 15) + 1}`}>
                      <img src={playlist.image} alt="" />
                      <span>{playlist.name}</span>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;