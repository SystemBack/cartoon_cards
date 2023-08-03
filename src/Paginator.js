import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography";

function Paginator(props) {
    const searchParams = new URLSearchParams(document.location.search)
    const IS_DISABLED = (!searchParams.get('page') || parseInt(searchParams.get('page')) <= 1);
    const CURRENT_PAGE = IS_DISABLED ? 1 : parseInt(searchParams.get('page'))
    const CHARACTERS_BY_PAGE = 20;
    const NEXT_PAGE = IS_DISABLED ? 2 : CURRENT_PAGE + 1;
    const PREVIOUS_PAGE = IS_DISABLED ? 0 : CURRENT_PAGE - 1;
    const CURRENT_NUMBER_OF_CHARACTERS = (CHARACTERS_BY_PAGE * CURRENT_PAGE);
    const PREVIOUS_NUMBER_OF_CHARACTERS = (CHARACTERS_BY_PAGE * PREVIOUS_PAGE);
    const IS_LAST_PAGE =  CURRENT_NUMBER_OF_CHARACTERS >= props.count;
    const redirectPaginator = (pageId) => {
        window.location.href = '/?page=' + pageId;
    }

    return (
        <Grid container
              direction="row"
              justifyContent="center"
              sx={{marginTop: "15px", marginBottom: "15px"}}
              columnSpacing={{ xs: 12, sm: 2, md: 3 }}
              alignItems="center">
                <Grid item>
                    { IS_DISABLED
                        ? <Button variant="contained" disabled><ArrowBackIosIcon/> Previous</Button>
                        : <Button variant="contained" onClick={() => redirectPaginator(PREVIOUS_PAGE)}><ArrowBackIosIcon/> Previous</Button>
                    }
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" color="text.primary">Showing {PREVIOUS_NUMBER_OF_CHARACTERS + 1} to {IS_LAST_PAGE ? props.count : CURRENT_NUMBER_OF_CHARACTERS} characters from {props.count} records</Typography>
                </Grid>
                <Grid item>
                    {
                        IS_LAST_PAGE
                        ? <Button variant="contained" disabled>Next <ArrowForwardIosIcon/></Button>
                        : <Button variant="contained" onClick={() => redirectPaginator(NEXT_PAGE)}>Next <ArrowForwardIosIcon/></Button>
                    }

                </Grid>
        </Grid>
    );
}

export default Paginator;
