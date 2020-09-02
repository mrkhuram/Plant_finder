import React from 'react'
import '../PostDetail/PostDatail.css'
import SideBar from '../sidebar/sidebar'



class Detail extends React.Component {
    state = {
        title: ''
    }
    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({
            title: props.title1
        })
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
                <div className="container-fluid">


                    <div className="row product_see" style={{ marginTop: "3%", paddingBottom: '5%' }} >
                        <div className="col-md-8  left">

                            <h3 className="postimg">{this.state.title}</h3>

                            <div className="img12">
                                <img className="imgDetail" src={require('../PostDetail/contact.jpg')} />
                            </div>

                            <h3 className="postimg">Detail</h3>
                            <div className="detail">

                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Plant Name</th>
                                            <th scope="col">Plant Type</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <h3 className="postimg">Description</h3>
                            <div className="Description">
                                <p>

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    se Lorem Ipsum as their default

</p>
                            </div>

                            {/* ............................................................................. */}
                        </div>
                        <div className="col-md-4 right">

                            <div className="topInfo">


                                <div class="rui-2vHTl">
                                    <section class="_2wMiF">
                                        <span data-aut-id="itemPrice" class="_2xKfz">Rs 3,500,000</span>
                                        <h1 data-aut-id="itemTitle" class="_3rJ6e">Residential Plot For Sale In Formanites Housing Scheme Block-N Lahore</h1>
                                        <div class="_2kqti"><div data-aut-id="itemLocation" class="_1uzVV"><div class="_2A3Wa">
                                            <span class="_2FRXm">Formanites Housing Scheme, Lahore, Punjab</span></div>
                                        </div>
                                            <div data-aut-id="itemCreationDate" class="_2DGqt"><span>5 days ago</span>
                                            </div>
                                        </div>
                                    </section>
                                    <div class="_3Y_Le">
                                        <button type="button" class="rui-3mpO_ rui-KRXqt" role="button" tabindex="0" data-aut-id="btnShare" title="Share"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                            <path class="rui-77aaa" d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z">
                                            </path></svg>
                                        </button>

                                        <button type="button" class="rui-3mpO_" role="button" tabindex="0" data-aut-id="" title="Favourite"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                            <path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path>
                                        </svg>
                                        </button></div></div>
                            </div>




                            <div className="topInfo">

                                <div data-aut-id="profileTitle" class="seller">Seller description</div>



                                <h4> <i className="fa fa-user"></i> User Name</h4>
                                <p>11 November 2020</p>
                                <button type="button" data-aut-id="btnChat" class="rui-3sH3b rui-2yJ_A rui-1BozO"><i className="fa fa-phone"></i> <span>Chat with seller</span></button>
                                {/* <a rel="nofollow" href="/profile/109453346">
                        <figure class="seller23" style={{width: '68px', height: '68px', backgroundImage: "url(&quot;https://statics.olx.com.pk/external/base/img/avatar_3.png&quot;)"}}>
                     </figure>
                    </a> */}

                            </div>
                            <div className="topInfo">

                                <div data-aut-id="profileTitle" class="seller">Place In</div>
                                <p>Lahore , Model Town</p>
                                {/* <iframe className="map1" src="https://goo.gl/maps/vDNqBsaVYBsgbuQ48"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.90261803073!2d73.00510519999999!3d31.42168395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2s!4v1597168943421!5m2!1sen!2s" width="300" height="200" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                            </div>















                        </div>


                    </div>
















                </div>

            </>
        )
    }
}

export default Detail