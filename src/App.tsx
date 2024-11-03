import "./App.css";
import ImgBanner from "/assets/logo-game-cms.png";

function App() {
  return (
    <div className="app-container">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex-shrink-0">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={ImgBanner}
                className="h-20 w-auto"
              />
            </a>
          </div>
          <div className="flex">
            
            
            <span className="hidden sm:block mr-2">
              <button
                type="button"
                className="inline-flex items-center rounded-md px-5 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600"
                onClick={() => {
                  window.location.href = 'https://invoice.gamecms.com.br/client/register?company_key=2RIDDxYMpar1FNgFrzjKBL4yRkCwp7GQ';
                }}
              >
                Criar Conta 
              </button>
            </span>

            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md px-5 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600"
                onClick={() => {
                  window.location.href = 'https://invoice.gamecms.com.br/client/login?company_key=2RIDDxYMpar1FNgFrzjKBL4yRkCwp7GQ';
                }}
              >
                Entrar 
              </button>
            </span>


          </div>
        </nav>
      </header>

      <div className="flex py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-red-500 font-serif">
                  Deseja gerenciar seu game indie / privado de forma rapida e facil?
                </h2>
                <p className="mt-6 text-6xl text-white sm:text-5xl font-serif font-semibold">
                  A GameCMS pode te ajudar!
                </p>
                <p className="mt-6 mb-6 text-lg/8 text-white font-serif font-light">
                  Sistemas únicos e sob medida para seu game, sistema de notícias, atualizações, e-commerce enviando diretamente para seu game, nós resolvemos o seu problema!
                </p>
                <span className="hidden sm:block">
                  <button
                    type="button"
                    className="items-center rounded-md px-5 py-3 text-lg font-serif font-semibold text-white bg-red-500 hover:bg-red-600"
                    onClick={() => {
                      window.location.href = 'https://api.whatsapp.com/send/?phone=5551991007356&text=ola+gostaria+de+contratar+a+gamecms&type=phone_number&app_absent=0';
                    }}
                  >
                    Solicitar orçamento no WhatsApp
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
        <p className="text-lg text-red-500 font-serif font-semibold">A melhor solução para seu Game</p>
        <p className="text-white text-2xl font-serif font-semibold">Plataforma customizavel</p>
      </div>

      <div className="mx-auto">
          <iframe className="mt-2" width="1024" height="768" src="https://player.vimeo.com/video/1025858770?h=33469dc7a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Plataforma Game CMS - A melhor forma de  Gerir Jogos Online"></iframe>
           <script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mx-auto w-[1024px]" onClick={() => {
          window.location.href = 'https://invoice.gamecms.com.br/client/subscriptions/VolejRejNm/purchase';
      }}>
        Comprar Agora
      </button>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} GameCMS. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
