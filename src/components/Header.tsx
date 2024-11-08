import ImgAvatar from "/assets/avatar-gamecms.png";

export function Header() {
 return (
  <header>
   <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div className="flex-shrink-0">
     <a href="#" className="-m-1.5 p-1.5">
      <img alt="" src={ImgAvatar} className="h-20 w-auto" />
     </a>
    </div>
    <div className="flex">
     <span className="hidden sm:block">
      <button
       type="button"
       className="inline-flex items-center rounded-md px-5 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600"
       onClick={() => {
        window.location.href =
         "https://invoice.gamecms.com.br/client/login?company_key=2RIDDxYMpar1FNgFrzjKBL4yRkCwp7GQ";
       }}
      >
       Entrar
      </button>
     </span>
    </div>
   </nav>
  </header>
 );
}
