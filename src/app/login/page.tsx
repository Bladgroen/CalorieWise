"use client";
import { signIn } from "@/firebase/signup";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterFormData } from "../../interfaces/types";
import styles from "../register/RegisterPage.module.scss";
import { validateForm, validationSchema } from "../register/RegisterPageLogic";

export default function RegisterPage() {
  const initialValues: RegisterFormData = {
    email: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: RegisterFormData) => {
    setLoading(true);
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await signIn(values);
        router.push("/");
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form validation erros:", validationErrors);
    }
  };

  return (
    <div className={styles.registerPage}>
      <p className={styles.title}>Login</p>
      <p className={styles.desc}>Please enter credentials to login</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className={styles.form}>
          <div className={styles.registerFormField}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <Field type="text" name="email" className={styles.field} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error_message}
            />
          </div>
          <div className={styles.registerFormField}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Field type="password" name="password" className={styles.field} />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error_message}
            />
          </div>

          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
          </button>
        </Form>
      </Formik>

      <p className={styles.login}>
        No account yet?{" "}
        <a className={styles.loginLink} href="/register">
          Register
        </a>
      </p>
    </div>
  );
}
