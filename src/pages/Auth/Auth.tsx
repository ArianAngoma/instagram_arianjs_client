import {useState} from 'react';

import {Container, Image} from 'semantic-ui-react';

import instaclone from '../../assets/png/instaclone.png';
import './Auth.scss';

import {LoginForm, RegisterForm} from '../../components';

export const Auth = () => {
  const [showLogin, setShowLogin] = useState<Boolean>(true);

  const handleAuthPage = () => setShowLogin(!showLogin);

  return (
    <Container fluid className="auth">
      <Image src={instaclone}/>

      <div className="container-form">
        {showLogin ? (
          <LoginForm/>
        ) : (
          <RegisterForm setShowLogin={setShowLogin}/>
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <span onClick={handleAuthPage}>Regístrate</span>
            </>
          ) : (
            <>
              ¡Entra con tu cuenta!
              <span onClick={handleAuthPage}>Iniciar sesión</span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
};
