/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import {
  Author,
  Authorbar,
  BackIcon,
  Bar1,
  Bar2,
  Buttonbar,
  Content,
  Contentbar,
  ContentBox,
  LinkTo,
  PrevButton,
  PrevbuttonBox,
  Quote,
  Quotebar,
  Quotebox,
  QuoteL,
  QuoteR,
  RightSide,
  RollbuttonBox,
} from "./applicationElements";

import axios from "axios";
import Typewriter from "typewriter-effect";

const Application = () => {
  const [data, setData] = useState("");
  const [lastData, setLastData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [random, setRandom] = useState("");

  const getQuote = () => {
    axios(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    setRandom(Math.floor(Math.random() * 102));
    setLastData(random);
  };

  const setNewData = () => {
    if (lastData) {
      setRandom(lastData);
    }
  };

  return (
    <>
      <Content>
        <ContentBox>
          <Authorbar>
            {data ? (
              <Author>{data[random].author}</Author>
            ) : (
              <Author>Author</Author>
            )}
          </Authorbar>
          <RightSide>
            <Contentbar>
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
              </Quotebar>
            </Contentbar>
            <Buttonbar>
              <PrevbuttonBox>
                <Bar1>
                  <PrevButton onClick={setNewData}>
                    <BackIcon />
                    <span style={{ fontWeight: "900" }}>Previous quote</span>
                  </PrevButton>
                </Bar1>
                <Bar2>
                  <LinkTo
                    href={`https://www.google.com/search?q=${
                      data ? data[random].author : "Click roll first!"
                    }`}
                  >
                    About author of quote
                  </LinkTo>
                </Bar2>
              </PrevbuttonBox>
              <RollbuttonBox>
                <button
                  class="button-82-pushable"
                  role="button"
                  onClick={getQuote}
                >
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span
                    class="button-82-front text"
                    style={{ fontSize: "2vmax", fontWeight: "900" }}
                  >
                    Draw a quote
                  </span>
                </button>
              </RollbuttonBox>
            </Buttonbar>
          </RightSide>
        </ContentBox>
      </Content>
    </>
  );
};

export default Application;
