import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <section className="w-full bg-green-100 max-w-[1600px] px-8 py-20 mx-auto flex flex-col items-center justify-start text-center">
        <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
        <p className="md:w-[45%] w-full text-lg mb-12">
          We are always happy to hear from you. Please feel free to contact us
          for any queries or feedback.
        </p>

        <ul className="flex md:flex-row items-center justify-around w-full mb-5">
          <li>Phone: +91 1234567890</li>
          <li>Email: ali@example.com </li>
          <li>Location: 123 Street, New York, USA</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactInfo;
