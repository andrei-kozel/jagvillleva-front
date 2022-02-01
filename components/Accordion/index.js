import React, { useState } from 'react'
import { AccordionItem } from '@/components/Accordion/AccordionItem.js'

export const Accordion = ({}) => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div>
      <AccordionItem
        title="Viktigt att läsa igenom innan du läser vidare!"
        text="Vi kastrerar inte hundar förrän i 7 månader.
              Ingen hund 4-6 månader kan garanteras vara rumsren.
              Ingen hund kan vänta på dig i en bur tills den är 7 månader gammal för att kastreras.
              Vi har inga små hundar med stamtavlor och hundar som väger runt 3 kg.
              Vi kan inte svara på frågor dygnet runt.
              Kuratorn kan vägra dig att adoptera hunden trots att du tror att du är en superfamilj för hunden.
              Vi tar inte med hundar till ditt hem.
              Din hund kan inte gå till Sverige på en separat resa.
              En hund kan inte komma till Sverige och vänta i en annan familj tills du har ledig tid.
              Vi accepterar inte delbetalningar.
              Vi kan inte sälja en hund som redan har bokats till ett högre pris, det här är ingen auktion.
              Vi kan inte övertyga kuratorn att ge dig den hunden du gillar, kuratorn fattar beslutet självständigt. Vi ignorerar inte dina meddelanden (många meddelanden hamnar i skräppost).
              Det finns ingen karantän i Sverige.
              Vi svarar inte på samtal utan föregående överenskommelse (skriv SMS så ringer jag tillbaka).
              Vi ger inte hundar som en "
      />
      <AccordionItem
        title="Viktigt att läsa igenom innan du läser vidare!"
        text="Vi kastrerar inte hundar förrän i 7 månader.
              Ingen hund 4-6 månader kan garanteras vara rumsren.
              Ingen hund kan vänta på dig i en bur tills den är 7 månader gammal för att kastreras.
              Vi har inga små hundar med stamtavlor och hundar som väger runt 3 kg.
              Vi kan inte svara på frågor dygnet runt.
              Kuratorn kan vägra dig att adoptera hunden trots att du tror att du är en superfamilj för hunden.
              Vi tar inte med hundar till ditt hem.
              Din hund kan inte gå till Sverige på en separat resa.
              En hund kan inte komma till Sverige och vänta i en annan familj tills du har ledig tid.
              Vi accepterar inte delbetalningar.
              Vi kan inte sälja en hund som redan har bokats till ett högre pris, det här är ingen auktion.
              Vi kan inte övertyga kuratorn att ge dig den hunden du gillar, kuratorn fattar beslutet självständigt. Vi ignorerar inte dina meddelanden (många meddelanden hamnar i skräppost).
              Det finns ingen karantän i Sverige.
              Vi svarar inte på samtal utan föregående överenskommelse (skriv SMS så ringer jag tillbaka).
              Vi ger inte hundar som en "
      />
    </div>
  )
}
