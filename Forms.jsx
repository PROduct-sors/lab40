import React, { useState, useRef } from "react";

// ==========================================
// Завдання 1. Керовані компоненти
// ==========================================
export function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Завдання 1:\nІм'я: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h3>1. Керована форма (useState)</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім'я" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button type="submit">Зареєструватися</button>
    </form>
  );
}

// ==========================================
// Завдання 2. Некеровані компоненти
// ==========================================
export function UncontrolledLoginForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Завдання 2. Некеровані дані:", {
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
    alert("Дані виведено в консоль!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h3>2. Некерована форма (useRef)</h3>
      <input type="text" ref={nameRef} placeholder="Ім'я" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Відправити</button>
    </form>
  );
}

// ==========================================
// Завдання 3. Багатопольова форма
// ==========================================
export function ProfileForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", birthDate: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Завдання 3. Єдиний об'єкт стану:", formData);
    alert("Дані виведено в консоль!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h3>3. Багатопольова форма (Об'єкт)</h3>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Ім'я" />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Прізвище" />
      <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
      <button type="submit">Зберегти</button>
    </form>
  );
}

// ==========================================
// Завдання 4. Валідація
// ==========================================
export function ValidatedRegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!formData.email.includes("@")) newErrors.email = "Некоректний email (має містити @)";
    if (!formData.password.trim()) newErrors.password = "Пароль обов'язковий";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Форма успішно відправлена!");
      setFormData({ name: "", email: "", password: "" }); // Очищення
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h3>4. Форма з валідацією</h3>
      
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ім'я" />
      {errors.name && <span className="error">{errors.name}</span>}

      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <span className="error">{errors.email}</span>}

      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Пароль" />
      {errors.password && <span className="error">{errors.password}</span>}

      <button type="submit">Зареєструватися</button>
    </form>
  );
}
