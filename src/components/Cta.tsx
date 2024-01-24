import { Check, CheckCircle } from "lucide-react";
import Slider from "react-infinite-logo-slider";

const reviewData = [
  {
    image: "/fivestar.jpg",
    heading: "Rigtig tilfreds med samarbejdet",
    description:
      "Rigtig tilfreds med samarbejdet med COAD. Meget professionelle og gode til at få vores annoncer til at afspejle vores værdier. Stor anbefaling herfra” Leve.",
    position: "Co-Founder Leve.",
    founder: "/reviews/emma.png",
    name: "Emma",
  },

  {
    image: "/fivestar.jpg",
    heading: "Seriøse og tillidsfulde!",
    description:
      "Vi samarbejder med Coad, da vi oplever en seriøs og tillidsfuld tilgang til arbejdet med markedsføring. Coad er gode til at afprøve og analysere vores annoncering. Dermed sikrer vi os, at vi hele tiden kan følge med i tidens tendenser på de sociale medier",
    position: "CEO.",
    founder: "/reviews/kern.png",
    name: "Kern",
  },
  {
    image: "/fivestar.jpg",
    heading: "Very helpful!",
    description:
      "We’ve had the pleasure to work with COAD and Gustav for a while now and we see great results on our marketing. He is very helpful, honest and solution-oriented. I can highly recommend using COAD’s services",
    position: "CMO Skandi",
    founder: "/reviews/monica.png",
    name: "Monica",
  },
  {
    image: "/fivestar.jpg",
    heading: "Anbefales på det sterkeste.",
    description:
      "Vi er svært fornøyd med samarbeidet med Coad. Salgstallene våre har økt med +8000% etter vi startet samarbeidet. Coad er profesjonelle og yter langt bedre og tettere oppfølging enn det vi tidligere har opplevd med andre markedsføring selskaper. Den tette dialogen sikre at annonsene avspeiler vår verdier. Anbefales på det sterkeste.",
    position: "CEO Dr. Ankerstjerne",
    founder: "/reviews/stine.png",
    name: "Stine",
  },
];

export default function Cta() {
  return (
    <section className="grid grid-cols-2 border-y-[1px]">
      <div className="max-w-main bg-white py-[100px]">
        <div className="w-[90%] ml-auto max-w-[650px]">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <img className="w-[140px]" src="/trust.svg"></img>
            <p className="text-gray-600">4.5/5 - Trustpilot</p>
          </div>
          <h1 className="text-sectionheading font-[600] leading-[60px] w-[80%] mb-[20px] text-main">
            Book en gratis performance analyse
          </h1>
          <p className="w-[70%] text-gray-600 mb-[40px] font-[500]">
            Gør som vores nuværende samarbejdspartnere, og anmod om en 100%
            gratis analyse af jeres digitale marketing eksekvering.
          </p>
          <div className="flex flex-col gap-[20px] mb-[60px]">
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <CheckCircle className="text-[#0071e3]" />
              <p>Vi gennemgår hele jeres digitale kunderejse fra A til Z</p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <CheckCircle className="text-[#0071e3]" />
              <p>
                Analyse af jeres Paid social, E-mail marketing, Google ads og
                hjemmeside
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <CheckCircle className="text-[#0071e3]" />
              <p>Inklusiv en vurdering af jeres vækspotientale</p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <CheckCircle className="text-[#0071e3]" />
              <p>
                Du får konkrete tiltag du kan implementere for at forbedre
                performance{" "}
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <CheckCircle className="text-[#0071e3]" />
              <p>
                BONUS: Oversigt over din profit og beregning af break-even ROAS.
              </p>
            </div>
          </div>
          <div className="w-[100%]">
            <Slider
              width="500px"
              duration={30}
              pauseOnHover={true}
              blurBorders={true}
              blurBoderColor={"#fff"}
            >
              {reviewData.map((v) => (
                <Slider.Slide key={v}>
                  <ReviewCard object={v} />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="max-w-main bg-[#f7f7fc] py-[100px]">
        <div className="w-[90%] mr-auto max-w-[650px] flex flex-col justify-center items-center">
          <h1 className="font-[600] text-[30px] text-center mb-[20px] w-[60%]">
            Anmod om en gratis marketingsanalyse
          </h1>
          <div className="bg-white w-[80%] p-[30px] border-[1px] border-blue-500 rounded-main flex flex-col gap-[30px]">
            <div className="flex items-center justify-between gap-[30px]">
              <div className="w-full border-blue-500">
                <p className="mb-[12px]">Dit fulde navn</p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="Eg. Gustav Walsted"
                ></input>
              </div>{" "}
              <div className="w-full">
                <p className="mb-[12px]">E-mail</p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="Eg. gustav@coad.dk"
                ></input>
              </div>
            </div>
            <div>
              <p className="mb-[12px]">Virksomhed</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                placeholder="COAD"
              ></input>
            </div>
            <div className="flex items-center justify-between gap-[30px]">
              <div className="w-full">
                <p className="mb-[12px]">Telefonnummer</p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="Eg. +45 45 90 23 63"
                ></input>
              </div>{" "}
              <div className="w-full">
                <p className="mb-[12px]">Hjemmeside link</p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="Eg. www.virksomhed.com"
                ></input>
              </div>
            </div>
            <div className="w-full">
              <p className="mb-[12px]">Annonceringsforbrug på månedlig basis</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                placeholder="Eg. 10.000 DKK"
              ></input>
            </div>
            <div>
              <p className="mb-[12px]">Noter til Coad</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] pb-[100px] rounded-main border-blue-500"
                placeholder="Har i mulighed for at være ekstra opmærksomme på ..."
              ></input>
            </div>
            <button className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500]">
              Anmod om analysen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  return (
    <div className="mr-[40px] bg-white p-[30px] rounded-[8px] border-[1px] text-black h-[450px] flex flex-col justify-between">
      <img className="w-[120px] mb-[20px]" src={object.image}></img>
      <h1 className="text-[26px] font-[600] mb-[10px]">{object.heading}</h1>
      <p className="mb-[40px] text-[18px]">{object.description}</p>

      <div className="flex gap-[20px] items-center">
        <img
          className="w-[60px] h-[60px] object-cover rounded-[60px]"
          src={object.founder}
        ></img>
        <div className="text-gray-600">
          <p className="text-[18px] font-[600]">{object.name}</p>
          <p className="text-[18px] font-[300]">{object.position}</p>
        </div>
      </div>
    </div>
  );
};
