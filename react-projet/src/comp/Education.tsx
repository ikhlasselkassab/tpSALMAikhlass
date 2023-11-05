import React, { useState } from 'react';
interface EducationState {
  institution: string;
  degree: string;
  graduationYear: string;
}

const Education: React.FC = () => {
  const [educationInfo, setEducationInfo] = useState<EducationState>({
    institution: '',
    degree: 'Bachelors', // Valeur par défaut
    graduationYear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setEducationInfo({
      ...educationInfo,
      [name]: value,
    });
  };

  return (
    <form className="cv-form-section">
      <h2>Éducation</h2>
      <label>
        Institution :
        <input type="text" name="institution" value={educationInfo.institution} onChange={handleChange} /><br />
      </label>
      <label>
        Diplôme :
        <select name="degree" value={educationInfo.degree} onChange={handleChange}>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="PhD">PhD</option>
          {/* Ajoutez d'autres options au besoin */}
        </select><br />
      </label>
      <label>
        Année de diplomation :
        <input type="text" name="graduationYear" value={educationInfo.graduationYear} onChange={handleChange} /><br />
      </label>
    </form>
  );
};

export default Education;
