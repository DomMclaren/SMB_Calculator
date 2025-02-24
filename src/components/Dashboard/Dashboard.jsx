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

    if (Start5Glines) {
      total +=
        Start5Glines === 1
          ? 65
          : Start5Glines === 2
          ? Start5Glines * 55
          : Start5Glines === 3
          ? Start5Glines * 40
          : Start5Glines === 4
          ? Start5Glines * 35
          : Start5Glines * 30;
    }

    if (Plus5Glines) {
      total +=
        Plus5Glines === 1
          ? 75
          : Plus5Glines === 2
          ? Plus5Glines * 65
          : Plus5Glines === 3
          ? Plus5Glines * 50
          : Plus5Glines === 4
          ? Plus5Glines * 45
          : Plus5Glines * 40;
    }

    if (Pro5Glines) {
      total +=
        Pro5Glines === 1
          ? 80
          : Pro5Glines === 2
          ? Pro5Glines * 70
          : Pro5Glines === 3
          ? Pro5Glines * 55
          : Pro5Glines === 4
          ? Pro5Glines * 50
          : Pro5Glines * 45;
    }

    total += numberOfTablets * 20;

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

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
