import "./App.css";
import ImgBanner from "../src/assets/banner.png";

function App() {
 return (
  <>
   <div>
    <header>
     <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex-shrink-0">
       <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
         alt=""
         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
         className="h-8 w-auto"
        />
       </a>
      </div>
      <div className="flex">
       <span className="hidden sm:block">
        <button
         type="button"
         className="inline-flex items-center rounded-md px-5 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600"
        >
         Solicitar orçamento
        </button>
       </span>
      </div>
     </nav>
    </header>
   </div>

   <div className="flex py-20">
    <div className="mx-auto max-w-7xl lg:px-8">
     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="items-center">
       <div className="lg:max-w-lg">
        <h2 className="text-red-500 font-serif">
         Deseja criar sua própria loja de jogos?
        </h2>
        <p className="mt-6 text-6xl text-white sm:text-5xl font-serif font-semibold">
         A GameCMS pode te ajudar!
        </p>
        <p className="mt-6 mb-6 text-lg/8 text-white font-serif font-light">
         Lojas online personalizadas, feitas sob medida para você! Com um design
         moderno e funcional, sua loja será o destino dos gamers em busca das
         melhores ofertas.
        </p>
        <span className="hidden sm:block">
         <button
          type="button"
          className="items-center rounded-md px-5 py-3 text-lg font-serif font-semibold text-white bg-red-500 hover:bg-red-600"
         >
          Solicitar orçamento
         </button>
        </span>
       </div>
      </div>
      <img
       alt="imgBanner"
       src={ImgBanner}
       width={300}
       height={300}
       className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
      />
     </div>
    </div>
   </div>

   <div className="mt-8 text-center">
    <p className="text-lg text-red-500 font-serif font-semibold">A melhor empresa para</p>
    <p className="text-white text-2xl font-serif font-semibold">o desenvolvimento de plataformas</p>
   </div>

   <div className=" mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 mt-8 items-center justify-between">
    <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-lg w-[25rem] ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0">
     <span className="text-red-500 text-4xl mb-2">🎮</span> {/* Ícone */}
     <h3 className="text-xl font-semibold text-white mb-1">Título 1</h3>{" "}
     <p className="text-gray-300 text-center">
      Descrição do primeiro quadrado.
     </p>{" "}
    </div>
    <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-lg w-[25rem] ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0">
     <span className="text-red-500 text-4xl mb-2">🕹️</span> {/* Ícone */}
     <h3 className="text-xl font-semibold text-white mb-1">Título 2</h3>
     <p className="text-gray-300 text-center">Descrição do segundo quadrado.</p>
    </div>
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-[25rem] ring-1 ring-gray-400/10 lg:-ml-0">
     <span className="text-red-500 text-4xl mb-2">💻</span> {/* Ícone */}
     <h3 className="text-xl font-semibold text-white mb-1">Título 3</h3>
     <p className="text-gray-300 text-center">
      Descrição do terceiro quadrado.
     </p>
    </div>
   </div>
  </>
 );
}

export default App;
