import React from "react"

export default function Main4({
  styles,
  name,
  email,
  phone,
  number,
  selectedDate,
  time,
}) {
  return (
    <div className={styles.main__confirmation}>
      <p>Your Name: {name}</p>
      <p>Your Email: {email}</p>
      <p>Your Phone: {phone}</p>
      <p>Selected Date: {selectedDate}</p>
      <p>Selected Time : {time}</p>
      <p>Number of guests : {number}</p>
      <h6>
        By clicking the Reserve button I confirm that all guests have no
        sympthoms related to corona virus, like fever, runny nose, caughing etc.{" "}
      </h6>
    </div>
  )
}
