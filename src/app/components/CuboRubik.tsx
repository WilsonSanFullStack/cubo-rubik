"use client";
import { useEffect, useState } from "react";
import {
  TiArrowLeftThick,
  TiArrowRightThick,
  TiArrowDownThick,
  TiArrowUpThick,
} from "react-icons/ti";

const CuboRubik = () => {
  const resuelto: Resuelto = {
    w1: "w1",
    w2: "w2",
    w3: "w3",
    w4: "w4",
    w5: "w5",
    w6: "w6",
    w7: "w7",
    w8: "w8",
    w9: "w9",
    y1: "y1",
    y2: "y2",
    y3: "y3",
    y4: "y4",
    y5: "y5",
    y6: "y6",
    y7: "y7",
    y8: "y8",
    y9: "y9",
    r1: "r1",
    r2: "r2",
    r3: "r3",
    r4: "r4",
    r5: "r5",
    r6: "r6",
    r7: "r7",
    r8: "r8",
    r9: "r9",
    o1: "o1",
    o2: "o2",
    o3: "o3",
    o4: "o4",
    o5: "o5",
    o6: "o6",
    o7: "o7",
    o8: "o8",
    o9: "o9",
    g1: "g1",
    g2: "g2",
    g3: "g3",
    g4: "g4",
    g5: "g5",
    g6: "g6",
    g7: "g7",
    g8: "g8",
    g9: "g9",
    b1: "b1",
    b2: "b2",
    b3: "b3",
    b4: "b4",
    b5: "b5",
    b6: "b6",
    b7: "b7",
    b8: "b8",
    b9: "b9",
  };
  const [resolviendo, setResolviendo] = useState<Resolviendo>({
    w1: "w1", //esquina con g1 y r1
    w2: "w2", //arista con g2
    w3: "w3", //esquina con g3 y o3
    w4: "w4", //arista con r4
    w5: "w5", //centro
    w6: "w6", //arista con o6
    w7: "w7", //esquina con r7 y b7
    w8: "w8", //arista con b8
    w9: "w9", //esquina con o9 y b9

    y1: "y1", //esquina con b1 y o1
    y2: "y2", //arista con  r2
    y3: "y3", //esquina con b3 y r3
    y4: "y4", //arista con b4
    y5: "y5", //centro centro
    y6: "y6", //arista con g6
    y7: "y7", //esquina con g7 y o7
    y8: "y8", //arista con  o8
    y9: "y9", //esquina con g9 y r9

    r1: "r1", //esquina con w1 y g1
    r2: "r2", //arista con y2
    r3: "r3", //esquina con y3 y b3
    r4: "r4", //arista con  w4
    r5: "r5", //centro //centro
    r6: "r6", //arista con b6
    r7: "r7", //esquina con w7 y b7
    r8: "r8", //arista con  g8
    r9: "r9", //esquina con y9 g9

    o1: "o1", //esquina con y1 y b1
    o2: "o2", //arista con b2
    o3: "o3", //esquina con g3 y w3
    o4: "o4", //arista con g4
    o5: "o5", //centro //centro
    o6: "o6", //arista con w6
    o7: "o7", //esquina con g7 y y7
    o8: "o8", //arista con  y8
    o9: "o9", //esquina con w9 y b9

    g1: "g1", //esquina con w1 y r1
    g2: "g2", //arista con w2
    g3: "g3", //esquina con w3 y o3
    g4: "g4", //arista con  o4
    g5: "g5", //centro //centro
    g6: "g6", //arista con y6
    g7: "g7", //esquina con y7 y o7
    g8: "g8", //arista con r8
    g9: "g9", //esquina con y9 yr9

    b1: "b1", //esquina con y1 yo1
    b2: "b2", //arista con o2
    b3: "b3", //esquina con y3 y r3
    b4: "b4", //arista con y4
    b5: "b5", //centro //centro
    b6: "b6", //arista con r6
    b7: "b7", //esquina con w7 y r7
    b8: "b8", //arista con w8
    b9: "b9", //esquina con w9 y o9
  });

  function contarIguales(resuelto: Resuelto, resolviendo: Resolviendo): number {
    let coincidencias = 0;
    const coincidenciasPorPropiedad: Coincidencias = {};
    for (const key in resuelto) {
      if (
        resuelto.hasOwnProperty(key) &&
        resolviendo.hasOwnProperty(key) &&
        resuelto[key as keyof Resuelto] ===
          resolviendo[key as keyof Resolviendo]
      ) {
        coincidencias++;
        coincidenciasPorPropiedad[key as keyof Resuelto] = true;
      } else {
        coincidenciasPorPropiedad[key as keyof Resuelto] = false;
      }
    }
    return coincidencias;
  }
  const cantidadCoincidencias = contarIguales(resuelto, resolviendo);
  const a: Resolviendo = resolviendo;

  function rotacionU() {
    setResolviendo({
      ...resolviendo,
      w1: a.w7,
      w2: a.w4,
      w3: a.w1,
      w4: a.w8,
      w6: a.w2,
      w7: a.w9,
      w8: a.w6,
      w9: a.w3,
      g1: a.o7,
      g2: a.o4,
      g3: a.o1,
      b7: a.r9,
      b8: a.r6,
      b9: a.r3,
      r3: a.g1,
      r6: a.g2,
      r9: a.g3,
      o1: a.b7,
      o4: a.b8,
      o7: a.b9,
    });
  }
  function rotacionUp() {
    setResolviendo({
      ...resolviendo,
      w1: a.w3,
      w2: a.w6,
      w3: a.w9,
      w4: a.w2,
      w6: a.w8,
      w7: a.w1,
      w8: a.w4,
      w9: a.w7,
      g1: a.r3,
      g2: a.r6,
      g3: a.r9,
      b7: a.o1,
      b8: a.o4,
      b9: a.o7,
      r3: a.b9,
      r6: a.b8,
      r9: a.b7,
      o1: a.g3,
      o4: a.g2,
      o7: a.g1,
    });
  }

  function rotacionD() {
    setResolviendo({
      ...resolviendo,
      y1: a.y3,
      y2: a.y6,
      y3: a.y9,
      y4: a.y2,
      y6: a.y8,
      y7: a.y1,
      y8: a.y4,
      y9: a.y7,
      b3: a.o9,
      b4: a.o2,
      b1: a.o3,
      g9: a.r7,
      g6: a.r8,
      g7: a.r1,
      r1: a.b3,
      r8: a.b4,
      r7: a.b1,
      o3: a.g9,
      o2: a.g6,
      o9: a.g7,
    });
  }
  function rotacionDp() {
    setResolviendo({
      ...resolviendo,
      y1: a.y7,
      y2: a.y4,
      y3: a.y1,
      y4: a.y8,
      y6: a.y2,
      y7: a.y9,
      y8: a.y6,
      y9: a.y3,
      b3: a.r1,
      b4: a.r8,
      b1: a.r7,
      g9: a.o3,
      g6: a.o2,
      g7: a.o9,
      r7: a.g9,
      r8: a.g6,
      r1: a.g7,
      o3: a.b1,
      o2: a.b4,
      o9: a.b3,
    });
  }

  function rotacionL() {
    setResolviendo({
      ...resolviendo,
      w1: a.g9,
      w4: a.g8,
      w7: a.g1,
      o1: a.o9,
      o2: a.o6,
      o3: a.o7,
      o4: a.o8,
      o6: a.o4,
      o7: a.o1,
      o8: a.o2,
      o9: a.o3,
      b3: a.w7,
      b6: a.w4,
      b7: a.w1,
      g1: a.y9,
      g8: a.y2,
      g9: a.y3,
      y3: a.b7,
      y2: a.b6,
      y9: a.b3,
    });
  }
  function rotacionLp() {
    setResolviendo({
      ...resolviendo,
      w1: a.b7,
      w4: a.b6,
      w7: a.b3,
      o1: a.o7,
      o2: a.o8,
      o3: a.o9,
      o4: a.o6,
      o6: a.o2,
      o7: a.o3,
      o8: a.o4,
      o9: a.o1,
      b3: a.y9,
      b6: a.y2,
      b7: a.y3,
      g1: a.w7,
      g8: a.w4,
      g9: a.w1,
      y2: a.g8,
      y3: a.g9,
      y9: a.g1,
    });
  }

  function rotacionR() {
    setResolviendo({
      ...resolviendo,
      w3: a.b9,
      w6: a.b2,
      w9: a.b1,
      r1: a.r7,
      r2: a.r8,
      r3: a.r9,
      r4: a.r6,
      r6: a.r2,
      r7: a.r3,
      r8: a.r4,
      r9: a.r1,
      b1: a.y7,
      b2: a.y8,
      b9: a.y1,
      y1: a.g7,
      y7: a.g3,
      y8: a.g4,
      g3: a.w9,
      g4: a.w6,
      g7: a.w3,
    });
  }
  function rotacionRp() {
    setResolviendo({
      ...resolviendo,
      w3: a.g7,
      w6: a.g4,
      w9: a.g3,
      r1: a.r9,
      r2: a.r6,
      r3: a.r7,
      r4: a.r8,
      r6: a.r4,
      r7: a.r1,
      r8: a.r2,
      r9: a.r3,
      b1: a.w9,
      b2: a.w6,
      b9: a.w3,
      y1: a.b9,
      y7: a.b1,
      y8: a.b2,
      g3: a.y7,
      g4: a.y8,
      g7: a.y1,
    });
  }

  function rotacionF() {
    setResolviendo({
      ...resolviendo,
      b1: a.b9,
      b2: a.b8,
      b3: a.b1,
      b4: a.b2,
      b6: a.b4,
      b7: a.b3,
      b8: a.b6,
      b9: a.b7,
      w9: a.o7,
      w8: a.o6,
      w7: a.o3,
      y1: a.r9,
      y4: a.r2,
      y3: a.r1,
      o7: a.y3,
      o6: a.y4,
      o3: a.y1,
      r1: a.w9,
      r2: a.w8,
      r9: a.w7,
    });
  }
  function rotacionFp() {
    setResolviendo({
      ...resolviendo,
      b1: a.b3,
      b2: a.b4,
      b3: a.b7,
      b4: a.b6,
      b6: a.b8,
      b7: a.b9,
      b8: a.b2,
      b9: a.b1,
      w9: a.r1,
      w8: a.r2,
      w7: a.r9,
      y1: a.o3,
      y4: a.o6,
      y3: a.o7,
      o7: a.w9,
      o6: a.w8,
      o3: a.w7,
      r1: a.y3,
      r2: a.y4,
      r9: a.y1,
    });
  }

  function rotacionB() {
    setResolviendo({
      ...resolviendo,
      g1: a.g3,
      g2: a.g4,
      g3: a.g7,
      g4: a.g6,
      g6: a.g8,
      g7: a.g9,
      g8: a.g2,
      g9: a.g1,
      o1: a.w3,
      o8: a.w2,
      o9: a.w1,
      r3: a.y7,
      r4: a.y6,
      r7: a.y9,
      w1: a.r3,
      w2: a.r4,
      w3: a.r7,
      y7: a.o9,
      y6: a.o8,
      y9: a.o1,
    });
  }
  function rotacionBp() {
    setResolviendo({
      ...resolviendo,
      g1: a.g9,
      g2: a.g8,
      g3: a.g1,
      g4: a.g2,
      g6: a.g4,
      g7: a.g3,
      g8: a.g6,
      g9: a.g7,
      o1: a.y9,
      o8: a.y6,
      o9: a.y7,
      r3: a.w1,
      r4: a.w2,
      r7: a.w3,
      w1: a.o9,
      w2: a.o8,
      w3: a.o1,
      y7: a.r3,
      y6: a.r4,
      y9: a.r7,
    });
  }
  function desarmarCubo() {
    setResolviendo({
      ...resolviendo,
      b1: "w3",
      b2: "b4",
      b3: "b7",
      b4: "r2",
      b5: "b5",
      b6: "w4",
      b7: "r7",
      b8: "y2",
      b9: "y1",
      g1: "g1",
      g2: "w8",
      g3: "y3",
      g4: "o8",
      g5: "g5",
      g6: "w6",
      g7: "r9",
      g8: "r8",
      g9: "g9",
      o1: "o1",
      o2: "g2",
      o3: "w7",
      o4: "g6",
      o5: "o5",
      o6: "o4",
      o7: "g7",
      o8: "y8",
      o9: "o9",
      r1: "g3",
      r2: "y4",
      r3: "o3",
      r4: "g8",
      r5: "r5",
      r6: "g4",
      r7: "w9",
      r8: "b6",
      r9: "r1",
      w1: "w1",
      w2: "b8",
      w3: "b3",
      w4: "y6",
      w5: "w5",
      w6: "r4",
      w7: "y7",
      w8: "o2",
      w9: "b1",
      y1: "r3",
      y2: "w2",
      y3: "o7",
      y4: "b2",
      y5: "y5",
      y6: "r6",
      y7: "b9",
      y8: "o6",
      y9: "y9",
    });
  }
  function caraAmarilla() {
    setResolviendo({
      ...resolviendo,
      b1: a.b9,
      b2: a.b2,
      b3: a.b7,
      b4: a.b8,
      b5: a.b5,
      b6: a.b6,
      b7: a.b3,
      b8: a.b4,
      b9: a.b1,
      g1: a.g9,
      g2: a.g6,
      g3: a.g7,
      g4: a.g4,
      g5: a.g5,
      g6: a.g2,
      g7: a.g3,
      g8: a.g8,
      g9: a.g1,
      o1: a.o9,
      o2: a.o4,
      o4: a.o2,
      o3: a.o7,
      o5: a.o5,
      o6: a.o6,
      o7: a.o3,
      o8: a.o8,
      o9: a.o1,
      r1: a.r9,
      r2: a.r2,
      r3: a.r7,
      r4: a.r4,
      r5: a.r5,
      r6: a.r8,
      r7: a.r3,
      r8: a.r6,
      r9: a.r1,
      w1: a.y9,
      w2: a.y6,
      w3: a.y7,
      w4: a.y2,
      w5: a.y5,
      w6: a.y8,
      w7: a.y3,
      w8: a.y4,
      w9: a.y1,
      y1: a.w9,
      y2: a.w4,
      y3: a.w7,
      y4: a.w8,
      y5: a.w5,
      y6: a.w2,
      y7: a.w3,
      y8: a.w6,
      y9: a.w1,
    });
  }
  function armado() {
    setResolviendo(
      resuelto
    )
  }
  console.log(resolviendo);
  return (
    <div className="w-2/5 m-4  justify-center items-center">
      <h1>Hay </h1>
      <h1>{cantidadCoincidencias}</h1> <h1>fichas bien puestas</h1>
      {/* //* postura de botones  */}
      <section className="m-1 grid grid-cols-6 border- bg-slate-500">
        <button className="btn" onClick={desarmarCubo}>
          desarmar cubo
        </button>
        <button className="btn" onClick={caraAmarilla}>
          cara amarilla
        </button>
        <button className="btn" onClick={armado}>
          cubo armado
        </button>
      </section>
      <div className="containerCaras">

      <div className="containerCara">
        {/*//todo section color green*/}
        <section className="caraGreen">
          <div
            className={
              resolviendo.g9[0] === "w"
                ? "white ygo9"
                : resolviendo.g9[0] === "y"
                ? "yellow ygo9"
                : resolviendo.g9[0] === "r"
                ? "red ygo9"
                : resolviendo.g9[0] === "o"
                ? "orange ygo9"
                : resolviendo.g9[0] === "b"
                ? "blue ygo9"
                : resolviendo.g9[0] === "g"
                ? "green ygo9"
                : "noColor"
            }
          >
            {/* {resolviendo.g9} */}
            <button className="btn" onClick={rotacionD}>
              d<TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.g6[0] === "w"
                ? "white"
                : resolviendo.g6[0] === "y"
                ? "yellow"
                : resolviendo.g6[0] === "r"
                ? "red"
                : resolviendo.g6[0] === "o"
                ? "orange"
                : resolviendo.g6[0] === "b"
                ? "blue"
                : resolviendo.g6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g6} */}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white ygr7"
                : resolviendo.g7[0] === "y"
                ? "yellow ygr7"
                : resolviendo.g7[0] === "r"
                ? "red ygr7"
                : resolviendo.g7[0] === "o"
                ? "orange ygr7"
                : resolviendo.g7[0] === "b"
                ? "blue ygr7"
                : resolviendo.g7[0] === "g"
                ? "green ygr7"
                : "noColor"
            }
          >
            {/* {resolviendo.g7} */}
            <button className="btn" onClick={rotacionDp}>
              d`
              <TiArrowRightThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.g8[0] === "w"
                ? "white"
                : resolviendo.g8[0] === "y"
                ? "yellow"
                : resolviendo.g8[0] === "r"
                ? "red"
                : resolviendo.g8[0] === "o"
                ? "orange"
                : resolviendo.g8[0] === "b"
                ? "blue"
                : resolviendo.g8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g8} */}
            <button className="btn" onClick={rotacionLp}>
              l`
              <TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.g5[0] === "w"
                ? "white"
                : resolviendo.g5[0] === "y"
                ? "yellow"
                : resolviendo.g5[0] === "r"
                ? "red"
                : resolviendo.g5[0] === "o"
                ? "orange"
                : resolviendo.g5[0] === "b"
                ? "blue"
                : resolviendo.g5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g5} */}
          </div>
          <div
            className={
              resolviendo.g4[0] === "w"
                ? "white"
                : resolviendo.g4[0] === "y"
                ? "yellow"
                : resolviendo.g4[0] === "r"
                ? "red"
                : resolviendo.g4[0] === "o"
                ? "orange"
                : resolviendo.g4[0] === "b"
                ? "blue"
                : resolviendo.g4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g4} */}
            <button className="btn" onClick={rotacionR}>
              r<TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.g1[0] === "w"
                ? "white wg01"
                : resolviendo.g1[0] === "y"
                ? "yellow wg01"
                : resolviendo.g1[0] === "r"
                ? "red wg01"
                : resolviendo.g1[0] === "o"
                ? "orange wg01"
                : resolviendo.g1[0] === "b"
                ? "blue wg01"
                : resolviendo.g1[0] === "g"
                ? "green wg01"
                : "noColor"
            }
          >
            {/* {resolviendo.g1} */}
            <button className="btn" onClick={rotacionUp}>
              u`
              <TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.g2[0] === "w"
                ? "white"
                : resolviendo.g2[0] === "y"
                ? "yellow"
                : resolviendo.g2[0] === "r"
                ? "red"
                : resolviendo.g2[0] === "o"
                ? "orange"
                : resolviendo.g2[0] === "b"
                ? "blue"
                : resolviendo.g2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g2} */}
          </div>
          <div
            className={
              resolviendo.g3[0] === "w"
                ? "white wrg3"
                : resolviendo.g3[0] === "y"
                ? "yellow wrg3"
                : resolviendo.g3[0] === "r"
                ? "red wrg3"
                : resolviendo.g3[0] === "o"
                ? "orange wrg3"
                : resolviendo.g3[0] === "b"
                ? "blue wrg3"
                : resolviendo.g3[0] === "g"
                ? "green wrg3"
                : "noColor"
            }
          >
            {/* {resolviendo.g3} */}
            <button className="btn" onClick={rotacionU}>
              u<TiArrowRightThick className="m-auto" />
            </button>
          </div>
        </section>
      </div>
      <div className="containerCara3">
        {/*//todo section color orange */}
        <section className="caraOrange">
          <div
            className={
              resolviendo.o9[0] === "w"
                ? "white ygo9"
                : resolviendo.o9[0] === "y"
                ? "yellow ygo9"
                : resolviendo.o9[0] === "r"
                ? "red ygo9"
                : resolviendo.o9[0] === "o"
                ? "orange ygo9"
                : resolviendo.o9[0] === "b"
                ? "blue ygo9"
                : resolviendo.o9[0] === "g"
                ? "green ygo9"
                : "noColor"
            }
          >
            {/* {resolviendo.o9} */}
            <button className="btn" onClick={rotacionDp}>
              d`
              <TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.o8[0] === "w"
                ? "white"
                : resolviendo.o8[0] === "y"
                ? "yellow"
                : resolviendo.o8[0] === "r"
                ? "red"
                : resolviendo.o8[0] === "o"
                ? "orange"
                : resolviendo.o8[0] === "b"
                ? "blue"
                : resolviendo.o8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o8} */}
            <button className="btn" onClick={rotacionB}>
              b<TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.o1[0] === "w"
                ? "white wg01"
                : resolviendo.o1[0] === "y"
                ? "yellow wg01"
                : resolviendo.o1[0] === "r"
                ? "red wg01"
                : resolviendo.o1[0] === "o"
                ? "orange wg01"
                : resolviendo.o1[0] === "b"
                ? "blue wg01"
                : resolviendo.o1[0] === "g"
                ? "green wg01"
                : "noColor"
            }
          >
            {/* {resolviendo.o1} */}
            <button className="btn" onClick={rotacionU}>
              u<TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.o2[0] === "w"
                ? "white"
                : resolviendo.o2[0] === "y"
                ? "yellow"
                : resolviendo.o2[0] === "r"
                ? "red"
                : resolviendo.o2[0] === "o"
                ? "orange"
                : resolviendo.o2[0] === "b"
                ? "blue"
                : resolviendo.o2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o2} */}
          </div>
          <div
            className={
              resolviendo.o5[0] === "w"
                ? "white"
                : resolviendo.o5[0] === "y"
                ? "yellow"
                : resolviendo.o5[0] === "r"
                ? "red"
                : resolviendo.o5[0] === "o"
                ? "orange"
                : resolviendo.o5[0] === "b"
                ? "blue"
                : resolviendo.o5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o5} */}
          </div>
          <div
            className={
              resolviendo.o4[0] === "w"
                ? "white"
                : resolviendo.o4[0] === "y"
                ? "yellow"
                : resolviendo.o4[0] === "r"
                ? "red"
                : resolviendo.o4[0] === "o"
                ? "orange"
                : resolviendo.o4[0] === "b"
                ? "blue"
                : resolviendo.o4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o4} */}
          </div>
          <div
            className={
              resolviendo.o3[0] === "w"
                ? "white yob3"
                : resolviendo.o3[0] === "y"
                ? "yellow yob3"
                : resolviendo.o3[0] === "r"
                ? "red yob3"
                : resolviendo.o3[0] === "o"
                ? "orange yob3"
                : resolviendo.o3[0] === "b"
                ? "blue yob3"
                : resolviendo.o3[0] === "g"
                ? "green yob3"
                : "noColor"
            }
          >
            {/* {resolviendo.o3} */}
            <button className="btn" onClick={rotacionD}>
              d<TiArrowDownThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.o6[0] === "w"
                ? "white"
                : resolviendo.o6[0] === "y"
                ? "yellow"
                : resolviendo.o6[0] === "r"
                ? "red"
                : resolviendo.o6[0] === "o"
                ? "orange"
                : resolviendo.o6[0] === "b"
                ? "blue"
                : resolviendo.o6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o6} */}
            <button className="btn" onClick={rotacionFp}>
              f`
              <TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.o7[0] === "w"
                ? "white wob7"
                : resolviendo.o7[0] === "y"
                ? "yellow wob7"
                : resolviendo.o7[0] === "r"
                ? "red wob7"
                : resolviendo.o7[0] === "o"
                ? "orange wob7"
                : resolviendo.o7[0] === "b"
                ? "blue wob7"
                : resolviendo.o7[0] === "g"
                ? "green wob7"
                : "noColor"
            }
          >
            {/* {resolviendo.o7} */}
            <button className="btn" onClick={rotacionUp}>
              u`
              <TiArrowDownThick className="m-auto" />
            </button>
          </div>
        </section>
        {/*//todo section color white*/}
        <section className="caraWhite">
          <div
            className={
              resolviendo.w1[0] === "w"
                ? "white wg01"
                : resolviendo.w1[0] === "y"
                ? "yellow wg01"
                : resolviendo.w1[0] === "r"
                ? "red wg01"
                : resolviendo.w1[0] === "o"
                ? "orange wg01"
                : resolviendo.w1[0] === "b"
                ? "blue wg01"
                : resolviendo.w1[0] === "g"
                ? "green wg01"
                : "noColor"
            }
          >
            {/* {resolviendo.w1} */}
          </div>
          <div
            className={
              resolviendo.w2[0] === "w"
                ? "white"
                : resolviendo.w2[0] === "y"
                ? "yellow"
                : resolviendo.w2[0] === "r"
                ? "red"
                : resolviendo.w2[0] === "o"
                ? "orange"
                : resolviendo.w2[0] === "b"
                ? "blue"
                : resolviendo.w2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.w2} */}
          </div>
          <div
            className={
              resolviendo.w3[0] === "w"
                ? "white wrg3"
                : resolviendo.w3[0] === "y"
                ? "yellow wrg3"
                : resolviendo.w3[0] === "r"
                ? "red wrg3"
                : resolviendo.w3[0] === "o"
                ? "orange wrg3"
                : resolviendo.w3[0] === "b"
                ? "blue wrg3"
                : resolviendo.w3[0] === "g"
                ? "green wrg3"
                : "noColor"
            }
          >
            {/* {resolviendo.w3} */}
          </div>
          <div
            className={
              resolviendo.w4[0] === "w"
                ? "white"
                : resolviendo.w4[0] === "y"
                ? "yellow"
                : resolviendo.w4[0] === "r"
                ? "red"
                : resolviendo.w4[0] === "o"
                ? "orange"
                : resolviendo.w4[0] === "b"
                ? "blue"
                : resolviendo.w4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.w4} */}
          </div>
          <div
            className={
              resolviendo.w5[0] === "w"
                ? "white"
                : resolviendo.w5[0] === "y"
                ? "yellow"
                : resolviendo.w5[0] === "r"
                ? "red"
                : resolviendo.w5[0] === "o"
                ? "orange"
                : resolviendo.w5[0] === "b"
                ? "blue"
                : resolviendo.w5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.w5} */}
          </div>
          <div
            className={
              resolviendo.w6[0] === "w"
                ? "white"
                : resolviendo.w6[0] === "y"
                ? "yellow"
                : resolviendo.w6[0] === "r"
                ? "red"
                : resolviendo.w6[0] === "o"
                ? "orange"
                : resolviendo.w6[0] === "b"
                ? "blue"
                : resolviendo.w6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.w6} */}
          </div>
          <div
            className={
              resolviendo.w7[0] === "w"
                ? "white wob7"
                : resolviendo.w7[0] === "y"
                ? "yellow wob7"
                : resolviendo.w7[0] === "r"
                ? "red wob7"
                : resolviendo.w7[0] === "o"
                ? "orange wob7"
                : resolviendo.w7[0] === "b"
                ? "blue wob7"
                : resolviendo.w7[0] === "g"
                ? "green wob7"
                : "noColor"
            }
          >
            {/* {resolviendo.w7} */}
          </div>
          <div
            className={
              resolviendo.w8[0] === "w"
                ? "white"
                : resolviendo.w8[0] === "y"
                ? "yellow"
                : resolviendo.w8[0] === "r"
                ? "red"
                : resolviendo.w8[0] === "o"
                ? "orange"
                : resolviendo.w8[0] === "b"
                ? "blue"
                : resolviendo.w8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.w8} */}
          </div>
          <div
            className={
              resolviendo.w9[0] === "w"
                ? "white wbr9"
                : resolviendo.w9[0] === "y"
                ? "yellow wbr9"
                : resolviendo.w9[0] === "r"
                ? "red wbr9"
                : resolviendo.w9[0] === "o"
                ? "orange wbr9"
                : resolviendo.w9[0] === "b"
                ? "blue wbr9"
                : resolviendo.w9[0] === "g"
                ? "green wbr9"
                : "noColor"
            }
          >
            {/* {resolviendo.w9} */}
          </div>
        </section>
        {/*//todo section color red*/}
        <section className="caraRed">
          <div
            className={
              resolviendo.r3[0] === "w"
                ? "white wrg3"
                : resolviendo.r3[0] === "y"
                ? "yellow wrg3"
                : resolviendo.r3[0] === "r"
                ? "red wrg3"
                : resolviendo.r3[0] === "o"
                ? "orange wrg3"
                : resolviendo.r3[0] === "b"
                ? "blue wrg3"
                : resolviendo.r3[0] === "g"
                ? "green wrg3"
                : "noColor"
            }
          >
            {/* {resolviendo.r3} */}
            <button className="btn" onClick={rotacionUp}>
              u`
              <TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.r4[0] === "w"
                ? "white"
                : resolviendo.r4[0] === "y"
                ? "yellow"
                : resolviendo.r4[0] === "r"
                ? "red"
                : resolviendo.r4[0] === "o"
                ? "orange"
                : resolviendo.r4[0] === "b"
                ? "blue"
                : resolviendo.r4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r4} */}
            <button className="btn" onClick={rotacionBp}>
              b`
              <TiArrowRightThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.r7[0] === "w"
                ? "white ygr7"
                : resolviendo.r7[0] === "y"
                ? "yellow ygr7"
                : resolviendo.r7[0] === "r"
                ? "red ygr7"
                : resolviendo.r7[0] === "o"
                ? "orange ygr7"
                : resolviendo.r7[0] === "b"
                ? "blue ygr7"
                : resolviendo.r7[0] === "g"
                ? "green ygr7"
                : "noColor"
            }
          >
            {/* {resolviendo.r7} */}
            <button className="btn" onClick={rotacionD}>
              d<TiArrowUpThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.r6[0] === "w"
                ? "white"
                : resolviendo.r6[0] === "y"
                ? "yellow"
                : resolviendo.r6[0] === "r"
                ? "red"
                : resolviendo.r6[0] === "o"
                ? "orange "
                : resolviendo.r6[0] === "b"
                ? "blue"
                : resolviendo.r6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r6} */}
          </div>
          <div
            className={
              resolviendo.r5[0] === "w"
                ? "white"
                : resolviendo.r5[0] === "y"
                ? "yellow"
                : resolviendo.r5[0] === "r"
                ? "red"
                : resolviendo.r5[0] === "o"
                ? "orange"
                : resolviendo.r5[0] === "b"
                ? "blue"
                : resolviendo.r5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r5} */}
          </div>
          <div
            className={
              resolviendo.r8[0] === "w"
                ? "white"
                : resolviendo.r8[0] === "y"
                ? "yellow"
                : resolviendo.r8[0] === "r"
                ? "red"
                : resolviendo.r8[0] === "o"
                ? "orange"
                : resolviendo.r8[0] === "b"
                ? "blue"
                : resolviendo.r8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r8} */}
          </div>
          <div
            className={
              resolviendo.r9[0] === "w"
                ? "white wbr9"
                : resolviendo.r9[0] === "y"
                ? "yellow wbr9"
                : resolviendo.r9[0] === "r"
                ? "red wbr9"
                : resolviendo.r9[0] === "o"
                ? "orange wbr9"
                : resolviendo.r9[0] === "b"
                ? "blue wbr9"
                : resolviendo.r9[0] === "g"
                ? "green wbr9"
                : "noColor"
            }
          >
            {/* {resolviendo.r9} */}
            <button className="btn" onClick={rotacionU}>
              u<TiArrowDownThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.r2[0] === "w"
                ? "white"
                : resolviendo.r2[0] === "y"
                ? "yellow"
                : resolviendo.r2[0] === "r"
                ? "red"
                : resolviendo.r2[0] === "o"
                ? "orange"
                : resolviendo.r2[0] === "b"
                ? "blue"
                : resolviendo.r2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r2} */}
            <button className="btn" onClick={rotacionF}>
              f<TiArrowRightThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.r1[0] === "w"
                ? "white yrb1"
                : resolviendo.r1[0] === "y"
                ? "yellow yrb1"
                : resolviendo.r1[0] === "r"
                ? "red yrb1"
                : resolviendo.r1[0] === "o"
                ? "orange yrb1"
                : resolviendo.r1[0] === "b"
                ? "blue yrb1"
                : resolviendo.r1[0] === "g"
                ? "green yrb1"
                : "noColor"
            }
          >
            {/* {resolviendo.r1} */}
            <button className="btn" onClick={rotacionDp}>
              d`
              <TiArrowDownThick className="m-auto" />
            </button>
          </div>
        </section>
      </div>
      <div className="containerCara">
        {/*//todo section color blue*/}
        <section className="caraBlue">
          <div
            className={
              resolviendo.b7[0] === "w"
                ? "white wob7"
                : resolviendo.b7[0] === "y"
                ? "yellow wob7"
                : resolviendo.b7[0] === "r"
                ? "red wob7"
                : resolviendo.b7[0] === "o"
                ? "orange wob7"
                : resolviendo.b7[0] === "b"
                ? "blue wob7"
                : resolviendo.b7[0] === "g"
                ? "green wob7"
                : "noColor"
            }
          >
            {/* {resolviendo.b7} */}
            <button className="btn" onClick={rotacionU}>
              u<TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.b8[0] === "w"
                ? "white"
                : resolviendo.b8[0] === "y"
                ? "yellow"
                : resolviendo.b8[0] === "r"
                ? "red"
                : resolviendo.b8[0] === "o"
                ? "orange"
                : resolviendo.b8[0] === "b"
                ? "blue"
                : resolviendo.b8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b8} */}
          </div>
          <div
            className={
              resolviendo.b9[0] === "w"
                ? "white wbr9"
                : resolviendo.b9[0] === "y"
                ? "yellow wbr9"
                : resolviendo.b9[0] === "r"
                ? "red wbr9"
                : resolviendo.b9[0] === "o"
                ? "orange wbr9"
                : resolviendo.b9[0] === "b"
                ? "blue wbr9"
                : resolviendo.b9[0] === "g"
                ? "green wbr9"
                : "noColor"
            }
          >
            {/* {resolviendo.b9} */}
            <button className="btn" onClick={rotacionUp}>
              u`
              <TiArrowRightThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.b6[0] === "w"
                ? "white"
                : resolviendo.b6[0] === "y"
                ? "yellow"
                : resolviendo.b6[0] === "r"
                ? "red"
                : resolviendo.b6[0] === "o"
                ? "orange "
                : resolviendo.b6[0] === "b"
                ? "blue"
                : resolviendo.b6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b6} */}
            <button className="btn" onClick={rotacionL}>
              l<TiArrowDownThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.b5[0] === "w"
                ? "white"
                : resolviendo.b5[0] === "y"
                ? "yellow"
                : resolviendo.b5[0] === "r"
                ? "red"
                : resolviendo.b5[0] === "o"
                ? "orange"
                : resolviendo.b5[0] === "b"
                ? "blue"
                : resolviendo.b5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b5} */}
          </div>
          <div
            className={
              resolviendo.b2[0] === "w"
                ? "white"
                : resolviendo.b2[0] === "y"
                ? "yellow"
                : resolviendo.b2[0] === "r"
                ? "red"
                : resolviendo.b2[0] === "o"
                ? "orange"
                : resolviendo.b2[0] === "b"
                ? "blue"
                : resolviendo.b2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b2} */}
            <button className="btn" onClick={rotacionRp}>
              r`
              <TiArrowDownThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.b3[0] === "w"
                ? "white yob3"
                : resolviendo.b3[0] === "y"
                ? "yellow yob3"
                : resolviendo.b3[0] === "r"
                ? "red yob3"
                : resolviendo.b3[0] === "o"
                ? "orange yob3"
                : resolviendo.b3[0] === "b"
                ? "blue yob3"
                : resolviendo.b3[0] === "g"
                ? "green yob3"
                : "noColor"
            }
          >
            {/* {resolviendo.b3} */}
            <button className="btn" onClick={rotacionDp}>
              d`
              <TiArrowLeftThick className="m-auto" />
            </button>
          </div>
          <div
            className={
              resolviendo.b4[0] === "w"
                ? "white"
                : resolviendo.b4[0] === "y"
                ? "yellow"
                : resolviendo.b4[0] === "r"
                ? "red"
                : resolviendo.b4[0] === "o"
                ? "orange"
                : resolviendo.b4[0] === "b"
                ? "blue"
                : resolviendo.b4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b4} */}
          </div>
          <div
            className={
              resolviendo.b1[0] === "w"
                ? "white yrb1"
                : resolviendo.b1[0] === "y"
                ? "yellow yrb1"
                : resolviendo.b1[0] === "r"
                ? "red yrb1"
                : resolviendo.b1[0] === "o"
                ? "orange yrb1"
                : resolviendo.b1[0] === "b"
                ? "blue yrb1"
                : resolviendo.b1[0] === "g"
                ? "green yrb1"
                : "noColor"
            }
          >
            {/* {resolviendo.b1} */}
            <button className="btn" onClick={rotacionD}>
              d<TiArrowRightThick className="m-auto" />
            </button>
          </div>
        </section>
      </div>
      <div className="containerCara">
        {/*//todo section color yellow*/}
        <section className="caraYellow">
          <div></div>
          <div
            className={
              resolviendo.g9[0] === "w"
                ? "white ygo9"
                : resolviendo.g9[0] === "y"
                ? "yellow ygo9"
                : resolviendo.g9[0] === "r"
                ? "red ygo9"
                : resolviendo.g9[0] === "o"
                ? "orange ygo9"
                : resolviendo.g9[0] === "b"
                ? "blue ygo9"
                : resolviendo.g9[0] === "g"
                ? "green ygo9"
                : "noColor"
            }
          >
            {/* {resolviendo.g9} */}
          </div>
          <div
            className={
              resolviendo.g6[0] === "w"
                ? "white"
                : resolviendo.g6[0] === "y"
                ? "yellow"
                : resolviendo.g6[0] === "r"
                ? "red"
                : resolviendo.g6[0] === "o"
                ? "orange"
                : resolviendo.g6[0] === "b"
                ? "blue"
                : resolviendo.g6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.g6} */}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white ygr7"
                : resolviendo.g7[0] === "y"
                ? "yellow ygr7"
                : resolviendo.g7[0] === "r"
                ? "red ygr7"
                : resolviendo.g7[0] === "o"
                ? "orange ygr7"
                : resolviendo.g7[0] === "b"
                ? "blue ygr7"
                : resolviendo.g7[0] === "g"
                ? "green ygr7"
                : "noColor"
            }
          >
            {/* {resolviendo.g7} */}
          </div>
          <div></div>
          <div
            className={
              resolviendo.o9[0] === "w"
                ? "white ygo9"
                : resolviendo.o9[0] === "y"
                ? "yellow ygo9"
                : resolviendo.o9[0] === "r"
                ? "red ygo9"
                : resolviendo.o9[0] === "o"
                ? "orange ygo9"
                : resolviendo.o9[0] === "b"
                ? "blue ygo9"
                : resolviendo.o9[0] === "g"
                ? "green ygo9"
                : "noColor"
            }
          >
            {/* {resolviendo.o9} */}
          </div>
          <div
            className={
              resolviendo.y9[0] === "w"
                ? "white  ygo9"
                : resolviendo.y9[0] === "y"
                ? "yellow ygo9"
                : resolviendo.y9[0] === "r"
                ? "red ygo9"
                : resolviendo.y9[0] === "o"
                ? "orange ygo9"
                : resolviendo.y9[0] === "b"
                ? "blue ygo9"
                : resolviendo.y9[0] === "g"
                ? "green ygo9"
                : "noColor"
            }
          >
            {/* {resolviendo.y9} */}
          </div>
          <div
            className={
              resolviendo.y6[0] === "w"
                ? "white"
                : resolviendo.y6[0] === "y"
                ? "yellow"
                : resolviendo.y6[0] === "r"
                ? "red"
                : resolviendo.y6[0] === "o"
                ? "orange"
                : resolviendo.y6[0] === "b"
                ? "blue"
                : resolviendo.y6[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.y6} */}
          </div>
          <div
            className={
              resolviendo.y7[0] === "w"
                ? "white ygr7"
                : resolviendo.y7[0] === "y"
                ? "yellow ygr7"
                : resolviendo.y7[0] === "r"
                ? "red ygr7"
                : resolviendo.y7[0] === "o"
                ? "orange ygr7"
                : resolviendo.y7[0] === "b"
                ? "blue ygr7"
                : resolviendo.y7[0] === "g"
                ? "green ygr7"
                : "noColor"
            }
          >
            {/* {resolviendo.y7} */}
          </div>
          <div
            className={
              resolviendo.r7[0] === "w"
                ? "white ygr7"
                : resolviendo.r7[0] === "y"
                ? "yellow ygr7"
                : resolviendo.r7[0] === "r"
                ? "red ygr7"
                : resolviendo.r7[0] === "o"
                ? "orange ygr7"
                : resolviendo.r7[0] === "b"
                ? "blue ygr7"
                : resolviendo.r7[0] === "g"
                ? "green ygr7"
                : "noColor"
            }
          >
            {/* {resolviendo.r7} */}
          </div>
          <div
            className={
              resolviendo.o2[0] === "w"
                ? "white"
                : resolviendo.o2[0] === "y"
                ? "yellow"
                : resolviendo.o2[0] === "r"
                ? "red"
                : resolviendo.o2[0] === "o"
                ? "orange"
                : resolviendo.o2[0] === "b"
                ? "blue"
                : resolviendo.o2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.o2} */}
          </div>
          <div
            className={
              resolviendo.y2[0] === "w"
                ? "white"
                : resolviendo.y2[0] === "y"
                ? "yellow"
                : resolviendo.y2[0] === "r"
                ? "red"
                : resolviendo.y2[0] === "o"
                ? "orange"
                : resolviendo.y2[0] === "b"
                ? "blue"
                : resolviendo.y2[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.y2} */}
          </div>
          <div
            className={
              resolviendo.y5[0] === "w"
                ? "white"
                : resolviendo.y5[0] === "y"
                ? "yellow"
                : resolviendo.y5[0] === "r"
                ? "red"
                : resolviendo.y5[0] === "o"
                ? "orange"
                : resolviendo.y5[0] === "b"
                ? "blue"
                : resolviendo.y5[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.y5} */}
          </div>
          <div
            className={
              resolviendo.y8[0] === "w"
                ? "white"
                : resolviendo.y8[0] === "y"
                ? "yellow"
                : resolviendo.y8[0] === "r"
                ? "red"
                : resolviendo.y8[0] === "o"
                ? "orange"
                : resolviendo.y8[0] === "b"
                ? "blue"
                : resolviendo.y8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.y8} */}
          </div>
          <div
            className={
              resolviendo.r8[0] === "w"
                ? "white"
                : resolviendo.r8[0] === "y"
                ? "yellow"
                : resolviendo.r8[0] === "r"
                ? "red"
                : resolviendo.r8[0] === "o"
                ? "orange"
                : resolviendo.r8[0] === "b"
                ? "blue"
                : resolviendo.r8[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.r8} */}
          </div>
          <div
            className={
              resolviendo.o3[0] === "w"
                ? "white yob3"
                : resolviendo.o3[0] === "y"
                ? "yellow yob3"
                : resolviendo.o3[0] === "r"
                ? "red yob3"
                : resolviendo.o3[0] === "o"
                ? "orange yob3"
                : resolviendo.o3[0] === "b"
                ? "blue yob3"
                : resolviendo.o3[0] === "g"
                ? "green yob3"
                : "noColor"
            }
          >
            {/* {resolviendo.o3} */}
          </div>
          <div
            className={
              resolviendo.y3[0] === "w"
                ? "white yob3"
                : resolviendo.y3[0] === "y"
                ? "yellow yob3"
                : resolviendo.y3[0] === "r"
                ? "red yob3"
                : resolviendo.y3[0] === "o"
                ? "orange yob3"
                : resolviendo.y3[0] === "b"
                ? "blue yob3"
                : resolviendo.y3[0] === "g"
                ? "green yob3"
                : "noColor"
            }
          >
            {/* {resolviendo.y3} */}
          </div>
          <div
            className={
              resolviendo.y4[0] === "w"
                ? "white"
                : resolviendo.y4[0] === "y"
                ? "yellow"
                : resolviendo.y4[0] === "r"
                ? "red"
                : resolviendo.y4[0] === "o"
                ? "orange"
                : resolviendo.y4[0] === "b"
                ? "blue"
                : resolviendo.y4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.y4} */}
          </div>
          <div
            className={
              resolviendo.y1[0] === "w"
                ? "white yrb1"
                : resolviendo.y1[0] === "y"
                ? "yellow yrb1"
                : resolviendo.y1[0] === "r"
                ? "red yrb1"
                : resolviendo.y1[0] === "o"
                ? "orange yrb1"
                : resolviendo.y1[0] === "b"
                ? "blue yrb1"
                : resolviendo.y1[0] === "g"
                ? "green yrb1"
                : "noColor"
            }
          >
            {/* {resolviendo.y1} */}
          </div>
          <div
            className={
              resolviendo.r1[0] === "w"
                ? "white yrb1"
                : resolviendo.r1[0] === "y"
                ? "yellow yrb1"
                : resolviendo.r1[0] === "r"
                ? "red yrb1"
                : resolviendo.r1[0] === "o"
                ? "orange yrb1"
                : resolviendo.r1[0] === "b"
                ? "blue yrb1"
                : resolviendo.r1[0] === "g"
                ? "green yrb1"
                : "noColor"
            }
          >
            {/* {resolviendo.r1} */}
          </div>
          <div></div>
          <div
            className={
              resolviendo.b3[0] === "w"
                ? "white yob3"
                : resolviendo.b3[0] === "y"
                ? "yellow yob3"
                : resolviendo.b3[0] === "r"
                ? "red yob3"
                : resolviendo.b3[0] === "o"
                ? "orange yob3"
                : resolviendo.b3[0] === "b"
                ? "blue yob3"
                : resolviendo.b3[0] === "g"
                ? "green yob3"
                : "noColor"
            }
          >
            {/* {resolviendo.b3} */}
          </div>
          <div
            className={
              resolviendo.b4[0] === "w"
                ? "white"
                : resolviendo.b4[0] === "y"
                ? "yellow"
                : resolviendo.b4[0] === "r"
                ? "red"
                : resolviendo.b4[0] === "o"
                ? "orange"
                : resolviendo.b4[0] === "b"
                ? "blue"
                : resolviendo.b4[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {/* {resolviendo.b4} */}
          </div>
          <div
            className={
              resolviendo.b1[0] === "w"
                ? "white yrb1"
                : resolviendo.b1[0] === "y"
                ? "yellow yrb1"
                : resolviendo.b1[0] === "r"
                ? "red yrb1"
                : resolviendo.b1[0] === "o"
                ? "orange yrb1"
                : resolviendo.b1[0] === "b"
                ? "blue yrb1"
                : resolviendo.b1[0] === "g"
                ? "green yrb1"
                : "noColor"
            }
          >
            {/* {resolviendo.b1} */}
          </div>
          <div>
            <h1></h1>
          </div>
        </section>
      </div>

      </div>
      
      
      
      <div>
        <h1 className="uppercase">tutorial</h1>
        <p>
          aqui encontreremos todo lo que usted necesita para poder armar este
          cubo rubik
        </p>
        <h2 className="uppercase">botones</h2>
        <p>
          en este titulo encontra el funcionamiento de cada uno de los botones
        </p>
        <h3 className="uppercase">boton f y f`</h3>
        <p>
          F (Front): Capa Frontal por lo tanto va a rotar todas la cara frontal
          del cubo que quiere decir que el color azul rotara sobre si mismo pero
          las piesas al rededor del azul rotaran en sentido de las manesillas
          del reloj por lo tanto si esta armado el cubo las piesas blancas iran
          a la cara roja y la cara roja a la amarilla la amarilla a la cara
          naranja y la cara naranja a la cara blancas. ahora como nosotros
          estamos en dos dimenciones es un poco mas complejo pero facil cuando
          doy F la cara azul rota hacia la derecha y si oprimo F` entonces
          iremos hacia la izquierda.
        </p>
        <h3 className="uppercase">boton l y l`</h3>
        <p>L (Left): Capa Izquierda</p>
        <h3 className="uppercase">boton r y r`</h3>
        <p>R (Right): Capa Derecha</p>
        <h3 className="uppercase">boton b y b`</h3>
        <p>B (Back): Capa Trasera</p>
        <h3 className="uppercase">boton u y u`</h3>
        <p>U (Up): Capa Superior</p>

        <h3 className="uppercase">boton d y d`</h3>
        <p>D (Down): Capa Inferior</p>
      </div>
      <p>arista Azul y rojo d`,r`,d,r,d,f,d`,f`</p>
      <p>arista verde y rojo </p>
    </div>
  );
};

export default CuboRubik;
