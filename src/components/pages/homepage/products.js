import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, addToCart } from '../../../redux/actions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover, &:focus": {
            transform: 'scale(1.05)'
        }
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});

export default function Products() {
    const classes = useStyles();
    const [state] = useState({
        raised: false,
        shadow: 1,
    })
    let dispatch = useDispatch();

    const { foodProducts } = useSelector((state) => state.data)

    const { Carts } = useSelector((state) => state.data)

    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        dispatch(loadProducts());
        // eslint-disable-next-line
    }, []);

    var settings2 = {
        speed: 1000,
        slidesToShow: 4,
        infinite: false,
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

    const handleClose = () => {
        setOpen(false);
    };

    const AddToCartAction = (user) => {
        // e.preventDefault();
        setOpen(true);
        dispatch(addToCart(user));
    }

    return (
        <Grid style={{ marginTop: '5%' }} item xs={12} sm={12}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"BUY 3 GET EXTRA 5% OFF"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {Carts && Carts.map((user) => (
                            <>
                                <Container maxWidth="lg">
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={3}>
                                            <img alt={'image1'} width={60} height={60} src={user.image} />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            {user.name}
                                        </Grid>
                                        <Grid item xs={12} sm={3} style={{ textAlign: 'center', color: 'green' }}>
                                            <b>Qty: {user.quantity}</b>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        View Cart
                    </Button>
                    <br />
                    <Button onClick={handleClose} color="primary">
                        Continue Shopping
                    </Button>
                </DialogActions>
            </Dialog>
            <center>
                <Grid style={{ marginTop: '3%' }} item xs={11} sm={11}>
                    <Container maxWidth="lg">
                        <h3 style={{ fontSize: '32px', color: '#3A3A3A', fontFamily: 'Raleway,sans-serif', textShadow: '0px 1px, 1px 0px, 1px 1px' }}>Save these Shiok Bags Now! </h3>
                        <Grid container spacing={1}>
                            <Grid style={{ marginTop: '3%' }} item xs={12} sm={12}>
                                <Slider style={{ marginTop: '3%' }} {...settings2}>
                                    {foodProducts && foodProducts.map((user) => (
                                        <>
                                            <Grid key={user.id} item xs={12} sm={3}>
                                                <Card className={classes.root}
                                                    classes={{ root: state.raised ? classes.cardHovered : "" }}
                                                    raised={state.raised} zdepth={state.shadow}>
                                                    <CardActionArea>
                                                        <CardContent>
                                                            <Link to={`product-details/${user.id}`}>
                                                                <div className="hover-switch">
                                                                    <img alt={'img1'} width={1600} src={user.image_1} />
                                                                    <img alt={'img1'} width={1600} src={user.image_2} />
                                                                </div>
                                                            </Link>
                                                            <center>
                                                                <div style={{ marginTop: '107%' }}>
                                                                    <Link to={`product-details/${user.id}`} style={{ color: '#3a3a3a', textDecoration: 'none' }}>
                                                                        <Typography gutterBottom variant="h5" style={{ fontSize: '13px', color: '#3a3a3a', fontFamily: 'Raleway', fontWeight: 'bolder' }} component="h2">
                                                                            <h3>{user.name}</h3>
                                                                        </Typography>
                                                                        <Typography variant="body2" style={{ textDecoration: 'line-through' }} color="textSecondary" component="p">
                                                                            {user.price}
                                                                        </Typography>
                                                                        <Typography variant="body2" style={{ color: 'red' }} color="textSecondary" component="p">
                                                                            {user.discount_price}
                                                                        </Typography>
                                                                    </Link>
                                                                    <button className="coolBeans" onClick={() => AddToCartAction(user)}>Add To Cart</button>
                                                                </div>
                                                            </center>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        </>
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </center>
        </Grid>

    );
}