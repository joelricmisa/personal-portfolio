import React from "react";
import SectionHeading from "../components/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[700px] p-5">
        <SectionHeading>Contact Me</SectionHeading>
        <p>
          Please contact me directly at{" "}
          <span className="font-medium underline">joelricmisa1@gmail.com</span>{" "}
          or through this form.
        </p>
        <form action="">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Your email"
              className="my-5 block w-full rounded-md border  border-black/10 bg-gray-100 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400   focus:ring-1 focus:ring-gray-400"
            />
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your message"
            className="my-5 block w-full rounded-md border  border-black/10 bg-gray-100 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400   focus:ring-1 focus:ring-gray-400"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white"
          >
            Submit
            <span className="text-sm">
              <FaPaperPlane />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
