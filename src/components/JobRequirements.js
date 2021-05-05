import React from 'react';
import './JobRequirements.css'

const JobRequirements = ({ job: { languages, tools, role, level } }) => (
	<div className='label-container'>
		<label className='languages-tools'>{role}</label>
		<label className='languages-tools'>{level}</label>
		{languages.map((language, index) => <label className='languages-tools' key={index}>{language}</label>)}
		{tools.map((tool, index) => <label className='languages-tools' key={index}>{tool}</label>)}
	</div>
)

export default JobRequirements;