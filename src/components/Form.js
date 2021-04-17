import { Grid } from "@material-ui/core";
import React from "react";

const Form = props => {
	return (
		<Grid>
			<form onSubmit={props.getWeather}>
				<input type="text" name="city" placeholder="City Name" />
				<input type="text" name="country" placeholder="Country Name" />
				<button>Find Weather</button>
				<div className='form__greetings'>Have a Nice Day</div>
			</form>
		</Grid>
	);
};

export default Form;