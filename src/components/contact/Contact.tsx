const Contact = () => {
  return (
    <section id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h2>
      <form
        action={import.meta.env.VITE_GETFORM_ENDPOINT}
        method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.submit();
          e.currentTarget.reset();
        }}
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="message">
            Message
          </label>
          <textarea
            rows={10}
            id="message"
            name="message"
            className="border-2 rounded-lg p-3 border-gray-300"
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 rounded-lg mt-4 w-full p-4">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
