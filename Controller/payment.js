import Stripe from 'stripe';

// Replace with your actual secret key
const stripe = new Stripe('sk_test_51PqvGlP2haiv42fTj7bSQbq9tS30nEnfZwvXxmxcHalVqsRPqp8xLND6vivMakkLICcADrLRHDAkTRJorM8zqwoy00vpnkB6kE'); 

const payment = async (req, res) => {
    try {
        const { products } = req.body;

        const lineItems = products.map((product) => {
            // Extract numeric value from price string
            const numericPrice = Number(product.price.replace(/[^0-9.-]+/g, ""));
            
            // Check if the price is valid
            if (isNaN(numericPrice)) {
                console.error(`Invalid price format for product ${product._id}: ${product.price}`);
                throw new Error(`Invalid price format for product ${product._id}: ${product.price}`);
            }
            
            // Convert price to cents
            const unitAmount = Math.round(numericPrice * 100);
            
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        // images: [product.image],
                    },
                    unit_amount: unitAmount,
                },
                quantity: product.quantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
};

export default payment;
