export function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-charcoal py-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <img src="/anzco-logo-blue.svg" alt="ANZCO Foods" className="h-8" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase opacity-60 tracking-widest font-bold text-brand-green">Corporate Office</span>
            <span className="text-xs">Christchurch, New Zealand</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs opacity-80 mb-2">&copy; {new Date().getFullYear()} ANZCO Foods. All rights reserved.</p>
          <p className="font-display italic text-sm text-brand-green">Bringing you nutrition and good health from New Zealand’s finest beef and lamb.</p>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <span className="text-[10px] uppercase opacity-60 tracking-widest font-bold text-brand-green">Ownership</span>
          <span className="text-xs">100% Itoham Yonekyu Holdings</span>
        </div>
      </div>
    </footer>
  );
}
