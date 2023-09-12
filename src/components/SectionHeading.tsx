type Props = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="mb-5 text-center text-3xl font-medium capitalize text-gray-950">
      {children}
    </h1>
  );
};

export default SectionHeading;
