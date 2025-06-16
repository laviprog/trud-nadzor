export default function FooterContact() {
  return (
    <div className="text-center lg:text-left">
      <p className="text-2xl font-semibold">Контакты</p>
      <ul className="mt-4.5 space-y-3 text-sm sm:space-y-4">
        <li>
          <a
            href="mailto:info@trud-nadzor.ru"
            className="flex items-center justify-center lg:justify-start gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="transition group-hover:text-white/75 text-[15px]">
              info@trud-nadzor.ru
            </span>
          </a>
        </li>

        <li>
          <div className="flex items-center justify-center lg:justify-start gap-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <a href="tel:+79299152157">
                <span className="text-white hover:text-white/75 text-[15px]">
                  +7 (929) 915-21-57
                </span>
              </a>
              <a href="tel:+79264803823">
                <span className="text-white hover:text-white/75 text-[15px]">
                  +7 (926) 480-38-23
                </span>
              </a>
            </div>
          </div>
        </li>
        <li className="flex items-center justify-center lg:justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <address className="text-white text-sm not-italic text-[15px]">
            117148, г. Москва, ул. Брусилова, д. 27, помещение V ком 3/3
          </address>
        </li>
      </ul>
    </div>
  );
}
