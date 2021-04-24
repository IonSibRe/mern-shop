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

	return (
		<>
			<Navbar />
			<section className="profile-section-wrap section-center">
				<ProfileFilter setCurrentPage={setCurrentPage} />
				<section className="profile-showcase-wrap">
					{currentPage === "accountInfo" && <ProfileInfo />}
					{currentPage === "security" && <ProfileSecurity />}
					{currentPage === "orderHistory" && <ProfileOrder />}
				</section>
			</section>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Profile;
