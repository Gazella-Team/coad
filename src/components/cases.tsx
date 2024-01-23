import { useState } from "react";
import Counter from "./counter";
import SectionStarter from "./sectionstarter";
import Slider from "react-infinite-logo-slider";

const casesData = [
  {
    media: "bg-[url(/media.jpg)]",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
];

const expandedCasesData = [
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "bg-[url(/media.jpg)]",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
];

export default function Cases() {
  const [casesExpanded, setCasesExpanded] = useState(false);
  return (
    <section className="py-[150px] pt-[160px] z-[2] bg-[#f7f7fc]">
      <div className="w-[90%] mx-auto text-center max-w-main">
        <div className="mb-[60px]">
          <SectionStarter section="resultater" />
          <h1 className="text-sectionheading font-[600] text-main">
            Et udvalg af <span className="text-[#0071e3]">succes cases</span>{" "}
          </h1>
          <p className="text-description text-gray-600 font-[500]">
            Vi har skabt nogle af de hurtigst voksende e-commerce brands i
            norden
          </p>
        </div>
        <Slider
          width="500px"
          duration={30}
          pauseOnHover={true}
          blurBorders={true}
          blurBoderColor={"#f7f7fc"}
        >
          {casesData.map((v) => (
            <Slider.Slide key={v}>
              <CaseCard object={v} background={"/worst.mp4"} />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div className="mr-[50px]">
      <div className="relative">
        <video
          className="pointer-events-none rounded-t-main bg-[linear-gradient(rgba(5,29,64,0),rgba(5,29,64,1))]"
          autoPlay
          muted
          loop
          playsInline
          width="600"
        >
          <source src="/castillo.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%", // Adjust the height of the gradient overlay as needed
            background:
              "linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 1))",
            pointerEvents: "none",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
        <div className="absolute top-[20px] flex justify-center items-center w-full">
          <div className="bg-white mt-[10px] p-[20px] py-[10px] rounded-main">
            <img className="w-[70px]" src="/elgiganten.png"></img>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-[80%] mx-auto flex text-white justify-between text-[30px]">
          <div className="flex flex-col items-center">
            <h1 className="mb-[4px] font-[600] text-main">
              +
              <span>
                <Counter endValue={100} />
              </span>
              %
            </h1>
            <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[70px]">
              roi
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-[4px] font-[600] text-main">
              +
              <span>
                <Counter endValue={100} />
              </span>
              %
            </h1>
            <p className="text-[16px] font-[500] bg-[#0071e3] rounded-[100px] w-[70px]">
              leads
            </p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <h1 className="mb-[4px] font-[600] text-main">
              +
              <span>
                <Counter endValue={100} />
              </span>
              %
            </h1>
            <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[70px]">
              profit
            </p>
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-white rounded-b-main py-[50px] pt-[24px] pb-[0px]">
        <p className="text-main w-[80%] mx-auto mb-[20px] font-[500]">
          Trendsales er Danmarks største og bedste bedømte secondhand
          markedsplads. Vi løftede deres digitale markedsføring med 307% gennem
          Meta, TikTok, Snapchat og content produktion.
        </p>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/tiktok.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
      </div>
    </div>
  );
};
