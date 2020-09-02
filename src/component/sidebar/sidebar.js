import React from 'react'
import '../sidebar/sideBar.css'
import Main from '../font/index'
import { Link } from 'react-router-dom'
import Cookie from 'js-cookie'
import history from '../history'
import { logout } from "../../Redux/Actions/authActions"
import { connect } from 'react-redux'



class SideBar extends React.Component {

  state = {
    type: null
  }
  componentDidMount() {
    let user = Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null
    this.setState({
      type: user

    })
  }

  
  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="check" defaultChecked />

        <header className="positon1">
          <label for="check">
            <i class="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <div class="left_area">
            <h3>Plants <span>Planet</span></h3>
          </div>
          <div class="right_area">
            {this.state.type ?
              <Link to="#" onClick={this.logout}>

                <a class="logout_btn">Sign Out</a>


              </Link>
              :
              <>
                <Link to="/login">
                  <a class="logout_btn">Sign In</a>
                </Link>
                  <Link to="/signup">
                  <a class="logout_btn">Sign Up</a>
                </Link>
              </>
            }
          </div>
        </header>

        <div class="sidebar ">
      

          <Link to="/"  ><i class="fas fa-home" title="Home"></i><span>Home</span></Link>
          {
            this.state.type ?
              <Link to='/myaccount'><i class="fa fa-user"></i><span>My Account</span></Link>
              :
              null
          }

          <Link to="/product"><i class="fas fa-table"></i><span>Product</span></Link>
          <Link to='/services'><i class="fas fa-info-circle"></i><span>Services</span></Link>
          <Link to="/testimonies"><i class="fas fa-quote-left"></i><span>Testimonies</span></Link>
          <Link to="/contact"><i class="fas fa-phone"></i><span>Contact Us</span></Link>

        </div>




      </div>)
  }
}

export default connect(null, { logout })(SideBar)