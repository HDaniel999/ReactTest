import React from 'react'

export default function FormSuscription (props) {
  return (
    <form>
      <label>Email:</label>
      <input name='email' type='email' value={props.email} onChange={props.onChange} />
    </form>
  )
}