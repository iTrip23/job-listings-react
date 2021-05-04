import React from 'react';
import './JobRequirements.css'

const JobRequirements = ({ job: { languages, tools } }) => (
	<div className='label-container'>
		{languages.map((language, index) => <label className='languages-tools' key={index}>{language}</label>)}
		{tools.map((tool, index) => <label className='languages-tools' key={index}>{tool}</label>)}
	</div>
)

export default JobRequirements;