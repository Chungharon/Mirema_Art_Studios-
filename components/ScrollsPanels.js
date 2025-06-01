'use client'
import React from 'react';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function ScrollsPanels() {

  gsap.registerPlugin(ScrollTrigger);           

  useEffect(() => {
    const dom = {
      columns: document.querySelectorAll('.selection-col .column-wrap'),
      items: document.querySelectorAll('.selection-col .col-item'),
      columnWraps: document.querySelectorAll('.selection-col .column-wrap'),
    };

    let lenis;

    const SmoothScroll = () => {
      lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
      });

      const ScrollFn = (time) => {
        lenis.raf(time);

        requestAnimationFrame(ScrollFn);
      };

      requestAnimationFrame(ScrollFn);
    };
    const ScrollAni = () => {
      gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: true,
        },
      })
      .addLabel("start", 0)
      .to(dom.columns, {
        startAt: { scale: 1.2 },
        ease: 'none',
        scale: 1,
      }, "start")
      .to(dom.items, {
        scrollTrigger: {
          start: 0,
          end: "top top",
          scrub: true,
        },

        ease: "power1.inOut",
        startAt: {
          opacity: 0,
          filter: "brightness(300%)"
        },
        opacity: 1,
        filter: "brightness(100%)",
        yoyo: true,
        repeat: 1,
      })
      .to(dom.columnWraps, {
        ease: "none",
        yPercent: (pos) => pos * -15
      },
      "start"
    )
    };

    SmoothScroll();
    ScrollAni();
    ScrollTrigger.refresh();
  });

  return (
    <div>
      {/* Section 1 */}
      <section className="w-full h-screen bg-[#0f0e0e] flex flex-col items-center justify-center text-center pt-32 pb-8 mb-[250vh]">
  <h2 className="text-white text-5xl font-bold leading-none mb-4">
    COMING <br /> SOON
  </h2>
  <p className="text-white m-0 max-w-[400px]">
    BUILT USING NEXT.JS AND GSAP
  </p>
  <p className="m-0 max-w-[400px] mt-auto text-red-500">
    <span>Scroll</span>
  </p>
</section>


      {/* Section 2 */}
      <section className="section-col leading-none top-0 min-h-screen bg-[#0f0e0e] fixed left-0 right-0 bottom-0 z-[-1] w-full h-screen">
        <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center">
          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize5.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize7.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize11.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize10.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize9.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize14.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize13.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/Originalig.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize3.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize2.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/4.6.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsizenew.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize88.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/Originalig.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/post7.jpg" />
              </div>
            </div>
          </div>

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize11.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize14.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize10.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize13.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize9.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize7.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/post7.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize4.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize3.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize2.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/4.6.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsizenew.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize88.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/Originalig.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igstasize5.jpg" />
              </div>
            </div>
          </div>

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize9.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize10.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize11.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize14.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize13.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize7.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize5.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/4.6.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize3.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize2.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize4.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsizenew.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize88.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/Originalig.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/post7.jpg" />
              </div>
            </div>
          </div>

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize13.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize14.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize11.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize10.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize9.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize7.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize5.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/Originalig.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize3.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsize2.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/4.6.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/igsizenew.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize88.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/instasize4.jpg" />
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img w-full h-full object-cover" src="/images/post7.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty Section Placeholder */}
      <section></section>
    </div>
  );
}

export default ScrollsPanels;
