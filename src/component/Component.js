import { useState } from 'react';

export default function Name() {
  const [fullName, setFullName] = useState({
    FirstName: '',
    LastName: '',
  });
  const [display, setDisplay] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.FirstName.trim() === '' || fullName.LastName.trim() === '') {
      setFormError('Please fill in both First Name and Last Name.');
      setDisplay(false);
    } else {
      setFormError('');
      setDisplay(true); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullName((prevFullName) => ({
      ...prevFullName,
      [name]: value,
    }));

    if (formError) {
      setFormError('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Full Name Display</h1>
          <label>First Name:</label>
          <input
            required
            type="text"
            name="FirstName"
            value={fullName.FirstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            required
            type="text"
            name="LastName"
            value={fullName.LastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      
      {display && (
        <h4>{'Full Name: ' + fullName.FirstName + ' ' + fullName.LastName}</h4>
      )}
    </>
  );
}
