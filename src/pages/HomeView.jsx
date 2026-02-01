import React from 'react';

export default function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h2>Welcome to My Portfolio</h2>
                <p>Showcasing my projects and skills</p>
            </header>
            
            <section className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="projects-grid">
                    {/* Projects will be mapped here */}
                </div>
            </section>
            
            <section className="about">
                <h3>About Me</h3>
                <p>Brief introduction and background</p>
            </section>
        </div>
    );
}