interface TemplateSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TemplateSelect: React.FC<TemplateSelectProps> = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="p-3 bg-[#fdf9f6] border border-gray-200 rounded-sm"
  >
    <option>Hitech kitchen</option>
    <option>Classic living room</option>
    <option>Modern workspace</option>
  </select>
);

export default TemplateSelect;
