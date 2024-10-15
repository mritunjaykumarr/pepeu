"use client";
import "@/app/_styles/style.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState } from "react"; // Import useEffect
import Button from "./Button";
import Link from "next/link";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
    query: "",
    termsAgreed: false,
    updatesChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.termsAgreed) {
      console.log(formData);
      alert("Your feedback has been submitted! 🚀 To the moon!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
        query: "",
        termsAgreed: false,
        updatesChecked: false,
      });
    } else {
      alert("Please agree to the Terms and Privacy Policy.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });

    // Cleanup function to destroy AOS instance
    return () => {
      AOS.refresh(); // You can also use AOS.refresh() if you want to reset the animations
    };
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <section className="feedback-section mt-12">
      <div className="container flex-col lg:flex-row ">
        <div className="form-container  w-[100%] lg:w-[60%]">
          <h2
            className="text-3xl lg:text-6xl font-bold  text-shadow"
            data-aos="fade-up"
          >
            Get in Touch with Pepe Coin!
          </h2>
          <form
            id="feedbackForm"
            action="https://api.web3forms.com/submit"
            method="POST"
            // onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="259d2400-afe1-4059-b1d7-b269aad02834"
            ></input>
            <div className="input-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                required
                data-aos="fade-up"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                required
                data-aos="fade-up"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
                data-aos="fade-up"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Share your thoughts or feedback..."
                required
                data-aos="fade-up"
                value={formData.feedback}
                onChange={handleChange}
              ></textarea>
              <textarea
                id="query"
                name="query"
                placeholder="Any questions? Let us know!"
                required
                data-aos="fade-up"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="checkboxes-form">
              <label className="form-label">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAgreed" // Ensure 'name' matches with the state
                  required
                  data-aos="fade-left"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />
                <div>
                  <span>I agree to the </span>
                  <Link href="#" className="form-privacy">
                    Terms and Privacy Policy
                  </Link>
                </div>
              </label>
              <label className="form-label" data-aos="fade-up">
                <input
                  type="checkbox"
                  id="updates"
                  name="updatesChecked" // Ensure 'name' matches with the state
                  checked={formData.updatesChecked}
                  onChange={handleChange}
                />
                Keep me updated with Pepe news, events, and offers.
              </label>
            </div>

            <Button
              type="submit"
              className="btn bg-[#e1a313] text-[17px] py-[12px]"
              data-aos="fade-up"
            >
              🚀 Submit to the Moon 🚀
            </Button>
          </form>
        </div>
        <div
          className="image-container w-[100%] lg:w-[35%] p-6 lg:p-0"
          data-aos="fade-up"
        >
          <img
            src="/form-image.png"
            alt="Pepe with Coins"
            className="frog-image lg:max-w-[180%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
