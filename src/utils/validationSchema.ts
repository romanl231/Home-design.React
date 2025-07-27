import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email")
        .max(100, "Write shorter email")
        .required("Email is required"),

    city: Yup.string()
        .max(300, "Limit is 300 characters")
        .required("This field is required"),

    template: Yup.string()
        .required("This field is required"),

    message: Yup.string()
        .min(150, "Write at least 150 characters")
        .max(2000, "Limit is 2000 characters")
        .required("This field is required")
});