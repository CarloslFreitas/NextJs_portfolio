import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/space2.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text=[50px] text-white font-semibold">
            Torno tudo possível
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-50">
              Desenvolvimento Web Front End
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Descrevendo o descritivel descrevendo a descrição descrita descrevendo do descritivel descrevido
          </p>
          <div className="flex-col md:flex-row hidden md:flex">
            <Link href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Saiba Mais
            </Link>
            <Link href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Technologias
            </Link>
            <Link href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Meus Projetos
            </Link>
            <Link href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contate-me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute botton-10 z-[20] right-5 flex-col md:hidden">
        <Link href="/my-skills"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Saiba Mais
        </Link>
        <Link href="/my-skills"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">

          Technologias
        </Link>
        <Link href="/my-skills"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">

          Meus Projetos
        </Link>
        <Link href="/my-skills"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">

          Contate-me
        </Link>

      </div>
    </main>
  );
}
