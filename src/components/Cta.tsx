import { Check, CheckCircle } from "lucide-react";
import { useState } from "react";
import Slider from "react-infinite-logo-slider";
import { toast } from "sonner";
import { useRouter } from "next/router";

const reviewData = [
  {
    image: "/trust.svg",
    heading: "Rigtig tilfreds med samarbejdet",
    description:
      "Rigtig tilfreds med samarbejdet med COAD. Meget professionelle og gode til at få vores annoncer til at afspejle vores værdier. Stor anbefaling herfra” Leve.",
    position: "Co-Founder Leve.",
    founder: "/reviews/emma.png",
    name: "Emma",
  },

  {
    image: "/trust.svg",
    heading: "Seriøse og tillidsfulde!",
    description:
      "Vi samarbejder med Coad, da vi oplever en seriøs og tillidsfuld tilgang til arbejdet med markedsføring. Coad er gode til at afprøve og analysere vores annoncering. Dermed sikrer vi os, at vi hele tiden kan følge med i tidens tendenser på de sociale medier",
    position: "CEO.",
    founder: "/reviews/kern.png",
    name: "Kern",
  },
  {
    image: "/trust.svg",
    heading: "Very helpful!",
    description:
      "We’ve had the pleasure to work with COAD and Gustav for a while now and we see great results on our marketing. He is very helpful, honest and solution-oriented. I can highly recommend using COAD’s services",
    position: "CMO Skandi",
    founder: "/reviews/monica.png",
    name: "Monica",
  },
  {
    image: "/trust.svg",
    heading: "Anbefales på det sterkeste.",
    description:
      "Vi er svært fornøyd med samarbeidet med Coad. Salgstallene våre har økt med +8000% etter vi startet samarbeidet. Coad er profesjonelle og yter langt bedre og tettere oppfølging enn det vi tidligere har opplevd med andre markedsføring selskaper. Den tette dialogen sikre at annonsene avspeiler vår verdier. Anbefales på det sterkeste.",
    position: "CEO Dr. Ankerstjerne",
    founder: "/reviews/stine.png",
    name: "Stine",
  },
];

const englishReviewData = [
  {
    image: "/trust.svg",
    heading: "Really satisfied!",
    description:
      "Really satisfied with our collaboration with COAD. Very professional and great at making the ads reflect our values. A big recommendation from us.",
    position: "Co-Founder Leve.",
    founder: "/reviews/emma.png",
    name: "Emma",
  },

  {
    image: "/trust.svg",
    heading: "Serious and trustworthy",
    description:
      "We are working with Coad as we experience a serious approach to marketing. Coad is brilliant at testing and analyzing our advertising. By this, we ensure that we can constantly follow current trends on social media",
    position: "CEO.",
    founder: "/reviews/kern.png",
    name: "Kern",
  },
  {
    image: "/trust.svg",
    heading: "Very helpful!",
    description:
      "We’ve had the pleasure to work with COAD and Gustav for a while now and we see great results on our marketing. He is very helpful, honest and solution-oriented. I can highly recommend using COAD’s services",
    position: "CMO Skandi",
    founder: "/reviews/monica.png",
    name: "Monica",
  },
  {
    image: "/trust.svg",
    heading: "Recommended at the best!",
    description:
      "We are very pleased with our cooperation with Coad. Our revenue has increased by +8000% since we started the collaboration. Coad are professional and provides far better and closer follow-up than we have previously experienced with other marketing agencies. The close dialogue ensures that the ads reflect our values. Highly recommended.",
    position: "CEO Dr. Ankerstjerne",
    founder: "/reviews/stine.png",
    name: "Stine",
  },
];

export type ContactFormData = {
  fullName: string;
  email: string;
  company: string;
  phoneNumber: string;
  website: string;
  monthlyAdSpend: string;
  notes: string;
};

export default function Cta() {
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    phoneNumber: "",
    website: "",
    monthlyAdSpend: "",
    notes: "",
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    let res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status != 200) {
      toast.error("Der skete en fejl, prøv igen senere.");
    } else {
      toast.success(
        "Tak for din henvendelse, vi vender tilbage hurtigst muligt."
      );
      setData({
        fullName: "",
        email: "",
        company: "",
        phoneNumber: "",
        website: "",
        monthlyAdSpend: "",
        notes: "",
      });
    }
    setSubmitting(false);
  }
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);

  return (
    <section
      id="marketingsanalyse"
      className="grid grid-cols-2 border-y-[1px] ctaOne:grid-cols-1"
    >
      <div className="max-w-main bg-white py-[100px] mde:pb-[50px]">
        <div className="w-[90%] ml-auto max-w-[650px] ctaOne:mx-auto ctaOne:max-w-main">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <img className="w-[140px]" src="/trust.svg"></img>
          </div>
          <h1 className="text-sectionheading font-[600] leading-[60px] w-[80%] mb-[20px] text-main ctaOne:text-[30px] ctaOne:leading-[40px]">
            {currentPath === "/en"
              ? "Request a free marketing analysis"
              : "Anmod om en gratis marketingsanalyse"}
          </h1>
          <p className="w-[70%] text-gray-600 mb-[40px] font-[500]">
            {currentPath === "/en"
              ? "Do as our current partners and request a 100% free analysis of your digital marketing execution."
              : "Gør som vores nuværende samarbejdspartnere, og anmod om en 100% gratis analyse af jeres digitale marketing eksekvering."}
          </p>
          <div className="flex flex-col gap-[20px] mb-[60px] mde:mb-[0px]">
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <div className="w-[40px]">
                <CheckCircle className="text-[#0071e3]" />
              </div>
              <p className="w-[80%]">
                {currentPath === "/en"
                  ? "We'll review your entire digital customer journey from A to Z"
                  : "Vi gennemgår hele jeres digitale kunderejse fra A til Z"}
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <div className="w-[40px]">
                <CheckCircle className="text-[#0071e3]" />
              </div>
              <p className="w-[80%]">
                {currentPath === "/en"
                  ? "Analyze your Paid Social, E-mail Marketing, Google ads, and website"
                  : "Analyse af jeres Paid social, E-mail marketing, Google ads og hjemmeside"}
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <div className="w-[40px]">
                <CheckCircle className="text-[#0071e3]" />
              </div>
              <p className="w-[80%]">
                {currentPath === "/en"
                  ? "Including an assessment of your growth potential"
                  : "Inklusiv en vurdering af jeres vækspotientale"}
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <div className="w-[40px]">
                <CheckCircle className="text-[#0071e3]" />
              </div>
              <p className="w-[80%]">
                {currentPath === "/en"
                  ? "You get concrete actions you can implement to improve performance"
                  : "Du får konkrete tiltag du kan implementere for at forbedre performance"}
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600 font-[500]">
              <div className="w-[40px]">
                <CheckCircle className="text-[#0071e3]" />
              </div>

              <p className="w-[80%]">
                {currentPath === "/en"
                  ? "BONUS: Overview of your profit and calculation of break-even ROAS."
                  : "BONUS: Oversigt over din profit og beregning af break-even ROAS."}
              </p>
            </div>
            <p className="w-[80%] mt-[20px] text-gray-600 font-[500]">
              {currentPath === "/en"
                ? "We receive a large number of inquiries every day and therefore always reserve the right not to conduct a marketing analysis if we do not believe we are a good fit."
                : "      Vi modtager rigtig mange henvendelser hver dag og forbeholder os derfor altid retten til ikke at lave en marketinganalyse, hvis vi ikke mener, at vi er et match"}
            </p>
          </div>
          {currentPath === "/en" ? <div className="w-[100%] mde:hidden">
            <Slider
              width="500px"
              duration={30}
              pauseOnHover={true}
              blurBorders={true}
              blurBoderColor={"#fff"}
            >
              {englishReviewData.map((v) => (
                <Slider.Slide key={v}>
                  <ReviewCard object={v} />
                </Slider.Slide>
              ))}
            </Slider>
          </div>:          <div className="w-[100%] mde:hidden">
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
          </div>}
        </div>
      </div>
      <div className="max-w-main bg-[#f7f7fc] py-[100px]">
        <div className="w-[90%] mr-auto max-w-[650px] flex flex-col justify-center items-center ctaOne:mx-auto ctaOne:max-w-main">
          <h1 className="font-[600] text-[30px] text-center mb-[20px] w-[60%] ctaOne:text-left ctaOne:w-[100%]">
            {currentPath === "/en"
              ? "Request a free marketing analysis"
              : "Anmod om en gratis marketingsanalyse"}
          </h1>
          <form
            onSubmit={submit}
            className="bg-white w-[80%] p-[30px] border-[1px] border-blue-500 rounded-main flex flex-col gap-[30px] ctaOne:w-[100%]"
          >
            <div className="flex items-center justify-between gap-[30px]">
              <div className="w-full border-blue-500">
                <p className="mb-[12px]">
                  {currentPath === "/en" ? "Full name" : "Fulde navn"}
                  <span className="text-red-500 ml-[4px]">*</span>
                </p>
                <input
                  required
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="Gustav Walsted"
                  value={data?.fullName}
                  onChange={(e) =>
                    setData({ ...data, fullName: e.target.value })
                  }
                ></input>
              </div>
              <div className="w-full">
                <p className="mb-[12px]">E-mail<span className="text-red-500 ml-[4px]">*</span></p>
                <input
                  required
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="gustav@coad.dk"
                  type="email"
                  value={data?.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                ></input>
              </div>
            </div>
            <div>
              <p className="mb-[12px]">
                {currentPath === "/en" ? "Company name" : "Virksomhed"}
                <span className="text-red-500 ml-[4px]">*</span>
              </p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                placeholder="COAD"
                value={data?.company}
                onChange={(e) => setData({ ...data, company: e.target.value })}
              ></input>
            </div>
            <div className="flex items-center justify-between gap-[30px]">
              <div className="w-full">
                <p className="mb-[12px]">
                  {currentPath === "/en" ? "Phone number" : "Telefonnummer"}
                  <span className="text-red-500 ml-[4px]">*</span>
                </p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="+45 45 90 23 63"
                  type="tel"
                  value={data?.phoneNumber}
                  onChange={(e) =>
                    setData({ ...data, phoneNumber: e.target.value })
                  }
                ></input>
              </div>{" "}
              <div className="w-full">
                <p className="mb-[12px]">
                  {currentPath === "/en" ? "Website link" : "Hjemmeside link"}
                  <span className="text-red-500 ml-[4px]">*</span>
                </p>
                <input
                  className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                  placeholder="www.name.com"
                  value={data?.website}
                  onChange={(e) =>
                    setData({ ...data, website: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="w-full">
              <p className="mb-[12px]">
                {currentPath === "/en"
                  ? "Monthly ad-spend"
                  : "Annonceringsforbrug på månedlig basis"}
                  <span className="text-red-500 ml-[4px]">*</span>
              </p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main border-blue-500"
                placeholder="10.000 DKK"
                value={data?.monthlyAdSpend}
                onChange={(e) =>
                  setData({ ...data, monthlyAdSpend: e.target.value })
                }
              ></input>
            </div>
            <div>
              <p className="mb-[12px]">
                {currentPath === "/en" ? "Comments" : "Kommentarer"}
             
              </p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] pb-[100px] rounded-main border-blue-500 ctaOne:pb-[40px]"
                placeholder={currentPath === "/en" ? "Comments" : "Kommentarer"}
                value={data?.notes}
                onChange={(e) => setData({ ...data, notes: e.target.value })}
              ></input>
            </div>
            <button
              type="submit"
              className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500]"
            >
              {submitting
                ? "Anmoder..."
                : currentPath === "/en"
                ? "Book an analysis"
                : "Anmod om en analyse"}
            </button>
          </form>
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
