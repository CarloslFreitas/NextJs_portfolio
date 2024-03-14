import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/space2.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col flex-wrap max-sm:pl-8 gap-5 z-[10] max-w-[750px]">
          <div className="max-h-[500px] overflow-auto max-md:mt-28 pb-5 pt-5 scrollbar-thin scrollbar-webkit p-1 rounded-lg">
            <p className="text-[25px] text-white font-semibold ">
              Olá!  <br />Sou {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold">
                Carlos Freitas
              </span>
            </p>
            <h1 className="text-[40px] text-white font-semibold pr-3">
              Faço tudo possível com {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold ">
                Web Design
              </span>
            </h1>
            <p className="text-gray-200 pr-3 leading-8 mt-5 bg-black bg-opacity-45 rounded-lg p-3">
              Apaixonado por Desenvolvimento de aplicações Web,
              com formação em FullStack. Tenho experiência em HTML, CSS, React, Next, JS e Typescript como
              as mais utilizadas e sou um comunicador habilidoso, pronto para colaborar em equipes multidisciplinares.
              Fora do trabalho, gosto de animes, videogames, cultura geek de modo geral, mantendo um equilíbrio saudável
              entre vida pessoal e profissional. Estou entusiasmado para contribuir em projetos significativos e continuar
              crescendo profissionalmente.
              Estou sempre buscando novas tecnologias para aumentar
              meu acervo de ferramentas, e desenvolver soluções para qualquer problema e situação.
            </p>
          </div>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="https://docs.google.com/document/d/12aZXGEzw-T8E_O4Na3aAOI0huX6lj90bNvAdo4LDD-4/edit?usp=sharing"
              target="_blank"
              className="rounded-[20px] group relative bg-clip bg-gradient-to-b from-cyan-500 to-purple-500 opacity-90 hover:from-red-500 hover:to-purple-500 hover:opacity-80 px-5 py-3 text-lg text-white max-w-[200px] duration-200 hover:scale-110"
            >
              Visualizar CV
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px] hover:bg-sky-500 duration-200 hover:scale-110"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px] hover:bg-sky-500 duration-200 hover:scale-110"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Projetos
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hover:bg-sky-500 duration-200 hover:scale-110"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contatos
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-2 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="https://docs.google.com/document/d/12aZXGEzw-T8E_O4Na3aAOI0huX6lj90bNvAdo4LDD-4/edit?usp=sharing"
          target="_blank"
          className="rounded-[20px] group relative -top-36 -left-8  bg-clip bg-gradient-to-b from-cyan-500 to-purple-500 opacity-90 border hover:from-red-500 hover:to-purple-500 hover:duration-200 border-white px-5 py-3 text-lg text-white max-w-[200px] flex justify-center duration-200 hover:scale-110"
        >
          Visualizar CV
        </Link>

        {/* <Link
          href="/my-projects"
          className="rounded-[20px] group  bg-black bg-opacity-90 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Meus Projetos
        </Link> */}
        {/* <Link
          href="/contact-me"
          className="rounded-[20px] group  bg-black bg-opacity-90 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contate-me
        </Link> */}
      </div>

      {/* <div className="absolute bottom-0 right-0 z-[10]"> */}
      {/* <Image src="/coding-boy.gif" alt="horse" height={600} width={400} className="relative -top-80 z-[7]" /> */}
      {/* <Image src="/cliff.webp" alt="cliff" width={480} height={480} /> */}
      {/* </div> */}

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full" />
      </div>

      <Image src="/stars.png" unoptimized alt="stars" height={300} width={300} className="absolute top-0 left-0 z-[10]" />
    </main>
  );
}
