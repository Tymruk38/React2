import { useState } from 'react';

const Contact = ({ contact }) => {
	const [isOpen, toggle] = useState(false);
	const phone = {
		display: isOpen ? "block" : "none",
	};

	function selectHandler() {
		toggle(
			!isOpen
		)
	}

	return (
		<div onClick={selectHandler}>
			<div style={phone}>
				{contact.phone}
			</div>
			<div style={phone}>
				{contact.gender}
			</div>
			{contact.firstName} {contact.lastName}
		</div>
	)
};

export default Contact;