import React, { useState } from "react";
import QuantityInput from "../NumberInput";
import DropDown from "../DropDown/DropDown.jsx";
import CheckBox from "../CheckBox.jsx";

const Dashboard = () => {
  const [plan, setPlan] = useState("Start5G");
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [output, setOutput] = useState(0);
  const [outputWithTax, setOutputWithTax] = useState(0);
  const [numberOfTablets, setNumberOfTablets] = useState(0);
  const [jetPack, setJetPack] = useState(0);
  const [checkBox, setCheckBox] = useState(false);
  const [numberOfNewPhones, setNumberOfNewPhones] = useState(0);
  const [Start5Glines, setStart5GLines] = useState(0);
  const [Plus5Glines, setPlus5GLines] = useState(0);
  const [Pro5Glines, setPro5GLines] = useState(0);

  const calculateTotal = () => {
    let total = 0;

    if (plan === "Start5G") {
      total =
        numberOfLines === 1
          ? 65
          : numberOfLines === 2
          ? numberOfLines * 55
          : numberOfLines === 3
          ? numberOfLines * 40
          : numberOfLines === 4
          ? numberOfLines * 35
          : numberOfLines * 30;
    }

    if (plan === "Plus5G") {
      total =
        numberOfLines === 1
          ? 75
          : numberOfLines === 2
          ? numberOfLines * 65
          : numberOfLines === 3
          ? numberOfLines * 50
          : numberOfLines === 4
          ? numberOfLines * 45
          : numberOfLines * 40;
    }

    if (plan === "Pro5G") {
      total =
        numberOfLines === 1
          ? 80
          : numberOfLines === 2
          ? numberOfLines * 70
          : numberOfLines === 3
          ? numberOfLines * 55
          : numberOfLines === 4
          ? numberOfLines * 50
          : numberOfLines * 45;
    }

    total += numberOfTablets * 20;

    console.log(jetPack);
    total += jetPack * 45;
    total += numberOfNewPhones * 10;
    console.log("total:", total, "ohones: ", numberOfNewPhones);
    setOutput(total);
    setOutputWithTax(total + total * 0.15);
  };

  const handleNumberOfNewPhoneChange = (e) => {
    const tempValue = e.target.value;
    const numericValue = tempValue.replace(/[^0-9]/g, "");
    setNumberOfNewPhones(numericValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <DropDown plan={plan} setPlan={setPlan} />

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Number of Lines
            </label>
            <QuantityInput setNumberOfLines={setNumberOfLines} />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Tablets
            </label>
            <QuantityInput setNumberOfLines={setNumberOfTablets} />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Jetpacks
            </label>
            <QuantityInput setNumberOfLines={setJetPack} />
          </div>

          <div>
            <label>Number of New Phones</label>
            <input onChange={handleNumberOfNewPhoneChange} />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Number of Start 5G lines
            </label>
            <QuantityInput setNumberOfLines={setStart5GLines} />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Number of Plus 5G lines
            </label>
            <QuantityInput setNumberOfLines={setPlus5GLines} />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Number of Pro 5G lines
            </label>
            <QuantityInput setNumberOfLines={setPro5GLines} />
          </div>

          <button
            onClick={calculateTotal}
            style={{
              padding: "10px",
              background: "#007bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#ff0000")}
          >
            Calculate
          </button>

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              background: "#f8f9fa",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#007bff", marginBottom: "8px" }}>Total</h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                margin: "4px 0",
              }}
            >
              {output}
            </p>
            <p style={{ fontSize: "1rem", color: "#28a745", margin: "4px 0" }}>
              {outputWithTax}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
