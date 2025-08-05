import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Clients", path: "/clients" },
  ];

  return (
    <footer className="relative text-white overflow-hidden px-10 text-[16px] md:text-[17px]">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Footer3.png"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 " />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.15)_0%,transparent_50%)]" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 pt-16 px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-lime-400 to-yellow-300 bg-clip-text text-transparent mb-3">
              United Agro Food
            </h3>
            <p className="text-yellow-400 font-medium mb-4">
              Farm Fresh • Flash Frozen • Premium Quality
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              Leading the frozen food industry with premium quality products since 2013. From farm to freezer, we preserve nature's goodness with cutting-edge technology and sustainable practices.
            </p>
            <div>
              <h4 className="text-yellow-400 font-semibold mb-3">Follow Our Journey</h4>
              <div className="flex gap-3 flex-wrap">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 backdrop-blur bg-white/10 hover:bg-gradient-to-r from-lime-400 to-green-400 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-yellow-400 transition duration-300 relative pl-5 group block"
                  >
                    <span className="absolute left-0 text-lime-400 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0">&rarr;</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map and Address */}
          <div className="lg:col-span-2">
            <div className="w-full overflow-hidden rounded-2xl shadow-lg mb-4 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.729395555772!2d74.49819637468408!3d19.85139962717412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc436beaaaaaab%3A0x1ed39ed0a1461f77!2sUnited%20Agro%20Frozen%20Food%20Products%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751974656855!5m2!1sen!2sin"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="United Agro Location"
                className="w-full h-[320px] border-0 rounded-2xl"
              />
            </div>
            <p className="text-white/80">
              267/05, Kokamthan, Maharashtra 423601
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-16 py-6 px-4 sm:px-6 md:px-12 text-center text-sm text-white/60">
        &copy; {currentYear} United Agro Food. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
