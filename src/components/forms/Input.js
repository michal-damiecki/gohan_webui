import React from 'react';
import PropTypes from 'prop-types';

export const Input = (
  {
    id,
    value = '',
    onChange = () => {},
    type = 'text',
    placeholder = '',
    isInvalid = false
  }
) => (
  <input className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;

if (process.env.NODE_ENV !== 'production') {
  Input.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    isInvalid: PropTypes.bool
  };
}
