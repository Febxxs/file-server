import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import footerImage from "../assets/footerImage";
import { Image, Tooltip } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full p-6 bg-[#F4F4F5] ">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        {/* Section: Website Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Website Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://smkteknosa.sch.id/"
                  className="hover:text-blue-400"
                >
                  Smk Tekno-SA
                </a>
              </li>
              <li>
                <a
                  href="https://belajar.smkteknosa.sch.id/"
                  className="hover:text-blue-400"
                >
                  Belajar Smk Tekno-SA
                </a>
              </li>
              <li>
                <a
                  href="https://cbt.smkteknosa.sch.id"
                  className="hover:text-blue-400"
                >
                  CBT ( Local )
                </a>
              </li>
            </ul>
          </div>

          {/* Section: Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Febxxs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <Github />
              </a>
              <a
                href="https://www.facebook.com/smkteknosaska/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/smkteknosaska/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Section: Technologies Used */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Technologies Used</h2>
            <div className="flex space-x-4">
              {footerImage.map((item, i) => (
                <div key={i}>
                  <Tooltip showArrow={true} content={item.name}>
                    <div className="flex items-center space-x-2 ">
                      <Image
                        width={30}
                        height={30}
                        src={item.icon}
                        alt={item.name}
                        radius="none"
                      />
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2024 Febebriyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
