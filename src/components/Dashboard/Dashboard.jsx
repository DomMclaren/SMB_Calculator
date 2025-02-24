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

  const calculateTotal = () => {
    let total = 0;

    if (plan == "Start5G") {
      switch (numberOfLines) {
        case 1:
          total = 65;
          break;
        case 2:
          total = numberOfLines * 55;
          break;
        case 3:
          total = numberOfLines * 40;
          break;
        case 4:
          total = numberOfLines * 35;
          break;
        default:
          total = numberOfLines * 30;
      }
    }
    if (plan == "Plus5G") {
      switch (numberOfLines) {
        case 1:
          total = 75;
          break;
        case 2:
          total = numberOfLines * 65;
          break;
        case 3:
          total = numberOfLines * 50;
          break;
        case 4:
          total = numberOfLines * 45;
          break;
        default:
          total = numberOfLines * 40;
      }
    }
    if (plan == "Pro5G") {
      switch (numberOfLines) {
        case 1:
          total = 80;
          break;
        case 2:
          total = numberOfLines * 70;
          break;
        case 3:
          total = numberOfLines * 55;
          break;
        case 4:
          total = numberOfLines * 50;
          break;
        default:
          total = numberOfLines * 45;
      }
    }

    total = total + numberOfTablets * 20;

    total = total + jetPack;

    setOutput(total);
    setOutputWithTax(total + total * 0.15);
  };

  const handleCheckBoxClick = () => {
    console.log("you");
    setCheckBox(!checkBox);
    if (checkBox) {
      setJetPack(0);
    } else {
      setJetPack(45);
    }
  };
  return (
    <div
      style={{
        display: "flex", // Make the outer div a flex container
        justifyContent: "center", // Center horizontally
        // Center vertically
        width: "100%",
        height: "80vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#D3D3D3",
          padding: "20px",
          borderRadius: "15px",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {" "}
          {/* main container*/}
          <div
            style={{
              width: "50%",
            }}
          >
            <DropDown plan={plan} setPlan={setPlan} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
                marginTop: "15px",
              }}
            >
              <label style={{ textAlign: "center", maxWidth: "35%" }}>
                Number of Lines
              </label>
              <QuantityInput setNumberOfLines={setNumberOfLines} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
                marginTop: "5px",
              }}
            >
              <label style={{ textAlign: "center", maxWidth: "35%" }}>
                Tablets
              </label>
              <QuantityInput setNumberOfLines={setNumberOfTablets} />
            </div>

            <CheckBox name="BYOD & Port 5+" />

            <label>
              <input type="checkbox" onClick={() => handleCheckBoxClick()} />
              Jetpack
            </label>

            <div>
              <button onClick={calculateTotal}>Calculate</button>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              padding: "16px",
              background: "#f8f9fa",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
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
              {" "}
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
