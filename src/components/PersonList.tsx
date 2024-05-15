import React from "react"
import { Name } from "./Person.types"

type PersonListProps = {
  nameList: Name[]
}

const PersonList = ({ nameList }: PersonListProps) => {
  return (
    <div>
      {nameList.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        )
      })}
    </div>
  )
}

export default PersonList
