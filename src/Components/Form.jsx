import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (formData.name.length < 6) {
      setError('El nombre debe tener más de 5 caracteres.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingrese un email válido.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail.`);
      setFormData({
        name: '',
        email: '',
      });
    }
  };
  
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name" className={styles.label}>Full name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <div className={styles.errorContainer}> 
        {error && <p className={styles.errorMessage}>{error}</p >}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      </div>
    </div>
  );
}

export default Form;
