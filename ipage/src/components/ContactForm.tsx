
const ContactForm = () => {


    return (

        <section id="contact" className="p-5 text-center border w-full max-w-md mx-auto">


            <form method="contactForm" className="flex flex-col items-center p-2">
                <h2 className="text-3xl">Contact Me</h2>
                <p className="mt-4">Feel free to reach out!</p>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="border text-white bg-black p-2 m-2 mt-4 w-full max-w-md"
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="border text-white bg-black p-2 m-2 w-full max-w-md"
                    required
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="border bg-black p-2 m-2 w-full max-w-md h-32"
                    required
                />
                <button
                    type="submit"
                    className="border-2 bg-blue-300/50 font-bold hover:bg-blue-300/90 text-blue-300 text-white hover:text-black p-2 mt-4 w-full max-w-md"
                >
                    Send
                </button>

            </form>

        </section>
    );
};

export default ContactForm;
