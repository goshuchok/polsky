import React, { useState } from 'react';
import style from './input.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Input() {
  const userTest: MyType[] = [
    {
      id: 0,
      name: 'Anka jest',
      search: 'wysoka',
      textAfter: ' niż Tom',
      some: '',
      adjective: 'wyższa',
    },
    {
      id: 1,
      name: 'Ten taniec jest',
      search: 'piękny',
      textAfter: 'niż poprzedn',
      some: '',
      adjective: 'pięknym',
    },
    {
      id: 2,
      name: 'Mój szalik jest',
      search: 'drogi',
      textAfter: 'od twojego',
      some: '',
      adjective: 'droższy',
    },
    {
      id: 3,
      name: 'Zielony plecak jest',
      search: 'mały',
      textAfter: 'od żółtego.',
      some: '',
      adjective: 'mniejszy',
    },
    {
      id: 4,
      name: 'Dom mojej przyjaciółki jest',
      search: 'duży',
      textAfter: 'od mojego.',
      some: '',
      adjective: 'większy',
    },
    {
      id: 5,
      name: 'Mój kuzyn jest',
      search: 'niski',
      textAfter: 'niż moja kuzynka.',
      some: '',
      adjective: 'niższy',
    },
    {
      id: 6,
      name: 'Moja sukienka jest',
      search: 'ładna',
      textAfter: 'niż twoja.',
      some: '',
      adjective: 'ładniejsza',
    },
  ];
  const [text, setText] = useState([...userTest]);

  const [fieldValue, setFieldValue] = useState<{
    fieldName: string;
    fieldText: string;
    fieldValidationState: 'empty' | 'valid' | 'invalid';
  }>();

  const handleChange = (e: any, id: number) => {
    const validationState = 'empty';
    // if (fieldValue?.fieldName === fieldValue?.fieldText) {
    //   fieldValue?.fieldValidationState === 'valid';
    // }

    setFieldValue({
      fieldName: e.target.name,
      fieldText: e.target.value,
      fieldValidationState: validationState,
    });

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
                // el.adjective === el.some ? style.green : style.baseClass
                el.adjective === el.some ? style.green : style.red
              }`}
            ></div>
            <div
              className={`${style.baseClass} ${
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

type MyType = {
  id: number;
  name: string;
  search: string;
  textAfter: string;
  some: string;
  adjective: string;
};

{
  /* <div className={`${style.baseClass}  ${text === inputText ? style.green : style.red}`}></div> */
}

{
  /* <input
// value={`${el.some !== el.adjective ? el.some : el.adjective}`}
// value={currentSearch(el.some, el.adjective)}
value={el.some}
onChange={(e) => handleChange(e, el.id)}
/> */
}
