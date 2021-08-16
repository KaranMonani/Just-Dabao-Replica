import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';

export default class Information extends React.Component {
    render() {

        return (
            <>
                <Grid style={{ marginTop: '5%', color: '#333232', backgroundColor: '#f6f6f6' }} item xs={12} sm={12}>
                    <Grid style={{ marginTop: '3%' }} item xs={12} sm={12}>
                        <Container maxWidth="lg">
                            <Grid container spacing={1} style={{
                                padding: '3px 10px',

                                fontFamily: 'Raleway,sans-serif',
                                fontWeight: 'bold'
                            }}>
                                <Grid item xs={12} sm={3}>
                                    <h3 style={{ fontSize: '20px', textShadow: '0px 1px, 1px 0px, 1px 1px', letterSpacing: '0.1em' }}><b>Sitemap</b></h3>
                                    <Link style={{ color: '#333232' }} href="/order">
                                        Order
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/partner">
                                        Partner With Us
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/story">
                                        Our Story
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/support">
                                        Support a Cause
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/blog">
                                        Blog
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/order">
                                        Contact
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <h3 style={{ fontSize: '20px', textShadow: '0px 1px, 1px 0px, 1px 1px', letterSpacing: '0.1em' }}><b>Quick links</b></h3>
                                    <Link style={{ color: '#333232' }} href="/order">
                                        Search
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/partner">
                                        FAQ
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/story">
                                        Gallery
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/support">
                                        Terms of service
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/blog">
                                        Refund policy
                                    </Link>
                                    <br />
                                    <br />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <h3 style={{ fontSize: '20px', textShadow: '0px 1px, 1px 0px, 1px 1px', letterSpacing: '0.1em' }}><b>Legal</b></h3>
                                    <Link style={{ color: '#333232' }} href="/order">
                                        Terms of Service
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/partner">
                                        Terms of Service
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/story">
                                        Refund Policy
                                    </Link>
                                    <br />
                                    <br />
                                    <Link style={{ color: '#333232' }} href="/support">
                                        Shipping
                                    </Link>
                                    <br />
                                    <br />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <h3 style={{ fontSize: '20px', textShadow: '0px 1px, 1px 0px, 1px 1px', letterSpacing: '0.1em' }}><b>Reach us at</b></h3>
                                    <p>7 Thomson Lane, <br />
                                        Singapore 297725 <br />
                                        +65 8265 1002</p>
                                    <br />
                                    <br />
                                    <p>info@justdabao.com</p>
                                    <br />
                                    <br />
                                </Grid>
                            </Grid>
                        </Container>
                        <br />
                        <br />
                        <br />
                    </Grid>
                    <hr style={{ borderTop: '0.05em solid rgb(79 79 79)' }} />
                    <br />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={1}></Grid>
                        <Grid item xs={12} sm={5}>
                            <svg style={{ marginRight: '2%' }} className="icon icon--full-color" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x={0} y={0} width={38} height={24} viewBox="0 0 165.521 105.965" xmlSpace="preserve" aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z" /><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875" /><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858" /><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048" /></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z" /><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z" /><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z" /></g></g></svg>
                            <svg style={{ marginRight: '2%' }} className="icon icon--full-color" aria-labelledby="pi-grabpay" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} viewBox="0 0 38 24"><title id="pi-grabpay">GrabPay</title><path opacity=".07" d="M35 .1H3c-1.7 0-3 1.3-3 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3v-18c0-1.7-1.4-3-3-3z" /><path fill="#FFF" d="M35 1.1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-18c0-1.1.9-2 2-2h32" /><g fill="#00AB4E"><path d="M24.7 10.7c0 1.2-.8 1.9-2 1.9h-1v1.7h-1V8.8h2c1.2 0 2 .7 2 1.9zm-1 0c0-.7-.4-.9-1-.9h-1v1.9h1c.6 0 1-.4 1-1zM29.4 11.8v2.5h-1v-.4s-.3.5-1.2.5c-1.3 0-2.1-.8-2.1-2.1v-.4c0-1.3.8-2.1 2.1-2.1 1.4-.1 2.2.7 2.2 2zm-1 0c0-.7-.5-1.2-1.1-1.2-.7 0-1.2.4-1.2 1.2v.4c0 .7.5 1.2 1.2 1.2s1.1-.4 1.1-1.1v-.5zM33.9 9.8v4.6c0 1.2-.8 1.8-2.1 1.8-.6 0-1.1-.2-1.5-.6v-1c.4.3.9.6 1.5.6.7 0 1.1-.3 1.1-1v-.4c-.2.3-.7.5-1.1.5-1.2 0-1.8-.8-1.8-1.9V9.8h1v2.6c0 .6.4 1 .9 1 .6 0 .9-.4.9-.9V9.8h1.1zM19.2 10.5c-.4-.4-.9-.6-1.4-.6-.4 0-.8.1-1 .3-.5.3-.8.6-1.5 1.5v.6c.6-.7 1.1-1.3 1.5-1.6.3-.2.6-.3 1-.3.9 0 1.6.8 1.6 1.6v.4c0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5-.7 0-1.4-.5-1.5-1.2l-.3.4c.2.7 1 1.2 1.8 1.2.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4v-.4c.1-.7-.1-1.2-.5-1.6m-8.9-.2c.3 0 .5.1.7.2l.3-.3c-.2-.2-.6-.3-1-.3-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5v2.4h.4V12c0-1.1.7-1.7 1.7-1.7m3.9 4v-2.4c0-.7-.6-1.3-1.3-1.3-.3 0-.7.1-.9.4-.3.3-.4.6-.4.9v.4c0 .7.6 1.3 1.3 1.3.2 0 .5 0 .6-.2V13c-.2.1-.4.2-.6.2-.5 0-.9-.4-.9-.9v-.4c0-.5.4-.9.9-.9s.9.4.9.9v2.4h.4zM3.1 11.7v.1a2.732 2.732 0 002.7 2.7c.6 0 1.1-.1 1.5-.4.4-.2.5-.4.5-.4v-2.2H5.6v.4h1.7v1.7c-.2.2-.7.5-1.6.5-.6 0-1.2-.2-1.6-.7-.4-.4-.6-1-.6-1.6v-.1c0-.6.3-1.2.7-1.6.5-.4 1.1-.7 1.7-.7.6 0 1 .1 1.3.3v-.5c-.3-.1-.7-.2-1.3-.2-1.5 0-2.8 1.2-2.8 2.7m7.2-.7c.2 0 .3 0 .4.1.1-.1.1-.2.2-.4-.1-.1-.4-.1-.6-.1-.8 0-1.3.6-1.3 1.3v2.4h.4v-2.4c0-.5.3-.9.9-.9m-3.1-.5V10c-.3-.2-.7-.3-1.3-.3-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.4v.1c0 1.1.9 1.9 1.9 1.9.9 0 1.2-.3 1.3-.4v-1.2H5.6v.4h1v.6c-.1.1-.4.2-.9.2-.4 0-.8-.2-1.1-.4-.3-.3-.4-.7-.4-1.1v-.1c0-.8.8-1.5 1.7-1.5.6-.1 1 0 1.3.3m9.9.8c.2-.2.4-.3.7-.3.5 0 .9.4.9.9v.4c0 .5-.4.9-.9.9-.2 0-.5-.1-.7-.4-.2-.2-.3-.5-.3-.8l-.3.4c.1.3.2.6.5.8.2.2.5.3.8.3.7 0 1.3-.6 1.3-1.3v-.4c0-.3-.1-.7-.4-.9-.3-.3-.6-.4-.9-.4-.2 0-.6.1-1 .5-.1.1-.4.4-.5.6-.3.3-.7.7-1 1.2v.7c.4-.5.6-.7.9-1.1.3-.5.7-.9.9-1.1m-6.3 1c0 .5.2 1.1.6 1.4.4.4.9.6 1.4.6.2 0 .5 0 .6-.1v-.4c-.2.1-.4.1-.6.1-.9 0-1.6-.8-1.6-1.6v-.4c0-.9.8-1.6 1.6-1.6.4 0 .9.2 1.2.5.3.3.5.7.5 1.2v2.4h.5v-2.5c0-.5-.3-1-.6-1.4-.4-.4-.9-.6-1.4-.6-.5 0-1.1.2-1.4.6-.4.4-.6.9-.6 1.4v.4zm4.9-1.6c.1-.2.3-.3.4-.4V8h-.4v2.7zm.7-.6V8h.4v1.7c-.1.1-.3.2-.4.4" /></g></svg>
                            <svg style={{ marginRight: '2%' }} className="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><circle fill="#EB001B" cx={15} cy={12} r={7} /><circle fill="#F79E1B" cx={23} cy={12} r={7} /><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" /></svg>
                            <svg style={{ marginRight: '2%' }} className="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" viewBox="0 0 38 24" width={38} height={24} aria-labelledby="pi-paynow"><title id="pi-paynow">PayNow</title><g fill="none" fillRule="evenodd"><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" opacity=".07" /><path fill="#FFF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><image width={29} height={17} x={5} y={4} xlinkHref="data:image/png;base64,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" /></g></svg>
                            <svg style={{ marginRight: '2%' }} className="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688" /></svg>

                        </Grid>
                        <Grid item xs={12} sm={5} style={{ textAlign: 'right', marginRight: '2%' }}>
                            <FacebookIcon style={{ marginRight: '2%' }} />
                            <InstagramIcon style={{ marginRight: '2%' }} />
                            <YouTubeIcon style={{ marginRight: '2%' }} />
                        </Grid>
                        <Grid item xs={12} sm={1}></Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} style={{ textAlign: 'right', marginRight: '2%' }}>
                            <p>© 2021, Just Dabao Powered by Shopify</p>
                        </Grid>
                    </Grid>

                </Grid>
            </>
        )
    }
}