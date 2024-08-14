import React from 'react';
import { Select,MenuItem, FormControl,InputLabel, } from '@mui/material';
const Custom = ({
  id,
  label,
  value,
  handleChange,
  name,
  options,
  ...props
}) => {
  return (
    <FormControl sx={{ marginBottom: 2 }}>
      <InputLabel id={id}>{label}</InputLabel>
    <Select
    labelId={id}
    id={id}
    value={value}
    label={label}
    onChange={handleChange}
    name={name}
    {...props}
  >
   {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem> 
        ))}
  </Select>
  </FormControl>
  );
}

export default Custom;
