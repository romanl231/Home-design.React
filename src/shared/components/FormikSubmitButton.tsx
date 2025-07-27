import { useFormikContext } from "formik";

interface FormikSubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FormikSubmitButton: React.FC<FormikSubmitButtonProps> = ({
  children,
  className = "",
}) => {
  const { isValid, dirty, isSubmitting } = useFormikContext();

  const disabled = !isValid || !dirty || isSubmitting;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`subscribe-button ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default FormikSubmitButton;