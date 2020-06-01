import React from "react"

export default function Main4({
  styles,
  name,
  email,
  phone,
  number,
  selectedDate,
  time,
  intl,
}) {
  return (
    <div className={styles.main__confirmation}>
      <p>
        {intl.formatMessage({ id: "reservation-main3-name" })} {name}
      </p>
      <p>
        {intl.formatMessage({ id: "reservation-main3-email" })} {email}
      </p>
      <p>
        {intl.formatMessage({ id: "reservation-main3-phone" })} {phone}
      </p>
      <p>
        {intl.formatMessage({ id: "reservation-main4-selectedDate" })}{" "}
        {selectedDate}
      </p>
      <p>
        {intl.formatMessage({ id: "reservation-main4-selectedTime" })} {time}
      </p>
      <p>
        {intl.formatMessage({ id: "reservation-main4-number" })} {number}
      </p>
      <h6>{intl.formatMessage({ id: "reservation-main4-disclaimer" })}</h6>
    </div>
  )
}
