import { Container } from '@/components/Container'

const Dogs = ({ dog }) => {
  return (
    <>
      <div className="pt-20 md:pt-24">
        <Container>
          <p className="text-3xl font-bold text-gray-800 mb-8">Alla hundar</p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5 flex flex-col gap-1">
              <p className="text-xl text-gray-800 mb-2">Urval</p>
              <div className="form-check flex flex-row items-center gap-1">
                <input type="checkbox" className="rounded text-blue-500" />
                <label>Aktivitetsnivå: Hög(10)</label>
              </div>
              <div className="form-check flex flex-row items-center gap-1">
                <input type="checkbox" className="rounded text-blue-500" />
                <label>Aktivitetsnivå: Låg(3)</label>
              </div>
              <div className="form-check flex flex-row items-center gap-1">
                <input type="checkbox" className="rounded text-blue-500" />
                <label>Aktivitetsnivå: Låg-medium(25)</label>
              </div>
              <div className="form-check flex flex-row items-center gap-1">
                <input type="checkbox" className="rounded text-blue-500" />
                <label>Aktivitetsnivå: Medium(98)</label>
              </div>
            </div>
            <div className="w-full md:w-4/5">dogs placeholder</div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Dogs
