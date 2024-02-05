import './Sidebar.css';
import '../vars.css'
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div class="sidebar">
    <nav class="sidebar__navigation">
      <div class="logo">
        <a href="">
          <img src={logoSpotify} alt="Logo do Spotify"/>
        </a>
      </div>

      <ul>
        <li>
          <a href="">
            <span class="fa fa-home"><FontAwesomeIcon icon={faHome}/> </span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="">
          <span class="fa fa-home"><FontAwesomeIcon icon={faSearch}/> </span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="library">
      <div class="library__content">
        <button class="library__button">
          <span class="fa fas fa-book"><FontAwesomeIcon icon={faBook}/> </span>
          <span>Sua biblioteca</span>
        </button>
        <span class="fa fa-plus"><FontAwesomeIcon icon={faPlus}/> </span>
      </div>

      <div class="div-playlist">

        <div class="area-sidebar">
          <section class="section-playlist">
            <div class="section-playlist__content">
              <span class="text title">Crie sua primeira playlist</span>
              <span class="text subtitle">É facil, vamos te ajudar.</span>
              <button class="section-playlist__button">
                <span>Criar Playlist</span>
              </button>
            </div>
          </section>

          

        </div>

        <div class="library-footer">
          <div class="cookies">
           
            <a href="#">Cookies</a>
          </div>

          <div class="languages">
            <button class="languages__button">
              <span><FontAwesomeIcon icon={faGlobe}/> </span>
              <span>Potuguês do Brasil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
};

export default Sidebar;