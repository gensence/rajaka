import React from 'react'
import dayjs from 'dayjs'

const Meta = ({ date }) => (
  <div className="">
    <p className="">ŒöŠJ“ú {dayjs(date).format('YYYY”NMMŒŽDD“ú')}</p>
  </div>
)

export default Meta
