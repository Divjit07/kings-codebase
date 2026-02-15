import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Types
export interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

export interface Invoice {
    id: string;
    clientName: string;
    clientEmail: string;
    date: string;
    dueDate: string;
    items: InvoiceItem[];
    status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string; // We'll use CSS gradients for now, or URLs
}

interface DataContextType {
    invoices: Invoice[];
    projects: Project[];
    addInvoice: (invoice: Omit<Invoice, 'id'>) => void;
    deleteInvoice: (id: string) => void;
    addProject: (project: Omit<Project, 'id'>) => void;
    deleteProject: (id: string) => void;
    getInvoice: (id: string) => Invoice | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    // Load from LocalStorage or use defaults
    const [invoices, setInvoices] = useState<Invoice[]>(() => {
        const saved = localStorage.getItem('kings_invoices');
        return saved ? JSON.parse(saved) : [
            { id: 'INV-001', clientName: 'Tech Summit', clientEmail: 'client@tech.com', date: '2025-10-12', dueDate: '2025-10-20', status: 'Paid', items: [{ description: 'Main Stage Setup', quantity: 1, price: 5000 }] }
        ];
    });

    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem('kings_projects');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to LocalStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('kings_invoices', JSON.stringify(invoices));
    }, [invoices]);

    useEffect(() => {
        localStorage.setItem('kings_projects', JSON.stringify(projects));
    }, [projects]);

    // Actions
    const addInvoice = (invoice: Omit<Invoice, 'id'>) => {
        const newInvoice = { ...invoice, id: `INV-${Date.now().toString().slice(-6)}` };
        setInvoices([newInvoice, ...invoices]);
    };

    const deleteInvoice = (id: string) => {
        setInvoices(invoices.filter(i => i.id !== id));
    };

    const getInvoice = (id: string) => invoices.find(i => i.id === id);

    const addProject = (project: Omit<Project, 'id'>) => {
        const newProject = { ...project, id: `PROJ-${Date.now().toString().slice(-6)}` };
        setProjects([newProject, ...projects]);
    };

    const deleteProject = (id: string) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    return (
        <DataContext.Provider value={{ invoices, projects, addInvoice, deleteInvoice, addProject, deleteProject, getInvoice }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData must be used within a DataProvider');
    return context;
};
