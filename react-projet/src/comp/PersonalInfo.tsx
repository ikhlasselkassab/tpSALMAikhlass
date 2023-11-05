import React, { useState } from 'react';

interface PersonalInfoProps {
  setPersonalInfoValid: (isValid: boolean) => void;
}

function PersonalInfo({ setPersonalInfoValid }: PersonalInfoProps) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    age: 0,
  });

  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    age: '',
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

  const validatePersonalInfo = () => {
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
        age: "L'âge doit être supérieur à 18",
      });
    }

    // Vérifier s'il y a des erreurs de validation
    if (!errors.email && !errors.firstName && !errors.lastName && !errors.age) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h2>Informations Personnelles</h2>
      <label>
        Prénom:
        <input type="text" name="firstName" value={personalInfo.firstName} onChange={handleChange} required /><br />
      </label>
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      <label>
        Nom:
        <input type="text" name="lastName" value={personalInfo.lastName} onChange={handleChange} required /><br />
      </label>
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      <label>
        Email:
        <input type="text" name="email" value={personalInfo.email} onChange={handleChange} required /><br />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>
      <label>
        Âge:
        <input type="number" name="age" value={personalInfo.age} onChange={handleChange} required /><br />
      </label>
      {errors.age && <p className="text-red-500">{errors.age}</p>}
      <label>
        Adresse:
        <input type="text" name="address" value={personalInfo.address} onChange={handleChange} required /><br />
      </label>
      <label>
        Téléphone:
        <input type="tel" name="phone" value={personalInfo.phone} onChange={handleChange} /><br />
      </label>
      <button
        onClick={() => setPersonalInfoValid(validatePersonalInfo())}
      >
        Valider
      </button>
    </div>
  );
}

export default PersonalInfo;



