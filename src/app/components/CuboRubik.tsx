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
      r1: a.b7,
      g1: a.r7,
      w2: a.w4,
      g2: a.r4,
      w3: a.w1,
      g3: a.r1,
      o3: a.g1,
      w4: a.w8,
      r4: a.b8,
      w6: a.w2,
      o6: a.g2,
      w7: a.w9,
      b7: a.o9,
      r7: a.b9,
      w8: a.w6,
      b8: a.o6,
      w9: a.w3,
      b9: a.o3,
      o9: a.g3,
    });
  }

  function rotacionUp() {
    setResolviendo({
      ...resolviendo,
      w1: a.w3,
      r1: a.g3,
      g1: a.o3,
      w2: a.w6,
      g2: a.o6,
      w3: a.w9,
      g3: a.o9,
      o3: a.b9,
      w4: a.w2,
      r4: a.g2,
      w6: a.w8,
      o6: a.b8,
      w7: a.w1,
      b7: a.r1,
      r7: a.g1,
      w8: a.w4,
      b8: a.r4,
      w9: a.w7,
      b9: a.r7,
      o9: a.b7,
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
      b3: a.r9,
      b1: a.r3,
      b4: a.r2,
      g9: a.o7,
      g6: a.o8,
      g7: a.o1,
      r9: a.g7,
      r2: a.g6,
      r3: a.g9,
      o1: a.b3,
      o8: a.b4,
      o7: a.b1,
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
      b3: a.o1,
      b4: a.o8,
      b1: a.o7,
      g9: a.r3,
      g6: a.r2,
      g7: a.r9,
      r9: a.b3,
      r2: a.b4,
      r3: a.b1,
      o1: a.g7,
      o8: a.g6,
      o7: a.g9,
    });
  }
  function rotacionL() {
    setResolviendo({
      ...resolviendo,
      w1: a.b7,
      w4: a.b6,
      w7: a.b3,
      r1: a.r7,
      r4: a.r6,
      r7: a.r3,
      b7: a.y9,
      b6: a.y2,
      b3: a.y3,
      r6: a.r2,
      r3: a.r9,
      g9: a.w1,
      g8: a.w4,
      g1: a.w7,
      r8: a.r4,
      r9: a.r1,
      y9: a.g1,
      y2: a.g8,
      y3: a.g9,
      r2: a.r8,
    });
  }

  function rotacionLp() {
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
      b3: a.o1,
      b4: a.o8,
      b1: a.o7,
      g9: a.r3,
      g6: a.r2,
      g7: a.r9,
      r9: a.b3,
      r2: a.b4,
      r3: a.b1,
      o1: a.g7,
      o8: a.g6,
      o7: a.g9,
    });
  }

  return (
    <div className="w-2/5 m-4  justify-center items-center">
      <h1>Hay </h1>
      <h1>{cantidadCoincidencias}</h1> <h1>fichas bien puestas</h1>
      {/* //* postura de botones  */}
      <section className="m-1 grid grid-cols-6 border-2 border-black bg-slate-500">
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
            onClick={rotacionU}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            R <TiArrowUpThick className="m-auto" />
          </button>
          <button
            onClick={rotacionUp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            R` <TiArrowDownThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionU}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            F <TiArrowLeftThick className="m-auto" />
          </button>
          <button
            onClick={rotacionUp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            F` <TiArrowRightThick className="m-auto" />
          </button>
        </div>

        <div className="grid grid-cols-1 text-xl font-bold m-1 mx-auto">
          <button
            onClick={rotacionU}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            B <TiArrowLeftThick className="m-auto" />
          </button>
          <button
            onClick={rotacionUp}
            className="m-1 border-2 border-slate-600 w-9 cursor-pointer bg-slate-700"
          >
            B` <TiArrowRightThick className="m-auto" />
          </button>
        </div>
      </section>
      <div className="containerCara">
        {/*//todo section color green */}
        <section className="caraGreen">
          <div
            className={
              resolviendo.g9[0] === "w"
                ? "white border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "y"
                ? "yellow border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "r"
                ? "red border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "o"
                ? "orange border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "b"
                ? "blue border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "g"
                ? "green border-t-2 border-l-2 border-black"
                : "noColor border-t-2 border-l-2 border-black"
            }
          >
            {resolviendo.g9}
          </div>
          <div
            className={
              resolviendo.g6[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.g6[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.g6[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.g6[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.g6[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.g6[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.g6}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.g7[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.g7[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.g7[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.g7[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.g7[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.g7}
          </div>
          <div
            className={
              resolviendo.g8[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.g8[0] === "y"
                ? "yellow"
                : resolviendo.g8[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.g8[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.g8[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.g8[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
                ? "white border-l-2 border-black"
                : resolviendo.g1[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.g1[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.g1[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.g1[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.g1[0] === "g"
                ? "green  border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
        {/*//todo section color red */}
        <section className="caraRed">
          <div
            className={
              resolviendo.r9[0] === "w"
                ? "white border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "y"
                ? "yellow border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "r"
                ? "red border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "o"
                ? "orange border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "b"
                ? "blue border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "g"
                ? "green border-t-2 border-l-2 border-black"
                : "noColor border-t-2 border-l-2 border-black"
            }
          >
            {resolviendo.r9}
          </div>
          <div
            className={
              resolviendo.r8[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.r8[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.r8[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.r8[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.r8[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.r8[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.r8}
          </div>
          <div
            className={
              resolviendo.r1[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.r1[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.r1[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.r1[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.r1[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.r1[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.r1}
          </div>
          <div
            className={
              resolviendo.r2[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.r2[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.r2[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.r2[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.r2[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.r2[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.r2}
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
              resolviendo.r3[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.r3[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.r3[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.r3[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.r3[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.r3[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.r3}
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
                ? "orange"
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
        </section>
        {/*//todo section color white */}
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
        {/*//todo section color orange */}
        <section className="caraOrange">
          <div
            className={
              resolviendo.o3[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.o3[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.o3[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.o3[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.o3[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.o3[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.o3}
          </div>
          <div
            className={
              resolviendo.o4[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.o4[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.o4[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.o4[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.o4[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.o4[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.o4}
          </div>
          <div
            className={
              resolviendo.o7[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.o7[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.o7[0] === "r"
                ? "red  border-t-2 border-black"
                : resolviendo.o7[0] === "o"
                ? "orange  border-t-2 border-black"
                : resolviendo.o7[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.o7[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.o7}
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
        </section>
      </div>
      <div className="containerCara">
        {/*//todo section color blue */}
        <section className="caraBlue">
          <div
            className={
              resolviendo.b7[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.b7[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.b7[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.b7[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.b7[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.b7[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
                ? "white border-l-2 border-black"
                : resolviendo.b6[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.b6[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.b6[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.b6[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.b6[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
                ? "white border-l-2 border-black"
                : resolviendo.b3[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.b3[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.b3[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.b3[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.b3[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
        {/*//todo section color yellow */}
        <section className="caraYellow">

          <div></div>
          <div
            className={
              resolviendo.g9[0] === "w"
                ? "white border-t-2 border-l-2 border-r-2 border-black"
                : resolviendo.g9[0] === "y"
                ? "yellow border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "r"
                ? "red border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "o"
                ? "orange border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "b"
                ? "blue border-t-2 border-l-2 border-black"
                : resolviendo.g9[0] === "g"
                ? "green border-t-2 border-l-2 border-black"
                : "noColor border-t-2 border-l-2 border-black"
            }
          >
            {resolviendo.g9}
          </div>
          <div
            className={
              resolviendo.g6[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.g6[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.g6[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.g6[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.g6[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.g6[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.g6}
          </div>
          <div
            className={
              resolviendo.g7[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.g7[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.g7[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.g7[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.g7[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.g7[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.g7}
          </div>
          <div></div>
          <div
            className={
              resolviendo.r9[0] === "w"
                ? "white border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "y"
                ? "yellow border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "r"
                ? "red border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "o"
                ? "orange border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "b"
                ? "blue border-t-2 border-l-2 border-black"
                : resolviendo.r9[0] === "g"
                ? "green border-t-2 border-l-2 border-black"
                : "noColor border-t-2 border-l-2 border-black"
            }
          >
            {resolviendo.r9}
          </div>
          <div
            className={
              resolviendo.y9[0] === "w"
                ? "white border-l-2 border-t-2 border-black"
                : resolviendo.y9[0] === "y"
                ? "yellow border-l-2 border-t-2 border-black"
                : resolviendo.y9[0] === "r"
                ? "red border-l-2 border-t-2 border-black"
                : resolviendo.y9[0] === "o"
                ? "orange border-l-2 border-t-2 border-black"
                : resolviendo.y9[0] === "b"
                ? "blue border-l-2 border-t-2 border-black"
                : resolviendo.y9[0] === "g"
                ? "green border-l-2 border-t-2 border-black"
                : "noColor border-l-2 border-t-2 border-black"
            }
          >
            {resolviendo.y9}
          </div>
          <div
            className={
              resolviendo.y6[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.y6[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.y6[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.y6[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.y6[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.y6[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.y6}
          </div>
          <div
            className={
              resolviendo.y7[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.y7[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.y7[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.y7[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.y7[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.y7[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.y7}
          </div>
          <div
            className={
              resolviendo.o7[0] === "w"
                ? "white border-t-2 border-l-2  border-r-2 border-black"
                : resolviendo.o7[0] === "y"
                ? "yellow border-t-2 border-l-2 border-black"
                : resolviendo.o7[0] === "r"
                ? "red  border-t-2 border-l-2 border-black"
                : resolviendo.o7[0] === "o"
                ? "orange  border-t-2 border-l-2 border-black"
                : resolviendo.o7[0] === "b"
                ? "blue border-t-2 border-l-2 border-black"
                : resolviendo.o7[0] === "g"
                ? "green border-t-2 border-l-2 border-black"
                : "noColor border-t-2 border-l-2 border-black"
            }
          >
            {resolviendo.o7}
          </div>
          <div
            className={
              resolviendo.r2[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.r2[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.r2[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.r2[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.r2[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.r2[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.r2}
          </div>
          <div
            className={
              resolviendo.y2[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.y2[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.y2[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.y2[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.y2[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.y2[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
              resolviendo.o8[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.o8[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.o8[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.o8[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.o8[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.o8[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.o8}
          </div>
          <div
            className={
              resolviendo.r3[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.r3[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.r3[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.r3[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.r3[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.r3[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.r3}
          </div>
          <div
            className={
              resolviendo.y3[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.y3[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.y3[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.y3[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.y3[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.y3[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
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
              resolviendo.o1[0] === "w"
                ? "white border-l-2 border-black"
                : resolviendo.o1[0] === "y"
                ? "yellow border-l-2 border-black"
                : resolviendo.o1[0] === "r"
                ? "red border-l-2 border-black"
                : resolviendo.o1[0] === "o"
                ? "orange border-l-2 border-black"
                : resolviendo.o1[0] === "b"
                ? "blue border-l-2 border-black"
                : resolviendo.o1[0] === "g"
                ? "green border-l-2 border-black"
                : "noColor border-l-2 border-black"
            }
          >
            {resolviendo.o1}
          </div>
          <div></div>
          <div
            className={
              resolviendo.b3[0] === "w"
                ? "white border-l-2 border-t-2 border-black"
                : resolviendo.b3[0] === "y"
                ? "yellow border-l-2 border-t-2 border-black"
                : resolviendo.b3[0] === "r"
                ? "red border-l-2 border-t-2 border-black"
                : resolviendo.b3[0] === "o"
                ? "orange border-l-2 border-t-2 border-black"
                : resolviendo.b3[0] === "b"
                ? "blue border-l-2 border-t-2 border-black"
                : resolviendo.b3[0] === "g"
                ? "green border-l-2 border-t-2 border-black"
                : "noColor border-l-2 border-t-2 border-black"
            }
          >
            {resolviendo.b3}
          </div>
          <div
            className={
              resolviendo.b4[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.b4[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.b4[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.b4[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.b4[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.b4[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
            }
          >
            {resolviendo.b4}
          </div>
          <div
            className={
              resolviendo.b1[0] === "w"
                ? "white border-t-2 border-black"
                : resolviendo.b1[0] === "y"
                ? "yellow border-t-2 border-black"
                : resolviendo.b1[0] === "r"
                ? "red border-t-2 border-black"
                : resolviendo.b1[0] === "o"
                ? "orange border-t-2 border-black"
                : resolviendo.b1[0] === "b"
                ? "blue border-t-2 border-black"
                : resolviendo.b1[0] === "g"
                ? "green border-t-2 border-black"
                : "noColor border-t-2 border-black"
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
