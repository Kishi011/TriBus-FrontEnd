import './App.css';
import { useState } from 'react';
import GoogleLogin from 'react-google-login';

function App() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="principal">
          <h1>Titulo</h1>
          <img alt='logo tribus'/>
        </div>
        <div className="login-google">
          {
            loginData ? (
              <div>
                <h3>VOCÊ LOGOU COMO {loginData.email}</h3>
                <button onClick={handleLogout}>Deslogar</button>
              </div>
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText='Entrar com o Google'
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              />
            )
          }          
        </div>
        <div className="login-facebook">

        </div>
      </div>
    </div>
  );
}

export default App;
