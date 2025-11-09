export default function Navbar() {
  return (
    <header className="border-b border-white/10 text-sm">
      {/* Top info bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 text-gray-400 text-xs">
        <div className="flex gap-6">
          <span>info@swlsolutions.com</span>
          <span>xxxxxxxxxxx</span>
        </div>
        <div className="flex gap-4">
          <i className="fa-brands fa-linkedin hover:text-white"></i>
          <i className="fa-brands fa-twitter hover:text-white"></i>
          <i className="fa-brands fa-instagram hover:text-white"></i>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex flex-wrap gap-8 text-gray-300">
          <li><a href="#" className="text-brand font-medium">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className="bg-brand text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-brand-80 transition">
          Let’s Talk
        </button>
      </nav>
    </header>
  );
}

