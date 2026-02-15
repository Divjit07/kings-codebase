import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { ArrowLeft, Printer, Mail } from 'lucide-react';

const InvoiceView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getInvoice } = useData();
    const invoice = getInvoice(id || '');

    if (!invoice) {
        return <div className="p-8 text-white">Invoice not found.</div>;
    }

    const total = invoice.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = total * 0.08; // Example 8% tax
    const grandTotal = total + tax;

    return (
        <div className="bg-white min-h-screen text-black font-sans">
            {/* Toolbar - Hidden when printing */}
            <div className="bg-black text-white p-4 flex justify-between items-center print:hidden">
                <button onClick={() => navigate('/admin/dashboard')} className="flex items-center text-white/70 hover:text-white transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
                </button>
                <div className="flex space-x-4">
                    <button onClick={() => window.print()} className="flex items-center bg-gold text-black px-4 py-2 rounded font-bold hover:bg-white transition-colors">
                        <Printer size={16} className="mr-2" /> Print / Save PDF
                    </button>
                    <button className="flex items-center border border-white/30 px-4 py-2 rounded hover:bg-white/10 transition-colors">
                        <Mail size={16} className="mr-2" /> Email Client
                    </button>
                </div>
            </div>

            {/* Invoice Layout */}
            <div className="max-w-4xl mx-auto p-12 bg-white" id="invoice-print-area">
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="text-4xl font-serif font-bold tracking-widest mb-2">INVOICE</h1>
                        <p className="text-gray-500 font-mono">#{invoice.id}</p>
                    </div>
                    <div className="text-right">
                        <h2 className="text-xl font-bold mb-1">KINGS INSTALLATION</h2>
                        <p className="text-sm text-gray-500">123 Luxury Lane, Beverly Hills, CA</p>
                        <p className="text-sm text-gray-500">contact@kingsinstallation.com</p>
                        <p className="text-sm text-gray-500">(555) 123-4567</p>
                    </div>
                </div>

                {/* Bill To & Info */}
                <div className="flex justify-between mb-16">
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Bill To</h3>
                        <p className="text-xl font-bold">{invoice.clientName}</p>
                        <p className="text-gray-600">{invoice.clientEmail}</p>
                    </div>
                    <div className="text-right">
                        <div className="mb-4">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Date Issued</h3>
                            <p className="font-medium">{invoice.date}</p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">Status</h3>
                            <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {invoice.status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <table className="w-full mb-12">
                    <thead>
                        <tr className="border-b-2 border-black">
                            <th className="text-left py-4 font-bold uppercase text-xs tracking-widest">Description</th>
                            <th className="text-center py-4 font-bold uppercase text-xs tracking-widest w-24">Qty</th>
                            <th className="text-right py-4 font-bold uppercase text-xs tracking-widest w-32">Price</th>
                            <th className="text-right py-4 font-bold uppercase text-xs tracking-widest w-32">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {invoice.items.map((item, i) => (
                            <tr key={i}>
                                <td className="py-4 text-gray-800">{item.description}</td>
                                <td className="py-4 text-center text-gray-600">{item.quantity}</td>
                                <td className="py-4 text-right text-gray-600">${item.price.toLocaleString()}</td>
                                <td className="py-4 text-right font-medium">${(item.quantity * item.price).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end">
                    <div className="w-64 space-y-3">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tax (8%)</span>
                            <span>${tax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold border-t border-black pt-4">
                            <span>Total</span>
                            <span>${grandTotal.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
                    <p>Thank you for choosing Kings Installation. Payment is due within 30 days.</p>
                </div>
            </div>

            <style>{`
                @media print {
                    .print\\:hidden { display: none !important; }
                    body { background: white; -webkit-print-color-adjust: exact; }
                    @page { margin: 0; }
                }
            `}</style>
        </div>
    );
};

export default InvoiceView;
