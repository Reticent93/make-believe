import {useEffect} from 'react'

const Login = () => {

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                  'Thanks for logging in, ' + response.name + '!';
            });
        } else {
            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
        }
    }

    useEffect(() => {
       /* global FB */
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1581438475584268',
      cookie     : true,
      xfbml      : true,
      version    : 'v14.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };
  


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    }, []);

   
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  return (
    <>
    <div>
        <h1>Login</h1>
<div id='status' onClick={checkLoginState}></div>
    </div>
    </>
  )
}

export default Login