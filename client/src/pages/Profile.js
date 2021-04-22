import React from "react";
import Navbar from "../components/Navbar";
import ProfileFilter from "../components/profile/ProfileFilter";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileSecurity from "../components/profile/ProfileSecurity";
import ProfileOrder from "../components/profile/ProfileOrder";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Profile = () => {
	return (
		<>
			<Navbar />
			<section className="profile-section-wrap section-center">
				<ProfileFilter />
				<section className="profile-showcase-wrap">
					<ProfileInfo />
				</section>
			</section>
		</>
	);
};

export default Profile;
