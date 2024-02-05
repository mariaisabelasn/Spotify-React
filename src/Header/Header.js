import "./Header.css";
import "../vars.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <nav class="header__navigation">
      <div class="navigation">
        <div class="divisao">
          <button class="arrow-left">
            <img src={smallLeft} alt="Seta Esquerda" />
          </button>
          <button class="arrow-right">
            <img src={smallRight} alt="Seta Direita" />
          </button>

          <div class="header__search">
            <img src={search} alt="" />
            <input
              id="search-input"
              type="text"
              maxlength="800"
              placeholder="O que você quer ouvir?"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>

        <div class="header__login">
          <button class="subscribe">Inscreva-se</button>
          <button class="login">Entrar</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
