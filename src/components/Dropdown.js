import React, { useState } from 'react';
import DropdownList from './DropdownList.js';

export default function Dropdown() {
  const [states, setStates] = useState(
    true,
  );
  const [items, setItems] = useState(
    'Profile Information',
  );

  const list = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  return (
    <div className={states ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
      <button data-id="toggle" className="btn" onClick={() => setStates(!states)}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList lists={list} item={items} onSelect={(item) => setItems(item)}/>
    </div>

  );
}
