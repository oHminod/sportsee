const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <svg
        className="animate-spinner h-28 w-28 text-primary"
        viewBox="0 0 50 50"
      >
        <circle
          className="animate-dash"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
