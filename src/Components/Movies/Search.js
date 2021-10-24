import React, { useCallback } from "react";
import { useHistory } from "react-router";
import search from "../../assets/search.svg";
import debounce from "lodash";
import { DebounceInput } from "react-debounce-input";
const Search = (props) => {
  const history = useHistory();

  const handleKeyDown = () => {
    history.push({
      pathname: "/SearchPage",
    });
  };

  return (
    <div>
      <DebounceInput
        className="form-control search"
        placeholder="Search"
        onChange={(e) => props.printValue(e.target.value)}
        debounceTimeout={500}
        style={{ border: "none", color: "white" }}
      />
      <button
        style={{
          marginTop: "-52px",
          marginLeft: "-128px",
          position: "absolute",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
        onClick={handleKeyDown}
      >
        <img src={search} />
      </button>
    </div>
  );
};

export default Search;
