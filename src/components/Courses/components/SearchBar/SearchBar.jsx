import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import { BUTTON_TEXT, INPUT_PLACEHOLDER } from '../../../../constants';

import './SearchBar.css';

const SearchBar = (props) => {
	const onChange = (e) => {
		props.handleSearchValChange(e.target.value);
	};

	return (
		<div className='search-bar'>
			<Input
				placeholder={INPUT_PLACEHOLDER.searchCourse}
				id='search'
				{...{ onChange }}
				value={props.searchVal}
			/>
			<Button
				buttonText={BUTTON_TEXT.search}
				onClick={props.handleSearchClick}
			/>
		</div>
	);
};

export default SearchBar;
