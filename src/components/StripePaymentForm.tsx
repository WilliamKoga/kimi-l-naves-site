import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/completion`,
            },
        });

        if (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }

        setIsProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement />

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
