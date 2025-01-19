import DisplayHeading from "../../components/Heading";
import contactImage from '../../assets/images/contactme.webp';
import ContactMeForm from "./ContactMeForm";


const ContactMe = () => {
    return (
        <>
            <DisplayHeading label="Connect With Me" />
            <div
                className="container card shadow mb-4"
                style={{
                    width: "80%",
                    borderRadius: "15px",
                    margin: "0 auto",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-none d-md-flex justify-content-center">
                        <img
                            src={contactImage}
                            alt="Contact Illustration"
                            style={{
                                maxWidth: "100%",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <ContactMeForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe
