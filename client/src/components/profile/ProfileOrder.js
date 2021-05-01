import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../context/CheckoutContext";
import AlertBox from "../AlertBox";
import Loader from "../Loader";

const ProfileOrder = () => {
	const {
		allOrders,
		getAllOrders,
		getOrderDetails,
		loading,
		error,
	} = useContext(CheckoutContext);

	useEffect(() => {
		getAllOrders();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<AlertBox success={false} msg={error} />
			) : (
				<section className="profile-section profile-order-section">
					<table className="profile-order-table">
						<thead className="profile-order-thead">
							<tr className="profile-order-thead-tr">
								<th className="profile-order-thead-th">ID</th>
								<th className="profile-order-thead-th profile-order-thead-th-date">
									date
								</th>
								<th className="profile-order-thead-th">
									total
								</th>
								<th className="profile-order-thead-th profile-order-thead-th-paid">
									paid
								</th>
								<th className="profile-order-thead-th profile-order-thead-th-delivered">
									delivered
								</th>
								<th className="profile-order-thead-th">
									receipt
								</th>
							</tr>
						</thead>
						<tbody className="profile-order-tbody">
							{allOrders.map((order) => {
								const {
									_id: id,
									createdAt,
									totalPrice,
									isPaid,
									paidAt,
									isDelivered,
									deliveredAt,
								} = order;

								return (
									<tr
										className="profile-order-tbody-tr"
										key={id}
									>
										<td className="profile-order-tbody-td">
											{id}
										</td>
										<td className="profile-order-tbody-td profile-order-tbody-td-date">
											{createdAt.substring(0, 10)}
										</td>
										<td className="profile-order-tbody-td">
											${totalPrice.toFixed(2)}
										</td>
										<td className="profile-order-tbody-td profile-order-tbody-td-paid">
											{isPaid
												? `paid at: ${paidAt.substring(
														0,
														10
												  )}`
												: "no"}
										</td>
										<td className="profile-order-tbody-td profile-order-tbody-td-delivered">
											{isDelivered
												? `delivered at: ${deliveredAt.substring(
														0,
														10
												  )}`
												: "no"}
										</td>
										<td className="profile-order-tbody-td">
											<Link
												to={`/placeorder/${id}`}
												className="profile-order-tbody-link"
												onClick={() =>
													getOrderDetails(id)
												}
											>
												receipt
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</section>
			)}
		</>
	);
};

export default ProfileOrder;
