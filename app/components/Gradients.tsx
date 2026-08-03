export function Gradients() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-0 md:opacity-40 lg:opacity-50"
    >
      <div className="absolute top-0 -left-4 h-[70vh] w-[18vw] animate-blob rounded-full bg-amber-100 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-2000 absolute top-0 -right-4 h-[60vh] w-[18vw] animate-blob rounded-full bg-orange-100 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-rose-100 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-6000 absolute -bottom-8 right-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-sky-100 mix-blend-multiply blur-3xl filter" />
    </div>
  );
}

export function ContactGradients() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="opacity-0 lg:opacity-85">
        <div className="absolute top-0 -left-4 h-[70vh] w-[18vw] animate-blob rounded-full bg-amber-100 mix-blend-multiply blur-[100px] filter" />
        <div className="animation-delay-2000 absolute top-0 -right-4 h-[60vh] w-[18vw] animate-blob rounded-full bg-orange-100 mix-blend-multiply blur-[100px] filter" />
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-rose-100 mix-blend-multiply blur-[100px] filter" />
        <div className="animation-delay-6000 absolute -bottom-8 right-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-sky-100 mix-blend-multiply blur-[100px] filter" />
      </div>
    </div>
  );
}
