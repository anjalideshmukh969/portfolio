import React from 'react'
// import Contact1 from './Contact1'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div>
            <div className="contact-head h-[20%] w-fit text-5xl xl:text-6xl font-bold  flex justify-center items-end">
                Get In Touch
            </div>

            <div className="contact-body  flex h-auto xl:h-[80%] w-full flex-col xl:flex-row justify-center items-center">
                {/* <div className="contact-body-part1  h-full w-[40%] flex flex-col justify-center items-center gap-3">
                    <Contact1/>
                </div> */}
                <div className="contact-body-part2  h-auto xl:h-full w-full xl:w-[60%] flex justify-center items-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
