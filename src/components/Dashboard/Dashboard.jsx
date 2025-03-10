import React, { useState } from "react";
import QuantityInput from "../NumberInput";
import Popup from "../Popup";
import CheckBoxes from "../CheckBoxes";

const Dashboard = () => {
  const [numberOfTablets, setNumberOfTablets] = useState(0);
  const [jetPack, setJetPack] = useState(0);
  const [numberOfNewPhones, setNumberOfNewPhones] = useState(0);
  const [costOfNewPhone, setCostOfNewPhone] = useState(0);
  const [Start5Glines, setStart5GLines] = useState(0);
  const [Plus5Glines, setPlus5GLines] = useState(0);
  const [Pro5Glines, setPro5GLines] = useState(0);
  const [output, setOutput] = useState(0);
  const [outputWithTax, setOutputWithTax] = useState(0);
  const [numberOfBI, setNumberOfBI] = useState(0);
  const [foundingFlag, setFoundingFlag] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [totalWithoutAutoPay, setTotalWithoutAutopay] = useState(0);
  const [totalWithoutAutoPayTax, setTotalWithoutAutopayTax] = useState(0);
  const [biCheck, setBIcheck] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    let tempNumberOfLines = Start5Glines + Plus5Glines + Pro5Glines;

    if (tempNumberOfLines === 1) {
      total += Start5Glines * 65 + Plus5Glines * 75 + Pro5Glines * 80;
    } else if (tempNumberOfLines === 2) {
      total += Start5Glines * 55 + Plus5Glines * 65 + Pro5Glines * 70;
    } else if (tempNumberOfLines === 3) {
      total += Start5Glines * 40 + Plus5Glines * 50 + Pro5Glines * 55;
    } else if (tempNumberOfLines === 4) {
      total += Start5Glines * 35 + Plus5Glines * 45 + Pro5Glines * 50;
    } else if (tempNumberOfLines >= 5) {
      total += Start5Glines * 30 + Plus5Glines * 40 + Pro5Glines * 45;
    }

    let totalLines = Start5Glines + Plus5Glines + Pro5Glines;

    if (insurance) {
      if (totalLines < 3) {
        total += totalLines * 20;
      } else if (totalLines >= 3) {
        total += 60;
      }
    }

    total += numberOfTablets * 20;
    total += jetPack * 45;
    total += numberOfNewPhones * costOfNewPhone;

    if (biCheck) {
      total += numberOfBI * 50;
    } else {
      total += numberOfBI * 40;
    }

    handleDateChecker();
    setOutput(total);
    setTotalWithoutAutopay(total + totalLines * 5);
    setOutputWithTax(total + total * 0.15);
    let temp1 = totalLines * 5;
    let temp2 = total + temp1 + total * 0.15;
    setTotalWithoutAutopayTax(temp2);
  };

  const handleClearingofInputs = () => {
    setNumberOfTablets(0);
    setJetPack(0);
    setNumberOfNewPhones(0);
    setCostOfNewPhone(0);
    setStart5GLines(0);
    setPlus5GLines(0);
    setPro5GLines(0);
    setOutput(0);
    setOutputWithTax(0);
    setNumberOfBI(0);
    setFoundingFlag(false);
    setNumberOfNewPhones(0);
    setCostOfNewPhone(0);
    setInsurance(false);
    setTotalWithoutAutopay(0);
    setTotalWithoutAutopayTax(0);
    setBIcheck(false);
  };
  const handleNumberOfNewPhoneChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setNumberOfNewPhones(numericValue);
  };

  const handlePhonePriceChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setCostOfNewPhone(numericValue);
  };

  const handleDateChecker = () => {
    //1983
    //jetpack-1  plus5g-9
    let temp1 = jetPack.toString();
    let temp2 = Plus5Glines.toString();
    let temp3 = numberOfTablets.toString();
    let temp4 = Start5Glines.toString();

    let foundingYear = temp1 + temp2 + temp3 + temp4;

    if (foundingYear === "1983") {
      setFoundingFlag(true);
    }
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
        marginTop: "50px",
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "25px",
          }}
        >
          <div>
            <label
              style={{
                fontWeight: "bold",
                fontSize: "clamp(14px, 2vw, 20px)",

                display: "block",
                marginBottom: "5px",
                whiteSpace: "nowrap",
              }}
            >
              Number of Start 5G lines
            </label>
            <QuantityInput
              setNumberOfLines={setStart5GLines}
              value={Start5Glines}
              total={9999}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              Tablets
            </label>
            <QuantityInput
              setNumberOfLines={setNumberOfTablets}
              value={numberOfTablets}
              total={9999}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              Number of Plus 5G lines
            </label>
            <QuantityInput
              setNumberOfLines={setPlus5GLines}
              value={Plus5Glines}
              total={9999}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              Jetpacks
            </label>
            <QuantityInput
              setNumberOfLines={setJetPack}
              value={jetPack}
              total={9999}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              Number of Pro 5G lines
            </label>
            <QuantityInput
              setNumberOfLines={setPro5GLines}
              value={Pro5Glines}
              total={9999}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(14px, 2vw, 20px)",
              }}
            >
              BI
            </label>
            <QuantityInput
              setNumberOfLines={setNumberOfBI}
              value={numberOfBI}
              total={6}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 2vw, 18px)",
              }}
            >
              Number of New Phones
            </label>
            <input
              inputMode="numeric"
              onChange={handleNumberOfNewPhoneChange}
              value={numberOfNewPhones}
              onFocus={(event) => event.target.select()}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
                width: "30%",
                marginLeft: "10%",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                fontSize: "clamp(12px, 2vw, 18px)",
              }}
            >
              Cost of New Phones
            </label>
            <input
              onChange={handlePhonePriceChange}
              inputMode="numeric"
              value={costOfNewPhone}
              onFocus={(event) => event.target.select()}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
                width: "30%",
                marginLeft: "13%",
              }}
            />
          </div>
          <div>
            <CheckBoxes
              name="Business Mobile Protection"
              checked={insurance}
              setChecked={setInsurance}
            />
          </div>

          <div>
            <CheckBoxes
              name="VBIZ"
              checked={biCheck}
              setChecked={setBIcheck}
              disabled={numberOfBI < 1 ? true : false}
            />
          </div>
        </div>

        <button
          onClick={calculateTotal}
          style={{
            width: "100%",
            padding: "10px",
            background: "#EE0000",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s",
            marginTop: "15px",
          }}
        >
          Calculate
        </button>
        <button
          onClick={handleClearingofInputs}
          style={{
            width: "100%",
            padding: "10px",
            background: "#FFFF00",
            color: "black",

            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s",
            marginTop: "15px",
          }}
        >
          Clear Inputs
        </button>
        {foundingFlag ? <Popup /> : <></>}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ color: "#007bff", marginBottom: "8px" }}>
                Auto Pay
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  margin: "2px 0",
                }}
              >
                {output}
              </p>

              <p
                style={{ fontSize: "1rem", color: "#28a745", margin: "2px 0" }}
              >
                {outputWithTax}
              </p>
            </div>
            <div>
              <h3 style={{ color: "#007bff", marginBottom: "8px" }}>
                {" "}
                No Auto Pay
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  margin: "2px 0",
                }}
              >
                {totalWithoutAutoPay}
              </p>
              <p
                style={{ fontSize: "1rem", color: "#28a745", margin: "2px 0" }}
              >
                {totalWithoutAutoPayTax}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
