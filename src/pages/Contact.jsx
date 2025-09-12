export const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-light tracking-widest uppercase text-center mb-12">
          Contact Us
        </h2>

        <form className="space-y-8">
          <div>
            <label htmlFor="username" className="block text-sm mb-2 tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              required
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 outline-none py-2 text-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 outline-none py-2 text-lg placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              autoComplete="off"
              required
              placeholder="Enter your message"
              className="w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 outline-none py-2 text-lg placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold tracking-wide rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


