import React from 'react'

function createItem (handler, program) {
  return (<li key={program.id} onClick={() => handler(program)}>{program.name}</li>)
}

function closureHandler (handler) {
  return function (program) {
    return createItem(handler, program)
  }
}

export default function SectionPrograms ({ programs = [], ...props }) {
  const itemCreator = closureHandler(props.onClick)
  const items = programs.map(itemCreator)
  return (
    <section>
      <h2>Programas</h2>
      <ul>
        {items}
      </ul>
    </section>
  )
}