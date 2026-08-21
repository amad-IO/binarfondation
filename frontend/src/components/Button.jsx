
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:scale-105 focus:ring-blue-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    accent: "bg-[#FFF4D2] text-[#8B6E32] border border-[#FDE5A6] hover:bg-[#FDE5A6] hover:-translate-y-0.5 focus:ring-[#FDE5A6] shadow-sm hover:shadow-md",
    ghost: "text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
