import { Fragment } from "react";
import firebase from "../firebase.js"

function Address(props) {

	const { addressData } = props;
	const { address } = addressData;
	const databaseReference = firebase.database().ref();

	// remove address from saved list
	const handleRemoveAddress = (id) => {

		// confirm removal of address before removing from database
		if (window.confirm("Are you sure you want to remove this address from your address book?")) {

			databaseReference.child(id).remove();
		}
	};

	return (
		<Fragment>

			<li className="fancyFont resultAddress">
				
				<p>
					{address.firstName} {address.lastName} <br />
					{address.addressOne} {address.addressTwo} <br />
					{address.city}, {address.stateSelect} {address.zipcode}
				</p>

				<button onClick={() => {handleRemoveAddress(addressData.id)}} className="remove">Remove</button>
				
			</li>
			
		</Fragment>
	)
}

export default Address;

