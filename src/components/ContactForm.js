import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { RiMapPin5Line, RiPhoneLine, RiMailSendLine } from "react-icons/ri"
import styles from "../styles/components/contactForm.module.scss"

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const intl = useIntl()

  const submitContactForm = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className={styles.contact}>
      <form className={styles.form} onSubmit={submitContactForm}>
        <h1>{intl.formatMessage({ id: "contact-form-form-header" })}</h1>
        <div>
          <label htmlFor="name">
            {intl.formatMessage({ id: "contact-form-form-name" })}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            {intl.formatMessage({ id: "contact-form-form-email" })}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="msg">
            {intl.formatMessage({ id: "contact-form-form-msg" })}
          </label>
          <textarea id="msg" onChange={e => setName(e.target.value)}></textarea>
        </div>

        <button type="submit">Send</button>
      </form>

      <div className={styles.info}>
        <h1>{intl.formatMessage({ id: "contact-form-info-header" })}</h1>

        <div>
          <RiPhoneLine style={{ color: "green", fontSize: "3rem" }} />
          <p>06 82 30 70 51</p>
        </div>
        <div>
          <RiMailSendLine style={{ color: "purple", fontSize: "3rem" }} />
          <p>lacasa@example.com</p>
        </div>
        <div>
          <RiMapPin5Line style={{ color: "#d2aa5c", fontSize: "3rem" }} />
          <p>
            La Casa <br />
            Ostervenne 397 <br />
            1444XN Purmerend
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
