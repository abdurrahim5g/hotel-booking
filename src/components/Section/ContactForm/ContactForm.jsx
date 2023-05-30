import SectionHeading from "../../SectionHeading/SectionHeading";
import "./ContactForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <section className="contact-form-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title="Contact us"
              subtitle={"Know More"}
            ></SectionHeading>
          </div>
        </div>

        <div className="row contact-form-row">
          <div className="col-lg-6 mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your valueble commment"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
