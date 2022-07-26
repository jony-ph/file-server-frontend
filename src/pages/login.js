import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import LoginInfoIcon from "../components/LoginInfoIcon";
import styles from "../styles/login.module.css";

function Login({ handle }) {
  useEffect(() => {
    handle(false);

    return () => {
      handle(true);
    };
  }, [handle]);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-dark">
      <div className={`container rounded shadow ${styles.lcontainer}`}>
        <div className="row align-items-stretch">
          <div
            className={`col ${styles.banner} d-none d-lg-block col-md-3 col-lg-4 col-xl-5 rounded`}
          >
            <LoginInfoIcon styles={styles} />
          </div>

          <div className="col bg-white p-5 rounded">
            <h1 className="text-center mt-5">Bienvenido</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
