import { signUpForm } from "./../models";
import instance from ".";

export const signUp = (data: signUpForm) => {
  const uri = "/signup";
  return instance.post(uri, data);
};
