import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomerLayout from "./customer/pages/layout";
import CustomerHome from "./customer/pages/home";

import AdminLayout from "./admin/pages/layout";
import AdminHome from "./admin/pages/home";

import Error from "./common/pages/error";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<CustomerLayout />}>
				<Route index element={<CustomerHome />} />
			</Route>
			<Route path="/admin" element={<AdminLayout />}>
				<Route index element={<AdminHome />} />
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	</BrowserRouter>
);