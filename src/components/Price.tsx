import { FaCheck } from "react-icons/fa";

const tiers = [
 {
  name: "Hobby",
  id: "tier-hobby",
  href: "#",
  priceMonthly: "R$ 29,00",
  description: "O plano perfeito se você está começando a usar nosso produto.",
  features: [
   "25 products",
   "Up to 10,000 subscribers",
   "Advanced analytics",
   "24-hour support response time",
  ],
  featured: false,
 },
 {
  name: "Empresa",
  id: "tier-enterprise",
  href: "#",
  priceMonthly: "R$ 99,00",
  description: "Suporte e infraestrutura dedicados para sua empresa.",
  features: [
   "Unlimited products",
   "Unlimited subscribers",
   "Advanced analytics",
   "Dedicated support representative",
   "Marketing automations",
   "Custom integrations",
  ],
  featured: true,
 },
 {
  name: "Profissional",
  id: "tier-professional",
  href: "#",
  priceMonthly: "R$ 59,00",
  description: "Ideal para profissionais que buscam aumentar seu público.",
  features: [
   "100 products",
   "Up to 50,000 subscribers",
   "Advanced analytics",
   "Priority support",
  ],
  featured: false,
 },
];

function classNames(...classes: string[]) {
 return classes.filter(Boolean).join(" ");
}

export function Price() {
 return (
  <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
   <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
   >
    <div
     style={{
      clipPath:
       "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
     }}
     className="mx-auto"
    />
   </div>
   <div className="mx-auto text-center">
    <p className="text-lg text-red-500 font-serif font-semibold">
     Escolha o plano certo para você!
    </p>
   </div>
   <p className="mx-auto text-center text-white text-2xl font-serif font-semibold mt-2">
    Escolha um plano acessível que esteja repleto dos melhores recursos para
    envolver seu público.
   </p>
   <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3">
    {tiers.map((tier, tierIdx) => (
     <div
      key={tier.id}
      className={classNames(
       tier.featured
        ? "relative bg-red-500 focus:outline-none"
        : "bg-white sm:mx-8 lg:mx-0",
       tier.featured
        ? ""
        : tierIdx === 0
        ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
        : tierIdx === tiers.length - 1
        ? "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl"
        : "",
       "rounded-3xl p-8 ring-1 sm:p-10"
      )}
     >
      <h3
       id={tier.id}
       className={classNames(
        tier.featured ? "text-white" : "text-black",
        "text-base/7 font-semibold"
       )}
      >
       {tier.name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
       <span
        className={classNames(
         tier.featured ? "text-white" : "text-black",
         "text-5xl font-semibold tracking-tight"
        )}
       >
        {tier.priceMonthly}
       </span>
       <span
        className={classNames(
         tier.featured ? "text-white" : "text-black",
         "text-base"
        )}
       >
        /mês
       </span>
      </p>
      <p
       className={classNames(
        tier.featured ? "text-white" : "text-black",
        "mt-6 text-base/7"
       )}
      >
       {tier.description}
      </p>
      <ul
       role="list"
       className={classNames(
        tier.featured ? "text-white" : "text-black",
        "mt-8 space-y-3 text-sm/6 sm:mt-10"
       )}
      >
       {tier.features.map((feature) => (
        <li key={feature} className="flex gap-x-3">
         <FaCheck
          aria-hidden="true"
          className={classNames(
           tier.featured ? "text-white" : "text-red-500",
           "h-6 w-5 flex-none"
          )}
         />
         {feature}
        </li>
       ))}
      </ul>
      <button>
       <a
        aria-describedby={tier.id}
        onClick={() => {
         window.location.href =
          "https://api.whatsapp.com/send/?phone=5551991007356&text=ola+gostaria+de+contratar+a+gamecms&type=phone_number&app_absent=0";
        }}
        className={classNames(
         tier.featured
          ? "bg-white text-red-500 hover:bg-gray-200 focus:bg-red-500 "
          : "text-red-500 ring-1 ring-inset ring-red-500 hover:bg-red-100 ",
         "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10"
        )}
       >
        Converse Conosco no WhatsApp
       </a>
      </button>
     </div>
    ))}
   </div>
  </div>
 );
}
