import { useField } from "formik";

interface FormikTextareaProps {
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
  rows?: number;
}

const FormikTextarea: React.FC<FormikTextareaProps> = ({
  name,
  placeholder,
  label,
  className = "",
  rows = 6,
}) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        rows={rows}
        className={`p-3 bg-[#fdf9f6] border ${
          isError ? "border-red-500" : "border-gray-200"
        } rounded-sm w-full resize-none ${className}`}
      />
      {isError && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikTextarea;
