import CuboRubik from "./components/CuboRubik";

export default function Home() {
  return (
    <div className="container bg-slate-500 min-h-screen text-center">
      
      <div className="flex justify-center items-center">
        <CuboRubik />
      </div>
    </div>
  );
}
