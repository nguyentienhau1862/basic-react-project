import PropTypes from "prop-types";
import alertStyle from "../styles/Alert.module.css";

const alertType = {
	success: "success",
	warning: "warning",
	error: "error"
};

const alertClassKey = {
	success: "alertSuccess",
	warning: "alertWarning",
	error: "alertError"
};

const alertIconContent = {
	success: <path d="M16 9L10 15.5L7.5 13M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
	warning: <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
	error: <path d="M15 9.00004L9 15M15 15L9 9.00004M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
};

export default function Alert(props) {
	const { type = alertType.success, message = "", show = false } = props.alertData;
	const alertClassName = type ? alertStyle.alert + " " + alertStyle[alertClassKey[type]] : alertStyle.alert;
	const alertDisplayStyle = show ? { display: "block" } : { display: "none" };

	return <div className={alertClassName} style={alertDisplayStyle}>
		<span className={alertStyle.alertMessage}>{message}</span>
		<svg className={alertStyle.alertIcon} width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">{alertIconContent[type]}</svg>
	</div>;
}

Alert.propTypes = {
	alertData: PropTypes.shape({
		type: PropTypes.string,
		message: PropTypes.string,
		show: PropTypes.bool
	})
};

export { alertType };