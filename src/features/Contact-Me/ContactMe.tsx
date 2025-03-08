import DisplayHeading from "../../components/Heading";
import contactImage from '../../assets/images/contactme.webp';
import ContactMeForm from "./ContactMeForm";
import { motion } from "motion/react";
import { NavbarItemPath } from "../Navbar/navigation";

const ContactMe = () => {
    // Variants for animations
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    const largeScreenFormVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div style={{minHeight:'100vh'}} id={NavbarItemPath.contact_me}>
            <DisplayHeading label="Connect With Me" />
            <motion.div
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
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
            >
                <div className="row align-items-center">
                    <motion.div className="col-12 col-md-6 d-md-flex justify-content-center"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <img
                            src={contactImage}
                            alt="Contact Illustration"
                            style={{
                                maxWidth: "100%",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </motion.div>
                    <motion.div className="col-12 col-md-6"
                        variants={largeScreenFormVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <ContactMeForm />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactMe
