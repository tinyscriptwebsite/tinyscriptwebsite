import Image from "next/image";

const WebServiceCard = ({ services }) => {
  return services.map((card) => (
    <div className="flex flex-col gap-4">
      {card.map((c, idx) => (
        <div
          key={idx}
          className="bg-white group p-8 rounded-2xl flex flex-col justify-between h-[24rem] transition-all duration-500 overflow-hidden hover:h-auto"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-start gap-4">
            <h4 className="text-xl md:text-2xl text-third">{c.title}</h4>
            <p className="max-h-20 overflow-hidden opacity-80 transition-all duration-500 group-hover:max-h-[290px] group-hover:opacity-100">
              {c.desc}
            </p>
          </div>
          <div className="ml-auto my-2 image-wrapper">
            <Image
              src={c.image}
              alt={`Card ${idx + 1}`}
              className="card-image"
            />
          </div>
        </div>
      ))}
    </div>
  ));
};

export default WebServiceCard;
