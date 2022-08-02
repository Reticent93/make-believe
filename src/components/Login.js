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
        /* global FB */
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              // The user is logged in and has authenticated your
              // app, and response.authResponse supplies
              // the user's ID, a valid access token, a signed
              // request, and the time the access token 
              // and signed request each expire.
              var uid = response.authResponse.userID;
              var accessToken = response.authResponse.accessToken;
              console.log('logged in', accessToken)
                console.log('logged in still', uid)
            } else if (response.status === 'not_authorized') {
              // The user hasn't authorized your application.  They
              // must click the Login button, or you must call FB.login
              // in response to a user gesture, to launch a login dialog.
            } else {
              // The user isn't logged in to Facebook. You can launch a
              // login dialog with a user gesture, but the user may have
              // to log in to Facebook before authorizing your application.
            }
           }, true);
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