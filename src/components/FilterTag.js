import React from 'react';
import './FilterTag.css';


const FilterTag = ({ tag, index, removeTagFromFilterBy }) => {
	return (
		<div className='tag' >
			<label className='filter-tag'>{tag}</label>
			<img className='remove-icon' src='./images/icon-remove.svg' alt='close icon' value={index}
				onClick={() => removeTagFromFilterBy(index)} />
		</div>
	)
}

export default FilterTag;