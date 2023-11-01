import Header from '../comp/Header.tsx';
import InformationsPersonnelles from '../comp/InformationsPersonnelles.tsx';
import CompetencesLinguistiques from '../comp/CompetencesLinguistiques.tsx';
import Autres from '../comp/centresdinteret.tsx';
import Formation from '../comp/Formation.tsx';
import CompetencesTechniques from '../comp/CompetencesTechniques.tsx';
import ObjectifProfessionnel from '../comp/ObjectifProfessionnel.tsx';




function Cv(){
  return(
      <div className="cv-container">
        <div className="cv-sidebar">
          <img src="https://img.freepik.com/photos-gratuite/vue-laterale-femme-inconnue-posant_23-2149551290.jpg "alt="Ma photo" />
          <InformationsPersonnelles/>
          <CompetencesTechniques/>
          <CompetencesLinguistiques/>
          <Autres/>
        </div>
        <div className="cv-main">
          <Header />
          <br />
          <ObjectifProfessionnel/>
          <Formation/>
        </div>
        
        
      </div>
        
    

  
  

  );
}
export default Cv;

    