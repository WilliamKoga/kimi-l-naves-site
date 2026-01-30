import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Initialize Stripe with Secret Key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

app.use(express.static('dist'));
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
    const { productId, quantity = 1 } = req.body;

    // Securely calculate tax/total on the server
    // Lote 1: 55000 JPY
    let unitPrice = 55000;
    let description = "Formação Hipnose Clínica - Lote Early Access";

    // Simple logic to handle different products
    if (productId === 'price_Lote1ID') {
        unitPrice = 55000;
        description = "Formação Hipnose Clínica - Lote Early Access";
    } else if (productId === 'price_Lote2ID') {
        unitPrice = 77000;
        description = "Formação Hipnose Clínica - Lote 2";
    }

    const amount = unitPrice * quantity;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "jpy",
            description: `${description} (x${quantity})`,
            metadata: {
                productId: productId,
                productName: description,
                quantity: quantity.toString(),
                integration_source: "custom_checkout"
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).send({ error: error.message });
    }
});

// Handle SPA routing - return index.html for all other routes
// Handle SPA routing - return index.html for all other routes
// Express 5 requires proper wildcard handling, using regex /.*/ to match everything
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));
