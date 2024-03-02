import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../../contexts/ProductContextProvider';

export default function RadioButtonsGroup() {
  const {fetchByParams} = useProducts()

  return (
    <div style={{paddingTop: '1rem'}} >
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="female"
        onChange={e => fetchByParams('type', e.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="men" control={<Radio />} label="Men" />
          <FormControlLabel value="women" control={<Radio />} label="Women" />
      </RadioGroup>
      </FormControl>
    </div>
  );
}