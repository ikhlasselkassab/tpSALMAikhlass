import  { useState } from "react";
import PersonalInfo from "../comp/PersonalInfo";
import ProfessionalObjective from "../comp/ProfObj";
import Education from "../comp/Education";
import Skills from "../comp/Skills";
import Header2 from "../comp/Header2";

function For() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [personalInfoValid, setPersonalInfoValid] = useState(false);

  const handleFormSubmit = () => {
    if (personalInfoValid) {
      setIsSubmitted(true);
    } else {
      // Gérez la logique en cas de validation échouée
    }
  }

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div>
          <p>Formulaire soumis avec succès !</p>
        </div>
      ) : (
        <div >
          <Header2 />
          <PersonalInfo setPersonalInfoValid={setPersonalInfoValid} />
          <ProfessionalObjective />
          <Education />
          <Skills />
          <button
            onClick={handleFormSubmit}
            disabled={!personalInfoValid}
          >
            {personalInfoValid ? 'Passer à la page suivante' : 'Soumettre'}
          </button>
        </div>
      )}
    </div>
  );
}

export default For;
