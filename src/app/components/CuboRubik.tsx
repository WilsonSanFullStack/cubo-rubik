import React from "react";
const clases = [
  {
    w1: 'white'
  },
  {
    r1: 'red'
  },
  {
    b1: 'blue'
  },
  {
    o1: 'orange'
  },
  {
    g1: 'green'
  },
  {
    y1: 'yellow'
  },
  {
    w2: 'white'
  },
  {
    y2: 'yellow'
  },
]
const CuboRubik = () => {

  const white:White = {
    a: 'w1',
    b: 'w2',
    c: 'w3',
    d: 'w4',
    e: 'w5',
    f: 'w6',
    g: 'w7',
    h: 'w8',
    i: 'w9'
  }
  const yellow:Yellow = {
    a: 'w1',
    b: 'w2',
    c: 'w3',
    d: 'w4',
    e: 'w5',
    f: 'w6',
    g: 'w7',
    h: 'w8',
    i: 'w9'
  }

  return (
    <div className="w-2/5 m-4  justify-center items-center">
      <div className="containerCara">
        {/*//todo section color green */}
        <section className="cara">
          <div className="green">G9</div>
          <div className="green">G6</div>
          <div className="green">G7</div>
          <div className="green">G8</div>
          <div className="green">G5</div>
          <div className="green">G4</div>
          <div className="green">G1</div>
          <div className="green">G2</div>
          <div className="green">G3</div>
        </section>
      </div>

      <div className="containerCara3">
        {/*//todo section color red */}
        <section className="cara">
          <div className="red">R9</div>
          <div className="red">R8</div>
          <div className="red">R1</div>
          <div className="red">R2</div>
          <div className="red">R5</div>
          <div className="red">R4</div>
          <div className="red">R3</div>
          <div className="red">R6</div>
          <div className="red">R7</div>
        </section>
        {/*//todo section color white */}
        <section className="cara">
          <div className="white">{white.a}</div>
          <div className="white">{white.b}</div>
          <div className="white">{white.c}</div>
          <div className="white">{white.d}</div>
          <div className="white">{white.e}</div>
          <div className="white">{white.f}</div>
          <div className="white">{white.g}</div>
          <div className="white">{white.h}</div>
          <div className="white">{white.i}</div>
        </section>
        {/*//todo section color orange */}
        <section className="cara">
          <div className="orange">O3</div>
          <div className="orange">O4</div>
          <div className="orange">O7</div>
          <div className="orange">O6</div>
          <div className="orange">O5</div>
          <div className="orange">O8</div>
          <div className="orange">O9</div>
          <div className="orange">O2</div>
          <div className="orange">O1</div>
        </section>
      </div>

      <div className="containerCara">
        {/*//todo section color blue */}
        <section className="cara">
          <div className="blue">B7</div>
          <div className="blue">B8</div>
          <div className="blue">B9</div>
          <div className="blue">B6</div>
          <div className="blue">B5</div>
          <div className="blue">B2</div>
          <div className="blue">B3</div>
          <div className="blue">B4</div>
          <div className="blue">B1</div>
        </section>
      </div>

      <div className="containerCara">
        {/*//todo section color yellow */}
        <section className="cara">
          <div className="yellow">Y9</div>
          <div className="yellow">Y6</div>
          <div className="yellow">Y7</div>
          <div className="yellow">Y2</div>
          <div className="yellow">Y5</div>
          <div className="yellow">Y8</div>
          <div className="yellow">Y3</div>
          <div className="yellow">Y4</div>
          <div className="yellow">Y1</div>
        </section>
      </div>
    </div>
  );
};

export default CuboRubik;
