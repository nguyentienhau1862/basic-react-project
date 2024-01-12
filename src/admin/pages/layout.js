import { Outlet } from "react-router-dom";
import layoutStyle from "../styles/Layout.module.css";
import { AppProvider } from "../App";

export default function Layout() {
	return <AppProvider>
		<div className={layoutStyle.layout}>
			<Outlet />
		</div>
	</AppProvider>;
}