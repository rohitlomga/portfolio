import certificates from "../../data/certificates";

export default function Certificates() {
  return (
    <section className="py-32 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4">{item.issuer}</p>

              <span>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
