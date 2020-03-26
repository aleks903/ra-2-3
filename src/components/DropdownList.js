import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownList(props) {
  const { item, lists } = props;
  const onSelect = (e) => {
    e.preventDefault();
    props.onSelect(e.target.innerText);
  };

  return (
    <ul data-id="dropdown" className="dropdown">
      {
        lists.map((o) => (
            <li key={o} className={o === item ? 'active' : ''} onClick={onSelect}>
              <a href="#">{o}</a>
            </li>
        ))
      }
  </ul>
  );
}

DropdownList.propTypes = {
  item: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
