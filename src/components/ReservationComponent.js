import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import dateFormat from "dateformat"
import Main1 from "./reservation/Main1"
import Main2 from "./reservation/Main2"
import Main3 from "./reservation/Main3"
import Main4 from "./reservation/Main4"
import styles from "../styles/components/reservationComponent.module.scss"

export default function ReservationComponent() {
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [step, setStep] = useState(1)
  const [time, setTime] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [number, setNumber] = useState(undefined)

  const intl = useIntl()

  const reserve = e => {
    e.preventDefault()
    const allData = {
      name,
      email,
      phone,
      selectedDate,
      time,
      number,
    }
    console.log(allData)
  }
  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return
    }
    setSelectedDate(dateFormat(day, "dd.mm.yyyy"))
  }
  const chooseTime = time => {
    setTime(time)
  }
  const next = e => {
    e.preventDefault()
    if (step === 1) {
      if (!selectedDate) {
        return
      }
    }
    if (step === 2) {
      if (!time) {
        return
      }
    }
    if (step === 3) {
      if (!name || !email || !phone || !number || number < 1 || number > 6) {
        return
      }
    }
    setStep(prevState => prevState + 1)
  }
  const previous = e => {
    e.preventDefault()
    if (step === 1) {
      return
    }
    setStep(prevState => prevState - 1)
  }
  return (
    <form className={styles.reservation} onSubmit={reserve}>
      <div className={styles.count}>
        <p>
          {intl.formatMessage({ id: "reservation-step" })} <span>{step}</span>
        </p>
      </div>
      <div className={styles.main}>
        {step === 1 ? (
          <Main1
            selectedDate={selectedDate}
            handleDayClick={handleDayClick}
            styles={styles}
            intl={intl}
          />
        ) : step === 2 ? (
          <Main2
            time={time}
            chooseTime={chooseTime}
            styles={styles}
            intl={intl}
          />
        ) : step === 3 ? (
          <div>
            <Main3
              styles={styles}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              setNumber={setNumber}
              intl={intl}
            />
          </div>
        ) : (
          <Main4
            styles={styles}
            name={name}
            email={email}
            phone={phone}
            number={number}
            selectedDate={selectedDate}
            time={time}
            intl={intl}
          />
        )}
      </div>
      <div className={styles.buttons}>
        {step > 1 ? (
          <button className={styles.buttons__left} onClick={previous}>
            {intl.formatMessage({ id: "reservation-button-back" })}
          </button>
        ) : null}
        {step === 4 ? (
          <button
            className={styles.buttons__right}
            type="submit"
            onClick={reserve}
          >
            {intl.formatMessage({ id: "reservation-button-reserve" })}
          </button>
        ) : (
          <button className={styles.buttons__right} onClick={next}>
            {intl.formatMessage({ id: "reservation-button-next" })}
          </button>
        )}
      </div>
    </form>
  )
}
