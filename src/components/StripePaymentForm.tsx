import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Form state for required fields
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (!email || !phone) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        setIsProcessing(true);
        setErrorMessage(null); // Clear previous errors

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/completion`,
                receipt_email: email,
                payment_method_data: {
                    billing_details: {
                        email: email,
                        phone: phone,
                    },
                },
            },
        });

        if (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }

        setIsProcessing(false);
    };

    const paymentElementOptions = {
        layout: "tabs",
        // Hiding the 'link' authentication element if possible via layout or passing options
        // 'wallets' option implies applePay/googlePay, 'link' behavior is often automatic.
        // To strictly remove 'Link' button, we often need to handle it in backend or here.
        // We will try to rely on 'tabs' layout which sometimes simplifies it.
        // Note: Disabling Link completely usually requires backend 'automatic_payment_methods' config.
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-off-white">Email (Obrigatório)</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-off-white placeholder:text-white/30"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-off-white">Telefone / WhatsApp (Obrigatório)</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-off-white placeholder:text-white/30"
                    />
                </div>
            </div>

            <PaymentElement options={{
                layout: 'tabs',
                // This attempts to hide the Link authentication element
                wallets: {
                    applePay: 'auto',
                    googlePay: 'auto'
                }
            }} />

            {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}

            <Button
                disabled={!stripe || isProcessing}
                className="w-full bg-gradient-gold text-indigo-deep font-bold py-6 text-lg rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300"
            >
                {isProcessing ? (
                    <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-deep"></span>
                        Processando...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        Pagar com Segurança
                    </span>
                )}
            </Button>

            <p className="text-center text-xs text-off-white/40 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Pagamento processado de forma 100% segura pelo Stripe
            </p>
        </form>
    );
};

export default StripePaymentForm;
