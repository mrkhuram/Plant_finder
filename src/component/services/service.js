import React from 'react'
import './service.css'
import SideBar from '../sidebar/sidebar'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    height: 200,
    width: 250
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  card_outer: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "space-between"
  }
}));

const Service = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
        <div className="row">

          <section id="services " style={{ marginTop: "5rem" }}>
            <div class="container" style={{ height: "auto" }}>
              <h1 class="main-heading">OUR Services</h1>
              <p class="para">Read our latest news and updates about fitness.</p>
              <div className={classes.card_outer}>


                <Card className={classes.root}>


                  <CardMedia
                    className="animate__animated animate__flipInX" 
                    style={{ width: "200px", height: "180px" }}
                    image="https://s3-wp-lyleprintingandp.netdna-ssl.com/wp-content/uploads/2018/07/11162717/gardening-news-e1531340866609.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="h4" component="p">
                     Gardening
                  </Typography>
                  </CardContent>

                </Card>
                <Card className={classes.root}>


                  <CardMedia
                    className="animate__animated animate__flipInX" 
                    style={{ width: "200px", height: "180px" }}
                    image="https://images.unsplash.com/photo-1568380893557-3fc59fd902ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="h4" component="p">
                     Park
                  </Typography>
                  </CardContent>

                </Card>
                <Card className={classes.root}>


                  <CardMedia
                    className="animate__animated animate__flipInX" 
                    style={{ width: "200px", height: "180px" }}
                    image="https://golfadvisor.brightspotcdn.com/dims4/default/1b8b0a0/2147483647/strip/true/crop/675x435+0+22/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F32%2F08%2Fe58c96e6a17dc9eae601e1ef530e%2F72518.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="h4" component="p">
                     Golf Club
                  </Typography>
                  </CardContent>

                </Card>
              </div>
            
            </div>
          </section>
        </div>
      </div>
    </>
  )
}



export default Service