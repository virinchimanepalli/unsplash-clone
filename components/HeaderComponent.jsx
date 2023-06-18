import React, { useState } from "react";
import { useRouter } from "next/router";

function HeaderComponent({
  onSubmitSearchForm,
  onChangeInput,
  query,
  openFilter,
  isSearchPage = false,
}) {
  const route = useRouter();

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="search-container">
      <div className="search-container__logo">
        <svg
          className="search-container__logo__svg"
          version="1.1"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          aria-labelledby="unsplash-home"
          aria-hidden="false">
          <title id="unsplash-home">Unsplash Home</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
        </svg>
      </div>
      <form
        className="search-container__box__form"
        onSubmit={onSubmitSearchForm}>
        <input
          className="search-container__box__form__inputField"
          type="text"
          placeholder="Please Enter "
          value={query}
          onChange={onChangeInput}
        />
      </form>
      <div className="search-container__headerNav">
        <a className="search-container__headerNav--p-text" href="/">
          Home
        </a>
      </div>
      {isSearchPage && (
        <button
          className="search-container__box__button"
          onClick={() => {
            openFilter();
          }}>
          Filter
        </button>
      )}
    </div>
  );
}

export default HeaderComponent;
