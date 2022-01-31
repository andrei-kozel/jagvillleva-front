import React from 'react'
import { PawItem } from './item'

const list = [
  { title: 'Förmedlad från', text: 'Coolronan Dog Rescue' },
  { title: 'Befinner sig nu', text: 'I sin familj i Vingåker' },
  { title: 'Kan bo med hundar', text: 'Ja' },
  { title: 'Fungerar med katt', text: '' },
  { title: 'Kan bo med barn i åldern', text: 'Ska enbart bo med vuxna' },
  { title: 'Vilken miljö passar', text: 'Kan bo i lugnare område' },
  { title: 'Aktivitetsnivå', text: 'Medium' },
  { title: 'Adoptörens hundvana', text: ' Har hundvana sen tidigare' }
]

export const PawList = () => {
  return (
    <div className="w-full">
      {list.map(
        (item, index) =>
          item.title && (
            <PawItem
              title={item.title}
              text={item.text ? item.text : 'Vet ej'}
              key={index}
            />
          )
      )}
    </div>
  )
}
