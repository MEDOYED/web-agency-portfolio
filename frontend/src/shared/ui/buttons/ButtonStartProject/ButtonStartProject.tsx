type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  return (
    <div className={className}>
      <button className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black">
        {text || "Start a project"}
      </button>
    </div>
  );
};

export default ButtonStartProject;
