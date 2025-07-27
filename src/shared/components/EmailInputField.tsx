interface EmailInputFieldProps{
    email: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({email, onChange}) => {
    return (
        <input 
            className="email-input" 
            type="email" 
            value={email} 
            onChange={onChange} 
            placeholder="email@address.com"/>
    );
}

export default EmailInputField;