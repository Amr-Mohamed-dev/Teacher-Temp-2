const ButtonHover = () => {
  return (
    <button className="group relative h-12 overflow-hidden bg-primary rounded-[8px] border border-neutral-200  px-4 text-neutral-100">
      <span className="relative inline-flex">
        <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateX(360deg)]">
          G
        </span>
        <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateX(360deg)]">
          E
        </span>
        <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateX(360deg)]">
          T
        </span>
        <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateX(360deg)]">
          {" "}
          -{" "}
        </span>
        <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateX(360deg)]">
          S
        </span>
        <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateX(360deg)]">
          T
        </span>
        <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateX(360deg)]">
          A
        </span>
        <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateX(360deg)]">
          R
        </span>
        <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
          T
        </span>
        <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
          E
        </span>
        <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
          D
        </span>
      </span>
    </button>
  );
};

export default ButtonHover;
