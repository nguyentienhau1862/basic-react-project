import PropTypes from "prop-types";
import spinnerStyle from "../styles/Spinner.module.css";

export default function Spinner(props) {
	const { loading } = props;
	const spinnerDisplayStyle = loading ? { display: "flex" } : { display: "none" };
	
	return <div className={spinnerStyle.spinner} style={spinnerDisplayStyle}></div>;
}

Spinner.propTypes = {
	loading: PropTypes.bool
};