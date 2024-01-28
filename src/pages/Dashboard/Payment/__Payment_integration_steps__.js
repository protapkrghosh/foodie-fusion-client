/*
 * 1. Install stripe and react stripe js
 * 2. Create a checkout form with card element (card element contains: card number, expiration data, cvc, zip code)
 * 3. Create account on stripe and get the publishable key (pk)
 * 4. Get card information
 * 5. Create a payment method
 * 6. Use test card to test payment
 * 7. On the server side: install stripe: (npm install --save stripe)
 * 8. Create a payment intent API with payment method types: ['card']. Make sure you provide amount in cents (multiply price with 100)
 * 9. Call payment intent API to get client secret and store it in a state
 * 10. Use confirmCardPayment API with client secret card info
 * 11. Display confirm card error and success message
 * 12. Do things after payment -->
 * 13. 
 */
