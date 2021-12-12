import PropTypes from 'prop-types';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import { BUTTON_TEXT, INPUT_PLACEHOLDER } from '../../../../constants';

import './SearchBar.css';

const SearchBar = ({ searchVal, handleSearchClick, handleSearchValChange }) => {
	const onChange = (e) => {
		handleSearchValChange(e.target.value);
	};

	return (
		<div className='search-bar'>
			<Input
				placeholder={INPUT_PLACEHOLDER.searchCourse}
				id='search'
				{...{ onChange }}
				value={searchVal}
			/>
			<Button buttonText={BUTTON_TEXT.search} onClick={handleSearchClick} />
		</div>
	);
};

SearchBar.propType = {
	searchVal: PropTypes.string.isRequired,
	handleSearchClick: PropTypes.func.isRequired,
	handleSearchValChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
	searchVal: '',
	handleSearchClick: () => {},
	handleSearchValChange: () => {},
};

export default SearchBar;
