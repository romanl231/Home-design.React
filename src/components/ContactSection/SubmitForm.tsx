import { useState } from "react";
import FormField from "./FormField";
import TemplateSelect from "./TemplateSelect";
import { ContactSubmitionService } from "api/contact";

const SubmitForm = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [template, setTemplate] = useState("Hitech kitchen");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ContactSubmitionService.submit({email, city, template, message});
    alert("Submitted successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 flex flex-col gap-6 w-full max-w-lg"
    >
      <FormField label="Email address">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-[#fdf9f6] border border-gray-200 rounded-sm w-full"
          placeholder="email@address.com"
        />
      </FormField>

      <FormField label="City where you currently living">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 bg-[#fdf9f6] border border-gray-200 rounded-sm w-full"
          placeholder="Odesa region, Ismail"
        />
      </FormField>

      <FormField label="Choose template">
        <TemplateSelect value={template} onChange={(e) => setTemplate(e.target.value)} />
      </FormField>

      <FormField label="Any additional information">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 bg-[#fdf9f6] border border-gray-200 rounded-sm w-full h-32 resize-none"
          placeholder="Write right here"
        />
      </FormField>

      <button
        type="submit"
        className="subscribe-button"
      >
        Send
      </button>
    </form>
  );
};

export default SubmitForm;
