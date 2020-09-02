import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import Carousel from '../slider/slider'
import { withRouter } from 'react-router-dom';
import SideBar from '../sidebar/sidebar'
import { connect, useSelector } from 'react-redux'
import { getMyAd, getAllAds } from "../../Redux/Actions/adsAction";
import baseUrl from '../../Redux/config';
import Services from '../services/service'
const useStyles = makeStyles((theme) => ({

  blogsContainer: {
    paddingTop: theme.spacing(3),
    marginLeft: "6%",
    width: "94%"
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  blogTitle2: {
    fontWeight: 400,
    paddingBottom: theme.spacing(3)
  },
  blogTitle3: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    marginTop: "2rem"
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
}));

function Main(props) {
  let { ads, getMyAd, getAllAds } = props
  const classes = useStyles()
  const [allAds, setAds] = useState([])

  useEffect(() => {
    getAllAds()
  }, [])
  useEffect(() => {
    setAds(ads.ads)
  }, [ads.ads])
  return (<div className={classes.mainContainer}>

    <div className="display">

      <div className="box1">
        <SideBar />
      </div>

      <div className="box2">

      </div>
    </div>

    <Carousel />




    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Plants Planet
        </Typography>
      <Typography variant="p" className={classes.blogTitle2}>
        Find the perfect plants for your garden, patio or containers. Use our Plant Planet to find the right perennials, roses, shrubs, trees, and many more for your needs. Enter Search terms and get your desired results. Add the plants you like to your own collections and start creating your dream garden!
        </Typography>
      <Services />
      <Typography variant="h4" className={classes.blogTitle3}>
        Products
        </Typography>
      <Grid container spacing={3}>
        {allAds ? allAds.length > 0 ? allAds.map((item, key) => {
          return <Grid item xs={12} sm={6} md={4} key={key}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className="animate__animated animate__flipInX"
                  style={{ height: 240 }}
                  image={baseUrl + `/uploads/${item.images[0]}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {item.plant_title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    {item.plant_description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={`/uploads/${item.images[2]}`} />
                  <Box ml={2}>
                    <Typography variant="h5" component="p">
                      {item.nursery_name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                      {item.created_at.slice(0, 10)}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  RS. {item.price_plant}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        }) : null : null}
      </Grid>
      {/* <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
      </Box> */}
    </Container>
  </div>
  );
}
let mapStateToProps = store => {
  return {
    ads: store.ads
  }
}

export default withRouter(connect(mapStateToProps, { getMyAd, getAllAds })(Main))