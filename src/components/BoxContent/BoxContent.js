import React from 'react'
import '../AdviceBox/AdviceBox.scss'

const BoxContent = ({ advice, adviceId, fetchData, divider, dice }) => {
  return (
    <section className="box">
      <div className="box__id">ADVICE #{adviceId}</div>
      <div className="box__title">"{advice}"</div>
      <div className="box__divider">
        <img src={divider} alt="divider line" />
      </div>
      <div className="box__circle">
        <button onClick={fetchData}>
          <img src={dice} alt="" />
        </button>
      </div>
    </section>
  )
}

export default BoxContent
