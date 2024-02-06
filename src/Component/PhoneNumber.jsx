import { useRef, useState, useEffect } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
// import '../../screens/css/login.css'
import Input from "./Input";


const select = document.querySelector(".PhoneInputCountrySelect");

function PhoneInputField({onChanged, value, id, name}) {
  const [selectValue, setSelectValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const img = document.querySelector(".PhoneInputCountryIconImg");
    if (img) img.alt = "";
  }, [selectValue]);

  const handleSelectChange = selectValue => {
    console.log(selectValue);
    console.log(typeof selectValue);
    // select.title = getCountryCallingCode(selectValue);
    setSelectValue(selectValue);

  };
  const handleChangeProp = (e) => {
    console.log()
    onChanged(e)
    // setPhone(e.target/.value)
  };


  return (
    <>
      {/* <label className="label" htmlFor="number">Phone Number</label> */}
      <div className=" phone-group input-container form-input-box">
        <PhoneInput className="input" 
          style={{ width:"150px"}}
          placeholder="Enter phone number"
          value={selectValue}
          defaultCountry="NG"
          international
          countryCallingCodeEditable={false}
          ref={inputRef}
          onChange={handleSelectChange}
        />
        <input style={{marginLeft:"-30px", borderLeft: "2px solid #3B043B", paddingLeft:"20px"}}
             name={name}
             id={id}
             className="input"
             type="text"
             placeholder="987654"
             value={value}
             onChange={handleChangeProp}
           />
           
      </div>
    </>
  );
}

export default PhoneInputField;