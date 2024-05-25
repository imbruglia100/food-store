import ProduceDetails from './ProduceDetails';
import { useSelector } from 'react-redux';
import './ProduceList.css';

function ProduceList() {
  const produceArr = Object.values(useSelector(state=> state.produce));


  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
