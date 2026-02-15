import AdminLayout from '../../components/layout/AdminLayout';
import InvoiceTable from '../../components/admin/InvoiceTable';
import { TrendingUp, Users, DollarSign, Briefcase } from 'lucide-react';

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-serif text-white mb-2">Dashboard</h1>
                    <p className="text-white/60">Overview of recent installation projects and financials.</p>
                </div>
                <div className="flex space-x-4">
                    <button onClick={() => window.location.href = '/admin/add-project'} className="border border-gold text-gold px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-gold hover:text-black transition-colors rounded">
                        + Add Project
                    </button>
                    <button onClick={() => window.location.href = '/admin/create-invoice'} className="bg-gold text-black px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors rounded">
                        + Create Invoice
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-black-light border border-white/10 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gold/10 rounded-full text-gold">
                            <DollarSign size={24} />
                        </div>
                        <span className="text-green-400 text-xs font-bold">+12%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">$124,500</h3>
                    <p className="text-white/40 text-sm">Total Revenue</p>
                </div>

                <div className="bg-black-light border border-white/10 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                            <Briefcase size={24} />
                        </div>
                        <span className="text-white/40 text-xs">Active</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">12</h3>
                    <p className="text-white/40 text-sm">Active Projects</p>
                </div>

                <div className="bg-black-light border border-white/10 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                            <Users size={24} />
                        </div>
                        <span className="text-green-400 text-xs font-bold">+5</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">84</h3>
                    <p className="text-white/40 text-sm">New Clients</p>
                </div>

                <div className="bg-black-light border border-white/10 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-500/10 rounded-full text-orange-400">
                            <TrendingUp size={24} />
                        </div>
                        <span className="text-white/40 text-xs">This Month</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">98.2%</h3>
                    <p className="text-white/40 text-sm">Completion Rate</p>
                </div>
            </div>

            {/* Recent Invoices */}
            <div className="mb-8">
                <h2 className="text-xl font-serif text-white mb-6">Recent Invoices</h2>
                <InvoiceTable />
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
