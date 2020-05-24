import React from "react"

export default function Main2({ time, chooseTime, styles }) {
  const times = [
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ]
  return (
    <div className={styles.main__times}>
      {time ? (
        <p className={styles.main__times_info}>You have selected: {time}</p>
      ) : (
        <p
          style={{ color: "var(--color-primary-dark)" }}
          className={styles.main__times_info}
        >
          Please select time
        </p>
      )}
      {times.map((time, i) => {
        return (
          <div key={i * 12.1437} onClick={() => chooseTime(time)}>
            {time}
          </div>
        )
      })}
    </div>
  )
}
