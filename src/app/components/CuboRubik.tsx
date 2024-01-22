"use client";
import { useState } from "react";
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
  return (
    <div className="w-2/5 m-4  justify-center items-center">
      <h1>Hay </h1>
      <h1>{cantidadCoincidencias}</h1> <h1>fichas bien puestas</h1>
      {/* //* postura de botones  */}
      <section className="m-1 grid grid-cols-6 border- bg-slate-500">
        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionU}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            U <TiArrowLeftThick className="m-auto" />
          </button>
          <button
            onClick={rotacionUp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            U` <TiArrowRightThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionD}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            D <TiArrowRightThick className="m-auto" />
          </button>
          <button
            onClick={rotacionDp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            D` <TiArrowLeftThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionL}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            L <TiArrowDownThick className="m-auto" />
          </button>
          <button
            onClick={rotacionLp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            L` <TiArrowUpThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionR}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            R <TiArrowUpThick className="m-auto" />
          </button>
          <button
            onClick={rotacionRp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            R` <TiArrowDownThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionF}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            F <TiArrowLeftThick className="m-auto" />
          </button>
          <button
            onClick={rotacionFp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            F` <TiArrowRightThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionB}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            B <TiArrowLeftThick className="m-auto" />
          </button>
          <button
            onClick={rotacionBp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            B` <TiArrowRightThick className="m-auto" />
          </button>
        </div>
      </section>
      <div className="containerCara">
        {/*//todo section color green*/}
        <section className="caraGreen">
          <div
            className={
              resolviendo.g9[0] === "w"
                ? "white"
                : resolviendo.g9[0] === "y"
                ? "yellow"
                : resolviendo.g9[0] === "r"
                ? "red"
                : resolviendo.g9[0] === "o"
                ? "orange"
                : resolviendo.g9[0] === "b"
                ? "blue"
                : resolviendo.g9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g9}
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
            {resolviendo.g6}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white"
                : resolviendo.g7[0] === "y"
                ? "yellow"
                : resolviendo.g7[0] === "r"
                ? "red"
                : resolviendo.g7[0] === "o"
                ? "orange"
                : resolviendo.g7[0] === "b"
                ? "blue"
                : resolviendo.g7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g7}
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
            {resolviendo.g8}
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
            {resolviendo.g5}
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
            {resolviendo.g4}
          </div>
          <div
            className={
              resolviendo.g1[0] === "w"
                ? "white"
                : resolviendo.g1[0] === "y"
                ? "yellow"
                : resolviendo.g1[0] === "r"
                ? "red"
                : resolviendo.g1[0] === "o"
                ? "orange"
                : resolviendo.g1[0] === "b"
                ? "blue"
                : resolviendo.g1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g1}
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
            {resolviendo.g2}
          </div>
          <div
            className={
              resolviendo.g3[0] === "w"
                ? "white"
                : resolviendo.g3[0] === "y"
                ? "yellow"
                : resolviendo.g3[0] === "r"
                ? "red"
                : resolviendo.g3[0] === "o"
                ? "orange"
                : resolviendo.g3[0] === "b"
                ? "blue"
                : resolviendo.g3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g3}
          </div>
        </section>
      </div>
      <div className="containerCara3">
        {/*//todo section color orange */}
        <section className="caraOrange">
          <div
            className={
              resolviendo.o9[0] === "w"
                ? "white"
                : resolviendo.o9[0] === "y"
                ? "yellow"
                : resolviendo.o9[0] === "r"
                ? "red"
                : resolviendo.o9[0] === "o"
                ? "orange"
                : resolviendo.o9[0] === "b"
                ? "blue"
                : resolviendo.o9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o9}
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
            {resolviendo.o8}
          </div>
          <div
            className={
              resolviendo.o1[0] === "w"
                ? "white"
                : resolviendo.o1[0] === "y"
                ? "yellow"
                : resolviendo.o1[0] === "r"
                ? "red"
                : resolviendo.o1[0] === "o"
                ? "orange"
                : resolviendo.o1[0] === "b"
                ? "blue"
                : resolviendo.o1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o1}
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
            {resolviendo.o2}
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
            {resolviendo.o5}
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
            {resolviendo.o4}
          </div>
          <div
            className={
              resolviendo.o3[0] === "w"
                ? "white"
                : resolviendo.o3[0] === "y"
                ? "yellow"
                : resolviendo.o3[0] === "r"
                ? "red"
                : resolviendo.o3[0] === "o"
                ? "orange"
                : resolviendo.o3[0] === "b"
                ? "blue"
                : resolviendo.o3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o3}
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
            {resolviendo.o6}
          </div>
          <div
            className={
              resolviendo.o7[0] === "w"
                ? "white"
                : resolviendo.o7[0] === "y"
                ? "yellow"
                : resolviendo.o7[0] === "r"
                ? "red"
                : resolviendo.o7[0] === "o"
                ? "orange"
                : resolviendo.o7[0] === "b"
                ? "blue"
                : resolviendo.o7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o7}
          </div>
        </section>
        {/*//todo section color white*/}
        <section className="caraWhite">
          <div
            className={
              resolviendo.w1[0] === "w"
                ? "white"
                : resolviendo.w1[0] === "y"
                ? "yellow"
                : resolviendo.w1[0] === "r"
                ? "red"
                : resolviendo.w1[0] === "o"
                ? "orange"
                : resolviendo.w1[0] === "b"
                ? "blue"
                : resolviendo.w1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.w1}
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
            {resolviendo.w2}
          </div>
          <div
            className={
              resolviendo.w3[0] === "w"
                ? "white"
                : resolviendo.w3[0] === "y"
                ? "yellow"
                : resolviendo.w3[0] === "r"
                ? "red"
                : resolviendo.w3[0] === "o"
                ? "orange"
                : resolviendo.w3[0] === "b"
                ? "blue"
                : resolviendo.w3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.w3}
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
            {resolviendo.w4}
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
            {resolviendo.w5}
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
            {resolviendo.w6}
          </div>
          <div
            className={
              resolviendo.w7[0] === "w"
                ? "white"
                : resolviendo.w7[0] === "y"
                ? "yellow"
                : resolviendo.w7[0] === "r"
                ? "red"
                : resolviendo.w7[0] === "o"
                ? "orange"
                : resolviendo.w7[0] === "b"
                ? "blue"
                : resolviendo.w7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.w7}
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
            {resolviendo.w8}
          </div>
          <div
            className={
              resolviendo.w9[0] === "w"
                ? "white"
                : resolviendo.w9[0] === "y"
                ? "yellow"
                : resolviendo.w9[0] === "r"
                ? "red"
                : resolviendo.w9[0] === "o"
                ? "orange"
                : resolviendo.w9[0] === "b"
                ? "blue"
                : resolviendo.w9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.w9}
          </div>
        </section>
        {/*//todo section color red*/}
        <section className="caraRed">
          <div
            className={
              resolviendo.r3[0] === "w"
                ? "white"
                : resolviendo.r3[0] === "y"
                ? "yellow"
                : resolviendo.r3[0] === "r"
                ? "red"
                : resolviendo.r3[0] === "o"
                ? "orange"
                : resolviendo.r3[0] === "b"
                ? "blue"
                : resolviendo.r3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r3}
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
            {resolviendo.r4}
          </div>
          <div
            className={
              resolviendo.r7[0] === "w"
                ? "white"
                : resolviendo.r7[0] === "y"
                ? "yellow"
                : resolviendo.r7[0] === "r"
                ? "red"
                : resolviendo.r7[0] === "o"
                ? "orange"
                : resolviendo.r7[0] === "b"
                ? "blue"
                : resolviendo.r7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r7}
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
            {resolviendo.r6}
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
            {resolviendo.r5}
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
            {resolviendo.r8}
          </div>
          <div
            className={
              resolviendo.r9[0] === "w"
                ? "white"
                : resolviendo.r9[0] === "y"
                ? "yellow"
                : resolviendo.r9[0] === "r"
                ? "red"
                : resolviendo.r9[0] === "o"
                ? "orange "
                : resolviendo.r9[0] === "b"
                ? "blue"
                : resolviendo.r9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r9}
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
            {resolviendo.r2}
          </div>
          <div
            className={
              resolviendo.r1[0] === "w"
                ? "white"
                : resolviendo.r1[0] === "y"
                ? "yellow"
                : resolviendo.r1[0] === "r"
                ? "red"
                : resolviendo.r1[0] === "o"
                ? "orange"
                : resolviendo.r1[0] === "b"
                ? "blue"
                : resolviendo.r1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r1}
          </div>
        </section>
      </div>
      <div className="containerCara">
        {/*//todo section color blue*/}
        <section className="caraBlue">
          <div
            className={
              resolviendo.b7[0] === "w"
                ? "white"
                : resolviendo.b7[0] === "y"
                ? "yellow"
                : resolviendo.b7[0] === "r"
                ? "red"
                : resolviendo.b7[0] === "o"
                ? "orange "
                : resolviendo.b7[0] === "b"
                ? "blue"
                : resolviendo.b7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b7}
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
            {resolviendo.b8}
          </div>
          <div
            className={
              resolviendo.b9[0] === "w"
                ? "white"
                : resolviendo.b9[0] === "y"
                ? "yellow"
                : resolviendo.b9[0] === "r"
                ? "red"
                : resolviendo.b9[0] === "o"
                ? "orange"
                : resolviendo.b9[0] === "b"
                ? "blue"
                : resolviendo.b9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b9}
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
            {resolviendo.b6}
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
            {resolviendo.b5}
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
            {resolviendo.b2}
          </div>
          <div
            className={
              resolviendo.b3[0] === "w"
                ? "white"
                : resolviendo.b3[0] === "y"
                ? "yellow"
                : resolviendo.b3[0] === "r"
                ? "red"
                : resolviendo.b3[0] === "o"
                ? "orange "
                : resolviendo.b3[0] === "b"
                ? "blue"
                : resolviendo.b3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b3}
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
            {resolviendo.b4}
          </div>
          <div
            className={
              resolviendo.b1[0] === "w"
                ? "white"
                : resolviendo.b1[0] === "y"
                ? "yellow"
                : resolviendo.b1[0] === "r"
                ? "red"
                : resolviendo.b1[0] === "o"
                ? "orange"
                : resolviendo.b1[0] === "b"
                ? "blue"
                : resolviendo.b1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b1}
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
                ? "white"
                : resolviendo.g9[0] === "y"
                ? "yellow"
                : resolviendo.g9[0] === "r"
                ? "red"
                : resolviendo.g9[0] === "o"
                ? "orange"
                : resolviendo.g9[0] === "b"
                ? "blue"
                : resolviendo.g9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g9}
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
            {resolviendo.g6}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white"
                : resolviendo.g7[0] === "y"
                ? "yellow"
                : resolviendo.g7[0] === "r"
                ? "red"
                : resolviendo.g7[0] === "o"
                ? "orange"
                : resolviendo.g7[0] === "b"
                ? "blue"
                : resolviendo.g7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.g7}
          </div>
          <div></div>
          <div
            className={
              resolviendo.o9[0] === "w"
                ? "white"
                : resolviendo.o9[0] === "y"
                ? "yellow"
                : resolviendo.o9[0] === "r"
                ? "red"
                : resolviendo.o9[0] === "o"
                ? "orange"
                : resolviendo.o9[0] === "b"
                ? "blue"
                : resolviendo.o9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o9}
          </div>
          <div
            className={
              resolviendo.y9[0] === "w"
                ? "white"
                : resolviendo.y9[0] === "y"
                ? "yellow"
                : resolviendo.y9[0] === "r"
                ? "red"
                : resolviendo.y9[0] === "o"
                ? "orange"
                : resolviendo.y9[0] === "b"
                ? "blue"
                : resolviendo.y9[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.y9}
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
            {resolviendo.y6}
          </div>
          <div
            className={
              resolviendo.y7[0] === "w"
                ? "white"
                : resolviendo.y7[0] === "y"
                ? "yellow"
                : resolviendo.y7[0] === "r"
                ? "red"
                : resolviendo.y7[0] === "o"
                ? "orange"
                : resolviendo.y7[0] === "b"
                ? "blue"
                : resolviendo.y7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.y7}
          </div>
          <div
            className={
              resolviendo.r7[0] === "w"
                ? "white"
                : resolviendo.r7[0] === "y"
                ? "yellow"
                : resolviendo.r7[0] === "r"
                ? "red"
                : resolviendo.r7[0] === "o"
                ? "orange"
                : resolviendo.r7[0] === "b"
                ? "blue"
                : resolviendo.r7[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r7}
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
            {resolviendo.o2}
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
            {resolviendo.y2}
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
            {resolviendo.y5}
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
            {resolviendo.y8}
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
            {resolviendo.r8}
          </div>
          <div
            className={
              resolviendo.o3[0] === "w"
                ? "white"
                : resolviendo.o3[0] === "y"
                ? "yellow"
                : resolviendo.o3[0] === "r"
                ? "red"
                : resolviendo.o3[0] === "o"
                ? "orange"
                : resolviendo.o3[0] === "b"
                ? "blue"
                : resolviendo.o3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.o3}
          </div>
          <div
            className={
                resolviendo.y3[0] === "w"
                ? "white"
                : resolviendo.y3[0] === "y"
                ? "yellow"
                : resolviendo.y3[0] === "r"
                ? "red"
                : resolviendo.y3[0] === "o"
                ? "orange"
                : resolviendo.y3[0] === "b"
                ? "blue"
                : resolviendo.y3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.y3}
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
            {resolviendo.y4}
          </div>
          <div
            className={
              resolviendo.y1[0] === "w"
                ? "white"
                : resolviendo.y1[0] === "y"
                ? "yellow"
                : resolviendo.y1[0] === "r"
                ? "red"
                : resolviendo.y1[0] === "o"
                ? "orange"
                : resolviendo.y1[0] === "b"
                ? "blue"
                : resolviendo.y1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.y1}
          </div>
          <div
            className={
              resolviendo.r1[0] === "w"
                ? "white"
                : resolviendo.r1[0] === "y"
                ? "yellow"
                : resolviendo.r1[0] === "r"
                ? "red"
                : resolviendo.r1[0] === "o"
                ? "orange"
                : resolviendo.r1[0] === "b"
                ? "blue"
                : resolviendo.r1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.r1}
          </div>
          <div></div>
          <div
            className={
              resolviendo.b3[0] === "w"
                ? "white"
                : resolviendo.b3[0] === "y"
                ? "yellow"
                : resolviendo.b3[0] === "r"
                ? "red"
                : resolviendo.b3[0] === "o"
                ? "orange"
                : resolviendo.b3[0] === "b"
                ? "blue"
                : resolviendo.b3[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b3}
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
            {resolviendo.b4}
          </div>
          <div
            className={
              resolviendo.b1[0] === "w"
                ? "white"
                : resolviendo.b1[0] === "y"
                ? "yellow"
                : resolviendo.b1[0] === "r"
                ? "red"
                : resolviendo.b1[0] === "o"
                ? "orange"
                : resolviendo.b1[0] === "b"
                ? "blue"
                : resolviendo.b1[0] === "g"
                ? "green"
                : "noColor"
            }
          >
            {resolviendo.b1}
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default CuboRubik;
