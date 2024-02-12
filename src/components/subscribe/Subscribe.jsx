import "./subscribe.scss";
import { useEffect, useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const handleChecker = (e) => {
    e.preventDefault();
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setChecked(true);
      setIsSent(true);
    } else {
      setChecked(false);
    }
  };

  const handleOnlyChecker = (e) => {
    e.preventDefault();
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  useEffect(() => {
    if (email === '') {
        setChecked(null)
    }
  }, [email])

  useEffect(() => {
    if (isSent) {
      console.log("Well sent to server");
      setTimeout(() => {
        setIsSent(false);
        setEmail('')
        setChecked(null)
      }, 5000);
    }
  }, [isSent]);

  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <div className="subscribe__main">
            <h2 className="title title__black">Subscribe</h2>
            <div className="subscribe__text">
            Stay in the loop! Subscribe for exclusive updates, offers, and tasty surprises delivered to your inbox
            </div>

            <div className="subscribe__form">
              {!isSent ? (
                <form>
                  {email && checked == false ? <div className="error">Wrong email. Check your email</div> : null}
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="subscribe__input"
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onBlur={(e) => handleOnlyChecker(e)}
                  />
                  <button className="btn btn_222" onClick={(e) => handleChecker(e)}>
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="success">Sent successfull! Thanks a lot!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
