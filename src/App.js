import React from 'react';
import './App.css'
import MenuAppBar from './component/header/header'
import MenuBar from './component/menu bar/menuBar'
import SideBar from './component/sidebar/sidebar'
import Main from './component/font/index'
import Contact from './component/contact/contact'
import Testimonies from './component/testimonies/testimones'
import Service from './component/services/service'
import Product from './component/products/product'
import { Router, Route, Switch, Redirect } from "react-router-dom"
// import Login from './component/login/login';
import SignUp from './component/signUp/signUp';
import LogIn from './component/login/login'

import AddPost from './component/newpost/newpost'
import History from './component/history'
import MyAccount from './component/myAccount/myAccount'
import PostDetail from './component/PostDetail/PostDetail'
import Cookie from 'js-cookie'
import { useSelector } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateRoute = ({ component: Component, ...rest }) => {
    // const authenticated = useSelector(state => state.auth.authenticated);
    let authen = useSelector(state => state.auth.user)
    console.log(authen);


    return (

        <Route
            {...rest}
            render={props =>

                authen
                    // true
                    ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
            }
        />

    );
};


class App extends React.Component {
    render() {

        return (<div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000} />
            <Router history={History}>

                <Route path='/' exact component={Main} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/login' exact component={LogIn} />
                <Route path='/services' exact component={Service} />
                <Route path='/product' exact component={Product} />
                <Route path='/testimonies' exact component={Testimonies} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/postDetail' exact component={PostDetail} />
                <Route path='/backtohome' exact component={Main} />
                <PrivateRoute path='/newpost' exact component={AddPost} />
                <PrivateRoute path='/myaccount' exact component={MyAccount} />


            </Router>
        </div>)

    }
}

export default App