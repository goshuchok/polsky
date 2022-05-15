import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from './header.module.css';

function Header() {
  return (
    <div>
      <h1>Proszę napisać poprawną formę przymiotnika😊.</h1>
      <h6 style={{ fontStyle: 'italic' }}>
        (Напишіть правильну форму прикметника)
      </h6>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <p className={styles.yellow}>Przykład:</p>
        <p className={styles.textBold}>
          Książka jest <span className={styles.yellow}>lepsza</span> niż film.
        </p>
      </Grid>
    </div>
  );
}

export default Header;
