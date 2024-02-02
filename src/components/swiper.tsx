import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import SectionStarter from "./sectionstarter";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
// hey
const reviewData = [
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Varmeste anbefalinger. Jeg har haft fornøjelsen af at samarbejde med COAD i cirka 9 måneder, og jeg må sige, at vores oplevelse med ham har været yderst tilfredsstillende. COAD leverer en effektiv og professionel service, der aldrig lader tvivl om hans engagement i vores projekt. Han har hjulpet os med SoMe og e-mail-markedsføring, og resultaterne taler for sig selv. Tidligere arbejdede vi sammen med et andet firma, der leverede ekstremt skuffende resultater. COAD har skilt sig markant ud som en pålidelig og kompetent partner. Han har ikke blot gennemført vores markedsføringsopgaver; han har også aktivt eksperimenteret og analyseret vores annoncering for at sikre, at vi opnår de bedst mulige resultater. Vi har set en markant forbedring i vores online tilstedeværelse og konverteringsfrekvens siden vi begyndte at arbejde sammen med COAD. Han har leveret konkrete og målbare resultater, som har været afgørende for vores møbelbutiks succes. Jeg kan på det varmeste anbefale COAD til alle, der søger en dygtig, dedikeret og pålidelig partner til deres næste projekt. Hans professionelle tilgang, evne til at levere resultater og personlige engagement gør ham til den perfekte samarbejdspartner.",
    position: "CEO Denomo",
    founder: "/reviews/henrik.png",
    name: "Henrik Clausen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Kanon samarbejde. Jeg har nu arbejdet sammen med Gustav i ca 10 mdr, og vi er fuldt ud tilfreds med ham, tingene bliver lavet godt og effektivt, og man er aldrig i tivivl om at han står klar til at hjælpe.",
    position: "Co-founder Gelblast",
    founder: "/reviews/osvald.png",
    name: "Osvald Kott",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We have had the pleasure to work with COAD and Gustav for a while now and we see great results on our marketing. He is very helpful, honest and solution-oriented. I can highly recommend using COADs services.",
    position: "CMO SKANDI",
    founder: "/reviews/monica.png",
    name: "Monica Ugelvik",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "So far, all we can say is good things about our collaboration with Gustav. He’s pro-active and always sharp with his feedback. He comes up with ideas on how to improve both the creative and performance side of our marketing/advertising. We are in March 2023 and we have already sold more than what we had sold by June in 2022. ;)",
    position: "Co-Founder LEMUR",
    founder: "/reviews/fernando.png",
    name: "Fernando Vale",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har i en periode benyttet COAD i forbindelse med SoMe-markedsføring og agter at fortsætte med det. COAD er lette at samarbejde med, hurtige, har rimelige priser og har skaffet os rigtigt gode resultater. Inden COAD samarbejdede vi en længere periode med et par væsentligt større digitale bureauer, om hvem vi desværre må sige det diametralt modsatte.",
    position: "CEO UNIVERSADVOKATER",
    founder: "/reviews/jørgen.png",
    name: "Jørgen Pedersen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen. Men Gustav fra COAD fangede vores opmærksomhed, og vi ville derfor gerne give det et skud igen da vi synes det virkede som om at han var professionel samt havde godt styr på tingene. Det må man sige for vores omsætning er vækstet med 326%.",
    position: "Callisto jewelry ",
    founder: "/reviews/simon.png",
    name: "Simon Amotz",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi samarbejder med Coad, da vi oplever en seriøs og tillidsfuld tilgang til arbejdet med markedsføring. Coad er gode til at afprøve og analysere vores annoncering. Dermed sikrer vi os, at vi hele tiden kan følge med i tidens tendenser på de sociale medier",
    position: "CEO",
    founder: "/reviews/kern.png",
    name: "Kern Lyhne",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Rigtig tilfreds med samarbejdet med COAD. Meget professionelle og gode til at få vores annoncer til at afspejle vores værdier. Stor anbefaling herfra",
    position: "Leve Copenhagen",
    founder: "/reviews/emma.png",
    name: "Emma",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi er svært fornøyd med samarbeidet med Coad. Salgstallene våre har økt med +8000% etter vi startet samarbeidet. Coad er profesjonelle og yter langt bedre og tettere oppfølging enn det vi tidligere har opplevd med andre markedsføring selskaper. Den tette dialogen sikre at annonsene avspeiler vår verdier. Anbefales på det sterkeste.",
    position: "CEO Dr.Ankerstjerne",
    founder: "/reviews/stine.png",
    name: "Stine Ankerstjerne",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Har samarbejdet med COAD på et par forskellige projekter nu, og deres indsigt og dedikation er en topkarakter værdig.",
    position: "Co-Founder",
    founder: "/nophoto.png",
    name: "Mathias Hansen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Bedste samarbejdspartner du kan finde! Efter at have arbejdet med adskillige marketingbureauer igennem tiden må jeg sige, at Gustav og hans team skiller sig markant ud allerede efter bare et par måneders samarbejde. De er engageret, proaktive og forstår at skalere ens forretning på flere aspekter end bare på at køre annoncer. Kæmpe anbefaling herfra!",
    position: "Founder",
    founder: "/nophoto.png",
    name: "Nicolas",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Jeg har haft en webshop, som Gustav og hans team har hjulpet med skalere til 2 nye markeder. Omsætningen på vores lokale markedet er steget med over 350% på 5 måneder. COAD har min stærkeste anbefaling.",
    position: "Co-Founder",
    founder: "/nophoto.png",
    name: "Peter Jensen",
  },
];

const englishReviewData = [
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Warmest recommendations. I have had the pleasure of working with COAD for about 9 months and I must say that our experience with him has been extremely satisfactory. COAD provides an efficient and professional service that never leaves any doubt about his commitment to our project. He has helped us with SoMe and email marketing and the results speak for themselves. Previously, we worked with another company that delivered extremely disappointing results. COAD has stood out as a reliable and competent partner. He has not only carried out our marketing tasks, he has also actively experimented and analyzed our advertising to ensure we get the best possible results. We have seen a significant improvement in our online presence and conversion rate since we started working with COAD. He has delivered concrete and measurable results that have been crucial to the success of our furniture store. I would highly recommend COAD to anyone looking for a skilled, dedicated and reliable partner for their next project. His professional approach, ability to deliver results and personal commitment make him the perfect partner.",
    position: "CEO Denomo",
    founder: "/reviews/henrik.png",
    name: "Henrik Clausen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Great collaboration. I have now worked with Gustav for about 10 months, and we are fully satisfied with him, things are done well and efficiently, and you are never in doubt that he is ready to help.",
    position: "Co-founder Gelblast",
    founder: "/reviews/osvald.png",
    name: "Osvald Kott",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We have had the pleasure to work with COAD and Gustav for a while now and we see great results on our marketing. He is very helpful, honest and solution-oriented. I can highly recommend using COADs services.",
    position: "CMO SKANDI",
    founder: "/reviews/monica.png",
    name: "Monica Ugelvik",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "So far, all we can say is good things about our collaboration with Gustav. He’s pro-active and always sharp with his feedback. He comes up with ideas on how to improve both the creative and performance side of our marketing/advertising. We are in March 2023 and we have already sold more than what we had sold by June in 2022. ;)",
    position: "Co-Founder LEMUR",
    founder: "/reviews/fernando.png",
    name: "Fernando Vale",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We have for some time used COAD for our SoMe marketing and intend to continue to do so. COAD is easy to work with, fast, has reasonable prices, and has achieved really good results. Before COAD, we collaborated for a long period with a couple of significantly larger digital agencies, about whom we, unfortunately, have to say the complete opposite.",
    position: "CEO UNIVERSADVOKATER",
    founder: "/reviews/jørgen.png",
    name: "Jørgen Pedersen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We have previously used another company for marketing who was extremely bad.. we pretty much ignored all inquiries afterward as we didn't want to try again. But Gustav from COAD caught our attention, and we, therefore, wanted to give it another shot. He seemed professional and it sounded like he knew his stuff. That was the right assessment because our revenue has grown by 326% since!",
    position: "Callisto jewelry ",
    founder: "/reviews/simon.png",
    name: "Simon Amotz",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We are working with Coad as we experience a serious approach to marketing. Coad is brilliant at testing and analyzing our advertising. By this, we ensure that we can constantly follow current trends on social media.",
    position: "CEO",
    founder: "/reviews/kern.png",
    name: "Kern Lyhne",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Really satisfied with our collaboration with COAD. Very professional and great at making the ads reflect our values. A big recommendation from us.",
    position: "Leve Copenhagen",
    founder: "/reviews/emma.png",
    name: "Emma",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "We are very pleased with our cooperation with Coad. Our revenue has increased by +8000% since we started the collaboration. Coad are professional and provide far better and closer follow-up than we have previously experienced with other marketing agencies. The close dialogue ensures that the ads reflect our values. Highly recommended.",
    position: "CEO Dr.Ankerstjerne",
    founder: "/reviews/stine.png",
    name: "Stine Ankerstjerne",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Having worked with COAD on a few different projects now, their insight and dedication is worthy of a top rating.",
    position: "Co-Founder",
    founder: "/nophoto.png",
    name: "Mathias Hansen",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "Best partner you can find! Having worked with several marketing agencies over the years, I have to say that Gustav and his team stand out after just a few months of working with them. They are committed, proactive and understand how to scale your business in more aspects than just running ads. Huge recommendation from here!",
    position: "Founder",
    founder: "/nophoto.png",
    name: "Nicolas",
  },
  {
    image: "/trust.svg",
    heading: "Kan stærkt anbefales!",
    description:
      "I've had an online shop that Gustav and his team have helped scale to 2 new markets. Revenue in our local market has increased by over 350% in 5 months. COAD has my strongest recommendation.",
    position: "Co-Founder",
    founder: "/nophoto.png",
    name: "Peter Jensen",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

export default function Swipe() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const swiperRef = useRef<SwiperRef>(null);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

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
              section={currentPath === "/en" ? "reviews" : "anmeldelser"}
            />
            <h1 className="text-sectionheading font-[600] text-main ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
              {currentPath === "/en"
                ? "Happy brands are our"
                : "Glade kunder er vores"}{" "}
              <span className="text-[#0071e3]">
                {currentPath === "/en" ? "top priority" : "topprioritet"}
              </span>
            </h1>
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
          {currentPath === "/en" ? (
            <Swiper
              ref={swiperRef}
              slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
              spaceBetween={30}
              className="mySwiper"
            >
              {englishReviewData.map((v, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard key={index} object={v} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              ref={swiperRef}
              slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
              spaceBetween={30}
              className="mySwiper"
            >
              {reviewData.map((v, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard key={index} object={v} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  const [readMore, setReadmore] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);

  const description = useMemo(() => {
    return object.description.length > 110 && !readMore
      ? object.description.slice(0, 110) + "..."
      : object.description;
  }, [object.description, readMore]);

  return (
    <>
      <div className="mb-[100px] bg-white p-[30px] rounded-[8px] text-black border-[1px]">
        <img
          className="w-[120px] select-none mb-[20px]"
          src={object.image}
        ></img>

        <p className="mb-[40px] text-[18px]">{description}</p>

        <div className="flex gap-[20px] items-center">
          <img
            className="w-[60px] h-[60px] object-cover rounded-[60px]"
            src={object.founder}
          ></img>
          <div className="text-gray-600">
            <p className="text-[18px] ">{object.name}</p>
            <p className="text-[18px]">{object.position}</p>
          </div>
        </div>
        {currentPath === "/en" ? (
          <p
            onClick={() => setReadmore(!readMore)}
            className="mt-[30px] cursor-pointer hover:underline"
          >
            {readMore ? "Show less" : "Read more"}
          </p>
        ) : (
          <p
            onClick={() => setReadmore(!readMore)}
            className="mt-[30px] cursor-pointer hover:underline"
          >
            {readMore ? "Vis mindre" : "Læs mere"}
          </p>
        )}
      </div>
    </>
  );
};
