const ProgramCard = ({ image, title, description, linkText = "Lihat Selengkapnya", onLinkClick }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden shrink-0 w-[280px] sm:w-[320px] transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2">
      {/* Gambar Program */}
      <div className="h-48 w-full bg-slate-100 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-medium">
            [Aset Gambar Belum Ada]
          </div>
        )}
      </div>

      {/* Konten Text */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tombol Link */}
        <button 
          onClick={onLinkClick}
          className="text-blue-600 font-semibold text-sm hover:text-blue-700 self-start hover:underline decoration-2 underline-offset-4 transition-all"
        >
          {linkText}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
