const Button = ({ label, onClick, type = "button", customStyles = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 
        py-2 
        text-white 
        font-bold 
        bg-sky-600 
        rounded-lg 
        hover:bg-sky-700  
        ${customStyles}
        `}
    >
      {label}
    </button>
  );
};

export default Button;
