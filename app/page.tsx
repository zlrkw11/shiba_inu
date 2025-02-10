import "./globals.css";
export default function Home() {
  return (
    <main className="bg-scroll flex flex-col items-center justify-center h-screen min-h-screen">
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="display-1 fw-bold">Shiba Inu</h1>
        <hr className="w-1/2 border-t-2 border-gray-400 my-4" />
        <p className="lead">For students, by students</p>
      </section>
    </main>
  );
}
