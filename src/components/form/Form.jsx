import { useState } from 'react';

import './Form.css';

export default function Form({ executeOnSubmit }) {
  const [formValues, setFormValues] = useState({
    code: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    executeOnSubmit(formValues.code);
  }

  function handleChange(event) {
    event.preventDefault();

    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        label="Código"
        name="code"
        value={formValues.code}
        onChange={handleChange}
      />
      <Button>Buscar</Button>
    </form>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label className="input-label" htmlFor="input">
        {label}
      </label>
      <div className="input">
        <input
          id="input"
          name={name}
          value={value}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
