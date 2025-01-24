import React, { useState } from 'react'
import { motion } from 'motion/react';

const BuyCredit = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 10,
      yearlyPrice: 100,
      features: ["Feature 1", "Feature 2", "Feature 3","Feature 4", "Feature 5"],
    },
    {
      name: "Pro",
      monthlyPrice: 25,
      yearlyPrice: 250,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
    {
      name: "Enterprise",
      monthlyPrice: 50,
      yearlyPrice: 500,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:1}}
    viewport={{once:true}}
     style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Pricing Plans</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={toggleBilling}
          style={{
            padding: "10px 20px",
            background: isYearly ? "#4caf50" : "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Switch to {isYearly ? "Monthly" : "Yearly"} Billing
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              textAlign: "center",
            }}
          >
            <h2>{plan.name}</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span style={{ fontSize: "16px" }}>
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                padding: "10px 20px",
                background: "#f04e30",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};


export default BuyCredit
