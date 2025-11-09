export default function CompanyLogos() {
  const logos = ["UTOSIA", "FOX HUB", "Radial", "goldline", "amara"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <p className="text-white-80 text-sm mb-10">
        Trusted by <span className="text-white font-semibold">67+ startups</span> and agencies
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 opacity-90">
        {logos.map((logo) => (
          <div key={logo} className="text-gray-100 font-semibold text-lg">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
