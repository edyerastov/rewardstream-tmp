import React from 'react'
import Btn from './Btn'
import cs from './Btn.module.sass'

const WarnBtn = props => (
  <div className={cs.warn}>
     <Btn {...props} />
  </div>
)

const SuccessBtn = props => (
  <div className={cs.succes}>
     <Btn {...props} />
  </div>
)

const InfoBtn = props => (
  <div className={cs.info}>
     <Btn {...props} />
  </div>
)

const BigBtn = props => (
  <div className={cs.big}>
    <Btn {...props} />
  </div>
)

export {
  Btn,
  WarnBtn,
  SuccessBtn,
  InfoBtn,
  BigBtn
}