import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (username === 'admin' && password === 'kings123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-black-light border border-white/10 p-8 rounded-lg shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                        <Lock className="text-gold" size={32} />
                    </div>
                    <h2 className="text-2xl font-serif text-white mb-2">Admin Access</h2>
                    <p className="text-white/40 text-sm">Sign in to manage invoices</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gold text-black font-bold py-3 uppercase tracking-widest hover:bg-white transition-colors rounded"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/" className="text-white/40 text-sm hover:text-white transition-colors">← Back to Website</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
