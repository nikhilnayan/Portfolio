'use client';

import { useEffect, useState } from "react";

export default function Home() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <section className="w-full flex flex-col items-center relative">
        <nav className="flex justify-between p-4 items-baseline sm:px-16 sm:py-12 w-full">
          {/* Greeting Section */}
          <div className="flex items-baseline group cursor-default gap-2 relative">
            <p className="text-3xl sm:text-5xl group-hover:scale-90 transition-all ease-in-out duration-300 group-hover:rotate-12">
              👋
            </p>
            <div className="text-2xl font-bold tracking-tight text-[#ffc83d] group-hover:tracking-wider transition-all ease-in-out duration-300 hidden sm:flex">
              Hello
              <p className="w-0 overflow-hidden group-hover:w-[7.8rem] transition-all ease-in-out duration-700">
                ooooooooo
              </p>
              !
            </div>
          </div>

          {/* Social Links and Time Display */}
          <div className="flex items-center gap-10">
            <div className="flex gap-4">
              {/* Play Button */}
              <a data-state="closed">
                <button className="play-button w-6 h-6 outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 stroke-1"
                  >
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M9 17v-13h10v9"></path>
                    <path d="M9 8h10"></path>
                    <path d="M17 17v5"></path>
                    <path d="M21 17v5"></path>
                  </svg>
                </button>
              </a>

              {/* Social Media Links */}
              {[
                {
                  href: 'https://twitter.com/VishwaGauravIn',
                  aria: "Vishwa's Twitter/X account",
                  svg: (
                    <>
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                    </>
                  ),
                },
                {
                  href: 'https://github.com/VishwaGauravIn',
                  aria: "Vishwa's GitHub account",
                  svg: (
                    <>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </>
                  ),
                },
                {
                  href: 'https://linkedin.com/in/VishwaGauravIn',
                  aria: "Vishwa's LinkedIn account",
                  svg: (
                    <>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </>
                  ),
                },
                {
                  href: 'https://whatsapp.com/channel/0029Va6O4O4CxoB02Dnsys0K',
                  aria: "Vishwa's WhatsApp channel",
                  svg: (
                    <>
                      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </>
                  ),
                },
              ].map(({ href, aria, svg }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social"
                  aria-label={aria}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 stroke-1"
                  >
                    {svg}
                  </svg>
                </a>
              ))}
            </div>

            {/* Time Display */}
            <div className="hidden md:flex justify-center items-center gap-2">
              <p className="text-4xl font-medium">{formatTime(currentTime)}</p>
              <div className="flex flex-col">
                <p className="text-xs font-semibold">{currentTime.getHours() >= 12 ? 'pm' : 'am'}</p>
                <p className="text-xs font-medium">{formatDate(currentTime)}</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
