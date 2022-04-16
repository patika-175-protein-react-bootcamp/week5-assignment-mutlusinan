import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  firstname: yup.string(),
  lastname: yup.string(),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("E-posta alanı zorunludur."),
  username: yup.string().required("Kullanıcı adı alanı zorunludur."),
  pass: yup
    .string()
    .typeError("Karakter hatası. Lütfen kontrol ediniz.")
    .required("Şifre alanı zorunludur.")
    .min(8, "Şifreniz en az 8 karakter olabilir.")
    .max(16, "Şifreniz en fazla 16 karakter olabilir."),
  repass: yup.string().oneOf([yup.ref("pass"), null], "Farklı bir şifre girişi yapıldı."),
  agree: yup.boolean().oneOf([true], "Sözleşme kabul edilmek zorundadır."),
});
