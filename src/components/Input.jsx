import '../styles/Input.css';

export default function Input({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    minLength,
    maxLength,
    pattern,
    autoComplete
}) {
    return (
        <label className="input-label">
            {label && <span>{label}: </span>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
                autoComplete={autoComplete}
                className="input-field"
            />
        </label>
    );
}
