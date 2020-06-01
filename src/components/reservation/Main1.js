import React from "react"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"

export default function Main1({ selectedDate, handleDayClick, styles, intl }) {
  return (
    <div>
      {selectedDate ? (
        <div className={styles.main__info}>
          {intl.formatMessage({ id: "reservation-main1-1" })} {selectedDate}
        </div>
      ) : (
        <div
          style={{ color: "var(--color-primary-dark)" }}
          className={styles.main__info}
        >
          {intl.formatMessage({ id: "reservation-main1-2" })}
        </div>
      )}
      <DayPicker
        disabledDays={[{ daysOfWeek: [1] }, { before: new Date() }]}
        onDayClick={handleDayClick}
        className={styles.dayPicker}
      />
    </div>
  )
}
