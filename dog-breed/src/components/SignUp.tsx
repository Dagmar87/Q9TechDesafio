import React, { FC } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type SomeComponentProps = RouteComponentProps;
const SignUp: FC<SomeComponentProps> = ({ history }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitData = (data: any) => {
    let params = {
      email: data.email,
    };
    console.log(data);
    axios
      .post("https://dogbreed-api.q9.com.br/register", params)
      .then(function (response) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          toastId: "my_toast",
        });
        reset();
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })

      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card mb-3 mt-3 rounded" style={{ maxWidth: "500px" }}>
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title text-center text-secondary mt-3 mb-3">
                  Sign Up
                </h3>
                <form
                  className="row"
                  autoComplete="off"
                  onSubmit={handleSubmit(submitData)}
                >
                  <div className="">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="signupFormControlInput3"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-danger" style={{ fontSize: 14 }}>
                        O e-mail é obrigatório!
                      </p>
                    )}
                  </div>

                  <div className="text-center mt-4 ">
                    <button
                      className="btn btn-outline-primary text-center shadow-none mb-3"
                      type="submit"
                    >
                      Enviar
                    </button>
                    <p className="card-text">
                      Já possui uma conta?{" "}
                      <Link style={{ textDecoration: "none" }} to={"/login"}>
                        Log In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        limit={1}
        transition={Flip}
      />
    </>
  );
};

export default SignUp;
