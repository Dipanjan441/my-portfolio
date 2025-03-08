import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICES_ID, EMAIL_TEMPLATE_ID } from '../../constant';
import { toast } from 'react-toastify';

const ContactMeForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FocusEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm(EMAIL_SERVICES_ID, EMAIL_TEMPLATE_ID, form.current, {
                publicKey: EMAIL_PUBLIC_KEY,
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        form.current?.reset();
                        toast("Success!! Your message has been sent to Dipanjan",{type:"success"});
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        toast("Oops!! Something went wrong",{type:"error"});
                    },
                ).finally(()=> {
                    setIsLoading(false)
                });
        } else {
            console.log('form refernce is null')
        }
    };
    return (
        <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name<span style={{color:'red'}}>*</span>
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
                    Email<span style={{color:'red'}}>*</span>
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
                <label htmlFor="phoneNo" className="form-label">
                    Phone Number
                </label>
                <input
                    name='from_phnNo'
                    type="tel"
                    className="form-control"
                    id="phoneNo"
                    placeholder="Enter your phone number"
                    pattern="^[1-9][0-9]{9}$"
                    title="Enter a valid phone number"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message<span style={{color:'red'}}>*</span>
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
            <button disabled={isLoading} type="submit" className="btn btn-primary w-100">
                {isLoading ? "Submitting" : "Submit"}
            </button>
        </form>
    )
}

export default ContactMeForm
