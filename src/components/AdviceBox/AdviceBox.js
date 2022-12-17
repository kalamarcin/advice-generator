import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AdviceBox.scss'

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
    .catch (
      err => {
        console.log(err)
      }
    )
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <section className="box">
      <div className="box__id">{adviceId}</div>
      <div className="box__title">{advice}</div>

      <button onClick={fetchData}> Click</button>
    </section>
  )
}

export default AdviceBox
