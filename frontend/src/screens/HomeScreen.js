import Hero from '../components/Hero/Hero';
import SectionBisect from '../components/SectionBisect/SectionBisect';
import SectionFull from '../components/SectionFull/SectionFull';
import SectionCarousel from '../components/SectionCarousel/SectionCarousel';
import Footer from '../components/Footer/Footer';

const HomeScreen = () => {
  const sectionTitle1 = 'Lorem ipsum';
  const sectionTitle2 = 'Lorem ipsum dolor sit amet';
  const sectionText1 = `Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat.`;
  const sectionText2 = `Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.`;
  return (
    <>
      <Hero imagePath='/images/hero.jpg' />
      <SectionBisect
        bodyText={sectionText1}
        imagePath='/images/img-1.jpg'
        title={sectionTitle1}
      />
      <SectionFull imagePath='/images/banner-1.jpg' title={sectionTitle1} />
      <SectionBisect bodyText={sectionText2} icons title={sectionTitle2} />
      <SectionFull
        alt
        bodyText={sectionText2}
        imagePath='/images/banner-2.jpg'
        title={sectionTitle1}
      />
      <SectionCarousel />
      <Footer />
    </>
  );
};

export default HomeScreen;
