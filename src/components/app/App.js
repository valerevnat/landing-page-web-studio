import AboutUs from "../aboutUs/AboutUs";
import CompanyServices from "../companyServices/СompanyServices";
import FirstScreen from "../firstScreen/FirstScreen";
import Mailings from "../forms/mailings/Mailings";
import OurProjects from "../ourProjects/OurProjects";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <>
      <FirstScreen />
      <CompanyServices />
      <AboutUs />
      <OurProjects />
      <Mailings />
      <Footer />
    </>
  )
}

export default App;