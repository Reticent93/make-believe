import {useEffect} from 'react'

const Login = () => {
    useEffect(() => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId            : '697462714224402',
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
    <div>
        <h1>Login</h1>
        <button onClick={onLoginClick}>Login</button>
    </div>
  )
}

export default Login