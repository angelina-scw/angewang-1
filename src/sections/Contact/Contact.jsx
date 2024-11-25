import styles from './ContactStyles.module.css';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '0d065636-cd68-4be7-b432-1734ec650666');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        alert("Thank you for reaching out! I've received your message 🙂");
        event.target.reset(); // Optionally reset the form
      } else {
        console.error('Submission failed:', result);
        alert(
          'An error occurred. Please try again or email me directly at angelinawang.sw@gmail.com!'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        'An error occurred. Please try again or email me directly at angelinawang.sw@gmail.com!'
      );
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <p>Get in touch or email me directly at angelinawang.sw@gmail.com 🙂</p>
      <br />
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
