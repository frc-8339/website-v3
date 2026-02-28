import { Button, Modal, TextInput } from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Form } from "react-router-dom";
import { brevoFormUrl } from "../lib/constants";

export default function NewsletterModal({ opened, controls }: { opened: boolean; controls: ReturnType<typeof useDisclosure>[1] }) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: {
      firstName: isNotEmpty("Enter your first name"),
      lastName: isNotEmpty("Enter your last name"),
      email: isEmail("Enter a valid email"),
    },
  });

  const [subscribed, setSubscribed] = useState(false);

  return (
    // <div style={overlayStyle}>
    //   <div style={popupStyle}>
    //     <button style={closeStyle} onClick={() => modalControls.close()}>
    //       ×
    //     </button>

    //     <h2 style={{ fontSize: 36, fontWeight: 800 }}>Join Our Newsletter</h2>
    //     <p>Get updates from Penticton Robotics.</p>

    //     <input id="pr-firstname" placeholder="First name" style={inputStyle} />
    //     <input id="pr-lastname" placeholder="Last name" style={inputStyle} />
    //     <input id="pr-email" placeholder="Email address" style={inputStyle} />

    //     <button style={buttonStyle} onClick={handleSubscribe} disabled={subscribed}>
    //       {subscribed ? "Subscribed" : "Subscribe"}
    //     </button>

    //     {subscribed && <div style={{ marginTop: 20, fontWeight: 600 }}>Thank you for subscribing.</div>}
    //   </div>
    // </div>

    <Modal withOverlay={false} opened={opened} onClose={() => controls.close()}>
      <Form
        title="Subscribe to our newsletter"
        onSubmit={async () => {
          const formData = new FormData();
          formData.append("EMAIL", form.values.email);
          formData.append("FIRSTNAME", form.values.firstName);
          formData.append("LASTNAME", form.values.lastName);
          formData.append("locale", "en");
          formData.append("html_type", "simple");

          await fetch(brevoFormUrl, {
            method: "POST",
            body: formData,
            mode: "no-cors",
          });

          setSubscribed(true);

          setTimeout(() => controls.close(), 7500);
        }}
      >
        <TextInput label="First Name" {...form.getInputProps("firstName")} />
        <TextInput label="Last Name" {...form.getInputProps("lastName")} />
        <TextInput label="Email" {...form.getInputProps("email")} />

        <Button type="submit" mt="md" disabled={subscribed}>
          {subscribed ? "Subscribed!" : "Subscribe"}
        </Button>
      </Form>
    </Modal>
  );
}
