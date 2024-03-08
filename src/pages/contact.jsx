import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;
    //console.log("formData::", formData);
    if (validateForm(name, email, subject, message)) {
      await fetch(`${process.env.REACT_APP_API_URL}/mail/sendMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(async (response) => {
          if (!response.ok) {
            let data = await response.json();
            throw new Error(`HTTP error: ${response.status} ${data.message}`);
          }
          return await response.json();
        })
        .then((data) => {
          alert(data.message);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please check your inputs!");
    }
  };
  const validateForm = (name, email, message) => {
    let isValid = true;
    let errors = {};

    if (!name.trim()) {
      isValid = false;
      errors.name = "Name is required";
    }

    if (!message.trim()) {
      isValid = false;
      errors.name = "Message is required";
    }

    if (!email.trim() || !email.match(/^[\w-\.]+@[\w-\.]+\.[a-zA-Z]{2,4}$/)) {
      isValid = false;
      errors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      isValid = false;
      errors.message = "Message is required";
    }

    return isValid;
  };

  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "xxx-large",
          fontWeight: "800",
          marginTop: "3%",
        }}
      >
        <span
          style={{
            textTransform: "uppercase",
            borderBottom: "5px solid rgb(255, 0, 254)",
          }}
        >
          Contact <span style={{ color: "rgb(255, 0, 254)" }}>Me</span>
        </span>
      </div>
      <div style={{ textAlign: "center" }}>
        I will be glad to answer your questions
      </div>
      <div style={{ width: "50%", marginTop: "3%" }}>
        <Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Name"
              value={formData.name}
              required
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              value={formData.email}
              placeholder="Email addrress"
              required
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              value={formData.subject}
              placeholder="Subject"
              required
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              placeholder="Your message"
              as="textarea"
              value={formData.message}
              rows={3}
              required
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{ textTransform: "uppercase", margin: "20px 20px 0px 0px" }}
            variant="outline-light"
          >
            Send Message
          </Button>
        </Form>
        <div id="appending_mail"></div>
        {/*
        {errors.name && <p className="error-message">{errors.name}</p>}
        {errors.email && <p className="error-message">{errors.email}</p>}
        {errors.message && <p className="error-message">{errors.message}</p>}
         Form fields and submit button here */}
      </div>
    </div>
  );
}
export default Contact;
