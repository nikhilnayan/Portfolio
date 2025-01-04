'use client'

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col items-center relative">
        <nav className="flex justify-between p-4 items-baseline sm:px-16 sm:py-12 w-full">
          <div className="flex items-baseline group cursor-default gap-2 relative">
            <p className="text-3xl sm:text-5xl group-hover:scale-90 transition-all ease-in-out duration-300 group-hover:rotate-12">👋🏻</p>
            <div className="text-2xl font-bold tracking-tight text-[#FBC138] group-hover:tracking-wider transition-all ease-in-out duration-300 hidden sm:flex">
              Hello
              <p className="w-0 overflow-hidden group-hover:w-[7.5rem] transition-all ease-in-out duration-500">oooooooo</p>
              !
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-4">
              <a data-state="closed"></a>
              <a>
                <button className="play-button w-6 h-6 outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 stroke-1">
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M9 17v-13h10v9"></path><path d="M9 8h10"></path>
                    <path d="M17 17v5"></path><path d="M21 17v5"></path>
                  </svg>
                </button>
              </a>
              <a></a>
              <a></a>
              <a></a>

            </div>

          </div>
        </nav>
      </section>
    </>
  );
}
