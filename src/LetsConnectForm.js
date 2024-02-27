import React, { useState } from 'react';
import './LetsConnectForm.css';

function LetsConnectForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });


    return (
        <div id='letsConnectForm' className="connect-form">
            <h1 className="form-heading">Let's Connect</h1>
            <form className="form-container">
                <div className="form-group fullName">
                    <label htmlFor="fullName ">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} required />
                </div>
                <div className="form-group email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} required />
                </div>
                <div className="form-group contactNumber">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} rows="4" />
                </div>
                <button type="submit">Submit form</button>
            </form>
        </div>
    );
}

export default LetsConnectForm;
