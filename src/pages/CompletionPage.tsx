import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CompletionPage = () => {
    const [searchParams] = useSearchParams();
    const paymentIntentId = searchParams.get('payment_intent');
    const redirectStatus = searchParams.get('redirect_status');

    return (
        <div className="min-h-screen bg-indigo-deep flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10 text-center">
                    {redirectStatus === 'succeeded' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h1 className="font-serif text-3xl text-off-white mb-4">Pagamento Confirmado!</h1>
                            <p className="text-white/60 mb-8">
                                Sua inscrição foi realizada com sucesso. Em breve você receberá um email com todos os detalhes.
                            </p>
                            <div className="bg-white/5 rounded-xl p-4 mb-8 text-sm text-white/40 break-all">
                                ID do Pedido: {paymentIntentId}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="w-10 h-10 text-red-500" />
                            </div>
                            <h1 className="font-serif text-3xl text-off-white mb-4">Algo deu errado</h1>
                            <p className="text-white/60 mb-8">
                                Não conseguimos confirmar seu pagamento. Por favor, tente novamente ou entre em contato com o suporte.
                            </p>
                        </motion.div>
                    )}

                    <Link to="/">
                        <Button className="w-full bg-gradient-gold text-indigo-deep font-bold py-6 rounded-xl hover:shadow-gold transition-all">
                            Voltar para o Início
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CompletionPage;
