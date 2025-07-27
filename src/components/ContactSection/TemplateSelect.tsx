import React from "react";

interface TemplateSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string | false;
}

const TemplateSelect: React.FC<TemplateSelectProps> = ({
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="w-full">
      <select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`p-3 bg-[#fdf9f6] border rounded-sm w-full ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      >
        <option value="Hitech kitchen">Hitech kitchen</option>
        <option value="Classic living room">Classic living room</option>
        <option value="Modern workspace">Modern workspace</option>
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TemplateSelect;
