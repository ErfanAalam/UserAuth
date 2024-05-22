import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    countryCode: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const countries = [
    { name: "United States", code: "US" },
    { name: "United Kingdom", code: "UK" },
    { name: "Canada", code: "CA" },
    { name: "Australia", code: "AU" },
    { name: "India", code: "IN" }
  ];
  const cities = [
    { name: "Delhi", code: "DE" },
    { name: "Mumbai", code: "MU" },
    { name: "Kolkata", code: "KO" },
    { name: "Chennai", code: "CH" },
    { name: "Bangalore", code: "BA" }
  ];

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName) {
      setFormIsValid(false)
      errors["firstName"] = "*First Name is required.";
    }
    if (!formData.lastName) {
      setFormIsValid(false)
      errors["lastName"] = "*Last Name is required.";
    }
    if (!formData.username) {
      setFormIsValid(false)
      errors["username"] = "*Username is required.";
    }
    if (!formData.email) {
      setFormIsValid(false)
      errors["email"] = "*Email is required.";
    }
    if (!formData.password) {
      setFormIsValid(false)
      errors["password"] = "*Password is required.";
    }
    if (!formData.phoneNo) {
      setFormIsValid(false)
      errors["phoneNo"] = "*Phone number is required.";
    }
    if (!formData.country) {
      setFormIsValid(false)
      errors["country"] = "*Country is required.";
    }
    if (!formData.city) {
      setFormIsValid(false)
      errors["city"] = "*City is required.";
    }
    if (!formData.panNo) {
      setFormIsValid(false)
      errors["panNo"] = "*PAN No is required.";
    }
    if (!formData.aadharNo) {
      setFormIsValid(false)
      errors["aadharNo"] = "*Aadhar No is required.";
    }

    setErrors(errors);
    setFormIsValid(isValid);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const togglePasswordVisibility = () => {
    setFormData(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      setIsSubmitted(true);
    }
  }

  return (
    <Router>
      {isSubmitted == true ? (
        <Routes>
        <Route path="/success" element={
          <div>
            <h1>Form Submitted Successfully</h1>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNo}</p>
            <p>Country: {formData.country}</p>
            <p>City: {formData.city}</p>
            <p>PAN No: {formData.panNo}</p>
            <p>Aadhar No: {formData.aadharNo}</p>
          </div>
        } />
      </Routes>
      ) :
        <div className="App">
          <form onSubmit={handleSubmit}>
           <h1>Enter your details</h1>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            {errors.firstName && <div className="error">{errors.firstName}</div>}

            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            {errors.lastName && <div className="error">{errors.lastName}</div>}

            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            {errors.username && <div className="error">{errors.username}</div>}

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            {errors.email && <div className="error">{errors.email}</div>}

            <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="button" onClick={togglePasswordVisibility}>{formData.showPassword ? "Hide" : "Show"}</button>
            {errors.password && <div className="error">{errors.password}</div>}

            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" />
            {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}

            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
            {errors.country && <div className="error">{errors.country}</div>}

            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.code} value={city.code}>{city.name}</option>
              ))}
            </select>
            {errors.city && <div className="error">{errors.city}</div>}

            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} placeholder="PAN No" />
            {errors.panNo && <div className="error">{errors.panNo}</div>}

            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} placeholder="Aadhar No" />
            {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}


            <button type="submit" disabled={!formIsValid}>Submit</button>
          </form>
        </div>
      }
    </Router>
  );
}

export default App;