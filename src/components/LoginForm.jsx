import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const handleLogin = async (values, { setSubmitting }) => {
    // Przykładowa logika sprawdzania poprawności danych
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Login successful!");
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while logging in. Please try again later. The login function is not ready"
      );
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form className="login-form">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
          <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
          <ErrorMessage name="password">{(msg) => <p>{msg}</p>}</ErrorMessage>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
