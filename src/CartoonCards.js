import * as React from 'react';
import {useQuery, gql} from "@apollo/client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const GET_CARTOONS = gql`
  query getCartoons($pageId: Int) {
    characters(page: $pageId) {
      info {
        count
      }
      results {
        id,
        name,
        image,
        type,
        species,
        status
      }
    }
  }
`;

function CartoonCards({getCount}) {
    const searchParams = new URLSearchParams(document.location.search)
    const pageId = (!searchParams.get('page'))
        ? 1
        : parseInt(searchParams.get('page'));
    const { loading, error, data } = useQuery(GET_CARTOONS, { variables: {pageId} });

    if (loading) return <Box sx={{ width: '100%', padding: '5rem' }}> <LinearProgress /></Box>;
    if (error) return <p>Error : {error.message}</p>;

    getCount(data.characters.info.count);

    return data.characters.results.map(({ id, name, image, type, specie, status }) => (
        <Grid item xs={4} sm={4} md={3} key={id}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${image}`}
                        alt={`${name}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        { type ? <Typography variant="body2" color="text.secondary"> Type: {type} </Typography> : ""}
                        { specie ? <Typography variant="body2" color="text.secondary">Specie: {specie} </Typography> : ""}
                        { status ? <Typography variant="body2" color="text.secondary">Status: {status} </Typography> : ""}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ));
}

export default CartoonCards;
