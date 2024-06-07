import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Counter from "./counter";
import SectionStarter from "./sectionstarter";
import Slider from "react-infinite-logo-slider";
import { useRouter } from "next/router";
import { Suspense } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

export default function CaseSwiper() {
  const swiperRef = useRef<SwiperRef>(null);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);

  const casesData = [
    {
      media: "/cases/castillo/castillo.gif",
      brand: "/cases/castillo//castillo.png",
      description:
        "Vi har vækstet Callisto Jewellery kraftigt siden vi startede samarbejdet for 15 måneder siden. Vi står for hele deres digitale kunderejse i både Danmark og Sverige.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={4322} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[30px]">
              <Counter endValue={2.4} />
            </span>
            x
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            POAS
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/skandi/skandi.gif",
      brand: "/cases/skandi//skandi.png",
      description:
        "En af de førende webshops inden for mode og møbler i Norge. Vi vækstede SKANDI’s profit med 74% gennem annoncering på Meta og datadrevet content produktion.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={74} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            Profit
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={21} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CPA
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/ankerstjerne/ankerstjerne.gif",
      brand: "/cases/ankerstjerne/ankerstjerne.png",
      description:
        "Vi har hjulpet det prisvindende brand Dr.Ankerstjerne til at blive en af de hurtigst voksende webshops i Skandinavien. Og taget dem til nye markeder.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={8820} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={31} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/pinterest.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/marina/marina.gif",
      brand: "/cases/marina/marina.png",
      description:
        "Kåret som det bedste økologiske hudplejemærke i Skandinavien og befinder sig på 6 markeder. Vi står for hele deres digitale kunderejse i et større udvalg af markeder.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[60px] mr-[0px] mr-[10px]">
              <Counter endValue={316} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={52} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/adwords.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/gelblast/gelblast.gif",
      brand: "/cases/gelblast/gelblast.png",
      description:
        "Skandinaviens største webshop inden for Gelblasters. Vi har været med fra start og vækstet dem +520% ved at håndtere marketing på tværs af hele kunde rejsen.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px] mr-[10px]">
              <Counter endValue={520} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={64} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/castillo/castillo.gif",
      brand: "/cases/castillo//castillo.png",
      description:
        "Vi har vækstet Callisto Jewellery kraftigt siden vi startede samarbejdet for 15 måneder siden. Vi står for hele deres digitale kunderejse i både Danmark og Sverige.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={4322} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[30px]">
              <Counter endValue={2.4} />
            </span>
            x
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            POAS
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/skandi/skandi.gif",
      brand: "/cases/skandi//skandi.png",
      description:
        "En af de førende webshops inden for mode og møbler i Norge. Vi vækstede SKANDI’s profit med 74% gennem annoncering på Meta og datadrevet content produktion.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={74} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            Profit
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={21} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CPA
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/ankerstjerne/ankerstjerne.gif",
      brand: "/cases/ankerstjerne/ankerstjerne.png",
      description:
        "Vi har hjulpet det prisvindende brand Dr.Ankerstjerne til at blive en af de hurtigst voksende webshops i Skandinavien. Og taget dem til nye markeder.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={8820} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={31} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/pinterest.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/marina/marina.gif",
      brand: "/cases/marina/marina.png",
      description:
        "Kåret som det bedste økologiske hudplejemærke i Skandinavien og befinder sig på 6 markeder. Vi står for hele deres digitale kunderejse i et større udvalg af markeder.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px] mr-[10px]">
              <Counter endValue={316} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={52} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/adwords.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/gelblast/gelblast.gif",
      brand: "/cases/gelblast/gelblast.png",
      description:
        "Skandinaviens største webshop inden for Gelblasters. Vi har været med fra start og vækstet dem +520% ved at håndtere marketing på tværs af hele kunde rejsen.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px] mr-[10px]">
              <Counter endValue={520} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={64} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
  ];

  const englishCaseData = [
    {
      media: "/cases/castillo/castillo.gif",
      brand: "/cases/castillo//castillo.png",
      description:
        "We have significantly grown Callisto Jewellery since we started working together 15 months ago. We manage their entire digital customer journey in both Denmark and Sweden.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={4322} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[30px]">
              <Counter endValue={2.4} />
            </span>
            x
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            POAS
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/skandi/skandi.gif",
      brand: "/cases/skandi//skandi.png",
      description:
        "One of the leading fashion and furniture webshops in Norway. We grew SKANDI's profits by 74% through Meta advertising and data-driven content production.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={74} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            Profit
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={21} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CPA
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/ankerstjerne/ankerstjerne.gif",
      brand: "/cases/ankerstjerne/ankerstjerne.png",
      description:
        "We've helped the award-winning brand Dr. Ankerstjerne become one of the fastest-growing e-commerce ventures in Scandinavia and taken them to new markets.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={8820} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={31} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/pinterest.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/marina/marina.gif",
      brand: "/cases/marina/marina.png",
      description:
        "Awarded as the best organic skincare brand in Scandinavia and currently present in six markets. We oversee their complete digital customer journey across multiple markets.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={316} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={52} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/adwords.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/gelblast/gelblast.gif",
      brand: "/cases/gelblast/gelblast.png",
      description:
        "Scandinavia's largest webshop for Gelblasters. We've been there from the start and scaled them +520% by managing marketing across the entire customer journey.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={520} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={64} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/castillo/castillo.gif",
      brand: "/cases/castillo//castillo.png",
      description:
        "We have significantly grown Callisto Jewellery since we started working together 15 months ago. We manage their entire digital customer journey in both Denmark and Sweden.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={4322} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[30px]">
              <Counter endValue={2.4} />
            </span>
            x
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            POAS
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/skandi/skandi.gif",
      brand: "/cases/skandi//skandi.png",
      description:
        "One of the leading fashion and furniture webshops in Norway. We grew SKANDI's profits by 74% through Meta advertising and data-driven content production.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={74} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            Profit
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={21} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CPA
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/ankerstjerne/ankerstjerne.gif",
      brand: "/cases/ankerstjerne/ankerstjerne.png",
      description:
        "We've helped the award-winning brand Dr. Ankerstjerne become one of the fastest-growing e-commerce ventures in Scandinavia and taken them to new markets.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[100px]">
              <Counter endValue={8820} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={31} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/pinterest.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/marina/marina.gif",
      brand: "/cases/marina/marina.png",
      description:
        "Awarded as the best organic skincare brand in Scandinavia and currently present in six markets. We oversee their complete digital customer journey across multiple markets.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={316} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={52} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/adwords.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
    {
      media: "/cases/gelblast/gelblast.gif",
      brand: "/cases/gelblast/gelblast.png",
      description:
        "Scandinavia's largest webshop for Gelblasters. We've been there from the start and scaled them +520% by managing marketing across the entire customer journey.",
      results: [
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            +
            <span className="w-[50px]">
              <Counter endValue={520} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            {currentPath === "/en" ? "Revenue" : "Omsætning"}
          </p>
        </div>,
        <div key={1} className="flex flex-col items-center text-center">
          <h1 className="mb-[4px] font-[600] text-main flex">
            -
            <span className="w-[50px]">
              <Counter endValue={64} />
            </span>
            %
          </h1>
          <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
            CAC
          </p>
        </div>,
      ],
      channels: [
        <div key={1} className="flex items-center justify-center">
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
            <img className="w-[30px]" src="/metalogo.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px]" src="/tiktok.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img
              className="w-[30px] h-[30px] object-cover"
              src="/adwords.png"
            ></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
          </div>
          <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
            <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
          </div>
        </div>,
      ],
    },
  ];

  function onArrowClick(direction: "prev" | "next") {
    if (swiperRef.current) {
      if (direction == "prev") {
        if (swiperRef.current.swiper.isBeginning) {
          swiperRef.current.swiper.slideTo(
            swiperRef.current.swiper.slides.length - 1
          );
          return;
        }
        swiperRef.current.swiper.slidePrev();
      } else {
        if (swiperRef.current.swiper.isEnd) {
          swiperRef.current.swiper.slideTo(0);
          return;
        }
        swiperRef.current.swiper.slideNext();
      }
    }
  }

  return (
    <>
      <section className="bg-[#f7f7fc] py-[100px]">
        <div className="w-[90%] mx-auto max-w-main">
          <div className="mb-[60px] text-center ctaOne:text-left">
            <SectionStarter
              section={currentPath === "/en" ? "cases" : "samarbejder"}
            />
            <h1 className="text-sectionheading font-[600] text-main ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
              {currentPath === "/en" ? "A selection of" : "Et udvalg af"}{" "}
              <span className="text-[#0071e3]">
                {currentPath === "/en" ? "success cases" : "succes cases"}
              </span>{" "}
            </h1>
            <p className="text-description font-[500] text-gray-600">
              {currentPath === "/en"
                ? "We have created some of the fastest-growing e-commerce brands in Europe"
                : " Vi har skabt nogle af de hurtigst voksende e-commerce brands i Europa"}
            </p>
          </div>
          <div className="flex items-center justify-end gap-2 mb-4">
            <div
              onClick={() => onArrowClick("prev")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowLeft size={20} />
            </div>
            <div
              onClick={() => onArrowClick("next")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowRight size={20} />
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
            spaceBetween={20}
            className="mySwiper"
          >
            {currentPath === "/en"
              ? englishCaseData.map((v, index) => (
                  <SwiperSlide key={index}>
                    <CaseCard object={v} background={"/worst.mp4"} />
                  </SwiperSlide>
                ))
              : casesData.map((v, index) => (
                  <SwiperSlide key={index}>
                    <CaseCard object={v} background={"/worst.mp4"} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div>
      <div className="relative p-[10px]">

        <img src={object.media}></img>


        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%", // Adjust the height of the gradient overlay as needed
            background:
              "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1))",
            pointerEvents: "none",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
        <div className="absolute top-[20px] flex justify-center items-center w-full">
          <div className="bg-white mt-[10px] p-[20px] py-[10px] h-[70px] rounded-main flex flex-col items-center justify-center">
            <img className="w-[70px]" src={object.brand}></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="bg-white">
          <div className="w-[80%] mx-auto flex text-white justify-center gap-[40px] text-[30px]">
            {object.results.map((v: any) => v)}
          </div>
        </div>
        <div className="p-[20px] bg-white py-[50px] pt-[24px] pb-[0px]">
          <p className="text-main w-[90%] mx-auto mb-[20px] font-[500] text-center">
            {object.description}
          </p>
        </div>
        <div className="bg-white rounded-b-main py-[50px] pt-[24px] pb-[0px]">
          {object.channels}
        </div>
      </div>
    </div>
  );
};
