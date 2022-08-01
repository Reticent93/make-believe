import React, {useEffect} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {

    useEffect(() => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId            : '1581438475584268',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v14.0'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const onLoginClick = () => {
        window.FB.login();
    };

  return (
    <>
    <div>
        <Navbar />
        <h1>Home</h1>
        <p>This is the home page</p>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/login">Login</Link>
    </div>
    <div id='status' className="fb-login-button" data-width="" data-size="medium" data-button-type="login_with"
    data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" onClick={onLoginClick} />
    </>
  )
}

export default Home