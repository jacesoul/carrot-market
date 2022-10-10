import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code ✔
// Better validation
// Better errors (set, clear, display)
// Have control over inputs
// Don't deal with events ✔
// Easier Inputs ✔

interface LoginForm {
  username: string;
  password: string;
  email?: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    reset,
    resetField,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    console.log("I'm valid baby");
    setError("username", { message: "동일한 이름이 존재합니다." });
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col space-y-2"
    >
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value?.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email) ? " border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
