export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[3rem] border border-white/10 bg-black p-4 shadow-2xl max-w-md">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black border border-white/10" />
      <div className="rounded-[2rem] overflow-hidden bg-black">
        {children}
      </div>
    </div>
  );
}
