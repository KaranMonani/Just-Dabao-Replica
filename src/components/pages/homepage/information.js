import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default class Information extends React.Component {
    render() {

        return (
            <>
                <Grid style={{ marginTop: '5%' }} item xs={12} sm={12}>
                    <center>
                        <Grid style={{ marginTop: '3%' }} item xs={11} sm={11}>
                            <Container maxWidth="lg">
                                <h3 style={{ fontSize: '32px', color: '#3A3A3A', fontFamily: 'Raleway,sans-serif', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>If food can be saved, we will save it.</h3>
                                <hr style={{ borderTop: '0.1em solid rgb(79 79 79)' }} />
                                <Grid container spacing={1}>

                                    <Grid item xs={12} sm={3}>
                                        <center>
                                            <img alt={'alt1'} width={263} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-62388ba8--onethird320.png'}></img>
                                        </center>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <img alt={'alt2'} width={263} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-339b6238--744320.png'}></img>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <img alt={'alt3'} width={263} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-388ba8a6--twentypercent320.png'}></img>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <img alt={'alt4'} width={263} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-9b62388b--750320.png'}></img>
                                    </Grid>

                                </Grid>
                            </Container>
                            <Container maxWidth="lg">
                                <h3 style={{ fontSize: '32px', color: '#3A3A3A', fontFamily: 'Raleway,sans-serif', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>3 rescued meals = the amount of CO2 emissions prevented as</h3>
                                <hr style={{ borderTop: '0.1em solid rgb(79 79 79)' }} />
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={4}>
                                        <img alt={'alt5'} width={240} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-8ba8a6b0--car240.jpg'}></img>
                                        <br />
                                        <h3>1 car</h3>
                                        <p>driven for a full day</p>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <img alt={'alt6'} width={240} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-a8a6b067--flight240.jpg'}></img>
                                        <br />
                                        <h3>1 round trip</h3>
                                        <p>between Johor Bahru and SG by flight</p>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <img alt={'alt7'} width={240} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-a6b06784--tshirt240.jpg'}></img>
                                        <br />
                                        <h3>1 cotton shirt</h3>
                                        <p>newly produced</p>
                                    </Grid>
                                </Grid>
                                <p>Is the leftover bread that you’re about to eat food wastage? Besides your small appetite, where does food wastage come from? Let’s find out!</p>
                            </Container>
                        </Grid>
                    </center>
                </Grid>
            </>
        )
    }
}