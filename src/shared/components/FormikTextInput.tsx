import { useField } from "formik";

interface FormikTextInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
}

const FormikTextInput: React.FC<FormikTextInputProps> = ({
  name,
  type = "text",
  placeholder,
  label,
  className = "",
}) => {
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;

  return (
    <div className="w-full">
      {label && <label htmlFor={name} className="block mb-1 font-medium">{label}</label>}
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`p-3 bg-[#fdf9f6] border ${
          isError ? "border-red-500" : "border-gray-200"
        } rounded-sm w-full ${className}`}
      />
      {isError && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikTextInput;