const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="mt-8 py-10 text-center">
        <p className="text-base">
          &copy; {date.getFullYear()} Joel Ric. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
