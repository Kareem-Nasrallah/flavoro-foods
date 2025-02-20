import React, { useState } from "react";
import { Link } from "react-router-dom";

interface propType {
  opration: string;
}

const Form: React.FC<propType> = ({ opration }) => {
  const [check, setCheck] = useState(false);
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);

  const formError = (e: React.FormEvent) => {
    e.preventDefault();
    switch (opration) {
      case "signup":
        if (form.name == "" || form.email == "" || form.password.length < 8) {
          setCheck(true);
        } else {
          setForm(initialState);
          setCheck(false);
        }
        break;
      case "login":
        if (form.email == "" || form.password.length < 8) {
          setCheck(true);
        } else {
          setForm(initialState);
          setCheck(false);
        }
        break;
      case "send OTP":
        if (form.email == "") {
          setCheck(true);
        } else {
          setForm(initialState);
          setCheck(false);
        }
        break;
      default:
        console.log("wrong operation");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={formError}
        className="text-gray-600 gap-2.5 flex flex-col bg-white shadow-lg p-5 rounded-lg w-[80%] lg:w-1/4"
      >
        {opration == "send OTP" && (
          <p className="text-lg text-center">
            Enter Your Email For Verification
          </p>
        )}
        {opration == "signup" && (
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={
              "px-3 py-2 text-sm outline-green-500 border rounded-md border-gray-200 " +
              (check && form.name == "" && "border-red-400 outline-0")
            }
            placeholder="Your Name"
            type="text"
          />
        )}
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={
            "px-3 py-2 text-sm my-0.5 outline-green-500 border rounded-md border-gray-200 " +
            (check && form.email == "" && "border-red-400 outline-0")
          }
          type="email"
          placeholder="example@mail.com"
        />
        {opration != "send OTP" && (
          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={
              "px-3 py-2 text-sm outline-green-500 border rounded-md border-gray-200 " +
              (check && form.password.length < 8 && "border-red-400 outline-0")
            }
            type="password"
            placeholder="********"
          />
        )}
        {opration == "login" && (
          <Link to="/forgot-password" className="text-xs">
            Forgot Password
          </Link>
        )}
        <button
          type="submit"
          className="capitalize cursor-pointer bg-green-500 text-white rounded-md text-sm py-2 hover:bg-green-300"
          onClick={formError}
        >
          {opration}
        </button>
        {opration != "send OTP" && (
          <div className="flex gap-2">
            <span className="text-xs">Or </span>{" "}
            {opration == "signup" ? (
              <Link className="text-xs hover:text-green-500" to="/login">
                Login to your account
              </Link>
            ) : (
              <>
                <Link className="text-xs hover:text-green-500" to="/signup">
                  Create your account
                </Link>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
