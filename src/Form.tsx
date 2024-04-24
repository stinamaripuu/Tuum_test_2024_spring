import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './Form.css'; 

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  country: string;
  companyName: string;
  info: string;
  privacy: boolean;
  news: boolean;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', 
    lastName: '', 
    email: '', 
    jobTitle: '', 
    country: '', 
    companyName: '', 
    info:'', 
    privacy: false, 
    news: false
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = event.target as HTMLInputElement; // Type assertion here
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
}


  function handleSelectCountry(countryCode: string) {
    setFormData({ ...formData, country: countryCode });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact us</h1>
      <div className='columns'>
        <div className='b1'>
          <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleInputChange} required/>
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required/>
          <ReactFlagsSelect className='country_flag'
            selected={formData.country}
            onSelect={handleSelectCountry}
            searchable={true}
            placeholder="Country"
            />
        </div>
        <div className='b2'>
          <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} required/>
          <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleInputChange} required/>
          <input type="text" name="companyName" placeholder="Company name" value={formData.companyName} onChange={handleInputChange} required/>
        </div>
      </div>
      <textarea className='infoBox' name="info" placeholder="What would you like to talk about?" value={formData.info} onChange={handleInputChange} />
      
      <div className='checkInfo'>
        <input 
          type="checkbox" 
          name="privacy" 
          checked={formData.privacy} 
          onChange={handleInputChange} />
        <label>By submitting this form I accept <a href='https://tuum.com/privacy-policy/'>privacy policy</a> and <a href='https://tuum.com/cookie-policy/'>cookie policy</a>. *</label>
        <br/>
        <input 
          type="checkbox" 
          name="news" 
          checked={formData.news} 
          onChange={handleInputChange} />
        <label>I would like to receive your newsletter</label>
        <br/>
      </div>
      <button className='submitButton' type="submit">Submit</button>
    </form>
  );
}

export default Form;
