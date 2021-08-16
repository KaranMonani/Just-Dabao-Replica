import Grid from "@material-ui/core/Grid";
import './css/index.css'
import Header from './header'
import Carousel from './carousel'
import Partners from './partners'
import Products from './products'
import Reviews from './reviews'
import StayTuned from './stay-tuned'
import Information from './information'
import Footer from './footer'

function Base() {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
                <Header />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Carousel />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Partners />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Products />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Reviews />
            </Grid>
            <Grid item xs={12} sm={12}>
                <StayTuned />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Information />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default Base;
