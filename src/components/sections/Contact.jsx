import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl font-black">
            Let's Build Something Amazing.
          </h2>

          <p className="mt-8">Feel free to reach out anytime.</p>

          <div className="space-y-8 mt-12">
            <div className="flex gap-5">
              <Mail />
              example@gmail.com
            </div>

            <div className="flex gap-5">
              <Phone />
              +91 9876543210
            </div>

            <div className="flex gap-5">
              <MapPin />
              Jharkhand, India
            </div>
          </div>
        </div>

        <form className="bg-white rounded-3xl p-10 shadow-xl space-y-6">
          <input placeholder="Name" className="w-full p-4 rounded-xl border" />

          <input placeholder="Email" className="w-full p-4 rounded-xl border" />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-4 rounded-xl border"
          />

          <button className="bg-[#4E342E] text-white px-8 py-4 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
