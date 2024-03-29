import Script from "next/script";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import { Link, Element } from "react-scroll";

export default function Hero() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, rgba(249,254,255,1) 0%, rgba(231,251,255,1) 49%, rgba(243,253,255,1) 100%)",
      }}
      className="bubble-hero heroback bg-blue-400 z-[0] py-[80px] h-[80vh] relative overflow-hidden ctaOne:h-full ctaOne:py-[100px] ctaOne:pt-[60px]"
    >
      <Script src="/js/bubbles.js" />
      <div className="w-[90%] mx-auto max-w-5xl flex flex-col gap-[30px] justify-center items-center">
        <a
          href="https://dk.trustpilot.com/review/coad.agency"
          className="cursor-pointer"
          target="_blank"
        >
          <img className="w-[160px]" src="/trust.svg" alt="Trustpilot" />
        </a>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <h1 className="text-4xl font-semibold leading-normal text-center md:text-6xl text-main">
            {currentPath === "/en"
              ? "We create industry-leading results for e-commerce brands"
              : "Vi skaber brancheførende resultater for e-commerce brands"}
          </h1>
          <div className="w-full overflow-hidden bubbles" />
          <h2 className="max-w-2xl mx-auto font-normal leading-normal text-center text-md md:text-xl text-main">
            {currentPath === "/en"
              ? "With a long-term holistic approach, we focus solely on growing your profits. We manage the entire digital customer journey"
              : "Med en langsigtet holistisk tilgang har vi udelukkende fokus på at vækste din profit. Vi varetager hele den digitale kunderejse."}
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <Link
            to="cta"
            className="flex items-center justify-center gap-2 p-4 px-8 transition-colors cursor-pointer text-[14px] md:text-lg font-[600] text-white rounded-lg bg-[#0071e3]"
            smooth={true}
            duration={10}
          >
            {currentPath === "/en"
              ? "Get a free marketing analysis"
              : "Få en gratis marketinganalyse"}
            <ChevronRight size={24} color="white" />
          </Link>
        </div>
        <div className="flex mb-[50px] flex-wrap items-center justify-center gap-8 mt-4 md:mb-0">
          <img src="./partners/google.png" className="h-[30px] md:h-[50px]" />
          <img src="./partners/klaviyo.png" className="h-[30px] md:h-[50px]" />
          <img src="./partners/meta.png" className="h-[30px] md:h-[50px]" />
          <img
            src="./partners/shopify-v2.png"
            className="h-[40px] md:h-[50px]"
          />
        </div>
      </div>
    </section>
  );
}
