import React, { useState } from 'react';
import style from './Input/input.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Input() {
  const data = [
    {
      id: 0,
      fieldName: 'namfield1',
      fieldText: 'namfield1',
      fieldValidationState: 'valid',
    },

    {
      id: 1,
      fieldName: 'namfield2',
      fieldText: '',
      fieldValidationState: 'empty',
    },

    {
      id: 2,
      fieldName: 'namfield3',
      fieldText: '1111',
      fieldValidationState: 'invalid',
    },
  ];

  const [fieldValue, setFieldValue] = useState<{
    fieldName: string;
    fieldText: string;
    fieldValidationState: 'empty' | 'valid' | 'invalid';
  }>();

  const handleValidation = (el: any) => {
    const validationState = 'empty';
    if (fieldValue?.fieldName !== fieldValue?.fieldText) {
      // return fieldValue?.fieldValidationState === 'invalid';
      console.log('invalid');
    } else if (fieldValue?.fieldName === fieldValue?.fieldText) {
      // return fieldValue?.fieldValidationState === 'valid';
      console.log('valid');
    } else {
      console.log('empty');
      // return fieldValue?.fieldValidationState === 'empty';
    }

    setFieldValue({
      fieldName: el.target.name,
      fieldText: el.target.value,
      fieldValidationState: validationState,
    });
  };

  return (
    <Box>
      {data.map((el, ind) => (
        <div key={ind}>
          <p>{el.fieldName}</p>
          <input value={el.fieldText} onChange={handleValidation} />
          <p>{el.fieldValidationState}</p>
        </div>
      ))}
    </Box>
  );
}

export default Input;
