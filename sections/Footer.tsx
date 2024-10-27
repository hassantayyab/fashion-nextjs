import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-950 py-28">
      <div className="container-fs">
        <div className="grid grid-cols-5">
          <div className="col-span-2 mr-48 space-y-8 self-center">
            <h3 className="uppercase text-white">Fashion</h3>
            <p className="font-normal text-gray-400">
              Complete your style with awesome clothes from us.
            </p>
            <ul className="flex items-center gap-4">
              <li className="size-10 cursor-pointer rounded-xl bg-yellow-light">
                <a
                  className="transition-fs flex size-full items-center justify-center ease-in-out hover:scale-110"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="text-gray-950" />
                </a>
              </li>
              <li className="size-10 cursor-pointer rounded-xl bg-yellow-light">
                <a
                  className="transition-fs flex size-full items-center justify-center ease-in-out hover:scale-110"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-gray-950" />
                </a>
              </li>
              <li className="size-10 cursor-pointer rounded-xl bg-yellow-light">
                <a
                  className="transition-fs flex size-full items-center justify-center ease-in-out hover:scale-110"
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="text-gray-950" />
                </a>
              </li>
              <li className="size-10 cursor-pointer rounded-xl bg-yellow-light">
                <a
                  className="transition-fs flex size-full items-center justify-center ease-in-out hover:scale-110"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-gray-950" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-start-3 justify-self-end">
            <p className="mb-4 text-base text-gray-100">Company</p>
            <ul className="space-y-4 font-normal text-gray-400">
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                About Us
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Careers
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Press
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Affiliates
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Gift Cards
              </li>
            </ul>
          </div>
          <div className="justify-self-end">
            <p className="mb-4 text-base text-gray-100">Quick Link</p>
            <ul className="space-y-4 font-normal text-gray-400">
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Help
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Track Order
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Returns
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Shipping
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                FAQ
              </li>
            </ul>
          </div>
          <div className="justify-self-end">
            <p className="mb-4 text-base text-gray-100">Legal</p>
            <ul className="space-y-4 font-normal text-gray-400">
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Terms & Conditions
              </li>
              <li className="transition-fs cursor-pointer ease-in-out hover:text-yellow-light">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
