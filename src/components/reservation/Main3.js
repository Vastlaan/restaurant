import React from "react"

export default function Main3({
  styles,
  setName,
  setEmail,
  setPhone,
  setNumber,
}) {
  return (
    <div className={styles.main__data}>
      <h3 className={styles.info}>All fields are required</h3>
      <div className={styles.main__data_field}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="tel">Your Phone Number:</label>
        <input
          type="tel"
          name="phone"
          onChange={e => setPhone(e.target.value)}
          required
        />
      </div>
      <div className={styles.main__data_field}>
        <label htmlFor="number">How many guests:</label>
        <h6>Maximum 6 person</h6>
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
