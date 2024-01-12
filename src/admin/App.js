import { createContext, useState } from "react";
import PropTypes from "prop-types";
import appStyle from "./App.module.css";
import Spinner from "../common/components/Spinner";
import Alert, { alertType } from "../common/components/Alert";

const defaultAlertData = {
	type: alertType.success,
	message: "Hello React Basic App",
	show: false
};

const AppContext = createContext();

function AppProvider(props) {
	const [loading, setLoading] = useState(false);
	const [alertData, setAlertData] = useState(defaultAlertData);

	const toggleLoading = function () {
		setLoading(!loading);
	};

	const showAlert = function (type, message) {
		setAlertData({ ...alertData, type, message, show: true });

		setTimeout(function () {
			setAlertData(defaultAlertData);
		}, 2000);
	};

	const alertDisplayStyle = alertData.show ? { display: "block" } : { display: "none" };
	const spinnerDisplayStyle = loading ? { display: "block" } : { display: "none" };
	const childrenDisplayStyle = loading ? { display: "none" } : { display: "block" };

	const appValue = {
		alert: {
			showAlert, alertType
		},
		spinner: {
			toggleLoading
		}
	};

	return <AppContext.Provider value={appValue}>
		<div className={appStyle.app}>
			<div className={appStyle.alertContainer} style={alertDisplayStyle}>
				<Alert alertData={alertData} />
			</div>
			<div className={appStyle.spinnerContainer} style={spinnerDisplayStyle}>
				<Spinner loading={loading} />
			</div>
			<div className={appStyle.childrenContainer} style={childrenDisplayStyle}>
				{props.children}
			</div>
		</div>
	</AppContext.Provider>;
}

AppProvider.propTypes = {
	children: PropTypes.object
};

export {
	AppContext, AppProvider
};