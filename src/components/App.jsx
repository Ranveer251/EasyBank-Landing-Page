import React from "react";
import Header from "./header";
import IntroText from "./IntroContent";
import Card from "./Card";
import Article from "./Article";
import Footer from "./Footer";
/* images */
import IntroBg from "../images/bg-intro-desktop";
import IntroBgMo from "../images/bg-intro-mobile";
import PhoneImages from "../images/image-mockups.png";
import OnlineIcon from "../images/icon-online";
import Budgeting from "../images/icon-budgeting";
import OnBoarding from "../images/icon-onboarding";
import IconApi from "../images/icon-api";
import currency from "../images/image-currency.jpg";
import confetti from "../images/image-confetti.jpg";
import plane from "../images/image-plane.jpg";
import restaurant from "../images/image-restaurant.jpg";

function App() {
  return (
    <div>
      <Header />
      <section id="Intro">
        <div className="intro-img"><div className="hidden"><IntroBg /></div><div className="mobileBg"><IntroBgMo /></div><img src={PhoneImages} alt="Mockup Images" /></div>
        <div className="intro-info"><IntroText /></div>
      </section>
      <section id="features">
        <div>
        {/* <IntroBg /> */}
          <h1>Why choose Easybank?</h1> 
          <p className="why-easybank"> 
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
        <div>
          <Card 
            image={OnlineIcon}
            heading="Online Banking"
            content="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Card 
            image={Budgeting}
            heading="Simple Budgeting"
            content="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          />
          <Card 
            image={OnBoarding}
            heading="Fast Onboarding"
            content="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <Card 
            image={IconApi}
            heading="Open API"
            content="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </section>
      <section id="articles">
        <div>
          <h1>Latest Articles</h1>
          <div className="articles">
            <Article 
              imgSrc={currency}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
            />
            <Article 
              imgSrc={restaurant}
              author="By Wilson Hutton"
              title="Treat yourself without worrying about money"
              content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you.."
            />
            <Article 
              imgSrc={plane}
              author="By Wilson Hutton"
              title="Take your Easybank card wherever you go"
              content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
            />
            <Article 
              imgSrc={confetti}
              author="By Claire Robinson"
              title="Our invite-only Beta accounts are now live!"
              content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
            />
          </div>
        </div>
      </section>
      <section id="Contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
