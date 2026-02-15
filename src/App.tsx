
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import CreateInvoice from './pages/admin/CreateInvoice';
import InvoiceView from './pages/admin/InvoiceView';
import AddProject from './pages/admin/AddProject';



import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-black text-white font-mono">
          <h1 className="text-xl text-red-500 mb-4">Something went wrong.</h1>
          <pre className="whitespace-pre-wrap">{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Public Routes wrapped in Main Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

          {/* Admin Routes (Layout handled within components or specific wrapper) */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/invoices" element={<Dashboard />} />
          <Route path="/admin/create-invoice" element={<CreateInvoice />} />
          <Route path="/admin/invoice/:id" element={<InvoiceView />} />
          <Route path="/admin/add-project" element={<AddProject />} />
          <Route path="/admin/settings" element={<Dashboard />} /> {/* Placeholder */}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
