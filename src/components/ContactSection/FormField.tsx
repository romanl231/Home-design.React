interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm">{label}</label>
    {children}
  </div>
);

export default FormField;
