import React from 'react'
// import './script'
import './testimonies.css'
import jQuery from 'jquery'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import SideBar from '../sidebar/sidebar'
class Testimonies extends React.Component {

  componentDidMount() {
    // super()
    jQuery(document).ready(function ($) {
      // first image
      $('.test-1').on({
        'click': function () {
          $('#change-image').attr("src", img1);
        }
      });

      //  second image
      $('.test-2').on({
        'click': function () {
          $('#change-image').attr("src", img2)
          $(".testimonial").removeClass("active ");
          $("#" + $(this).attr("alt")).addClass("active ");
        }
      });

      //  third image
      $('.test-3').on({
        'click': function () {
          $('#change-image').attr("src", img3);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });

      //  fourth image
      $('.test-4').on({
        'click': function () {
          $('#change-image').attr("src", img4);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });

      //  5th image
      $('.test-5').on({
        'click': function () {
          $('#change-image').attr("src", img5);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });

      //  6th image
      $('.test-6').on({
        'click': function () {
          $('#change-image').attr("src", img6);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });

      //  7th image
      $('.test-7').on({
        'click': function () {
          $('#change-image').attr("src", img7);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });

      //  8th image
      $('.test-8').on({
        'click': function () {
          $('#change-image').attr("src", img8);
          $(".testimonial").removeClass("active");
          $("#" + $(this).attr("alt")).addClass("active");
        }
      });


    });

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
          <section href="Testimonies " style={{marginTop: 90}}>
            {/* <h3>Testimonies..</h3> */}
            <div class="container checkit">
              <div class="row">
                <div class="testimonials  ">


                  <div class="images col-md-4 col-xs-12 col-sm-12">
                    <img id="change-image" src={img1} alt="test-1" />
                  </div>


                  <div class="reviews col-md-8 col-xs-12 col-sm-12">


                    <div class="testimonial active" id="test-1">
                      <h1>Jhon Teen</h1>
                      <p>Chief Executive Officer</p>
                      <p>eSasson Studios</p> <br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">Working with the team has been a huge success! They're good people who care deeply about our business!</p></div>


                    <div class="testimonial" id="test-2">
                      <h1>Trim Cure</h1>
                      <p>Technical Emp</p>
                      <p>Intel</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">Working with people has been a great experience for us! company has enabled us to move quickly and expand our portfolio..</p>
                    </div>


                    <div class="testimonial" id="test-3">
                      <h1>Harry Peter</h1>
                      <p>Founder</p>
                      <p>MTBC Soft</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">Our business relies on fast and reliable talent and support. Company gives us that and much more.</p>
                    </div>

                    <div class="testimonial" id="test-4">
                      <h1>Henry Ford</h1>
                      <p>Tech Lead</p>
                      <p>Unicorn Black</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">Working with company is like having a whole team of highly skilled colleagues. A winning team, definitely.</p>
                    </div>


                    <div class="testimonial" id="test-5">
                      <h1>Jhony Mich</h1>
                      <p>Chief Executive Officer</p>
                      <p>MicroX Studios</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">We've consistently received the best support, account management, and expert insight you would hope to have from a great web partner.</p>
                    </div>

                    <div class="testimonial" id="test-6">
                      <h1>Michael Jacky</h1>
                      <p>Producer</p>
                      <p>Gold leaf</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description"> Company has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code.</p>
                    </div>


                    <div class="testimonial" id="test-7">
                      <h1>Ricky Auston</h1>
                      <p>Director</p>
                      <p>Blue Technology</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">Having worked with the company team previously, we were confident that Nate and the team would be able to ensure they used best-practices.</p>
                    </div>

                    {/* <!-- 8th review --> */}
                    <div class="testimonial" id="test-8">
                      <h1>Peter Bridge</h1>
                      <p>Account Officer</p>
                      <p>Brown Studios</p><br />
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="description">This company team goes beyond our expectations by suggesting or implementing things in ways we didn’t realize were even possible.</p>
                    </div>


                    {/* <!-- team members --> */}
                    <div class="team-members ">
                      <img src={require('./1.jpg')} active alt="test-1" class="test-1" id="active" />
                      <img src={require('./2.jpg')} alt="test-2" class="test-2" />
                      <img src={require('./3.jpg')} alt="test-3" class="test-3" />
                      <img src={require('./4.jpg')} alt="test-4" class="test-4" />
                      <img src={require('./5.jpg')} alt="test-5" class="test-5" />
                      <img src={require('./6.jpg')} alt="test-6" class="test-6" />
                      <img src={require('./7.jpg')} alt="test-7" class="test-7" />
                      <img src={require('./8.jpg')} alt="test-8" class="test-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )

  }
}


export default Testimonies