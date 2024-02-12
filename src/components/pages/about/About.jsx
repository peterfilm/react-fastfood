import "./about.scss";
import aboutImg from "../../../assets/about.jpeg";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
    <meta
        name="description"
        content={`About Fast Food Store - Address, contacts and more`}
        />
    <meta name="keywords" content="Fast Food, Food store, address, contacts"></meta>
    <title>FAST FOOD - About Fast Food Store</title>
    </Helmet>
      <div className="about">
        <div className="container">
          <div className="about__wrapper">
            <h2 className="title title__black">About</h2>
            <div className="about__imgtxt">
              <img src={aboutImg} alt="About Img" />
              <div className="about__text">
                Fast Food Delivery is your express ticket to culinary convenience. We bring the world of flavors to your doorstep, ensuring a swift
                and satisfying dining experience. Our extensive menu caters to every craving, from mouthwatering burgers to fresh salads, delivered
                hot and delicious.
                <br />
                <br />
                With our user-friendly app, ordering is a breeze. Simply browse through our diverse offerings, place your order, and let us handle the
                rest. Our skilled team of delivery professionals ensures that your meal arrives promptly, preserving its taste and quality.
                <br />
                <br />
                At Fast Food Delivery, we pride ourselves on not just delivering meals but delivering moments of delight. Elevate your dining
                experience with us – where speed meets culinary excellence. Your satisfaction is our priority, making us the go-to choice for those
                who crave convenience without compromising on taste.
              </div>
            </div>
            <h2 className="title title__black">Vizit us!</h2>
            <iframe
              className="about__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12104.495135777042!2d-73.95316652389526!3d40.67124146948272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1706037092969!5m2!1sru!2sru"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
