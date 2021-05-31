import { Fragment } from 'react';
import { useEffect, useState } from "react";
import firebase from "./firebase.js";
import Header from './components/Header.js';
import './App.css';
import AddressForm from './components/AddressForm.js';
import SavedAddressBook from './components/SavedAddressBook.js';

// PSEUDO CODE
// create components for header, address form, and saved address book
// create form for addresses - accept user input
// button for submitting the form
// button for reseting the form
// useState to hold <li>s (addresses)
// reference firebase in useEffect
// listen for submit on form to store users inputs to firebase
// call to firebase database to display saved addresses on the page in the "address book" component

// SORTING
// when button is clicked array of addresses is sorted by name


// ERROR HANDLING
// make all fields required 


// STRETCH GOALS
//✔ sort saved addresses by name (first or last?)
//✔ saved addresses removable
// button to download saved addresses as PDF
// saved addresses editable
// 

// EXTREME STRETCH GOAL
// accepts pen handwriting


function App() {

// adding state to contain addresses
	const [addresses, setAddresses] = useState([]);
	const [userInput, setUserInput] = useState({
		firstName: "",
		lastName: "",
		addressOne: "",
		addressTwo: "",
		city: "",
		stateSelect: "",
		zipcode: ""
	});

	
	useEffect(() => {
		const databaseReference = firebase.database().ref();

	// Listening out for a value  and responding to the value
		databaseReference.on("value", (response) => {
		
			// Initializing an empty array
			const newDataArray = [];

			// setting the data to a variable
			const data = response.val();

			// Itterate through the data object
			for (let entryId in data) {

				const entry = data[entryId];

				// Setting the value as a new object
				const newAddress = { id: entryId, address: entry };

				// Pushing new object to the newDataArray
				newDataArray.push(newAddress);
			}
			// Updating state with the newDataArray
			setAddresses(newDataArray);
		});
	
	}, []);

	// call every time user updates the inputs
	const handleUserInput = (event) => {

		let inputName = event.target.name;
		let inputValue = event.target.value;

		// spreading the old userinput to a new object with the target values as the key pair
		setUserInput({...userInput, [inputName]: inputValue});
	};

	
// 	// Submitting the data to firebase
	const handleSubmit = (event) => {
		
		event.preventDefault();

		// submit to firebase database
		const databaseReference = firebase.database().ref();

		// submitting the new addresses to the page
		databaseReference.push(userInput);

		resetForm();

    // alert user that address has been saved and where to "find" it
    alert("Your new entry has been saved. You can find it at the end.");
	
	};
	
	// reset input values
	const resetForm = () => {

     setUserInput({
       firstName: "",
       lastName: "",
       addressOne: "",
       addressTwo: "",
       city: "",
       stateSelect: "",
       zipcode: ""
     });
   
	}

	return (
		<Fragment>

			<div className="wrapper">

				<Header />

				<AddressForm
				userInput={userInput}
				handleUser={handleUserInput}
				reset={resetForm}
				submit={handleSubmit}
				/>

				<SavedAddressBook 
					addresses={addresses}
          setAddressesProps={setAddresses}
					/>


			</div>

			<footer>Created at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a></footer>

		</Fragment>
	);
}

export default App;


