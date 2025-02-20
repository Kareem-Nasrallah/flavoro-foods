import React from "react";

interface propType {
  opration: string;
}

const Form: React.FC<propType> = ({ opration }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white shadow p-4 rounded-xl w-3/4 lg:w-1/4">
        {opration == "signup" ? (
          <input placeholder="Your Name" type="text" name="" id="" />
        ) : (
          <p>Forgot Password</p>
        )}
        <input type="email" placeholder="example@mail.com" name="" id="" />
        <input type="password" placeholder="********" name="" id="" />
        <button>{opration}</button>
        {opration == "signup" ? (
          <p>Login to your account</p>
        ) : (
          <>
            <span>Or </span> <p>Create your account</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
