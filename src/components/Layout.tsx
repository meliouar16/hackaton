import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-background text-text">
            {/* Sidebar */}
            <aside className="w-64 bg-card shadow-lg p-5 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-primary">AI Pairing</h2>
                    <nav className="mt-6">
                        <ul className="space-y-3">
                            <li>
                                <Link to="/dashboard" className="block btn-primary text-center">
                                    🏠 Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/ai-pairing" className="block btn-secondary text-center">
                                    🤖 AI Pairing
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Contenu Principal */}
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
};

export default Layout;
