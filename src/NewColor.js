import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColor = ({ addColor }) => {
  const [formData, setFormData] = useState("");
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addColor(formData);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="color">color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Submit</button>

    </form>
  )

};

export default NewColor;