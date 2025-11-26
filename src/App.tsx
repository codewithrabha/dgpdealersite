import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {

  let featureData = [
    {
      featuredImage: "/images/watchlist.png",
      icon: "/images/watchlistIcon.png",
      heading: "WatchList - Track Price And Never Miss a Price Drop!",
      description: "Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations."
    },
    {
      featuredImage: "/images/watchlist.png",
      icon: "/images/bidsIcon.png",
      heading: "Bids - Real-Time Bid Status Real-Time Bid Status!",
      description: "Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations."
    },
    {
      featuredImage: "/images/watchlist.png",
      icon: "/images/purchaseIcon.png",
      heading: "Purchases - Your Complete Purchase History, Organized.",
      description: "Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations. Get Real-time Mill rates, book deals securely, and simplify your operations."
    },
  ]

  return (
    <>
      <Header />
      <HeroSection />
      <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto realtive">
        {featureData.map((feature, index) => {
          return <FeatureCard key={index} data={feature} index={index} />;
        })}

      </main>
      <Footer />
    </>
  );
}

export default App;
