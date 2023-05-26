import { useState } from "react";
import check from "../../images/icon-check.svg";

import TrialButton from "../buttons/TrialButton";
import Range from "../buttons/Range";
import Toggle from "../buttons/Toggle";

export default function Trial() {
  const [pageviews, setPageviews] = useState(100000);
  const [price, setPrice] = useState(16);
  const [multiplier, setMultiplier] = useState(1);

  async function handleChange(e) {
    try {
      const resp = await fetch("http://localhost:5000/plans");
      const data = await resp.json();
      setPageviews(data[e.target.value].pageviews);
      setPrice(data[e.target.value].price);
    } catch (err) {
      console.log(err);
    }
  }

  function togglePlan(e) {
    e.target.checked ? setMultiplier(9) : setMultiplier(1);
  }

  return (
    <div className="grid gap-8 place-items-center m-auto shadow-lg w-[88%] translate-y-[-5rem] bg-white py-9 tracking-wider text-[#858fad]">
      <h2 className="uppercase text-[0.8125rem] font-extrabold">
        {pageviews < 1000000 ? `${pageviews / 1000}k ` : `1M `}Pageviews
      </h2>
      <Range
        name="plan"
        min="1"
        max="5"
        defaultValue="3"
        handleOnChange={handleChange}
      />
      <p className="flex items-center gap-2 text-sm mt-1.5">
        <span className="text-3xl font-extrabold text-[#293356]">
          ${(price * multiplier).toFixed(2)}
        </span>{" "}
        {multiplier === 9 ? "/year" : "/month"}
      </p>
      <div className="flex gap-1 text-[0.6875rem] relative mt-2 mb-1">
        Monthly Billing
        <Toggle togglePrice={togglePlan} />
        Yearly Billing
        <span className="absolute right-[-2rem]">
          25% <span className="hidden">discount</span>
        </span>
      </div>
      <ul className="flex flex-col gap-2.5 border-t w-full text-[0.6875rem] tracking-wider">
        <li className="flex items-center justify-center gap-3.5 mt-6">
          <img src={check} alt="Check mark" /> Unlimited websites
        </li>
        <li className="flex items-center justify-center gap-3.5">
          <img src={check} alt="Check mark" /> 100% data ownership{" "}
        </li>
        <li className="flex items-center justify-center gap-3.5">
          <img src={check} alt="Check mark" /> Email reports{" "}
        </li>
      </ul>
      <TrialButton text="Start my trial" />
    </div>
  );
}
