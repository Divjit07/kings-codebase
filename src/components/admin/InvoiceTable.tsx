import { Edit, FileText, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const InvoiceTable = () => {
    const { invoices, deleteInvoice } = useData();

    return (
        <div className="bg-black-light border border-white/10 rounded-lg overflow-hidden">
            {invoices.length === 0 ? (
                <div className="p-8 text-center text-white/40">No invoices found. Create one to get started.</div>
            ) : (
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gold text-xs uppercase tracking-widest border-b border-white/10">
                        <tr>
                            <th className="p-4 font-semibold">Invoice ID</th>
                            <th className="p-4 font-semibold">Client</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Total</th>
                            <th className="p-4 font-semibold">Status</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {invoices.map((invoice) => {
                            const total = invoice.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                            return (
                                <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-mono text-white/80 text-sm">{invoice.id}</td>
                                    <td className="p-4 text-white font-medium">{invoice.clientName}</td>
                                    <td className="p-4 text-white/60 text-sm">{invoice.date}</td>
                                    <td className="p-4 text-white font-mono">${total.toLocaleString()}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${invoice.status === 'Paid' ? 'bg-green-500/20 text-green-400' :
                                                invoice.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <Link to={`/admin/invoice/${invoice.id}`} className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded" title="View/Print">
                                                <FileText size={16} />
                                            </Link>
                                            <button className="p-2 text-white/40 hover:text-gold hover:bg-white/10 rounded">
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => deleteInvoice(invoice.id)}
                                                className="p-2 text-white/40 hover:text-red-400 hover:bg-red-900/20 rounded"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default InvoiceTable;
