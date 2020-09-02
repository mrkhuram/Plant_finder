import React from 'react'
import './signUp.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { register, registerNursery } from '../../Redux/Actions/authActions'
import isEmpty from 'is-empty'
import { toast } from 'react-toastify'


class SignUp extends React.Component {

    state = {
        fullname: null,
        email: null,
        phone: null,
        password: null,
        coordinates: {
            latitude: null,
            longitude: null
        },
        type: null,
        error: null

    }

    getLocation = e => {
        let coordinates = {
            latitude: null,
            longitude: null
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            coordinates.latitude = position.coords.latitude
            coordinates.longitude = position.coords.longitude
            document.getElementById("location_btn").value = "Your location has been traced."

        });
        this.setState({
            coordinates: coordinates
        })

    }

    componentWillReceiveProps(prevProps) {
        console.log(prevProps);

    }

    onChangeHandler = e => {
        let name = e.target.name
        let value = e.target.value


        this.setState({
            [name]: value
        })
    }


    register = e => {
        e.preventDefault()

        let {
            fullname,
            email,
            phone,
            password,
            coordinates,
            type
        } = this.state

        console.log(this.state)
        if (isEmpty(fullname) || isEmpty(email) || isEmpty(phone) || isEmpty(password) || isEmpty(coordinates.longitude) || isEmpty(type)) {
            toast.error("Please fill all the fields / All Fields are required")
           
            return true
        }
        if (this.state.type == "user") {

            this.props.register(this.state)
        }
        if (this.state.type == "nursery") {
            console.log(this.state)
            this.props.registerNursery(this.state)

        }
    }

    render() {
        let {
            fullname,
            email,
            phone,
            password,
            coordinates,
            type,
            error
        } = this.state
        return (<div className="container-fluid">


            <div className="fix1">
                <div class="wrapper">
                    <div class="title">
                        <h1>Sign Up</h1>
                    </div>
                    <div class="contact-form">
                        <div class="input-fields">
                            <input type="text" class="input" onChange={this.onChangeHandler} placeholder="Name" name="fullname" value={fullname} />
                            <input type="text" class="input" onChange={this.onChangeHandler} name="email" placeholder="Email Address" value={email} />

                            <input type="number" class="input" onChange={this.onChangeHandler} name="phone" placeholder="Phone" value={phone} />
                            <input type="password" class="input" onChange={this.onChangeHandler} name="password" placeholder="Password" value={password} />
                            <div className="nursery_radio">
                                <input type="radio" id="nursery" value="nursery" class="input_radio" onChange={this.onChangeHandler} name="type" />
                                <label htmlFor="nursery" className="nursery">Nursery</label>
                                <input type="radio" id="user" value="user" class="input_radio" onChange={this.onChangeHandler} name="type" />
                                <label htmlFor="user" className="nursery">User</label>
                                {/* <label htmlFor="display_img" className="nursery img_display_outer">
                                    Select Profile Pic
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="Profile Image"
                                        className="img_display"
                                        id="img_tag_display"
                                    /></label> */}
                            </div>
                            {/* <input type="file" class="input hidden" id="display_img" onChange={this.onChangeHandler} name="profile_pic" placeholder="Password" /> */}
                            <input type="button" id="location_btn" value="Trace my location" class="btn"
                                style={{ width: "100%", marginLeft: "0px", marginBottom: 30 }}
                                onClick={this.getLocation}
                            />
                        </div>
                    </div>

                    {error ?
                        <div class="error_message" >
                            {error}
                        </div>
                        : null}
                    <div class="btn" onClick={this.register}>Sign Up</div>
                    <Link to="/">  <div class="btn btn2" style={{ marginTop: '-10px', right: 50 }} ><i style={{ fontSize: '20px' }} class="far fa-arrow-alt-circle-left"></i></div> </Link>

                </div>
            </div>


        </div>)
    }
}

let mapStateToProps = state => {
    return {
        auth: state.authReducer
    }
}




export default withRouter(connect(mapStateToProps, { register, registerNursery })(SignUp)) 