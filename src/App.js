import * as React from 'react';
import {useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CartoonCards from './CartoonCards'
import Paginator from './Paginator'



function App() {
    const [count, setCount] = useState(0);

    const getCount = (totalRecords) => {
        setCount(current => totalRecords)
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, sm: 3, md: 4 }}
            columns={{ xs: 8, sm: 12, md: 12 }}>

            <Typography variant="h3" component="h4" sx={{marginTop: "2rem"}}>
                Rick & Morty Cards App.
            </Typography>

            <Paginator count={count} />
            <CartoonCards getCount={getCount} />
            <Paginator count={count} />

        </Grid>
  );
}

export default App;
