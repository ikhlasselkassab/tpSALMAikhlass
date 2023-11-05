import React, { useState } from 'react';



interface ProfessionalObjectiveState {
  objective: string;
}

const ProfessionalObjective: React.FC = () => {
  const [objectiveInfo, setObjectiveInfo] = useState<ProfessionalObjectiveState>({
    objective: '',
  });
  const [errors, setErrors] = useState({
    objective:'',
   });
 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setObjectiveInfo({
      ...objectiveInfo,
      [name]: value,
    });
  };
 

  
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    
    if (objectiveInfo.objective.length > 200) {
      setErrors({
        ...errors,
        objective: "L'objectif professionnel ne doit pas dépasser 200 mots",
      });
    }
  
    if (objectiveInfo.objective.length === 0) {
      setErrors({
        ...errors,
        objective: "L'objectif professionnel est requis",
      });
    }
  
    // Vérifier s'il y a des erreurs de validation
    if ( errors.objective ) {
      return;
    }
  
    // Soumettre le formulaire et rediriger si tout est valide
    console.log('Données soumises :', objectiveInfo);
  }

  return (
    <form className="cv-form-section" onSubmit={handleSubmit}>
      <h2>Objectif Professionnel</h2>
      <label>
        Objectif :<br />
        <textarea name="objective" value={objectiveInfo.objective}  onChange={handleChange} className="professional-objective-textarea" required />
      </label>
      
    </form>
  );
};

export default ProfessionalObjective;