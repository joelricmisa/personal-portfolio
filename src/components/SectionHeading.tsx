type Props = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="mb-10 text-center text-3xl font-medium capitalize">
      {children}
    </h1>
  );
};

export default SectionHeading;
