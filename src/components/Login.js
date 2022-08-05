import jwtDecode from 'jwt-decode'
import {useEffect, useState} from 'react'

const Login = () => {
const [accessToken, setAccessToken] = useState({})

const handleCallbackResponse = (response) => {
    console.log('Encoded response: ' + response.credential)
    const userObj = jwtDecode(response.credential)
    console.log(userObj)
}

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '956171547066-iolpv4b31uomqmkrvb1mph4cc8t7s81o.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
        
        google.accounts.id.renderButton(
            document.getElementById('google-signin'),
            {theme: 'outline', size: 'medium' }
        )
        google.accounts.id.prompt();
    },[])


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
            //   var uid = response.authResponse.userID;
              var accessToken = response.authResponse;
              console.log('logged in', accessToken)
                // console.log('logged in still', uid)
         
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
        FB.Event.subscribe('edge.create', function(response) {
            window.top.location.href = 'url';
        });
    };
 
  return (
    <>
    <div>
        <h1>Login</h1>
        
        <div id='status' className="fb-login-button" data-width="" data-size="medium" data-button-type="login_with"
     data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" onClick={onLoginClick} /> 
    </div> 

    <div id='google-signin'></div>

    </>
  )
}

export default Login