import Hero from '../components/Hero';
import AboutClinic from '../components/AboutClinic';
import AboutDoctor from '../components/AboutDoctor';
import WhyTrustUs from '../components/WhyTrustUs';
import AdvancedTreatments from '../components/AdvancedTreatments';
import VideoTestimonials from '../components/VideoTestimonials';
import BookingSection from '../components/BookingSection';
import ReviewsSection from '../components/ReviewsSection';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutClinic />
      <WhyTrustUs />
      <AboutDoctor />
      <AdvancedTreatments />
      <BookingSection />
      <ReviewsSection />
      <VideoTestimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
