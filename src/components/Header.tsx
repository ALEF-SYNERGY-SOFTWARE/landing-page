import ImgAvatar from "/assets/avatar-gamecms.png";

export function Header() {
 return (
  <header>
   <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div className="flex-shrink-0">
     <a href="#" className="-m-1.5 p-1.5">
      <img alt="" src={ImgAvatar} className="h-12 w-auto md:h-20" />
     </a>
    </div>
    <div className="flex-shrink-0">
     <button
      type="button"
      className="inline-flex items-center rounded-md px-3 py-2 text-sm md:px-5 md:py-3 md:text-lg font-semibold text-white bg-red-500 hover:bg-red-600"
      onClick={() => {
       window.open("https://invoice.gamecms.com.br/client/login?company_key=2RIDDxYMpar1FNgFrzjKBL4yRkCwp7GQ")
      }}
     >
      Entrar
     </button>
    </div>
   </nav>
  </header>
 );
}
