import React, { useState } from 'react';
import style from './input.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import userTest from '../../data';

function Input() {
  const [text, setText] = useState([...userTest]);

  const checkLimit = (e: any) => {
    const check = text.find((el) => el.adjective === e);
    if (!e) {
      console.log('empty', '');
    } else if (check !== e) {
      console.log('invalid');
    } else {
      console.log('valid', check);
    }
  };

  const handleChange = (e: any, id: number) => {
    checkLimit(e.target.value);
    setText((el) =>
      el.map((list, index) =>
        index === id ? { ...list, some: e.target.value } : list
      )
    );
  };

  return (
    <Box>
      {text.map((el) => (
        <Grid container alignItems="center" key={el.id}>
          <FavoriteIcon className={style.yellowColor} />
          <p>{el.name}</p>
          <p className={style.yellowColor}>({el.search})</p>
          <input value={el.some} onChange={(e) => handleChange(e, el.id)} />
          <div>
            <div
              className={`${
                el.adjective === el.some ? style.green : style.red
              }`}
            ></div>
            <div
              className={`${
                el.adjective === el.some ? style.green : style.red
              }`}
            ></div>
            <div
              className={`${
                el.adjective === el.some ? style.green : style.red
              }`}
            ></div>
          </div>
          <p>{el.textAfter}</p>
        </Grid>
      ))}
    </Box>
  );
}

export default Input;
