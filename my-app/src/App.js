import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <h1 className="heading">Welcome to My First MERN Interface!</h1>
            </header>
            <main className="main-content">
                <p className="description">
                    This is a basic web application developed using <strong>React</strong> for the frontend and <strong>Express</strong> for the backend.
                </p>
                <div className="features">
                    <h2>Features of this Interface:</h2>
                    <ul>
                        <li>Frontend built with React</li>
                        <li>Backend powered by Express</li>
                        <li>Clean and responsive design</li>
                        <li>Easy to extend and modify</li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                <p>© 2025 My MERN Application. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
