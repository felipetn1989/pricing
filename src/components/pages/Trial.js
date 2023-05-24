import { useState } from "react";
import check from "../../images/icon-check.svg";

import TrialButton from "../buttons/TrialButton";
import Range from "../buttons/Range";
import Toggle from "../buttons/Toggle";

export default function Trial() {
  const [pageviews, setPageviews] = useState(100000);
  const [price, setPrice] = useState(16);
  const [multiplier, setMultiplier] = useState(1)

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
    e.target.checked ? setMultiplier(9) : setMultiplier(1)
  }

  return (
    <div className="grid place-items-center">
      <h2 className="uppercase">
        {pageviews < 1000000 ? `${pageviews / 1000}k ` : `1M `}Pageviews
      </h2>
      <Range
        name="plan"
        min="1"
        max="5"
        defaultValue="3"
        handleOnChange={handleChange}
      />
      <p>
        <span>${price * multiplier}</span> /month
      </p>
      <div className="flex gap-1">
        Monthly Billing 
        <Toggle togglePrice={togglePlan} />
        Yearly Billing 
        <span>25% discount</span>
      </div>
      <ul>
        <li className="flex items-center gap-1">
          <img src={check} alt="Check mark" /> Unlimited websites
        </li>
        <li className="flex items-center gap-1">
          <img src={check} alt="Check mark" /> 100% data ownership{" "}
        </li>
        <li className="flex items-center gap-1">
          <img src={check} alt="Check mark" /> Email reports{" "}
        </li>
      </ul>
      <TrialButton text="Start my trial" />
    </div>
  );
}
