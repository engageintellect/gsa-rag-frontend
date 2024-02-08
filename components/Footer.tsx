import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 border-t border-gray-900 bg-base-100">
        <nav>
          <a
            className="sm:hover:scale-[102%] transition-all duration-300"
            href="https://resonantlogic.com"
            target="_blank"
          >
            <Image
              src="/ResonantLogic_Logo_White.svg"
              className="drop-shadow"
              alt="logo"
              width={200}
              height={200}
              style={{ filter: "invert(100%)" }}
            />
          </a>
          <div className="">Experts in business transformation.</div>

          <a
            href="https://www.linkedin.com/company/resonantlogic.com/about/"
            target="_blank"
          >
            <div className="flex items-center my-5">
              <CiLinkedin className="w-7 h-7 text-primary" />
              <span>Follow Us</span>
            </div>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Solutions</h6>
          <a
            className="link link-hover"
            href="https://resonantlogic-prod.azurewebsites.net/solutions?section=ai"
          >
            Artifical Intellegence
          </a>
          <a
            className="link link-hover"
            href="https://resonantlogic-prod.azurewebsites.net/solutions?section=ai"
          >
            Cybersecurity
          </a>
          <a
            className="link link-hover"
            href="https://resonantlogic.com/solutions?section=data"
          >
            Data Science
          </a>
          <a
            className="link link-hover"
            href="https://resonantlogic.com/solutions?section=data"
          >
            Enterprise Operations
          </a>
          <a
            className="link link-hover"
            href="https://resonantlogic.com/solutions?section=healthcare"
          >
            Healthcare Technology
          </a>
          <a
            className="link link-hover"
            href="https://resonantlogic.com/solutions"
          >
            Software Development
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>

          <div className="flex gap-2 items-center">
            <a className="link link-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </a>
            <a className="link link-hover">1 (323) 538-4254</a>
          </div>

          <div className="flex gap-2 items-center">
            <a className="link link-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a className="link link-hover" href="mailto:info@resonantlogic.com">
              info@resonantlogic.com
            </a>
          </div>

          <div className="flex gap-2 items-start">
            <a className="link link-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </a>
            <a
              className="link link-hover"
              href="https://maps.app.goo.gl/n1KiwWJDQcUbfcaA8"
              target="_blank"
            >
              555 W 5th St. 35th Floor<br></br>Los Angeles, CA 90013
            </a>
          </div>
        </nav>
        <nav className="w-full">
          <h6 className="footer-title">Certifications</h6>
          <div className="w-full flex">
            <div className="w-full flex gap-5 items-center">
              {/* <Image src="/sdvosb_certified.png" alt="logo" className="bg-info rounded p-2" width={200} height={200} /> */}

              <div>
                <Image
                  src="/sba_cert.jpg"
                  alt="logo"
                  className=""
                  width={75}
                  height={75}
                />
              </div>
              <div style={{ filter: "invert(100%)" }}>
                <Image
                  src="/SDVOSB.svg.png"
                  alt="logo"
                  className=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  bg-base-100 text-base-content border-gray-900">
        <aside className="place-self-center justify-self-start grid-flow-col">
          {/* <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
          <div className="text-xs">
            Copyright © 2024 Resonant Logic, LLC. All Rights Reserved.
          </div>
        </aside>
        {/* <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav> */}
      </footer>
    </div>
  );
}

export default Footer;
