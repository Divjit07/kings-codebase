import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/layout/AdminLayout';
import { useData } from '../../context/DataContext';
import type { InvoiceItem } from '../../context/DataContext';
import { Plus, Trash, ArrowLeft } from 'lucide-react';

const CreateInvoice = () => {
    const navigate = useNavigate();
    const { addInvoice } = useData();

    // Form State
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [dueDate, setDueDate] = useState(''); // Kept for future use or remove if strict
    const [status, setStatus] = useState<'Pending' | 'Paid' | 'Overdue'>('Pending');

    const [items, setItems] = useState<InvoiceItem[]>([
        { description: 'Service / Installation', quantity: 1, price: 0 }
    ]);

    // Item Handlers
    const addItem = () => {
        setItems([...items, { description: '', quantity: 1, price: 0 }]);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
        const newItems = [...items];
        // @ts-ignore
        newItems[index][field] = value;
        setItems(newItems);
    };

    // Calculation
    const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addInvoice({
            clientName,
            clientEmail,
            date,
            dueDate,
            status,
            items
        });
        navigate('/admin/dashboard');
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto">
                <button onClick={() => navigate('/admin/dashboard')} className="flex items-center text-white/50 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-black-light border border-white/10 p-8 rounded-lg">
                    <h1 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Create New Invoice</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Client Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Client Name</label>
                                <input required type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" />
                            </div>
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Client Email</label>
                                <input required type="email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" />
                            </div>
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Invoice Date</label>
                                <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" />
                            </div>
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Due Date</label>
                                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" />
                            </div>
                            <div>
                                <label className="block text-gold text-xs uppercase tracking-widest mb-2">Status</label>
                                <select value={status} onChange={e => setStatus(e.target.value as any)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded">
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Overdue">Overdue</option>
                                </select>
                            </div>
                        </div>

                        {/* Line Items */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-white font-serif text-xl">Line Items</h3>
                                <button type="button" onClick={addItem} className="text-gold text-sm flex items-center hover:text-white">
                                    <Plus size={16} className="mr-1" /> Add Item
                                </button>
                            </div>

                            <div className="space-y-4">
                                {items.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start bg-white/5 p-4 rounded">
                                        <div className="flex-grow">
                                            <input
                                                type="text"
                                                placeholder="Description"
                                                value={item.description}
                                                onChange={e => updateItem(index, 'description', e.target.value)}
                                                className="w-full bg-black border border-white/10 px-3 py-2 text-white text-sm focus:border-gold focus:outline-none rounded"
                                            />
                                        </div>
                                        <div className="w-20">
                                            <input
                                                type="number"
                                                placeholder="Qty"
                                                value={item.quantity}
                                                onChange={e => updateItem(index, 'quantity', parseInt(e.target.value))}
                                                className="w-full bg-black border border-white/10 px-3 py-2 text-white text-sm focus:border-gold focus:outline-none rounded"
                                            />
                                        </div>
                                        <div className="w-32">
                                            <input
                                                type="number"
                                                placeholder="Price"
                                                value={item.price}
                                                onChange={e => updateItem(index, 'price', parseFloat(e.target.value))}
                                                className="w-full bg-black border border-white/10 px-3 py-2 text-white text-sm focus:border-gold focus:outline-none rounded"
                                            />
                                        </div>
                                        <button type="button" onClick={() => removeItem(index)} className="p-2 text-white/40 hover:text-red-500">
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-end pt-6 border-t border-white/10">
                            <div className="text-right">
                                <span className="block text-white/60 text-sm uppercase tracking-widest mb-1">Total Amount</span>
                                <span className="block text-4xl font-serif text-gold font-bold">${total.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <button type="submit" className="w-full bg-gold text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors rounded">
                            Generate Invoice
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CreateInvoice;
