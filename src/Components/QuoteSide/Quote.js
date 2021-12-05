import React, { useEffect } from "react";
import {
  AuthorbarMobile,
  AuthorMobile,
  Quote,
  Quotebar,
  Quotebox,
  QuoteL,
  QuoteR,
} from "../applicationElements.js";

import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const QuoteComponent = ({ data, random }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Quotebar>
        <Quotebox>
          <QuoteL />
          <QuoteR />
          <Quote>
            {data ? (
              <Typewriter
                options={{
                  strings: [`${data[random].quote}`],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                  delay: 50,
                }}
              />
            ) : (
              <Typewriter
                options={{
                  strings: [`Press the button to get your own quote!`],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                  delay: 50,
                }}
              />
            )}
          </Quote>
        </Quotebox>
        <AuthorbarMobile data-aos="fade-up" data-aos-delay="100">
          {data ? (
            <AuthorMobile>{data[random].author}</AuthorMobile>
          ) : (
            <AuthorMobile>Author</AuthorMobile>
          )}
        </AuthorbarMobile>
      </Quotebar>
    </>
  );
}

export default QuoteComponent;
