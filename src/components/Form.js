import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City Name"/>
		<input type="text" name="country" placeholder="Country Name"/>
		<button>Find Weather</button>
	</form>
);

export default Form;