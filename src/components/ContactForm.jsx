import React from 'react'
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {
    (function () {
        emailjs.init({
            publicKey: "qsS1cozi-uPBsJMLn",
        });
    })();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitting }
    } = useForm();

     const onSubmit = (data) => {
        console.log("Form data",data);

        emailjs.send('service_xmgxezb', 'template_zb5aiif',data, {
                publicKey: 'YwrRfkICUTPRi7c2s',
            })
            .then(
                () => {
                    console.log('Successfully sent your message! Thank you!');
                    toast.success("Message Sent Successfully");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Message Failed to Send");
                },
            );

        reset();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="contact-form-comp h-full min-h-[65dvh]   w-full flex flex-col  justify-end items-center gap-5">
                <h1 className="heading mt-10 xl:mt-0">Contact Me</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="h-auto w-full  min-h-fit flex flex-col justify-center items-center text-lg font-normal gap-3 " >
                    {isSubmitting && <div>Submitting...</div>}
                    <input type="text"   {...register('name', { required: { value: true, message: 'Username is required!' }, })}
                        name="name" id="name" placeholder="Your name" className="contact-input rounded-sm focus:outline-none" />

                    {errors.name && <span className="error-text">{errors.name.message}</span>}

                    <input type="email" name="email" id="email" {...register('email', {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Removed backticks
                            message: "Invalid email address!"
                        },
                        required: { value: true, message: 'email is required!' },
                    })}
                        placeholder="Your email" className="contact-input rounded-sm focus:outline-none" />
                    {errors.email && <span className="error-text">{errors.email.message}</span>}

                    <input type="text" name="subject" id="subject"
                        {...register('subject', { required: { value: true, message: 'Subject is required!' }, })}
                        placeholder="Subject" className="contact-input rounded-sm focus:outline-none" />
                    {errors.subject && <span className="error-text">{errors.subject.message}</span>}

                    <textarea name="message" placeholder="Message" id="msg" className="contact-input rounded-sm h-auto min-h-[8em] focus:outline-none"
                        {...register("message")}
                    ></textarea>
                    {/*<button type="submit" className="contact-btn p-3 bg-cyan-600 w-[10%] rounded-md">Send</button>*/}
                    <button type="submit" className="contact-btn cursor-pointer px-6 py-2 bg-[#615fff] text-black w-fit text-lg font-semibold rounded-md ">Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm
