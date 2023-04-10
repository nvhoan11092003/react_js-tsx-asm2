import { signUpForm, signInForm } from "./../models";
import instance from ".";

export const signUp = (data: signUpForm) => {
  const uri = "/signup";
  return instance.post(uri, data);
};

export const signIn = (data: signInForm) => {
  const uri = "/signin";
  return instance.post(uri, data);
};
