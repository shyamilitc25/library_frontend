import { useState } from "react";
import { ILogin } from "../interface";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { loginAsync } from "../features/authSlice";
import { AppDispatch } from "../store/store";
const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<ILogin>({ email: "", password: "" });
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Username is required")
      .email("Invalid Format"),
    password: Yup.string().required("Password is required"),
  });
  const handleSubmit = async (values: ILogin) => {
    dispatch(loginAsync(values));
  };
  console.log({ formData });

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Login</div>
        </div>
        <Formik
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className=" rounded px-8 pt-6 pb-8 mb-4">
            <FormInput
              name="email"
              placeHolder="Enter your username"
              labelName="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <FormInput
              name="password"
              placeHolder="Enter your password"
              labelName="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Login;
