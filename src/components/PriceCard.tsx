import { FaCheck } from "react-icons/fa";

export function PriceCard() {
 const planos = [
  {
   nome: "Silver",
   beneficios: [
    "2h de suporte semanal",
    "Anti ddos site",
    "Integração padrão",
    "Servidor de update launcher incluso",
    "Templates padrão",
    "Sem notificações",
   ],
   link: "http://invoice.gamecms.com.br/client/subscriptions/VolejRejNm/purchase"
  },
  {
   nome: "Diamond",
   beneficios: [
    "16h de suporte semanal",
    "Anti ddos site",
    "Integração customizada total",
    "Servidor de update launcher incluso",
    "Templates customizáveis + possibilidade de criação de novo frontend",
    "Notificações de compra",
   ],
   link: "http://invoice.gamecms.com.br/client/subscriptions/Opnel5aKBz/purchase"
  },
  {
   nome: "Gold",
   beneficios: [
    "4h de suporte semanal",
    "Anti ddos site",
    "Integração customizada parcial",
    "Servidor de update launcher incluso",
    "Templates customizável",
    "Notificações de compra",
   ],
   link: "http://invoice.gamecms.com.br/client/subscriptions/Wpmbk5ezJn/purchase"
  },
 ];

 const handleClick = (link: string) => {
  window.open(link, "_black")
 }

 return (
  <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
   <div className="mx-auto text-center">
    <p className="md:text-lg text-red-500 font-serif font-semibold">
     Escolha o plano certo para você!
    </p>
   </div>
   <p className="mx-auto text-center text-white text-sm md:text-2xl font-serif font-semibold mt-2">
    Escolha um plano acessível que esteja repleto dos melhores recursos para
    envolver seu público.
   </p>
   <div className="mx-auto mt-16 px-5 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
    {planos.map((plano, index) => (
     <div
      key={index}
      className={`
              ${
               index === 1
                ? "mx-auto flex flex-col my-[-1rem] justify-center w-full bg-red-500 min-h-[25rem] shadow-lg transform scale-110 z-20"
                : "mx-auto w-full bg-white"
              }
              rounded-3xl p-8
            `}
     >
      <h3
       className={`${
        index === 1
         ? "text-2xl md:text-4xl font-serif font-semibold text-white"
         : "text-2xl md:text-4xl font-serif font-semibold"
       }`}
      >
       {plano.nome}
      </h3>
      <ul
       role="list"
       className={`${
        index === 1 ? "mt-4 text-white text-left" : "mt-4 text-left"
       }`}
      >
       {plano.beneficios.map((beneficio, idx) => (
        <li key={idx} className="flex text-[0.8rem] items-center gap-x-3 mb-3">
         <FaCheck
          aria-hidden="true"
          className={`${
           index === 1 ? " text-white h-6 w-3 md:w-5 flex-none" : "text-red-500 h-6 w-3 md:w-5 flex-none"
          }`}
         />
         {beneficio}
        </li>
       ))}
      </ul>
      <button
       className={`${
        index === 1
         ? "w-full bg-white text-red-500 hover:bg-red-200"
         : "w-full hover:bg-red-100 border border-red-500 text-red-500"
       } mt-8 block rounded-md px-3.5 py-2.5 text-sm font-semibold`}
       onClick={() => handleClick(plano.link)}
      >
       Escolher plano
      </button>
     </div>
    ))}
   </div>
  </div>
 );
}
