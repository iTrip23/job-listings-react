import React from 'react';
import './JobRequirements.css'

const JobRequirements = ({ job: { languages, tools, role, level }, pushFilterElem }) => (
	<div className='label-container'>
		<label className='languages-tools' onClick={() => pushFilterElem(role)}>{role}</label>
		<label className='languages-tools' onClick={() => pushFilterElem(level)}>{level}</label>
		{languages.map((language, index) => <label className='languages-tools' key={index}
			onClick={() => pushFilterElem(language)}>{language}</label>)}

		{tools.map((tool, index) => <label className='languages-tools' key={index}
			onClick={() => pushFilterElem(tool)}>{tool}</label>)}
	</div>
)

export default JobRequirements;