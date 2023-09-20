import SectionHeading from "../components/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";
import { useForm } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  email: z.string().email("Invalid email, please input an appropriate email."),
  messageArea: z
    .string()
    .nonempty("This field is required, please input some message."),
});

type ContactSchema = z.infer<typeof contactSchema>;

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  const {
    register,
    trigger,
    reset,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      console.log(touchedFields);
      console.log(dirtyFields);
    } else {
      reset();
    }
  };
  return (
    <section ref={ref} id="contact" className="mt-24 scroll-mt-32">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [0, 25, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[700px] p-5"
      >
        <SectionHeading>Contact Me</SectionHeading>
        <p>
          Please contact me directly at
          <span className="mx-1 select-all font-medium underline">
            joelriccmisa@gmail.com
          </span>
          or through this form.
        </p>
        <form
          target="_blank"
          method="POST"
          action="https://formsubmit.co/00a8d1f511d7275a63fc30103a80ac07"
          onSubmit={onSubmit}
        >
          <label htmlFor="email">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              className="my-5 block w-full rounded-md border border-black/10  bg-gray-100 px-3  py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1   focus:ring-gray-400 dark:bg-gray-100/10 dark:text-white/80"
            />
          </label>
          {errors.email && (
            <p className="mb-4 flex items-center  gap-3 text-red-500">
              <span className="text-lg">
                <BsInfoCircle />
              </span>
              {errors.email.message}
            </p>
          )}

          <textarea
            {...register("messageArea")}
            cols={30}
            rows={10}
            placeholder="Your message"
            className="my-5 block w-full rounded-md border  border-black/10 bg-gray-100 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1   focus:ring-gray-400 dark:bg-gray-100/10 dark:text-white/80"
          ></textarea>
          {errors.messageArea && (
            <p className="mb-4 flex items-center  gap-3 text-red-500">
              <span className="text-lg">
                <BsInfoCircle />
              </span>
              {errors.messageArea.message}
            </p>
          )}

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white shadow-md dark:bg-white/10 dark:shadow-black/70"
          >
            Submit
            <span className="text-sm">
              <FaPaperPlane />
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
