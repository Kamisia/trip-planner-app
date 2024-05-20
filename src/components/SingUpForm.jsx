import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordRep: "",
  toggle: false,
};
const userValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(2, "Username must be 2 characters or more"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email is not correct"
    ),
  password: Yup.string()
    .min(5, "Password must be 5 characters or more")
    .required("Password is required"),
  passwordRep: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
  toggle: Yup.boolean()
    .oneOf([true], "You must accept the agreement")
    .required("You must accept the agreement"),
});
const SingUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userValidationSchema}
      onSubmit={() => alert("Form sended")}
    >
      {(props) => {
        return (
          <Form>
            <label htmlFor="name"> Username</label>
            <Field
              value={props.values.name}
              type="text"
              id="name"
              className="form-control"
            />
            <ErrorMessage name="name">{(msg) => <p>{msg}</p>}</ErrorMessage>
            <label htmlFor="email">Email </label>
            <Field
              value={props.values.email}
              type="email"
              id="email"
              className="form-control"
            />
            <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
            <label htmlFor="password">Password</label>
            <Field
              value={props.values.password}
              type="password"
              id="password"
              className="form-control"
            />
            <ErrorMessage name="password">{(msg) => <p>{msg}</p>}</ErrorMessage>
            <label htmlFor="passwordRep">Repeat Password</label>
            <Field
              value={props.values.passwordRep}
              type="password"
              id="passwordRep"
              className="form-control"
            />
            <span id="error-message">
              <ErrorMessage name="passwordRep">
                {(msg) => <p>{msg}</p>}
              </ErrorMessage>
            </span>
            <div className="check">
              <Field
                type="checkbox"
                id="toggle"
                name="toggle"
                className="check"
              />
              <span id="label-checkbox"> I accept the agreement</span>
            </div>
            <span id="error-message">
              <ErrorMessage name="toggle">{(msg) => <p>{msg}</p>}</ErrorMessage>
            </span>
            <button type="submit"> Sing Up</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SingUpForm;
