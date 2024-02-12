import { useState, useContext } from "react";
import InputMask from 'react-input-mask';
import { FoodContext } from "../../context";

const TelephoneInput = ({ onTelephoneChange }) => {
    const {userTel} = useContext(FoodContext)
    const [telephone, setTelephone] = useState(userTel);
  
    const handleTelephoneChange = (e) => {
      const newValue = e.target.value;
      setTelephone(newValue);
      onTelephoneChange(newValue); // Notify parent component about the new value
    };
  
    return (
      <InputMask
        mask="+7 (999) 999 99 99"
        maskChar={null}
        alwaysShowMask
        placeholder="+7 (___) ___ __ __"
        className="shopping__input"
        value={telephone}
        onChange={handleTelephoneChange}
      />
    );
  };

export default TelephoneInput