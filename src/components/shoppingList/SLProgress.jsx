import "./shoppingList.scss";
import { useContext, useState, useEffect} from "react";
import { FoodContext } from "../context";
import TelephoneInput from "./forms/TelephoneForm";

const SLProgress = () => {
  const { setStatus, userName, userTel, userEmail, userAddress, setUserTel, setUserName, setUserEmail, setUserAddress} = useContext(FoodContext);
  const [name, setName] = useState(userName);
  const [tel, setTel] = useState(userTel);
  const [email, setEmail] = useState(userEmail);
  const [address, setAddress] = useState(userAddress);
  const [remark, setRemark] = useState("");
  const [error, setError] = useState({
    name: { state: userName.length > 0 ? true : false, message: "Please, enter valid name" },
    email: { state: userEmail.length > 0 ? true : false, message: "Please, enter valid email" },
    tel: { state: userTel.length > 0 ? true : false, message: "Please, enter valid telephone number" },
    address: { state: userAddress.length > 0 ? true : false, message: "Please, enter valid address" },
  });

  // useEffects for momentum rewrite
  useEffect(() => {
    if (name.length < 2 || name.length > 25) {
      updateErrorState("name", false);
    } else {
      updateErrorState("name", true);
    }
  }, [name])

  useEffect(() => {
    if (tel.length === 18) {
      updateErrorState("tel", true);
    } else {
      console.log(tel.length)
      updateErrorState("tel", false);
    }
  }, [tel]);

  useEffect(() => {
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      updateErrorState("email", true);
    } else {
      updateErrorState("email", false);
    }
  }, [email]);

  useEffect(() => {
    if (address.length > 8) {
      updateErrorState("address", true);
    } else {
      updateErrorState("address", false);
    }
  }, [address]);

  const updateErrorState = (fieldName, newState) => {
    setError((prevError) => ({
      ...prevError,
      [fieldName]: { ...prevError[fieldName], state: newState },
    }));
  };


  // NAME
  const handle_name = (e) => {
    if (e.target.value === "") {
      setName("");
      updateErrorState("name", false);
      return;
    }
    if (/^[a-zA-Zа-яА-ЯёЁ -]+$/.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const name_check = () => {
    if (name === "") {
      setError({ ...error, name: false });
    }
    if (name.length < 2 || name.length > 25) {
      updateErrorState("name", false);
    } else {
      updateErrorState("name", true);
    }
  };

  //email
  const handle_email = (e) => {
    setEmail(e.target.value);
  };

  const email_check = () => {
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      updateErrorState("email", true);
    } else {
      updateErrorState("email", false);
    }
  };

  // Telephone
  const handleTelephoneChange = (newValue) => {
    setTel(newValue);
  };

  // Address
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressCheck = () => {
    if (address.length > 8) {
      updateErrorState("address", true);
    } else {
      updateErrorState("address", false);
    }
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(error).every((errorItem) => errorItem.state === true)) {
      setStatus(2)
      setUserName(name)
      setUserTel(tel)
      setUserEmail(email)
      setUserAddress(address)
    }
  };

  return (
    <>
      <div className="shopping__form">
        { !error.name.state && name.length > 0 ? <div className="shopping__error">{error.name.message}</div> : null}
        <input className="shopping__input" type="text" value={name} onChange={(e) => handle_name(e)} onBlur={name_check} placeholder="Your name" />
        { !error.tel.state && tel.length > 0 ? <div className="shopping__error">{error.tel.message}</div> : null}
        <TelephoneInput onTelephoneChange={handleTelephoneChange} />
        { !error.email.state && email.length > 0 ? <div className="shopping__error">{error.email.message}</div> : null}
        <input
          className="shopping__input"
          type="email"
          onChange={(e) => handle_email(e)}
          value={email}
          placeholder="Your email"
          onBlur={email_check}
        />
        { !error.address.state && address.length > 0 ? <div className="shopping__error">{error.address.message}</div> : null}
        <input
          className="shopping__input"
          type="text"
          value={address}
          onChange={handleAddress}
          onBlur={handleAddressCheck}
          placeholder="Your address"
        />
        <input className="shopping__input" type="text" value={remark} onChange={(e) => setRemark(e.target.value)} placeholder="Remark" />
        <button className={!Object.values(error)
                    .every((errorItem) => errorItem.state === true ) ? "shopping__btn__close" :  "btn shopping__btn2"} onClick={(e) => handleSubmit(e)}>
          Go to the payment
        </button>
        <button className="shopping__backButton" onClick={() => setStatus(0)}>
          Go back
        </button>
      </div>
    </>
  );
};

export { SLProgress };
