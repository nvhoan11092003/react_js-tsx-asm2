import * as yup from "yup";
export interface IProduct {
  id: string;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: { base_url: string }[];
  brand: {
    id: number;
    name: string;
    slug: string;
  };
  specifications: ISpecification[];
}

export interface ISpecification {
  name: string;
  attributes: {
    code: string;
    name: string;
    value: string;
  };
}

export const signUpSchema = yup.object({
  first_name: yup.string().required("trường dữ liệu bắt buộc"),
  last_name: yup.string().required("trường dữ liệu bắt buộc"),
  email: yup
    .string()
    .email("sai định dạng email")
    .required("trường dữ liệu bắt buộc"),
  password: yup.string().min(6).required("trường dữ liệu bắt buộc"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "mật khẩu không khớp"),
});
export type signUpForm = yup.InferType<typeof signUpSchema>;
