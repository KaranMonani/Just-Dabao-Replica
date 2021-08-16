import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

export default class Reviews extends React.Component {
    render() {

        return (
            <>
                <Grid style={{ marginTop: '3%' }} item xs={12} sm={12}>
                    <center>
                        <Grid style={{ marginTop: '3%' }} item xs={11} sm={11}>
                            <Container maxWidth="lg">
                                <hr style={{ borderTop: '0.1em solid rgb(79 79 79)' }} />
                                <Grid style={{ marginTop: '3%' }} container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12}>
                                                <center>
                                                    <img alt={'img1'} width={320} src={'https://cdn.shopify.com/s/files/1/0302/0714/8116/t/4/assets/pf-7a268fe4--comingsooncrop320.jpg'}></img>
                                                </center>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h3 style={{ fontSize: '1.73333em', marginLeft: '50px', marginRight: '50px', lineHeight: '40px', fontFamily: 'Raleway', textShadow: '0px 1px, 1px 0px, 1px 1px', color: '#3A3A3A' }}>Stay Tuned, We're launching the <br />most awaited app of 2021 soon!</h3>
                                        <div>
                                            <TextField className="XXXXXXXXXX" style={{ width: '65%', color: '#3A3A3A' }} label="Enter Your Name" variant="outlined" />
                                            <br />
                                            <br />
                                            <TextField style={{ width: '65%' }} label="Enter Your Email" variant="outlined" />
                                            <br />
                                            <br />
                                            <Button
                                                style={{ width: '65%', backgroundColor: '#3A3A3A' }}
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<NotificationsActiveIcon />}
                                            >
                                                Notify Me!
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </center>
                </Grid>
            </>
        )
    }
}