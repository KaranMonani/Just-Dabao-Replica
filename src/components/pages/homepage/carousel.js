import React from 'react';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default class Slider extends React.Component {
    render() {
        return (
            <Grid style={{ marginTop: '1%' }} container spacing={24}>
                <Grid item xs={12} sm={5}>
                    <Carousel emulateTouch={true} showStatus={false} showThumbs={false}>
                        <div>
                            <img alt={'slide1'} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-04bcc74f--discover640.jpg" />
                        </div>
                        <div>
                            <img alt={'slide2'} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-bcc74f62--save640.jpg" />
                        </div>
                        <div>
                            <img alt={'slide3'} src="https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-c74f621f--ecoFriendly640.jpg" />
                        </div>
                    </Carousel>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className="mainText">
                        <h1 className="headingText">
                            Rescue delicious food and protect your planet
                        </h1>
                        <p>Everyday, many eateries end up with perfectly edible food that remain unsold.</p>
                        <p>Rescue them before they are discarded. And did we mention...get up to 70% OFF.</p>
                        <Link to='/order'>
                            <button className="coolBeans">Order Now</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        )
    }
}