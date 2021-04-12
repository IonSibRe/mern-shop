import React from "react";

const ContactSection = () => {
	return (
		<section className="contact-section-wrap section-center">
			<div className="contact-section-info-wrap">
				<div className="contact-section-info-inner-wrap">
					<div className="contact-section-item">
						<div className="contact-section-icon-wrap">
							<i className="fas fa-phone-alt contact-section-icon"></i>
						</div>
						<div className="contact-section-text-wrap">
							<h4 className="contact-section-info-text">
								+ 123 345 482 834
							</h4>
							<h4 className="contact-section-info-text">
								+ 123 345 482 834
							</h4>
						</div>
					</div>
					<div className="contact-section-item">
						<div className="contact-section-icon-wrap">
							<i className="fas fa-globe-americas contact-section-icon"></i>
						</div>
						<div className="contact-section-text-wrap">
							<h4 className="contact-section-info-text">
								example@example.com
							</h4>
							<h4 className="contact-section-info-text">
								example@example.com
							</h4>
						</div>
					</div>
					<div className="contact-section-item">
						<div className="contact-section-icon-wrap">
							<i
								className="fas fa-map-marker-alt contact-section-icon"
								id="contact-section-marker-icon"
							></i>
						</div>
						<div className="contact-section-text-wrap">
							<h4 className="contact-section-info-text">
								4560 Sherwood Circle, Kernersville, NC 27284
							</h4>
						</div>
					</div>
					<div className="contact-section-follow-wrap">
						<h3 className="contact-section-follow-title">
							follow us
						</h3>
						<div className="contact-section-social-wrap">
							<a
								href="https://facebook.com"
								className="contact-section-social-link"
							>
								<i className="fab fa-facebook-f contact-section-social-icon"></i>
							</a>
							<a
								href="https://twitter.com"
								className="contact-section-social-link"
							>
								<i className="fab fa-twitter contact-section-social-icon"></i>
							</a>
							<a
								href="https://instagram.com"
								className="contact-section-social-link"
							>
								<i className="fab fa-instagram contact-section-social-icon"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="contact-section-form-wrap">
				<div className="contact-section-form-inner-wrap">
					<h2 className="contact-section-form-title">get in touch</h2>
					<form className="contact-section-form">
						<div className="contact-section-person-info-wrap">
							<input
								type="text"
								className="contact-section-form-input"
								placeholder="Name"
							/>
							<input
								type="text"
								className="contact-section-form-input"
								placeholder="Email"
							/>
						</div>
						<input
							type="text"
							className="contact-section-form-input"
							placeholder="Subject"
						/>

						<textarea
							className="contact-section-form-textarea"
							placeholder="Your Message"
						></textarea>
						<button
							type="submit"
							className="contact-section-form-btn"
						>
							send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
