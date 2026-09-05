import Link from "next/link";

function page() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="section-kicker mb-6">
        <span className="font-display text-lg tracking-normal">404</span>
        <span className="h-px w-8 bg-[#c9a962]/50" />
        <span>Lost page</span>
      </p>
      <h1 className="font-display text-6xl italic text-[#f3eee4] sm:text-8xl">This room is empty.</h1>
      <p className="mt-6 max-w-md text-sm leading-7 text-[#8d867b]">
        The page you asked for has been moved, or never existed. Return to the atelier.
      </p>
      <Link href="/" className="btn-gold mt-10">
        Back home
      </Link>
    </div>
  );
}

export default page;
