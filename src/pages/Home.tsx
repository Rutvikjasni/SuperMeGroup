import ContactForm from "../components/Home/ContactSection";
import HeroSection from "../components/Home/HeroSection";
import Overview from "../components/Home/Overview";

export default function Home() {
    return (
      <>
            <section>
             <HeroSection />
            </section>
            <section>
            <Overview />
            </section>
            {/* contact Section */}
            <section>
                <ContactForm/>
            </section>
      </>
    )
  }
  