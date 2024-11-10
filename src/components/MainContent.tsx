import ImgBanner from "/assets/banner-game-cms.png";

export function MainContent() {
 return (
  <>
   <div className="flex py-20">
    <div className="mx-auto max-w-7xl lg:px-8">
     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="items-center">
       <div className="lg:max-w-lg">
        <h2 className="text-red-500 font-serif">
         Deseja gerenciar seu game indie / privado de forma rapida e facil?
        </h2>
        <p className="mt-6 text-6xl text-white sm:text-5xl font-serif font-semibold">
         Suba de nível !
        </p>

        <p className="mt-2 mb-2 text-lg/8 text-white font-serif font-light">
         Sistema de Loja e-commerce integrado com game
        </p>

        <p className="mt-2 mb-2 text-lg/8 text-white font-serif font-light">
         Sistema de Guild com senha
        </p>

        <p className="mt-2 mb-2 text-lg/8 text-white font-serif font-light">
         Sistema de notififacao via discord
        </p>

        <p className="mt-2 mb-2 text-lg/8 text-white font-serif font-light">
         Sistema de Atualizacao para launcher nativo e facil de usar
        </p>

        <p className="mt-2 mb-2 text-lg/8 text-white font-serif font-light">
         Tudo isso e muito mais !
        </p>

        <span className="hidden sm:block">
         <button
          type="button"
          className="mt-4  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded "
          onClick={() => {
           window.location.href =
            "https://api.whatsapp.com/send/?phone=5551991007356&text=ola+gostaria+de+contratar+a+gamecms&type=phone_number&app_absent=0";
          }}
         >
          Converse Conosco no WhatsApp
         </button>
        </span>
       </div>
      </div>
      <div className="flex">
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
   </div>

   <div className="mt-8 text-center">
    <p className="text-lg text-red-500 font-serif font-semibold">
     A melhor solução para seu Game
    </p>
    <p className="text-white text-2xl font-serif font-semibold mt-2">
     Plataforma customizavel
    </p>
   </div>

   <div className="mx-auto">
    <div className="flex justify-center">
     <iframe
      className="flex justify-center"
      width="1024"
      height="768"
      src="https://player.vimeo.com/video/1025858770?h=33469dc7a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      title="Plataforma Game CMS - A melhor forma de  Gerir Jogos Online"
     ></iframe>
     <script src="https://player.vimeo.com/api/player.js"></script>
    </div>

    <div className="flex justify-center">
     <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mb-10 w-full max-w-5xl"
      onClick={() => {
       window.location.href =
        "https://invoice.gamecms.com.br/client/subscriptions/VolejRejNm/purchase";
      }}
     >
      Comprar Agora
     </button>
    </div>
   </div>
  </>
 );
}
