import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-[#000925] text-white px-7 py-10 flex flex-col items-center text-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-8" />

      <nav
        className="flex items-center justify-center gap-4 mb-6"
        aria-label="Social links"
      >
        <Icon label="Instagram" href="https://www.instagram.com/cau_comp">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.5-2.1a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 0 1 0-2.2Z" />
          </svg>
        </Icon>

        <Icon label="GitHub" href="https://github.com/CAUCOMP">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4c-.6-1.4-1.4-1.8-1.4-1.8c-1.1-.8.1-.8.1-.8c1.2.1 1.9 1.2 1.9 1.2c1.1 1.9 2.9 1.3 3.6 1c.1-.8.4-1.3.7-1.6c-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.7 7.4c-.1-.3-.5-1.6.1-3.2c0 0 1-.3 3.2 1.2a10.8 10.8 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.8 5.7-5.5 6c.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
        </Icon>

        <Icon label="Chat">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.4L5 21.5V18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm16 2H4v10h3v1.6L9 16h11V6Z" />
          </svg>
        </Icon>
      </nav>

      <div className="text-2xl font-semibold mb-3">CAU COMP</div>

      <p className="text-white/60 text-sm leading-relaxed mb-1 max-w-xl">
        CHUNG-ANG univ, Room 407, Building 107, 84 Heukseok-ro, Dongjak-gu, Seoul
      </p>

      <p className="text-white/60 text-sm">
        © 2026 COMP, All Rights Reserved.
      </p>
    </footer>
  );
}