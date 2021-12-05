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
  Copy,
  LinkTo,
  PrevButton,
  PrevbuttonBox,
  RightSide,
  RollbuttonBox,
} from "./applicationElements";

import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Aos from "aos";
import "aos/dist/aos.css";
import QuoteComponent from "./QuoteSide/Quote";

const Application = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [data, setData] = useState("");
  const [lastData, setLastData] = useState("");
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
          <Authorbar data-aos="fade-up" data-aos-delay="100">
            {data ? (
              <Author>{data[random].author}</Author>
            ) : (
              <Author>Author</Author>
            )}
          </Authorbar>
          <RightSide>
            <Contentbar>
              <QuoteComponent data={data} random={random}/>
            </Contentbar>
            <Buttonbar>
              <RollbuttonBox data-aos="fade-left" data-aos-delay="700">
                <button
                  className="button-82-pushable"
                  role="button"
                  onClick={getQuote}
                >
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span
                    className="button-82-front text"
                    style={{ fontSize: "2vmax", fontWeight: "900" }}
                  >
                    Draw a quote
                  </span>
                </button>
              </RollbuttonBox>
              <PrevbuttonBox data-aos="fade-left" data-aos-delay="300">
                <Bar1>
                  <PrevButton onClick={setNewData}>
                    <BackIcon />
                    <span style={{ fontWeight: "900" }}>Previous quote</span>
                  </PrevButton>
                </Bar1>
                <Bar2>
                  <LinkTo
                    target="_blank"
                    href={`https://www.google.com/search?q=${
                      data ? data[random].author : "Click roll first!"
                    }`}
                  >
                    About author of quote
                  </LinkTo>
                  <CopyToClipboard
                    text={
                      data
                        ? `${data[random].author} "${data[random].quote}"`
                        : null
                    }
                  >
                    <Copy>Copy</Copy>
                  </CopyToClipboard>
                </Bar2>
              </PrevbuttonBox>
            </Buttonbar>
          </RightSide>
        </ContentBox>
      </Content>
    </>
  );
};

export default Application;
