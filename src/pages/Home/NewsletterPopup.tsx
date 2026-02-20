import { useEffect, useState } from "react";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const BREVO_FORM_URL =
    "https://a6d48789.sibforms.com/serve/MUIFAHA4a2bQgaDI2t2lG9Y5tvpSvvS9XLERjKR-IcBJZrR-8yuWNKN_Y5HBhJGhYze57PzdNb1XGW-1LW1iu_0MPq5UWiYzNmgi2feAkqF6VonwtH6M6qtExpa53u9c92lQJ5GMB0L81suX-11MO930HXfPapDQXgGfrBRdBWhzoLHh06aqe09KemRHKPuzTr7wFSFALUHIzViF9A==";

  const handleSubscribe = async () => {
    const email = (document.getElementById("pr-email") as HTMLInputElement)?.value;
    if (!email) return;

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("FIRSTNAME", (document.getElementById("pr-firstname") as HTMLInputElement)?.value || "");
    formData.append("LASTNAME", (document.getElementById("pr-lastname") as HTMLInputElement)?.value || "");
    formData.append("locale", "en");
    formData.append("html_type", "simple");

    await fetch(BREVO_FORM_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    setSubscribed(true);
  };

  if (!open) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button style={closeStyle} onClick={() => setOpen(false)}>
          ×
        </button>

        <h2 style={{ fontSize: 36, fontWeight: 800 }}>Join Our Newsletter</h2>
        <p>Get updates from Penticton Robotics.</p>

        <input id="pr-firstname" placeholder="First name" style={inputStyle} />
        <input id="pr-lastname" placeholder="Last name" style={inputStyle} />
        <input id="pr-email" placeholder="Email address" style={inputStyle} />

        <button style={buttonStyle} onClick={handleSubscribe} disabled={subscribed}>
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>

        {subscribed && (
          <div style={{ marginTop: 20, fontWeight: 600 }}>
            Thank you for subscribing.
          </div>
        )}
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999
};

const popupStyle: React.CSSProperties = {
  background: "#FBB414",
  width: "620px",
  maxWidth: "92%",
  padding: "56px",
  borderRadius: "28px",
  boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
  textAlign: "center"
};

const closeStyle: React.CSSProperties = {
  position: "absolute",
  top: 20,
  right: 20,
  background: "none",
  border: "none",
  fontSize: 30,
  cursor: "pointer"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "none"
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px",
  background: "black",
  color: "#FBB414",
  border: "none",
  borderRadius: "12px",
  fontWeight: 700,
  cursor: "pointer"
};
