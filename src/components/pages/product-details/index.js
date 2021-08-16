import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleProduct } from '../../../redux/actions';
import Container from '@material-ui/core/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Header from '../homepage/header'
import Footer from '../homepage/footer'
import Input from '@material-ui/core/Input';
import { addToCart } from '../../../redux/actions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function Partner() {

    let { id } = useParams()

    const [state, setState] = useState({
        name: "",
        price: "",
        discount_price: "",
        quantity: "",
        pickup: "",
        description: "",
        image_1: "",
        image_2: "",
    })

    const { name, price, discount_price, quantity, pickup, description, image_1, image_2 } = state

    const { user } = useSelector((state) => state.data)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSingleProduct(id))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user])

    const { Carts } = useSelector((state) => state.data)

    const imagesThumb = [
        {
            original: image_1,
            thumbnail: image_1,
        },
        {
            original: image_2,
            thumbnail: image_2,
        },
    ]
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const AddToCartAction = (user) => {
        // e.preventDefault();
        setOpen(true);
        dispatch(addToCart(user));
    }

    return (
        <>
            <Grid container spacing={24}>
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
                <Grid item xs={12} sm={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Container maxWidth="lg">
                        <Grid container spacing={1}>
                            <Grid style={{ marginTop: '4%', padding: '5%' }} item xs={12} sm={6}>
                                <ImageGallery style={{}} infinite={false} showPlayButton={false} thumbnailPosition={'left'} items={imagesThumb} />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                                <h1>{name}</h1>
                                <h3><span style={{ color: 'green' }}>{discount_price}</span> <span style={{ textDecoration: 'line-through' }}>{price}</span></h3>
                                <br />
                                <br />
                                <p>Style:</p>
                                <Input defaultValue="4 * 500g" disabled inputProps={{ 'aria-label': 'description' }} />
                                <br />
                                <br />
                                <br />
                                <TextField
                                    id="standard-number"
                                    label={'Quantity'}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={quantity}
                                />
                                <br />
                                <br />
                                <br />
                                <br />
                                <h3>Pick Up : {pickup}</h3>
                                <Button variant="contained" onClick={() => AddToCartAction(state)} style={{ width: '100%', color: 'green', borderColor: 'green', backgroundColor: 'white' }} color="primary">
                                    Add To Cart
                                </Button>
                                <br />
                                <br />
                                <Button variant="contained" style={{ width: '100%', backgroundColor: 'green' }} color="primary">
                                    Buy It Now
                                </Button>
                                <p>{description}</p>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}

export default Partner;
