import React from "react";
import { FILTER_DATA } from "@/utils/helperFunctions";

function FilterComponent({ selectedFilters, handleChange, clearIntervals }) {
  return (
    <div className="search-container__filter">
      {FILTER_DATA.map((item) => {
        const filterKey = Object.keys(item)[0];
        const filterValues = Object.values(item)[0];

        return (
          <div className="search-container__filter__container" key={filterKey}>
            <div className="search-container__filter__container--heading">
              {filterKey}
            </div>
            <div className="search-container__filter__container__labelContainer">
              {filterValues.map((option) => {
                const isSelected = selectedFilters[filterKey] === option.value;

                return (
                  <label
                    key={option.value}
                    className="search-container__filter__container__labelContainer__label">
                    <input
                      className="search-container__filter__container__labelContainer__input"
                      type="radio"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => {
                        handleChange(option.value, filterKey);
                      }}
                    />

                    {option.value}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      <button
        onClick={() => {
          clearIntervals();
        }}
        className="search-container__filter__container--button">
        Clear filter
      </button>
    </div>
  );
}

export default FilterComponent;
