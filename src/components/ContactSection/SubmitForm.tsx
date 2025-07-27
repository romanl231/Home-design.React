import { useState } from "react";
import FormField from "./FormField";
import TemplateSelect from "./TemplateSelect";
import { ContactSubmitionService } from "api/contact";
import { FormikProvider, useFormik } from "formik";
import { validationSchema } from "utils/validationSchema";
import FormikTextInput from "../../shared/components/FormikTextInput";
import FormikTextarea from "shared/components/FormikTextarea";
import FormikSubmitButton from "shared/components/FormikSubmitButton";

const SubmitForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      city: "",
      template: "Hitech kitchen",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ContactSubmitionService.submit(values);
      alert("Submitted successfully");
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-10 flex flex-col gap-6 w-full max-w-lg"
      >
        <FormikTextInput
            name="email"
            placeholder="email@address.com"
            label= "Email address"
        />

        <FormikTextInput
            name="city"
            placeholder="Odesa region, Ismail"
            label= "City where you currently living"
        />

        <FormField label="Choose template">
          <TemplateSelect
            value={formik.values.template}
            onChange={(val) => formik.setFieldValue("template", val)}
            onBlur={() => formik.setFieldTouched("template", true)}
            error={formik.touched.template && formik.errors.template}
          />
          {formik.touched.template && formik.errors.template && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.template}</div>
          )}
        </FormField>

        <FormikTextarea
          name="message"
          label="Any additional information"
          placeholder="Write right here"/>

        <FormikSubmitButton>Send</FormikSubmitButton>
      </form>
    </FormikProvider>
  );
};

export default SubmitForm;
