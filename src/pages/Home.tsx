import ContactForm from "../components/Home/ContactForm";
import HeroSection from "../components/Home/HeroSection";
import Overview from "../components/Home/Overview";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section>
                <HeroSection />
            </section>
            
            {/* Overview Section */}
            <section>
                <Overview />
            </section>
            
            {/* Contact Section */}
            <section>
                <ContactForm />
            </section>
        </>
    );
}
