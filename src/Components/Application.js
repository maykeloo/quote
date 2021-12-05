/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import {
  Author,
  Authorbar,
  Content,
  Contentbar,
  ContentBox,
  RightSide,
} from "./applicationElements";

import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import QuoteComponent from "./QuoteSide/Quote";
import ButtonbarComponent from "./Buttonbar/ButtonbarComponent";

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
              <QuoteComponent data={data} random={random} />
            </Contentbar>
            <ButtonbarComponent
              setNewData={setNewData}
              data={data}
              getQuote={getQuote}
              radnom={random}
            />
          </RightSide>
        </ContentBox>
      </Content>
    </>
  );
};

export default Application;
