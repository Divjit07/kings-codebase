import type { ReactNode, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, FileText, Settings } from 'lucide-react';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth token logic here
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-black-rich text-white flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-black border-r border-white/10 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-serif font-bold text-gold tracking-widest">KINGS ADMIN</h2>
                </div>

                <nav className="flex-grow p-6 space-y-2">
                    <Link to="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/admin/invoices" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <FileText size={20} />
                        <span>Invoices</span>
                    </Link>
                    <Link to="/admin/settings" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                </nav>

                <div className="p-6 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 text-white/60 hover:text-red-400 transition-colors w-full"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8 bg-black-rich overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
