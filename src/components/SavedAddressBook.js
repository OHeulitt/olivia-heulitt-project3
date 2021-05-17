import Address from "./Address.js";

function SavedAddressBook(props) {

	const { addresses } = props;
	
	return (

		<section className="flex savedAddresses">

			<h2>Your Saved Addresses</h2>

			<img src="../assests/calligraphy-embellishment.png" alt="" />

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