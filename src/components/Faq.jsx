import React from "react";
import { Collapse } from "antd";
import { faqData } from "../constants/faqData";

export const Faq = () => {
  const items = faqData.map((faq) => ({
    key: faq.key,
    label: <span className="font-bold">{faq.question}</span>,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div className="relative w-full min-h-[50dvh] m-auto bg-cover flex flex-col justify-center items-center select-none">
      <div
        style={{
          backgroundColor: "#ffffff",
          opacity: "0.4",
          backgroundImage:
            "radial-gradient(#000000 0.5px, transparent 0.5px), radial-gradient(#000000 0.5px, #ffffff 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0,10px 10px",
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="relative w-full flex flex-col justify-center items-center p-8 z-10">
        <p className="feature-tag">FAQ</p>
        <h2 className="w-full text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-8 text-center">
          Your frequently asked questions.
        </h2>
        <div className="w-full md:w-3/4 flex flex-col justify-center items-center p-4">
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            bordered={false}
            className="w-full bg-transparent"
            expandIconPosition="end"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
