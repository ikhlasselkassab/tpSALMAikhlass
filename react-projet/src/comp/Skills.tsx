import React, { useState } from 'react';



interface SkillsState {
  skills: {
    SQL: boolean;
    HTML: boolean;
    JS: boolean;
    CSS: boolean;
    Python: boolean;
  };
}

const Skills: React.FC = () => {
  const [skillsInfo, setSkillsInfo] = useState<SkillsState>({
    skills: {
      SQL: false,
      HTML: false,
      JS: false,
      CSS: false,
      Python: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setSkillsInfo({
      skills: {
        ...skillsInfo.skills,
        [name]: checked,
      },
    });
  };

  return (
    <form className="cv-form-section">
      <h2>Compétences</h2>
      <label>
        SQL :
        <input
          type="checkbox"
          name="SQL"
          checked={skillsInfo.skills.SQL}
          onChange={handleChange}
        />
      </label>
      <label>
        HTML :
        <input
          type="checkbox"
          name="HTML"
          checked={skillsInfo.skills.HTML}
          onChange={handleChange}
        />
      </label>
      <label>
        JavaScript (JS) :
        <input
          type="checkbox"
          name="JS"
          checked={skillsInfo.skills.JS}
          onChange={handleChange}
        />
      </label>
      <label>
        CSS :
        <input
          type="checkbox"
          name="CSS"
          checked={skillsInfo.skills.CSS}
          onChange={handleChange}
        />
      </label>
      <label>
        Python :
        <input
          type="checkbox"
          name="Python"
          checked={skillsInfo.skills.Python}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Skills;


