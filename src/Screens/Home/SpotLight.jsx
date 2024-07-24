import { useEffect, useRef } from "react";

export const Spotlight = () => {
  const cardsContainer = useRef(null);

  const applyOverlayMask = (e) => {
    const documentTarget = e.currentTarget ;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (
    <>
      <main className="max-w-[1440px]  p-5 md:p-0 md:py-10 m-auto">
        {/* <h1 className="text-center mb-5 text-2xl">Pricing</h1> */}
        <div className="relative" ref={cardsContainer}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors glass">
              <h2>Basic</h2>
              <p>$9.99</p>
              <ul className="list-disc">
                <li>Access to standard workouts and nutrition plans</li>
                <li>Email support</li>
              </ul>
              <a
                href="#basic"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Get Started
              </a>

            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors glass">
              <h2>Pro</h2>
              <p>$19.99</p>
              <ul className="list-disc">
                <li>Access to advanced workouts and nutrition plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
              </ul>
              <a
                href="#pro"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Upgrade to Pro
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors glass ">
              <h2>Ultimate</h2>
              <p>$29.99</p>
              <ul className="list-disc">
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a
                href="#ultimate"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Go Ultimate
              </a>
            </div>
          </div>

          {/* twin cards */}
          <div
            className="grid grid-cols-1 gap-10 md:grid-cols-3 select-none pointer-events-none absolute inset-0"
            style={{
              opacity: "var(--opacity, 0)",
              mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
              WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            }}
          >
            {/* card */}
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#3cffce] border border-solid rounded-xl transition-colors bg-[#f83535] text-transparent">
              <h2>Basic</h2>
              <p>$9.99</p>
              <ul className="list-disc">
                <li>Access to standard workouts and nutrition plans</li>
                <li>Email support</li>
              </ul>
              <a
                href="#basic"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Get Started
              </a>

            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#ff3cf2] border border-solid rounded-xl transition-colors bg-[#217661] text-transparent">
              <h2>Pro</h2>
              <p>$19.99</p>
              <ul className="list-disc">
                <li>Access to advanced workouts and nutrition plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
              </ul>
              <a
                href="#pro"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Upgrade to Pro
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#e23cff] border border-solid rounded-xl transition-colors bg-[#622176] text-transparent">
              <h2>Ultimate</h2>
              <p>$29.99</p>
              <ul className="list-disc">
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a
                href="#ultimate"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Go Ultimate
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};