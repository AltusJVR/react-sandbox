import mod from "../../functions/mod";
import { next } from "../../functions/mod";

import "./Calculations.scss";
const Calculations = (props) => {
  const { HasSeed, SeedNum, calcArray } = props;

  if (!HasSeed) {
    return (
      <section>
        <h1>Please enter a seed number.</h1>
      </section>
    );
  }
  if (SeedNum && HasSeed) {
    return (
      <section>
        <h1>Calculations</h1>
        <h3>Seednumber: {SeedNum}</h3>
        <div className="calculations">
          {calcArray.map((num, index) => {
            return (
              <div className="calc" key={index}>
                <h4>X: {num}</h4>
                <p>{mod(num)}</p>
                <span className="arrow">→ {next(num)}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Calculations;