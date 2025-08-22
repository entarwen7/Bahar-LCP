import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-graySoft text-center p-8">
      <h1 className="font-display text-5xl text-brownDeep mb-4">
        Repostería Primavera
      </h1>

      <p className="font-sans text-lg text-roseSoft max-w-2xl mb-6">
        Postres artesanales inspirados en la <span className="text-pinkBright font-semibold">primavera turca</span>,
        donde la dulzura se encuentra con la frescura.
      </p>

      <div className="flex gap-4 flex-col sm:flex-row">
        <a
          href="#productos"
          className="bg-oliveSpring text-white font-medium px-6 py-3 rounded-xl hover:bg-pinkBright transition"
        >
          Ver nuestros postres
        </a>
        <a
          href="#contacto"
          className="border-2 border-roseSoft text-roseSoft px-6 py-3 rounded-xl hover:bg-roseSoft hover:text-white transition"
        >
          Contáctanos
        </a>
      </div>

      <footer className="mt-12 text-sm text-brownDeep">
        © {new Date().getFullYear()} Repostería Primavera. Todos los derechos reservados.
      </footer>
    </main>
  );
}
