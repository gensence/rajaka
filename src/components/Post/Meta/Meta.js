import React from 'react'
import dayjs from 'dayjs'

const Meta = ({ date }) => (
  <div className="">
    <p className="">���J�� {dayjs(date).format('YYYY�NMM��DD��')}</p>
  </div>
)

export default Meta
