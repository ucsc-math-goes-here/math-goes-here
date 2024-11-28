import React from 'react';

const ColorPicker = ({ color, onChange, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', color: "white" }}>
    <input type="color" style={{ width: '80px' }} value={color} onChange={(e) => onChange(e.target.value)} />
    <label>{label}</label>
  </div>
);

export default ColorPicker;