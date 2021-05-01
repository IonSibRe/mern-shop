import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileFilter from "../components/profile/ProfileFilter";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileSecurity from "../components/profile/ProfileSecurity";
import ProfileOrder from "../components/profile/ProfileOrder";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Profile = () => {
	const [currentPage, setCurrentPage] = useState("accountInfo");
	let displayPage;

	switch (currentPage) {
		case "accountInfo":
			displayPage = <ProfileInfo />;
			break;

		case "security":
			displayPage = <ProfileSecurity />;
			break;

		case "orderHistory":
			displayPage = <ProfileOrder />;
			break;

		default:
			displayPage = <ProfileInfo />;
			break;
	}

	return (
		<>
			<Navbar />
			<section className="profile-section-wrap section-center">
				<ProfileFilter
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<section className="profile-showcase-wrap">
					{displayPage}
				</section>
			</section>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Profile;
