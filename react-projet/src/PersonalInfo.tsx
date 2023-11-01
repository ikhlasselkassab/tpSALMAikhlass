import React, { useState } from 'react';
import './index1.css'



interface PersonalInfoState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
}

const PersonalInfo: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    age:0,

    
  });
  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    age:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setPersonalInfo({
        ...personalInfo,
        [name]: capitalizeFirstLetter(value),
      });
    } else {
      setPersonalInfo({
        ...personalInfo,
        [name]: value,
      });
    }
  
    setErrors({
        ...errors,
        [name]: '',
    });

  };

 

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation de l'e-mail
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(personalInfo.email)) {
      setErrors({
        ...errors,
        email: 'Adresse e-mail invalide',
      });
    }

    // Validation du nom en majuscules
  
    
    if (personalInfo.lastName.toUpperCase() !== personalInfo.lastName) {
      setErrors({
        ...errors,
        lastName: 'Le nom doit être en majuscules',
      });
    }
    if (personalInfo.age <= 18) {
      setErrors({
        ...errors,
        age : "L'âge doit être supérieur à 18",
      });
      
    }

    // Vérifier s'il y a des erreurs de validation
    if (!errors.email && !errors.firstName && !errors.lastName && !errors.age) {
      console.log('Données soumises :', FormData);
      
      // Envoyer les données au backend ou effectuer d'autres actions ici.
    }
  };
 

  return (
    <form className="cv-form-section" onSubmit={handleSubmit}>
      <h2>Informations Personnelles</h2>
      <label>
        Prenom :
        <input type="text" name="firstName" value={personalInfo.firstName} onChange={handleChange} required /><br />
      </label>
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      <label>
        Nom :
        <input type="text" name="lastName" value={personalInfo.lastName} onChange={handleChange} required/><br />
      </label>
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      <label>
       Email:
        <input type="text" name="email" value={personalInfo.email} onChange={handleChange} required/><br />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>
      <label>
       Âge :
        <input type="number" name="age" value={personalInfo.age} onChange={handleChange} required/><br />
      </label>
        {errors.age && <p className="text-red-500">{errors.age}</p>}
      <label>
        Adresse:
        <input type="text" name="address" value={personalInfo.address} onChange={handleChange} required/><br />
      </label>
      <label>
        Téléphone:
        <input type="tel" name="phone" value={personalInfo.phone} onChange={handleChange} /><br />
      </label>
      <div>
        <button type="submit">Verification</button>
      </div>
      
    </form>
  );
};

export default PersonalInfo;