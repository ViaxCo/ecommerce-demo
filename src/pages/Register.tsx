import AuthForm from "../components/AuthForm";
import Header from "../components/Header";

const Register = () => {
  return (
    <>
      <Header />
      <AuthForm authType="register" />
    </>
  );
};

export default Register;
