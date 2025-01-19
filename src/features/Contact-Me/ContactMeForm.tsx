import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICES_ID, EMAIL_TEMPLATE_ID } from '../../constant';

const ContactMeForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form.current)
        if (form.current) {
            emailjs.sendForm(EMAIL_SERVICES_ID, EMAIL_TEMPLATE_ID, form.current, {
                publicKey: EMAIL_PUBLIC_KEY,
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log('form refernce is null')
        }
    };
    return (
        <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    name='from_name'
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    name='from_email'
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    name='message'
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Submit
            </button>
        </form>
    )
}

export default ContactMeForm
