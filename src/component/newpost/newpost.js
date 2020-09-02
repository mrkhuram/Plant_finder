import React, { useState } from 'react'
import './newpost.css'
import SideBar from '../sidebar/sidebar'
import { makeStyles } from '@material-ui/core/styles';
import { postAd } from "../../Redux/Actions/adsAction"
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({


    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: 14,
        color: "white",
        marginTop: 20
    },
    flex: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    formControl: {
        marginRight: -15,
        minWidth: 200,
        borderBottom: "1px solid white"

    },
}));
const AddPost = props => {
    const { postAd } = props
    const classes = useStyles()
    const [category, setCategory] = React.useState();

    const [state, setState] = useState({
        plant_title: null,
        plant_category: null,
        plant_description: null,
        mobile_number: null,
        price_plant: null,
        img1: null,
        img2: null,
        img3: null,

    })

    const [images, setImages] = useState([])


    const onChange = e => {
        let name = e.target.name
        let val = e.target.value

        setState({
            ...state,
            [name]: val
        })
    }
    const onChangeImage = e => {
        let name = e.target.name
        let val = e.target.files[0]
        let value = URL.createObjectURL(val)


        setState({
            ...state,
            [name]: val
        })

        if (name === "img1") {
            document.getElementById("img1").src = value
        }
        if (name === "img2") {
            document.getElementById("img2").src = value
        }
        if (name === "img3") {
            document.getElementById("img3").src = value
        }

    }

    const submitBtn = e => {
        e.preventDefault()



        let newObj = {
            plant_title: state.plant_title,
            plant_category: category,
            plant_description: state.plant_description,
            price_plant: state.price_plant,
            img1: state.img1,
            img2: state.img2,
            img3: state.img3,
            posted_by: Cookies.get("user") ? JSON.parse(Cookies.get("user"))._id : null,
            nursery_name: Cookies.get("user") ? JSON.parse(Cookies.get("user")).fullname : null
        }

        console.log(newObj);
        postAd(newObj)



    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setCategory(event.target.value);
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

            <div className="container-fluid Formargin">


                <div className="fix1">
                    <div class="wrapper wrapper11 adjustment">
                        <div class="title">
                            <h1>Add New Post</h1>
                        </div>

                        <div class="contact-form">
                            <div class="input-fields">

                                <input type="text" class="input" onChange={onChange} value={state.plant_title} placeholder="Plant Name" name="plant_title" />

                            </div>
                            <div class="input-fields">

                                <FormControl className={classes.formControl}>

                                    <NativeSelect
                                        value={category}
                                        onChange={handleChange}
                                        className={classes.input}
                                    >
                                        <option value="">Select Category </option>
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
                            </div>


                        </div>
                        <div class="msg msg11">

                            <textarea placeholder="Plant Description" onChange={onChange} value={state.plant_description} name="plant_description"></textarea>


                        </div>
                        <div class="input-fields">
                            {/* <input type="text" class="input" onChange={onChange} value={state.mobile_number} name="mobile_number" placeholder="Contact #" /> */}
                            <input type="number" class="input" onChange={onChange} value={state.price_plant} name="price_plant" placeholder="Plant Price in Rs" />

                        </div>
                        <div className="contact-form">

                            <div className="box11">
                                <input type="file" id="img-1" name="img1" onChange={onChangeImage} />
                                <label htmlFor="img-1">
                                    <img src={require('./download.jpg')} id="img1" className="img-new-post" />
                                </label>
                            </div>
                            <div className="box11">
                                <input type="file" id="img-2" name="img2" onChange={onChangeImage} />
                                <label htmlFor="img-2">
                                    <img src={require('./download.jpg')} id="img2" className="img-new-post" />

                                </label>

                            </div>
                            <div className="box11">
                                <input type="file" id="img-3" name="img3" onChange={onChangeImage} />
                                <label htmlFor="img-3">
                                    <img src={require('./download.jpg')} id="img3" className="img-new-post" />

                                </label>

                            </div>

                        </div>
                        <div class="btn btn22   " onClick={submitBtn}>Add Post</div>
                    </div>
                </div>



            </div>
        </>
    )

}

export default connect(null, { postAd })(AddPost) 