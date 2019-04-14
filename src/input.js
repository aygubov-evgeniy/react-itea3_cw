import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, placeholder, value, action, name, label}) => {
  return(
    <label className="form-item">
      <div>{name}</div>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        data-label={label}
        onChange={action}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any
}

export default Input;