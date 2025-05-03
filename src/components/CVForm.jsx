import React, { useState } from "react";
import Input from "./Input.jsx";
import Section from "./Section.jsx";
import '../styles/CVForm.css';

export default function CVForm() {
    const [mode, setMode] = useState("edit");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        studyField: '',
        gradYear: '',
    });

    const [experiences, setExperiences] = useState([
        { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        setExperiences(prev => {
            const updated = [...prev];
            updated[index][name] = value;
            return updated;
        });
    };

    const addExperience = () => {
        setExperiences(prev => [
            ...prev,
            { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }
        ]);
    };

    const removeExperience = (indexToRemove) => {
        setExperiences(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMode("display");
    };

    const handleEdit = () => {
        setMode("edit");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Section title="General Information">
                    {mode === "edit" ? (
                        <>
                            <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
                            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </>
                    ) : (
                        <div>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                        </div>
                    )}
                </Section>

                <Section title="Educational Experience">
                    {mode === "edit" ? (
                        <>
                            <Input label="University" name="university" value={formData.university} onChange={handleChange} required />
                            <Input label="Field of Study" name="studyField" value={formData.studyField} onChange={handleChange} required />
                            <Input label="Graduation Year" type="number" name="gradYear" value={formData.gradYear} onChange={handleChange} required />
                        </>
                    ) : (
                        <div>
                            <p><strong>University:</strong> {formData.university}</p>
                            <p><strong>Field of Study:</strong> {formData.studyField}</p>
                            <p><strong>Graduation Year:</strong> {formData.gradYear}</p>
                        </div>
                    )}
                </Section>

                <Section title="Practical Experience">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            {mode === "edit" ? (
                                <>
                                    <Input label="Company" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
                                    <Input label="Position" name="position" value={exp.position} onChange={(e) => handleExperienceChange(index, e)} />
                                    <Input label="Responsibilities" name="responsibilities" value={exp.responsibilities} onChange={(e) => handleExperienceChange(index, e)} />
                                    <Input label="Start Date" type="month" name="startDate" value={exp.startDate} onChange={(e) => handleExperienceChange(index, e)} />
                                    <Input label="End Date" type="month" name="endDate" value={exp.endDate} onChange={(e) => handleExperienceChange(index, e)} />

                                    {experiences.length > 1 && (
                                        <button type="button" className="delete-btn" onClick={() => removeExperience(index)}>
                                            Delete
                                        </button>
                                    )}
                                </>
                            ) : (
                                <div>
                                    <p><strong>Company:</strong> {exp.company}</p>
                                    <p><strong>Position:</strong> {exp.position}</p>
                                    <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                                    <p><strong>Start Date:</strong> {exp.startDate}</p>
                                    <p><strong>End Date:</strong> {exp.endDate}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    {mode === "edit" && (
                        <button type="button" className="add-btn" onClick={addExperience}>
                            Add Experience
                        </button>
                    )}
                </Section>

                {mode === "edit" && (
                    <button type="submit" className="submit-btn">Submit</button>
                )}
            </form>

            {mode === "display" && (
                <button type="button" className="edit-btn" onClick={handleEdit}>Edit</button>
            )}
        </>
    );
}
