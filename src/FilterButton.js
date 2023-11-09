// FilterButton.js
import React from "react";

const FilterButton = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default FilterButton;
