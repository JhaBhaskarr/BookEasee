import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulate registration logic
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setError('User already exists');
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(newUser)); // Log in the new user
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  return (
    <div style={styles.container}>
      {/* Website Name */}
      <div style={styles.header}>
        <h1 style={styles.websiteName}>BookEase</h1>
      </div>

      {/* Register Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.link}>
          Already have an account? <a href="/login" style={styles.linkText}>Login here</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg,rgb(146, 59, 163),rgb(43, 145, 163))',
  },
  header: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  websiteName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
  },
  formContainer: {
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropfilter: 'blur(10px)',
    webkitbackdropfilter: 'blur(10px)',
    width: '350px',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: '#dc3545',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#6a11cb',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  link: {
    marginTop: '15px',
    fontSize: '0.9rem',
    color: '#555',
  },
  linkText: {
    color: '#6a11cb',
    textDecoration: 'none',
  },
};

export default RegisterPage;