import React from 'react';

// function App() {
// 	return (
// 		<React.Fragment>
// 			<label htmlFor="bar">bar</label>
// 			<input
// 				type="text"
// 				onChange={() => {
// 					console.log('I am clicked');
// 				}}
// 			/>
// 		</React.Fragment>
// 	);
// }

const App = () => {
	const profiles = [{ name: 'taro', age: 10 }, { name: 'hanako', age: 5 }, { name: 'Noname' }, { age: 0 }];
	return (
		<div>
			{profiles.map((profile, index) => {
				return <User name={profile.name} age={profile.age} key={index} />;
			})}
		</div>
	);
};

const User = props => {
	return (
		<div>
			hi, i am {props.name}, and {props.age} years old!
		</div>
	);
};

User.defaultProps = {
	age: 1,
	name: 'dejiyama'
};

export default App;
