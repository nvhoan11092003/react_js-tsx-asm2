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

export const signInSchema = yup.object({
  email: yup
    .string()
    .email("sai định dạng email")
    .required("trường dữ liệu bắt buộc"),
  password: yup.string().min(6).required("trường dữ liệu bắt buộc"),
});

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

export type signInForm = yup.InferType<typeof signInSchema>;

export const updateSchema = yup.object({
  name: yup.string().required("Trường dữ liệu bắt buộc"),
  price: yup.number().required("Trường dữ liệu bắt buộc"),
  original_price: yup.number().required("Trường dữ liệu bắt buộc"),
  description: yup
    .string()
    .min(10, "Tối thiếu 10 ký tự")
    .required("Trường dữ liệu bắt buộc"),
});

export type updateForm = yup.InferType<typeof updateSchema>;
