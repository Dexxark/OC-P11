import React from 'react';
import Navigation from '../components/Navigation';
import BannerHome from '../components/BannerHome';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import iconChat from '../images/icon-chat.webp';
import iconMoney from '../images/icon-money.webp';
import iconSecurity from '../images/icon-security.webp';

const Home = () => {
  return (
    <div>
      <Navigation/>
      <main>
        <BannerHome/>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            imgSrc={iconChat}
            imgAlt="Chat icon"
          />
          <Feature
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
            imgSrc={iconMoney}
            imgAlt="Money icon"
          />
          <Feature
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
            imgSrc={iconSecurity}
            imgAlt="Security icon"
          />
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;