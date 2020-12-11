import React from 'react'
import dayjs from 'dayjs'

const Meta = ({ date }) => (
  <div className="">
    <p className="">公開日 {dayjs(date).format('YYYY年MM月DD日')}</p>
  </div>
)

export default Meta
