import Address from "./Address.js";

function SavedAddressBook(props) {

	const { addresses, setAddressesProps } = props;

	// function for sorting of first names
	const compareFirstName = (a, b) => {
		if (a.address.firstName === b.address.firstName) {
			return 0
		}
		if (a.address.firstName < b.address.firstName) {
			return -1
		}
		if (a.address.firstName > b.address.firstName) {
			return 1
		}
	}

	// event handler for sorting by first name
	const handleSortFirstName = () => {
		const sortedFirstAddressArray = [...addresses].sort(compareFirstName);
		setAddressesProps(sortedFirstAddressArray);
	}

	// function for sorting by last name
	const compareLastName = (a, b) => {
		if (a.address.lastName === b.address.lastName) {
			return 0
		}
		if (a.address.lastName < b.address.lastName) {
			return -1
		}
		if (a.address.lastName > b.address.lastName) {
			return 1
		}
	}

	// event handler for sorting by last name
	const handleSortLastName = () => {
		const sortedLastAddressArray = [...addresses].sort(compareLastName);
		setAddressesProps(sortedLastAddressArray);
	}
	
	return (

		<section className="flex savedAddresses">

			<h2>Your Saved Addresses</h2>

			<img src="../assests/calligraphy-embellishment.png" alt="" />

			<div className="flex sortButtons">

				<button onClick={handleSortFirstName}>Sort by First Name</button>
				<button onClick={handleSortLastName}>Sort by Last Name</button>

			</div>

			<ul className="flex resultContainer">
				{/* map through addresses array and return  */}
				{
					addresses.map((address, index) => {
						return <Address
								addressData={address}
								key={index}
								/>
					})
				}
			</ul>

		</section>
	)
}

export default SavedAddressBook;