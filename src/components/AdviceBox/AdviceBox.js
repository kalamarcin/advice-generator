import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AdviceBox.scss'
import divider from '../../assets/images/pattern-divider-mobile.svg'
import dice from '../../assets/images/icon-dice.svg'

const AdviceBox = () => {
  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState('')

  const fetchData = () => {
    const API = 'https://api.adviceslip.com/advice'
    axios
      .get(API)
      .then(res => {
        const getAdviceId = res.data.slip.id
        const getAdvice = res.data.slip.advice

        setAdvice(getAdvice)
        setAdviceId(getAdviceId)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="box">
      <div className="box__id">ADVICE #{adviceId}</div>
      <div className="box__title">
      "{advice}"
      </div>
      <div className="box__divider">
        <img src={divider} alt="divider line" />
      </div>
      <div className="box__circle">
        <button onClick={fetchData}><img src={dice} alt="" /></button>
      </div>
    </section>
  )
}

export default AdviceBox
