import Hero from "./components/Hero";
import Fundraiser from "./components/Fundraiser";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import { HeaderResponsive } from "./components/Header.tsx";
import FooterSimple from "./components/FooterLinks.tsx";

function App() {
  const links = [
    {
      label: "Fundraiser",
      link: "#fundraiser",
    },
    {
      label: "Donation",
      link: "#donation",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <HeaderResponsive links={links} />
      <Hero />
      <div className="lg:grid lg:grid-cols-2">
        <Fundraiser />
        <div className="md:grid md:grid-cols-2 lg:block">
          <Donate />
          <Contact />
        </div>
      </div>
      <FooterSimple links={links} />
    </>
  );
}

export default App;
