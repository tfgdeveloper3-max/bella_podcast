import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                    </svg>
                </div>
                <span
                    className="text-white text-2xl tracking-widest"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    whispr
                </span>
            </div>

            <ul className="hidden md:flex items-center gap-8">
                {["About us", "Provide", "Top Creators", "Let's Join Us"].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className="text-white text-[1rem] font-medium hover:text-orange-400 transition-colors duration-200"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <button
                    className="px-5 py-2 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a0a00] transition-all duration-200"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                >
                    Sign Up
                </button>
                <button
                    className="px-6 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.08em",
                        background: "linear-gradient(90deg, #e85d00 0%, #ff8c00 100%)",
                    }}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;