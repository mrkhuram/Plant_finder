import React from 'react'


import '../contact/contact.css'
import SideBar from '../sidebar/sidebar'
import { sendEmail } from '../../Redux/Actions/adsAction'
import { connect } from 'react-redux'

class Contact extends React.Component {
  state = {

  }

  onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value

    this.setState({
      [name]: value
    })
  }
  submit = e => {
    e.preventDefault()

    this.props.sendEmail(this.state)
  }

  render() {

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
          <section id="contact-section" style={{ marginTop: 70 }}>
            <div class="container">
              <h2>Contact Us</h2>
              <p>Email us and keep upto date with our latest news</p>
              <div class="contact-form">


                <div>

                  <i class="fa fa-phone" > </i><a href="tel:+923356423708" class="form-info">  +92 3356423708</a><br />
                  <i class="fa fa-envelope"  style={{display: 'inline-block'}}></i><a href="mailto:plantslovers3@gmail.com" class="form-info">  Plantslovers3@gmail.com</a>
                </div>


                <div>
                  <form>
                    <input type="text" placeholder="Your Full Name" required onChange={this.onChangeHandler} name="name" />

                    <input type="Email" placeholder="Email" required onChange={this.onChangeHandler} name="email" /><br />
                    <input type="text" placeholder="Subject of this message" required onChange={this.onChangeHandler} name="subject" /><br />
                    <textarea name="message" placeholder="Message" rows="5" required onChange={this.onChangeHandler} name="msgBody"></textarea>
                    <br />
                    <button class="submit" onClick={this.submit}>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )

  }

}


export default connect(null, { sendEmail })(Contact)