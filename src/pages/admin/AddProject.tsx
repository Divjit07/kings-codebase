import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/layout/AdminLayout';
import { useData } from '../../context/DataContext';
import { ArrowLeft, Upload } from 'lucide-react';

const AddProject = () => {
    const navigate = useNavigate();
    const { addProject } = useData();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Commercial');
    const [description, setDescription] = useState('');

    // For now, we'll just use a gradient placeholder since we can't upload real files to a server
    // In a real app, this would handle file upload to S3/Cloudinary
    const [imageStyle, setImageStyle] = useState('bg-gradient-to-br from-gold/20 to-black');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProject({
            title,
            category,
            // Mock image URL or class for now
            image: imageStyle
        });
        navigate('/admin/dashboard');
    };

    return (
        <AdminLayout>
            <div className="max-w-2xl mx-auto">
                <button onClick={() => navigate('/admin/dashboard')} className="flex items-center text-white/50 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-black-light border border-white/10 p-8 rounded-lg">
                    <h1 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Add New Project</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Project Title</label>
                            <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" placeholder="e.g. Luxury Penthouse Suite" />
                        </div>

                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded">
                                <option value="Commercial">Commercial</option>
                                <option value="Residential">Residential</option>
                                <option value="Event">Event</option>
                                <option value="Exhibition">Exhibition</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Description</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none rounded" placeholder="Project details..."></textarea>
                        </div>

                        {/* Mock Image Uploader */}
                        <div>
                            <label className="block text-gold text-xs uppercase tracking-widest mb-2">Project Image</label>
                            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                                <Upload className="mx-auto text-white/40 group-hover:text-gold mb-2" size={32} />
                                <p className="text-white/60 text-sm">Upload Image (Simulated)</p>
                                <p className="text-xs text-white/20 mt-1">For this demo, a premium gradient will be used.</p>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-gold text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors rounded mt-4">
                            Publish Project
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddProject;
