import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {

  useEffect(() => {
    emailjs.init("qsS1cozi-uPBsJMLn");
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_wgb9gkr",
        "template_did5z0o",
        data,
        "qsS1cozi-uPBsJMLn"
      )
      .then(() => {
        toast.success("Message sent successfully");
        reset();
      })
      .catch(() => toast.error("Failed to send message"));
  };

  return (
    <section
      id="contact"
      className="w-screen min-h-[90vh] flex flex-col justify-center items-center px-4"
    >
      <ToastContainer autoClose={4000} theme="light" />

      {/* Modern Heading */}
      <h1
        className="
          text-4xl md:text-5xl
          font-light tracking-[0.3em]
          uppercase
          mb-12
          relative
          after:absolute after:left-1/2 after:-bottom-3
          after:h-[1px] after:w-16
          after:-translate-x-1/2
          after:bg-gray-400
          hover:after:w-28
          after:transition-all
        "
      >
        Get In Touch
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-6 text-base"
      >
        {/* Input wrapper */}
        {[
          { name: "name", type: "text", placeholder: "Your Name" },
          { name: "email", type: "email", placeholder: "Your Email" },
          { name: "subject", type: "text", placeholder: "Subject" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, { required: `${field.placeholder} is required` })}
              className="
                bg-transparent
                border-b border-gray-400
                py-2
                focus:border-black dark:focus:border-white
                focus:outline-none
                transition-all
                hover:border-gray-600
              "
            />
            {errors[field.name] && (
              <span className="text-xs text-red-500">
                {errors[field.name].message}
              </span>
            )}
          </div>
        ))}

        {/* Message */}
        <div className="flex flex-col gap-1">
          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className="
              bg-transparent
              border-b border-gray-400
              py-2 min-h-[120px]
              focus:border-black dark:focus:border-white
              focus:outline-none
              transition-all
              hover:border-gray-600
            "
          ></textarea>
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-6
            px-8 py-2
            border border-black dark:border-white
            text-sm uppercase tracking-widest
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition-all duration-300
            self-center
          "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
