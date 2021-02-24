import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceId = "service_ID";
  const templateId = "template_ID";
  const userId = "user_IN4UzbVEGkKp7wrrUW5bq";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    r.target.reset();
  };

  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage(
          "Message sent successfully! I'll contact you as soon as possible"
        );
      })
      .catch((err) => console.error(`Something went wrong ${errors}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Any questions about me, or if you are interested in me, feel free to
          contact any time.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: "Please enter your phone number",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>

              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please enter your email",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid Email Format",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>

              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "Enter your subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Any questions"
                  name="description"
                  ref={register({
                    required: "Please enter your message",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
