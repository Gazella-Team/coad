import { useState } from "react";
import { Reveal } from "./Animations/Reveal";
import Counter from "./counter";

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
    <section className="py-[100px] pt-[160px] z-[2] bg-white mt-[-400px] relative">
      <div className="w-[90%] mx-auto text-center max-w-main">
        <div className="mb-[60px]">
          <h1 className="text-sectionheading font-[500] text-main">
            Cases vi er{" "}
            <span className="bg-gradient-to-r from-[#526bb9] via-[#233265] via-[#526bb9] to-[#526bb9] text-transparent bg-clip-text">
              stolte af
            </span>{" "}
          </h1>
          <p className="text-description text-gray-600">
            We&apos;ve analyzed the data and have compelling statistics to
            share.
          </p>
        </div>

        {casesExpanded ? (
          <div className="grid grid-cols-3 gap-[30px] mb-[80px]">
            {expandedCasesData.map((v: any) => (
              <CaseCard background={v.media} key={v} object={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[30px] mb-[80px]">
            {casesData.map((v: any) => (
              <CaseCard background={v.media} key={v} object={v} />
            ))}
          </div>
        )}

        <button
          onClick={() => setCasesExpanded(!casesExpanded)}
          className="border-[1px] p-[16px] px-[40px] rounded-[100px] cursor-pointer"
        >
          {casesExpanded ? "Luk" : "Indlæs flere"}
        </button>
      </div>
    </section>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div className="shadow-lg rounded-main">
      <div className="relative">
        <video
          className="pointer-events-none rounded-t-main bg-[linear-gradient(rgba(5,29,64,0),rgba(5,29,64,1))]"
          autoPlay
          muted
          loop
          playsInline
          width="600"
          loading="lazy"
        >
          <source src="/worst.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%", // Adjust the height of the gradient overlay as needed
            background: "linear-gradient(rgba(5,29,64,0.4),rgba(5,29,64,1))",
            pointerEvents: "none",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </div>

      <div className="bg-[rgba(5,29,64,1)]">
        <div className="w-[80%] mx-auto flex text-white justify-between text-[30px]">
          <div className="flex flex-col items-center">
            <h1>
              +
              <span>
                <Counter endValue={100} />
              </span>
              %
            </h1>
            <p className="text-[16px] bg-gradient-to-r from-[#526bb9] via-[#233265] to-[#526bb9] rounded-[100px] w-[70px]">
              roas
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1>+1200+</h1>
            <p className="text-[16px] bg-gradient-to-r from-[#526bb9] via-[#233265] to-[#526bb9] rounded-[100px] w-[70px]">
              leads
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1>+45%</h1>
            <p className="text-[16px] bg-gradient-to-r from-[#526bb9] via-[#233265] to-[#526bb9] rounded-[100px] w-[70px]">
              roas
            </p>
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-[rgba(5,29,64,1)] rounded-b-main py-[50px]">
        <p className="text-white w-[80%] mx-auto">
          Trendsales er Danmarks største og bedste bedømte secondhand
          markedsplads. Vi løftede deres digitale markedsføring med 307% gennem
          Meta, TikTok, Snapchat og content produktion.
        </p>
      </div>
    </div>
  );
};
