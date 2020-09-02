import React, { useState, useEffect } from 'react'
import './login.css'
import { withRouter, Link } from 'react-router-dom'
import { login } from '../../Redux/Actions/authActions'
import { connect } from 'react-redux'
import isEmpty from 'is-empty'


const LoginIn = props => {

    let {
        login,
        auth
    } = props

    const [state, setState] = useState({
        email: null,
        password: null,

    })
    const [error, setError] = useState(null)

    const onChangeHandler = e => {
        let name = e.target.name
        let value = e.target.value

        setState({
            ...state,
            [name]: value
        })
    }


    const signIn = e => {
        e.preventDefault()
        let {
            password,
            email,
        } = state

        console.log(state)
        if (isEmpty(email) || isEmpty(password)) {
            setState({ error: "Please fill all the fields / All Fields are required" })
            return true
        }
        props.login(state)

    }


    useEffect(()=>{
        setError(auth.msg)
    },[auth.msg])






    return (<div className="container-fluid">


        <div className="fix1">
            <div class="wrapper">
                <div class="title">
                    <h1>Login</h1>
                </div>
                <div class="contact-form">
                    <div class="input-fields">
                        <input type="text" name="email" value={state.email} onChange={onChangeHandler} class="input" placeholder="Email Address" />
                        <input type="password" name="password" value={state.password} onChange={onChangeHandler} class="input" placeholder="Password" />
                    </div>

                </div>
                {error ?
                    <div class="error_message" >
                        {error}
                    </div>
                    : null}
                <div class="btn" onClick={signIn}>Login</div>
                <Link to="/">  <div class="btn btn2" style={{ marginTop: '-10px', right: 50 }} ><i style={{ fontSize: '20px' }} class="far fa-arrow-alt-circle-left"></i></div> </Link>

            </div>
        </div>


    </div>)

}
let mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


export default withRouter(connect(mapStateToProps, { login })(LoginIn)) 