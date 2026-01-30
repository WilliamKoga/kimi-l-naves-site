import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';

interface StripePaymentFormProps {
    quantity: number;
    setQuantity: (q: number) => void;
    name: string;
    setName: (s: string) => void;
    email: string;
    setEmail: (s: string) => void;
    phone: string;
    setPhone: (s: string) => void;
}

const StripePaymentForm = ({
    quantity,
    setQuantity,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone
}: StripePaymentFormProps) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Local state removed - using props

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (!name || !email || !phone) {
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
                        name: name,
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

    const handleQuantityChange = (delta: number) => {
        const newQuantity = Math.max(1, quantity + delta);
        setQuantity(newQuantity);
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-4">
                {/* Quantity - MOVED TO TOP */}
                <div className="space-y-2">
                    <Label className="text-off-white">Quantidade de Ingressos</Label>
                    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-md p-2 w-fit">
                        <button
                            type="button"
                            onClick={() => handleQuantityChange(-1)}
                            className="w-8 h-8 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <span className="text-xl font-bold text-gold w-8 text-center">{quantity}</span>
                        <button
                            type="button"
                            onClick={() => handleQuantityChange(1)}
                            className="w-8 h-8 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name" className="text-off-white">Nome Completo (Obrigatório)</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-off-white placeholder:text-white/30"
                    />
                </div>

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

            <div className="pt-4 border-t border-white/10">
                <PaymentElement options={{
                    layout: 'tabs',
                    wallets: {
                        applePay: 'auto',
                        googlePay: 'auto'
                    }
                }} />
            </div>

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
                        Pagar ¥ {(quantity * 55000).toLocaleString('pt-BR')} com Segurança
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
