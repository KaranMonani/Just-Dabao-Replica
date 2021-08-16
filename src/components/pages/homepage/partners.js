import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Partners extends React.Component {
    render() {
        var settings = {
            speed: 1000,
            autoplay: true,
            slidesToShow: 5,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }]
        };

        var settings1 = {
            speed: 1000,
            slidesToShow: 7,
            infinite: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }]
        };

        var settings2 = {
            speed: 1000,
            slidesToShow: 3,
            infinite: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }]
        };

        return (
            <>
                <Grid container style={{ backgroundColor: '#f6f6f6' }} spacing={24}>
                    <Grid item xs={12} sm={12}>
                        <center>
                            <div style={{ marginTop: '3%', fontSize: '34px', fontWeight: 'bolder', fontFamily: 'Raleway', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>
                                <span >Our <span style={{ color: 'rgb(0, 119, 73)' }}>300+ Green </span>Partners</span>
                            </div>
                            <Grid item xs={11} sm={11}>
                                <Slider style={{ marginTop: '3%' }} {...settings}>
                                    <>
                                        <center>
                                            <img alt={'image1'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-6131efed--logo2.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image2'} width={100} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-f4c3bcd5--Whiskit-Logo.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image3'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-6547949c--muffinry.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image4'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-99872164--TheSaladShop-Edited.jpg'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image5'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-21e52d99--SaucyBeanlogo02.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image6'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-31efed7e--manhattanmeatball487.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image7'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-e907d8f4--Roots-Logo.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image8'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-57654794--Lemuel.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image9'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-e52d99c9--thumbMixedGreenslogoweb.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image10'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-6ee1a9e9--Bunnie-Bash-Logo.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image11'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-e40fb4f4--Tropical-Sundays.png'}></img>
                                        </center>
                                    </>
                                    <>
                                        <center>
                                            <img alt={'image12'} width={150} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-47949cd9--Omah-Kayu.png'}></img>
                                        </center>
                                    </>
                                </Slider>
                            </Grid>
                            <Grid item xs={10} sm={10} style={{
                                margin: '0 48px',
                                borderTopRightRadius: '48px',
                                borderTopLeftRadius: '48px',
                                backgroundColor: '#fff',
                                height: '200px'
                            }}>
                                <div style={{ fontSize: '34px', fontWeight: 'bolder', fontFamily: 'Raleway', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>
                                    <p style={{ padding: '2%' }} >Featured On</p>
                                </div>
                                <div style={{ marginTop: '3%' }}>
                                    <Slider style={{ marginTop: '3%' }} {...settings1}>
                                        <>
                                            <center>
                                                <img alt={'brand1'} width={120} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-f8a98a44--seth.png"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand2'} width={64} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-394b1a73--channel8resize.png"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand3'} width={130} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-bc16ade4--zaobaosglogo.svg"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand4'} width={119} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-e48c2d5e--msnews.png"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand5'} width={50} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-68636ff3--958resizev2.png"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand6'} width={55} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-fc2dc6dd--greenblackv4resize.png"></img>
                                            </center>
                                        </>
                                        <>
                                            <center>
                                                <img alt={'brand7'} width={119} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-2d5ea839--vulcan.png"></img>
                                            </center>
                                        </>
                                    </Slider>
                                </div>
                            </Grid>
                        </center>
                    </Grid>

                </Grid>
                <Grid style={{ marginTop: '3%' }} item xs={12} sm={12}>
                    <center>
                        <Grid style={{ marginTop: '3%' }} item xs={11} sm={11}>
                            <div style={{ fontSize: '34px', fontWeight: 'bolder', fontFamily: 'Raleway', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>
                                <center><span >It's simple to begin</span></center>
                            </div>
                            <hr style={{ borderTop: '0.1em solid rgb(79 79 79)' }} />
                        </Grid>
                        <Grid style={{ marginTop: '3%' }} item xs={10} sm={10}>
                            <Slider style={{ marginTop: '3%' }} {...settings2}>
                                <>
                                    <center>
                                        <img alt={'brand1'} width={240} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-621fc47a--youorder240.jpg"></img>
                                        <div>
                                            <h3>
                                                <span >Step 1: Order</span>
                                            </h3>
                                            <p>
                                                <span >Click Order Now above & order the <br /> meal you love. Use filters to help!</span>
                                            </p>
                                        </div>
                                    </center>
                                </>
                                <>
                                    <center>
                                        <img alt={'brand2'} width={240} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-4f621fc4--yousee240.jpg"></img>
                                        <div>
                                            <h3>
                                                <span >Step 2: Confirm Pick Up Slot</span>
                                            </h3>
                                            <p>
                                                <span >Our agent will confirm your pick up<br /> slot over WhatsApp or Email.</span>
                                            </p>
                                        </div>
                                    </center>
                                </>
                                <>
                                    <center>
                                        <img alt={'brand3'} width={240} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-1fc47a26--yourecieve240.jpg"></img>
                                        <div>
                                            <h3>
                                                <span >Step 3: Pick Up & Enjoy</span>
                                            </h3>
                                            <p>
                                                <span >Pick up your order at the confirmed <br />slot & enjoy your Shiok meal.</span>
                                            </p>
                                        </div>
                                    </center>
                                </>
                            </Slider>
                        </Grid>
                    </center>
                </Grid>
                <Container style={{ marginTop: '4%', padding: '15px' }} maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={12}>
                                    <center>
                                        <img alt={'info'} width={350} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-c47a268f--Shiokbagcropped320.png'}></img>
                                    </center>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <center>
                                <h3 style={{ fontSize: '32px', color: '#3A3A3A', fontFamily: 'Raleway,sans-serif', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>The Shiok Bag</h3>
                            </center>
                            <p style={{ fontSize: '18px', color: '#3A3A3A', fontFamily: 'Raleway,sans-serif', fontWeight: 'bolder' }}>
                                Every order at Just Dabao is a Shiok Bag. These Shiok bags contain a variety of unsold food & beverages from eateries.
                                <br /><br />
                                While the contents are a surprise, you will know the cuisine, the diet type, the google rating and the proximity of the eatery to help you inform your decision.
                                <br /><br />
                                Once you made the purchase, you will know the eatery name and address so that you can pick up the Shiok Bag during the pick up window.
                                <br /><br />
                                It works in everyone's favor: eateries get the flexibility to ensure nothing is thrown out while you get the joy of discovery at ultra low prices.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}