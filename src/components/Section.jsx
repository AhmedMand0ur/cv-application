import '../styles/Section.css';
import React from 'react';

export default function Section({ title, children }) {
    return (
        <section className="section">
            <h2 className="section-title">{title}</h2>
            {children}
        </section>
    );
}
