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

import TextField from '@material-ui/core/TextField';
import Carousel from '../slider/slider'
import Button from '@material-ui/core/Button'
import { withRouter, Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar'
import Cookies from "js-cookie"
import { connect, useSelector } from 'react-redux'
import { getMyAd, getAllAds } from "../../Redux/Actions/adsAction";
import baseUrl from '../../Redux/config';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const images = [
  {
    // url: '/static/images/grid-list/breakfast.jpg',
    url: 'https://wallup.net/wp-content/uploads/2016/01/138584-ladybugs-nature-plants.jpg',


    title: 'Add New Post',
    width: '10%',
    height: '5%'
  },
]
const useStyles = makeStyles((theme) => ({


  //.................................................................................


  blogsContainer: {
    paddingTop: theme.spacing(3),
    marginTop: 80,
    width: "94%",
    marginLeft: "6%"
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
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
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },

  adjSearch: {
    width: '300px',
    fontSize: '20px',
    paddingTop: 0,
    marginLeft: '5px',
    marginBottom: 20,
    paddingBottom: 5,
    backgroundColor: "white",
    borderBottom: "1px solid gray",
    color: 'gray',
    "&::placeholder": {
      color: "gray"
    }


  },
  Btn1: {
    fontSize: '16px',
    float: "rgiht",
    marginLeft: '25px',
    marginBottom: 20,
    padding: 10
  },
  formControl: {
    marginRight: 20,
    minWidth: 150,
    fontSize: 18,
    height: 45

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 14
  },
  usingFloat: {
    display: "flex",
    justifyContent: "flex-end"
  }

}));

function MyAccount(props) {
  let { ads, getMyAd, getAllAds } = props
  const classes = useStyles()
  const user = useSelector(state => state.auth.user)
  const [allAds, setAds] = useState([])
  const [allAds2, setAds2] = useState([])
  const [state, setState] = React.useState();
  const [plantName, setPlantName] = React.useState();

  useEffect(() => {
    if (user.type == "nursery") {
      getMyAd({ user_id: user._id })
    }
    if (user.type == "user") {
      getAllAds()
    }
  }, [])
  useEffect(() => {
    setAds(ads.ads)
    setAds2(ads.ads)
  }, [ads.ads])

  const handleChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  const clickToSearch = e => {
    e.preventDefault()

    if (state && plantName) {
      let newArr = allAds2.filter((item, key) => {
        return item.plant_category.includes(state) && item.plant_title.toLowerCase().includes(plantName)
      })
      console.log(newArr);
      setAds(newArr)
      return true
    }
    if (plantName) {
      let newArr = allAds2.filter((item, key) => {
        return item.plant_title.toLowerCase().includes(plantName)
      })
      console.log(newArr);
      setAds(newArr)
      return true
    }
    if (state) {
      let newArr = allAds2.filter((item, key) => {
        return item.plant_category.includes(state)
      })
      console.log(newArr);
      setAds(newArr)
      return true
    }
    else {
      setAds(allAds2)
    }


  }



  return (
    <>
      <div className="display">

        <div className="box1">
          <SideBar />
        </div>

        <div className="box2">

        </div>
      </div>
      <div>


        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            My Account <i class="fa fa-chevron-right" aria-hidden="true"></i>  Welcome Mr. {user ? user.fullname : null}
          </Typography>
          <div className={classes.usingFloat}>

            <FormControl className={classes.formControl}>

              <NativeSelect
                value={state}
                onChange={handleChange}
                className={classes.input}
              >
                <option value="">Search By Category </option>
                <option value="Flowering Plant">Flowering Plant </option>
                <option value="Cactus">Cactus</option>
                <option value="Embryophyte">Embryophyte </option>
                <option value="Moss">Moss</option>
                <option value="Vascular Plant Seed Plant">Vascular Plant Seed Plant</option>
                <option value="Conifers">Conifers</option>
                <option value="Liverworts">Liverworts </option>
                <option value="Thallophyte">Thallophyte</option>
                <option value="Green Algae">Green Algae</option>
                <option value="Gnetum">Gnetum</option>
                <option value="Gnetophytes">Gnetophytes </option>
                <option value="Charophyte Algae">Charophyte Algae</option>
                <option value="Streptophyta">Streptophyta </option>
                <option value="Pinidae">Pinidae</option>
                <option value="Anubias Gracilis">Anubias Gracilis</option>
              </NativeSelect>

            </FormControl>
            <input type="text" className={classes.adjSearch} placeholder="Search by Name" name="plant_name" onChange={(e) => { setPlantName(e.target.value) }} />

            <Button className={classes.Btn1} variant="contained" color="primary" onClick={clickToSearch}>
              Search
          </Button>
            {user
              ?
              user.type == "nursery" ?
                <Link to='/newpost'>

                  <Button className={classes.Btn1} variant="contained" color="primary">
                    Add New Post
                </Button>

                </Link>
                : null : null
            }

          </div>


          {/* //................................................................................... */}

          <Grid container spacing={3}>
            {allAds ? allAds.length > 0 ? allAds.map((item, key) => {
              return <Grid item xs={12} sm={6} md={4} key={key} >
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
            }) : "Please add items to sell" : null}



          </Grid>


        </Container>

      </div>
    </>
  )
}

let mapStateToProps = store => {
  return {
    ads: store.ads
  }
}

export default withRouter(connect(mapStateToProps, { getMyAd, getAllAds })(MyAccount))