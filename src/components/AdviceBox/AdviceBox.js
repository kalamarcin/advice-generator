import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AdviceBox.scss'
import divider from '../../assets/images/pattern-divider-mobile.svg'
import dice from '../../assets/images/icon-dice.svg'
import BoxContent from '../BoxContent/BoxContent'

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
    <>
      <BoxContent divider={divider} fetchData={fetchData} dice={dice} advice={advice} adviceId={adviceId} />
    </>
  )
}

export default AdviceBox
