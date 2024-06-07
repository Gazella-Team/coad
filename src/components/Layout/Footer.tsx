import { ScrollAnimation } from "../Animations/ScrollAnimation";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";
import { ChevronRight } from "lucide-react";
export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <footer className="py-[100px] pb-[20px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-footermain gap-[100px] pb-[40px] ctaOne:grid-cols-1">
          <div>
            <Link href={"/"} className="text-[24px] font-[600] text-main">
              <img className="w-[100px] mb-[40px]" src="/logo.png"></img>
            </Link>
            <Link
              to="cta"
              className="flex w-[100%] text-[14px] items-center justify-center gap-2 p-4 px-8 transition-colors cursor-pointer font-[600] text-white rounded-lg bg-[#0071e3]"
              smooth={true}
              duration={10}
            >
              {currentPath === "/en"
                ? "Get a free marketing analysis"
                : "Få en gratis marketinganalyse"}
              
            </Link>
          </div>
          <div className="flex justify-between gap-[130px] ctaOne:flex-col">
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px]">
                {currentPath === "/en"
                  ? "We create industry-leading results for e-commerce brands"
                  : "Vi skaber brancheførende vækst resultater for e-commmerce brands"}
              </h1>
              <p className="text-gray-600">
                {currentPath === "/en"
                  ? "With a long-term holistic approach, we focus solely on growing your profits. We manage the entire digital customer journey."
                  : "Med en langsigtet holistisk tilgang har vi udelukkende fokus på at vækste din profit. Vi varetager hele den digitale kunderejse."}
              </p>
            </div>
            <div className="flex gap-[160px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Menu</h1>
                <Link
                  to="results"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  {currentPath === "/en" ? "Results" : "Resultater"}
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  Services
                </Link>
                <Link
                  to="team"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  Team
                </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Kontakt os</h1>
                <p className="text-gray-600">
                  {currentPath === "/en" ? "VAT: DK43407376" : "CVR: 43407376"}
                </p>
                <p className="text-gray-600">gustav@coad.dk</p>
                <p className="text-gray-600">Store Torv 9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] flex items-center justify-between py-[50px] text-gray-400 text-[14px] font-[300] ctaOne:flex-col ctaOne:gap-[60px]">
          <h1>
            COAD - ©{" "}
            {currentPath === "/en"
              ? "All rights reserved"
              : "Alle rettigheder forbeholdt"}
            , {new Date().getFullYear()}
          </h1>
          <div className="flex items-center gap-[40px] mde:gap-[10px]">
            <img
              className="w-[100px] mde:w-[60px]"
              src="/trust.svg"
              alt="Trustpilot"
            />
            <img
              className="w-[100px] mde:w-[60px]"
              src="/partners/google.png"
            ></img>
            <img
              className="w-[100px] mde:w-[60px]"
              src="/partners/shopify-v2.png"
            ></img>
            <img
              className="w-[100px] mde:w-[50px]"
              src="/partners/klaviyo.png"
            ></img>
            <img
              className="w-[100px] mde:w-[50px]"
              src="/partners/meta.png"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
