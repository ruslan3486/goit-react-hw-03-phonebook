import React from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.container_filter}>
      <p className={s.filter_info}>Find contacts by name</p>
      <input
        className={s.filter_text}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};
export default Filter;
