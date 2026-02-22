import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 pt-8 pb-7 max-w-334 mx-auto">
      {/* Newsletter Banner */}
      <div className="bg-primary rounded-3xl md:rounded-t-[48px] mb-0 px-4 sm:px-18 pt-4 sm:pt-16 pb-28 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-white font-semibold text-[32px] md:text-5xl uppercase leading-tight mb-3">
            Join our KicksPlus <br /> Club &amp; get 15% off
          </h2>
          <p className="text-[#E7E7E3] text-[16px] sm:text-[20px] mb-6 font-openSans">
            Sign up for free! Join the community.
          </p>
          <div className="flex items-center gap-1 max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border border-background text-foreground text-sm px-4 py-2.5 rounded-lg outline-none placeholder:text-gray-400 font-openSans"
            />
            <button className="bg-foreground text-white text-sm font-medium uppercase tracking-widest px-5 py-[11px] rounded-lg hover:bg-black transition-colors">
              Submit
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-start md:justify-center">
          <Image
            src="/logo_white.png"
            alt="Kicks Logo"
            width={400}
            height={400}
            className="object-contain h-[61px] w-[200px] md:h-[112px] md:w-[367px]"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground rounded-3xl md:rounded-[48px] -mt-16 px-4 md:px-10 md:pr-12 pt-4 md:pt-10 pb-40 md:pb-60 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* About */}
          <div className="w-full md:w-[38%]">
            <h3 className="text-accent font-black text-2xl md:text-4xl mb-3 font-rubik">
              About us
            </h3>
            <p className="text-[#E7E7E3] text-[16px] md:text-xl font-semibold  font-openSans">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* links  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mb-16 ">
            {/* Categories */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Categories
              </h3>
              <ul className="space-y-2 font-openSans">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#E7E7E3] text-[16px] sm:text-xl font-semibold hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Company
              </h3>
              <ul className="space-y-2 font-openSans">
                {["About", "Contact", "Blogs"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#E7E7E3] text-[16px] sm:text-xl font-semibold hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Follow us
              </h3>
              <div className="flex gap-4 md:gap-6">
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                {/* Twitter/X */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                {/* TikTok */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large watermark logo */}
        <div className="absolute md:-bottom-18 inset-x-0 h-64 md:h-76.5">
          <Image
            src="/logo_white.png"
            alt=""
            width={1080}
            height={1080}
            className="object-contain w-full h-full"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="text-center pt-4">© All rights reserved 2024</div>
    </footer>
  );
};

export default Footer;
