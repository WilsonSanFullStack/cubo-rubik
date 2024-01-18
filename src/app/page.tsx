import CuboRubik from "./components/CuboRubik";

export default function Home() {
  return (
    <div className="container bg-slate-500 min-h-screen text-center">
      hola soy el home
      <div className="flex justify-center items-center">
        <CuboRubik />
      </div>
    </div>
  );
}
