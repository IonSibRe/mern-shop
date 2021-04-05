import React from "react";
import welcome_img from "../../assets/img/about/welcome-img.jpg";

const WelcomeSection = () => {
	return (
		<div className="ws-wrap section-center">
			<div className="ws-img-wrap">
				<img src={welcome_img} alt="#" />
			</div>
			<div className="ws-text-wrap">
				<div className="ws-text-inner-wrap">
					<h2 className="ws-text-title">Welcome to MERN</h2>
					<p className="ws-text-p">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quidem neque minima eligendi laudantium totam
						ullam veniam culpa omnis corrupti sunt nesciunt,
						repellendus quasi laboriosam velit, eaque aliquam et
						deserunt non odit! Molestiae qui, dolore reprehenderit
						earum blanditiis excepturi illo deleniti quia ab
						officiis aspernatur voluptas nemo sit fugiat adipisci
						odio?
					</p>
					<p className="ws-text-p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptas dignissimos possimus beatae delectus odio
						voluptate, est ipsa suscipit voluptatum corporis quam
						optio autem quia iure dolorem ipsam recusandae amet
						ullam! Voluptas dignissimos possimus beatae delectus
						odio voluptate, est ipsa suscipit voluptatum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WelcomeSection;
