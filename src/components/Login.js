import {useEffect} from 'react'

const Login = () => {


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
        console.log('clicked', window.FB.login);
    };
  return (
    <>
    <div>
        <h1>Login</h1>
        <div id='status' className="fb-login-button" data-width="" data-size="medium" data-button-type="login_with"
    data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" onClick={onLoginClick} />
    </div>
    </>
  )
}

export default Login