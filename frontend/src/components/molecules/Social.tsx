import K from "../../constants";

const Social = () => {
  return (
    <div className="flex gap-6">
      {K.SOCIAL.map((social, idx) => (
        <a href={social.url} className=" drop-shadow-2xl" key={idx}>
          <img
            src={social.icon}
            alt="social media icon"
            className="w-8 h-8 hover:scale-105 drop-shadow-2xl"
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
