import React from "react"

export default function Main3({
  styles,
  setName,
  setEmail,
  setPhone,
  setNumber,
  intl,
}) {
  return (
    <div className={styles.main__data}>
      <h3 className={styles.info}>
        {intl.formatMessage({ id: "reservation-main3-header" })}
      </h3>
      <div className={styles.main__data_field}>
        <label htmlFor="name">
          {intl.formatMessage({ id: "reservation-main3-name" })}
        </label>
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="email">
          {intl.formatMessage({ id: "reservation-main3-email" })}
        </label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="tel">
          {intl.formatMessage({ id: "reservation-main3-phone" })}
        </label>
        <input
          type="tel"
          name="phone"
          onChange={e => setPhone(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="number">
          {intl.formatMessage({ id: "reservation-main3-guests" })}
        </label>
        <h6>{intl.formatMessage({ id: "reservation-main3-max" })}</h6>
        <input
          type="number"
          name="number"
          min="1"
          max="6"
          onChange={e => setNumber(e.target.value)}
          required
        />
      </div>
    </div>
  )
}
