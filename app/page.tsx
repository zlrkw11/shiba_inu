import "./globals.css";
import Image from "next/image";
import doge from "./doge-removebg-preview.png";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-scroll flex flex-col items-center justify-center min-h-screen">
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="display-1 fw-bold">Shiba Inu</h1>
        <hr className="w-1/2 border-t-2 border-gray-400 my-4" />
        <Image src={doge} alt="Shiba Inu" />
        <p className="lead">For students, by students</p>
      </section>
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-[url('/obg.png')] bg-contain bg-no-repeat bg-center"
      >
        <h1 className="display-1 fw-bold">About us</h1>
        <p className="w-[50%] font-serif font-bold text-black flex">
          We are not some huge company that has 100+ shops. Just 2 friends
          wanting to make the life of students easier and more affordable.
        </p>
      </section>
      <section
        id="order"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="display-1 fw-bold">Order now!</h1>
      </section>{" "}
      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="display-1 fw-bold">Get in touch</h1>
        <p className="lead">Ray Zhao</p>
        <p className="lead">email: Ray040406@gmail.com</p>
        <p className="lead">Eric Cai</p>
        <p className="lead">email: example email here</p>
        <p>Address: boxhill central melbourne VIC</p>
      </section>
      <footer className="bg-orange-400 text-white w-full p-4 text-center">
        © Copyright 2025 ShibaInu | 434 152 176 | shibainuxxx@gmail.com
      </footer>
    </main>
  );
}
