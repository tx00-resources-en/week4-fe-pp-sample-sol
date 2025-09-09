// Registration.jsx
import { useState } from 'react';

export default function Registration() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // simple client-side validation
        if (!form.name.trim() || !form.email.trim() || form.password.length < 6) {
            alert('Please provide a name, a valid email, and a password (min 6 chars).');
            return;
        }
        // placeholder: send form to API or parent handler
        console.log('Registering user:', form);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="registration-success">
                <h2>Registration complete</h2>
                <p>Thanks, {form.name}. Check your email ({form.email}) for confirmation.</p>
            </div>
        );
    }

    return (
        <form className="registration-form" onSubmit={handleSubmit} noValidate>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                minLength={6}
                required
            />

            <button type="submit" className="btn">Register</button>
        </form>
    );
}
