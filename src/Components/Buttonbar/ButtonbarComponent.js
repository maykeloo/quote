/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import {
  BackIcon,
  Bar1,
  Bar2,
  Buttonbar,
  Copy,
  LinkTo,
  PrevButton,
  PrevbuttonBox,
  RollbuttonBox,
} from "../applicationElements";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ButtonbarComponent = ({ getQuote, setNewData, data, random }) => {
  return (
    <>
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
                data ? `${data[random].author} "${data[random].quote}"` : null
              }
            >
              <Copy>Copy</Copy>
            </CopyToClipboard>
          </Bar2>
        </PrevbuttonBox>
      </Buttonbar>
    </>
  );
};

export default ButtonbarComponent;
