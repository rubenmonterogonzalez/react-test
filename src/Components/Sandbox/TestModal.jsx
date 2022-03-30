import React from 'react'
import ModalWrapper from '../../App/Common/Modals/ModalWrapper'

export default function TestModal({data}) {
  return (
    <>
      <ModalWrapper>
          <div>The data is: {data} </div>
      </ModalWrapper>
    </>
  )
}
