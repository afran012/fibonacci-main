import React from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import loginGoogle from "../reducers/actions/loginGoogle"
import loginFacebook from "../reducers/actions/loginFacebook"
import { login } from '../firebaseconfig';
import "../styles/Login.css"


const Login = () => {
  const dispatch = useDispatch()

  const iniciarSesion = (valores) => {
    login(valores.email, valores.password)
  }
 

  return (<>
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: ''
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        

        <div id="login-box" onSubmit={handleSubmit} >
          <div className="left">
            <h1>Inicio de Sesión</h1>

            <input type="text" name="username" placeholder="Nombre" value={values.username} onChange={handleChange}
              onBlur={handleBlur} />
            <input type="text" name="email" placeholder="E-mail" value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />
            <input type="password" name="password" placeholder="Password" value={values.password}
              onChange={handleChange}
              onBlur={handleBlur} />
            <input type="submit" name="signup_submit" value="Ingresar" onClick={() => iniciarSesion(values)} />
          </div>
          <div className="right">
            <span className="loginwith"><img src="https://res.cloudinary.com/vrilli/image/upload/v1651796662/585ea27bcb11b227491c350b_vxktc3.png" width={150} height="auto" alt="" /></span>

            <button className="social-signin facebook" onClick={() => {
              dispatch(loginFacebook())
            }}>Facebook</button>
            <button className="social-signin google" onClick={() => {
              dispatch(loginGoogle())
            }}>Google</button>
            <Button className="ini" type='button' as={Link} to="/Register" variant="primar">¿No tienes una cuenta? Registrate</Button>

          </div>
          <div className="or">OR</div>
        </div>
      )}
    </Formik>

  </>
  );
};

export default Login