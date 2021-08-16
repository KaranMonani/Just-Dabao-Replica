import React from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Container from '@material-ui/core/Container';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Reviews extends React.Component {
    render() {
        var settings2 = {
            speed: 1000,
            slidesToShow: 2,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
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
                <Grid style={{ marginTop: '3%' }} item xs={12} sm={12}>
                    <center>
                        <Grid style={{ marginTop: '3%' }} item xs={11} sm={11}>
                            <div style={{ color: '#3A3A3A', letterSpacing: '.1em', fontSize: '1.33333em', fontWeight: 'bolder', fontFamily: 'Raleway', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>
                                <center>
                                    <span >LET CUSTOMERS SPEAK FOR US</span>
                                    <br />
                                    <Rating name="read-only" precision={0.5}
                                        value={4.5} readOnly />
                                    <br />
                                    <span style={{ fontSize: '15px', fontWeight: '100', }}>
                                        from 431 reviews
                                    </span>
                                </center>

                            </div>
                        </Grid>
                        <Grid style={{ marginTop: '3%' }} item xs={8} sm={8}>
                            <Slider style={{ marginTop: '3%' }} {...settings2}>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img1'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/BasqueCheesecakefull_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img2'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/WhatsAppImage2021-07-13at7.34.20PM_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img3'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/WhatsAppImage2021-04-26at19.41.31_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img4'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/WhatsAppImage2021-07-17at4.01.29PM_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img5'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/159310075_104795021607401_5178995113131500398_n_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>
                                <>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12}>
                                                        <center>
                                                            <img alt={'img6'} style={{ width: '75%', marginTop: '15%' }} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/IMG_7063_2048x2048_a5093bd0-5f73-45df-b540-713bb9215ee8_56x56.jpg'}></img>
                                                        </center>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                                <span>
                                                    <Rating name="read-only" precision={0.5}
                                                        value={5} readOnly />
                                                    <br />
                                                    <b>Amazing bagels!</b>
                                                    <p>
                                                        Received a huge shiok bag with some lovely burger buns and a couple of furikake bagels. The furikake bagels are incredible
                                                    </p>
                                                </span>
                                                <span>
                                                    <b>Mallika Sriram</b>
                                                    <br />
                                                    Bakery (Kallang - 3 min‍♂️from Bendemeer MRT)
                                                    14/08/21
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </>

                            </Slider>
                            <br />
                            <br />
                            <br />
                            <br />
                        </Grid>
                    </center>
                </Grid>
            </>
        )
    }
}