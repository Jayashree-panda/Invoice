/** React Components */
import React, { FC, useState } from "react";
import AsyncSelect from "react-select/async";

/** Custom Styles */
import "../form.css";
import { asyncSelectStyles } from "../styles/Select";

const colourOptions = [
  { label: "Create Contact" },
  { label: "yellow" },
  { label: "black" },
];

const filterColors = (inputValue: string) => {
  return colourOptions.filter((i: { label: string }) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};
const loadOptions = (inputValue: string, callback: (arg0: any) => void) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const Buyer: FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (newValue: string) => {
    const inputValue2 = newValue.replace(/\W/g, "");
    setInputValue(inputValue2);
    return inputValue2;
  };
  
  return (
    <div className="document-layout__section">
      <label className="document-edit-block__label">Buyer</label>
      <div className="document-edit-block__content drop-down_content-lg">
        <AsyncSelect
          defaultInputValue={inputValue}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          isClearable={true}
          styles={asyncSelectStyles}
        />
      </div>
    </div>
  );
};

export default Buyer;
