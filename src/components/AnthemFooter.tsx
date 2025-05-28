const AnthemFooter = () => {
  return (
    <footer className="w-full mt-16 border-t border-gray-800 py-6 px-4 text-center text-sm text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} NFCS St. Malachy’s Chaplaincy UNN. All
        rights reserved.
      </p>
      <p className="mt-2">
        <a
          href="/"
          className="text-gray-300 hover:text-white underline transition"
        >
          ← Back to Home
        </a>
      </p>
    </footer>
  );
};

export default AnthemFooter;
