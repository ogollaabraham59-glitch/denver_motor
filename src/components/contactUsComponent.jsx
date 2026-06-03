import React from "react";

const ContactUsComponent = () => {
    const phoneNumber = "+254712345678"; // change to your number
    const whatsappNumber = "254712345678"; // no + sign for WhatsApp link
    const email = "support@denvermotors.com";

    return (
        <div className="container py-5">

            <h1 className="text-center text-primary mb-4">
                Contact Us
            </h1>

            <div className="row g-4">

                {/* CONTACT INFO */}
                <div className="col-md-6">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">

                            <h4 className="mb-3">Get in Touch</h4>

                            <p><strong>Phone:</strong> {phoneNumber}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Location:</strong> Nairobi, Kenya</p>

                            <hr />

                            {/* CALL BUTTON */}
                            <a
                                href={`tel:${phoneNumber}`}
                                className="btn btn-success w-100 mb-3"
                            >
                                Call Us
                            </a>

                            {/* EMAIL BUTTON */}
                            <a
                                href={`mailto:${email}`}
                                className="btn btn-primary w-100 mb-3"
                            >
                                Send Email
                            </a>

                            {/* WHATSAPP BUTTON */}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hello%20Denver%20Motors,%20I%20need%20assistance`}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-success w-100"
                            >
                                Chat on WhatsApp
                            </a>

                        </div>
                    </div>
                </div>

                {/* LOCATION MAP */}
                <div className="col-md-6">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">

                            <h4 className="mb-3">Our Location</h4>

                            <p>
                                We are located in Nairobi, Kenya. Visit our showroom for
                                test drives and vehicle inspections.
                            </p>

                            {/* GOOGLE MAP */}
                            <iframe
                                title="location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.0!2d36.8219!3d-1.2921"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>

                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-primary w-100 mt-3"
                            >
                                Open in Google Maps
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUsComponent;