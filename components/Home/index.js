import Team from './Team.js';
import Navbar from '../Reusable/NavBar.js';

import CircleArrow from '../Reusable/CircleArrow';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import './styles.scss';
import SayHello from '../Reusable/SayHello';
import Logo from '../Reusable/Logo';

export default function HomePage() {
  return (
    <main className="main">
      <Logo />
      <SayHello />
      <Navbar />

      <AboutUs />
      <Cases />
      <Methods />
      <Services />
      <Team />
      <Contact />
    </main>
  );
}

function AboutUs() {
  return <section></section>;
}

function Cases() {
  return <section></section>;
}

function Methods() {
  return <section></section>;
}

function Services() {
  return <section></section>;
}

function Contact() {
  return (
    <section className="contact">
      <article>
        <div className="contact__div">
          <aside>
            <h3>
              +380673177734 <br />
              info@beans.agency <br />
              Or
            </h3>

            <h3 className="brief">
              <span>here is a brief</span> <CircleArrow />
            </h3>
          </aside>
        </div>

        <div className="contact__div">
          <aside>
            <h4>
              Zavodska, 31 <br /> (2nd floor), Lviv
            </h4>

            <p>Follow Us</p>

            <div className="social__div">
              <FaFacebookF />
              <FaInstagram />
            </div>
          </aside>
        </div>
      </article>

      <article className="article__bottom">
        <p>
          <span>All rights reserved 2021 © Beans Agency</span>
        </p>
        <p className="last__paragraph">
          <span>Made by </span>dops.digital
        </p>
      </article>
    </section>
  );
}
