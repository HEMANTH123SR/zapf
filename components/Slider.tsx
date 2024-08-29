'use client'
import React from "react";
import { useState } from "react";
import { newAgeFont } from "@/lib/fonts/font";
import { GetStartedBtn } from "@/components/GetStartedBtn";



export const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "We do things a bit differently",
      description: "Our goal is to be someone we’d want to do business with.",
      buttonText: "Get a free quote",
      buttonLink: "/quote",
      secondaryButtonText: "Book an intro call",
      secondaryButtonLink: "https://calendly.com/andyhooke/quick-chat",
    },
    {
      title: "Transparent pricing",
      description: "No hiding prices behind a call. Just fill out our quote form and get started today!",
      buttonText: "Get a free quote",
      buttonLink: "/quote",
      secondaryButtonText: "Book an intro call",
      secondaryButtonLink: "https://calendly.com/andyhooke/quick-chat",
    },
    // Add more slides as needed
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
<div className="padding-section-large "
style={{backgroundImage:"url(/top.svg)"}}
>
  
  <div 
    className="w-layout-grid solutions_component" 
    style={{
      transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
      opacity: 1,
    }}
  >
    <div className="solutions_content-left">
      <div className="eye-brow">Solution</div>
      <div className="spacer-xsmall"></div>
      <h2 className="heading-style-h2">
        We do things a<br /> bit differently
      </h2>
      <div className="spacer-small"></div>
      <p className="text-size-medium">
        Our goal is to be someone we’d want to do business with.
      </p>
      <div className="spacer-medium"></div>
      <div className="button-group">
        <a
          href="/quote"
          className="button-primary w-inline-block"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div className="div-block-2">
            <div 
              className="button-dot" 
              style={{ width: "0.5rem", height: "0.5rem" }}
            >
              <div className="button-icon-wrapper">
                <div 
                  className="button-icon is-1 w-embed"
                  style={{
                    opacity: 0,
                    transform: "translate3d(-30px, -4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer" style={{ width: "0rem", height: "0px" }}></div>
          <div className="text-size-regular">Get a free quote</div>
        </a>
      
      </div>
    </div>
    <div id="w-node-_815ef432-bdd1-1797-24e8-d2b6c4da65b5-ba68efbe" className="solutions_content-right">
      <div className="solutions_content-item">
        <div className="div-block-3">
          <div className="pricing-graphic_component">
            <div 
              className="pricing-graphic_price"
              style={{ filter: "blur(24.1043px)", willChange: "filter" }}
            >
              $6500
            </div>
          </div>
        </div>
        <div className="spacer-small"></div>
        <div className="solutions_card-content">
          <h5 className="heading-style-h4">Transparent pricing</h5>
          <div className="spacer-tiny"></div>
          <p>
            No hiding prices behind a call. No creeping costs. Just fill out{" "}
            <a href="/quote" className="link">our quote form</a> and get started today!
          </p>
        </div>
      </div>
      <div className="solutions_content-item">
        <img 
          src="https://cdn.prod.website-files.com/668ebb5fda4eee91ba68ef54/66958e8824351aef5530166a_Frame%2029.svg"
          loading="lazy"
          alt=""
          className="image display-none"
        />
        <div className="process-graphic_component">
          <div className="process-graphic_top">
            <div className="process_graphic-top-left">
              <div className="process_title">Discovery</div>
              <div className="process_label">(1 week)</div>
            </div>
            <div className="process_graphic-top-right"></div>
          </div>
          <div className="process-graphic_middle">
            <div className="process_graphic-middle-left"></div>
            <div className="process-graphic_middle-middle">
              <div 
                className="process_graphic-middle-middle-inner"
                style={{ width: "60%", willChange: "width, height" }}
              >
                <div className="process_title">Design</div>
                <div className="process_label">(2 weeks)</div>
              </div>
            </div>
            <div className="process_graphic-middle-right"></div>
          </div>
          <div className="process-graphic_bottom">
            <div className="process_graphic-top-right"></div>
            <div className="process_graphic-bottom-right">
              <div className="process_title">Development</div>
              <div className="process_label is-grey">(1-2 weeks)</div>
            </div>
          </div>
        </div>
        <div className="spacer-small"></div>
        <div className="solutions_card-content">
          <h5 className="heading-style-h4">Clear process &amp; timelines</h5>
          <div className="spacer-tiny"></div>
          <p>
            With updates every few days, and clear deadlines, you’ll know what’s
            going on at every stage of the project.
          </p>
        </div>
      </div>
      <div className="solutions_content-item">
        <div className="modular-graphic_component">
          <div className="modular-graphic_track">
            <div className="modular-graphic_top"></div>
            <div className="modular-graphic_middle">
              <div 
                className="modular-graphic_mockup"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="div-block-5">
                  <div className="div-block-6"></div>
                  <div className="div-block-7"></div>
                  <div className="div-block-8"></div>
                </div>
                <div className="div-block-4"></div>
              </div>
            </div>
            <div className="modular-graphic_bottom"></div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/668ebb5fda4eee91ba68ef54/66981ff4c148acc4821ce8b1_Arrow%202.svg"
            loading="lazy"
            alt=""
            className="image-3"
          />
        </div>
        <div className="spacer-small"></div>
        <div className="solutions_card-content">
          <h5 className="heading-style-h4">Modular by design</h5>
          <div className="spacer-tiny"></div>
          <p>
            Each page we design has re-usable components, which can be easily combined to create new pages.
          </p>
        </div>
      </div>
      <div className="solutions_content-item">
        <div className="support-graphic_component">
          <div 
            className="support_message-1"
            style={{
              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(2deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            Hey! Can you add this new page?
          </div>
          <div 
            className="support_message-2"
            style={{
              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-1.4deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            Sure thing! I’ll be able to send you a preview in 2 days!
          </div>
        </div>
        <div className="spacer-small"></div>
        <div className="solutions_card-content">
          <h5 className="heading-style-h4">Continuous support</h5>
          <div className="spacer-tiny"></div>
          <p>
            Need a new page or want to make a change? Just send us a quick
            message and we’ll take care of it!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};



