import { useParams, Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import StripePaymentForm from '@/components/StripePaymentForm';
import { Button } from '@/components/ui/button';

// Load Stripe with Publishable Key from env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Define products outside component to prevent re-renders triggering useEffect
const products = {
    'lote-1': {
        title: 'Formação Hipnose Clínica - Lote Early Access',
        price: '¥ 55.000',
        features: [
            'Acesso aos 2 dias de imersão presencial',
            'Coffe break incluso',
            'Certificado internacional',
            'Acesso ao grupo exclusivo de alunos',
            'Bônus: Curso Online de Auto-Hipnose'
        ],
        active: false, // Lote 1 Sold Out
        priceId: 'price_Lote1ID'
    },
    'lote-2': {
        title: 'Formação Hipnose Clínica - Lote 2',
        price: '¥ 77.000',
        features: [
            'Acesso aos 2 dias de imersão presencial',
            'Coffe break incluso',
            'Certificado internacional',
            'Acesso ao grupo exclusivo de alunos'
        ],
        active: true, // Lote 2 Active
        priceId: 'price_Lote2ID'
    }
};

const CheckoutPage = () => {
    const { productId } = useParams();
    const product = products[productId as keyof typeof products];

    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    // Lifted state to persist data when clientSecret changes (re-render)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (product && product.active) {
            // Create OR Update PaymentIntent as soon as the page loads or quantity changes
            fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: product.priceId,
                    quantity: quantity,
                    paymentIntentId: paymentIntentId // Send ID if we have it
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setClientSecret(data.clientSecret);
                    if (data.id) setPaymentIntentId(data.id); // Save ID for future updates
                });
        }
    }, [productId, product, quantity]); // Re-run when quantity changes (uses current paymentIntentId state)

    const options = {
        clientSecret,
        appearance: {
            theme: 'night' as const,
            variables: {
                colorPrimary: '#d4af37',
            },
        },
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-indigo-deep flex items-center justify-center text-off-white">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Produto não encontrado</h1>
                    <Link to="/" className="text-gold hover:underline">Voltar para a Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-indigo-deep flex flex-col lg:flex-row">
            {/* Left Column - Product Info */}
            <div className="lg:w-1/2 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-indigo-deep to-blue-night">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)'
                }} />

                <div className="relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-off-white/60 hover:text-gold transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
                            CHECKOUT SEGURO
                        </div>
                        <h1 className="font-serif text-4xl lg:text-5xl text-off-white mb-6 leading-tight">
                            {product.title}
                        </h1>
                        <div className="text-3xl font-bold text-gold mb-8">
                            {product.price}
                        </div>

                        <div className="space-y-4 mb-12">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-gold/20 text-gold mt-1">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-off-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-10 text-off-white/40 text-sm">
                    <p>© 2026 Lucas Naves. Todos os direitos reservados.</p>
                </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm border-l border-white/10 p-8 lg:p-12 flex flex-col justify-center relative">
                {!product.active ? (
                    <div className="max-w-md mx-auto w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-serif text-white mb-4">Lote Indisponível</h2>
                        <p className="text-white/60 mb-8">
                            Opa! Parece que este lote ainda não está aberto ou já esgotou.
                            Por favor, verifique o Lote 1 ou aguarde a abertura oficial.
                        </p>
                        <Link to="/checkout/lote-1">
                            <Button className="bg-gradient-gold text-indigo-deep font-bold px-8 py-3 rounded-xl">
                                Ver Lote 1
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-2xl font-serif text-white mb-8">Dados de Pagamento</h2>

                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise} key={clientSecret}>
                                <StripePaymentForm
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    name={name}
                                    setName={setName}
                                    email={email}
                                    setEmail={setEmail}
                                    phone={phone}
                                    setPhone={setPhone}
                                />
                            </Elements>
                        )}

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <p className="text-white/40 text-xs">
                                Seus dados pessoais serão usados para processar seu pedido, apoiar sua experiência em todo este site e para outros fins descritos em nossa política de privacidade.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
