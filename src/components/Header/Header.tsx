import "./Header.css";
import React from "react";

interface Props {
  showButton: boolean;
  repositoriesCount?: number;
  fetchRepos: () => void;
}

const Header: React.FC<Props> = ({
  showButton,
  repositoriesCount,
  fetchRepos,
}) => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>GitHub public repositories</h1>
        {repositoriesCount && (
          <span className="header__repos-count">
            Всего репозиториев: <br />
            {repositoriesCount}
          </span>
        )}
      </div>

      {showButton && (
        <button onClick={() => fetchRepos()} className={"header-load-button"}>
          Запросить
        </button>
      )}
    </header>
  );
};

export default Header;
