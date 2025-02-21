import { loadStripe } from "@stripe/stripe-js";
import { fetchWithAuth } from "./api";
export const handlePayment = async (bookingId: string, email: string) => {
	// 1. Get client secret from backend
	const response = await fetchWithAuth(`/bookings/${bookingId}/payment-intent`);
	const { clientSecret } = await response.json();

	const stripe = await loadStripe(process.env.STRIPE_PUBLISH_KEY!);
	const elements = stripe.elements();
	const card = elements.create("card");
	card.mount("#card-element");

	// 3. Handle payment submission
	const result = await stripe.confirmCardPayment(clientSecret, {
		payment_method: {
			card: card,
			billing_details: {
				email,
			},
		},
	});
	console.log(result);
};

//if (result.paymentIntent.status === 'succeeded') {
//  await axios.post(`/bookings/${bookingId}/confirm-payment`, {
//    paymentIntentId: result.paymentIntent.id,
//  });

// Show success message
//  showSuccessMessage('Booking confirmed!');
// }
