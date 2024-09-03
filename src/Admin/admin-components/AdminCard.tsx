import CardPropsType from "../../interfaces/CardType";

export const AdminCard = ({
  id,
  title,
  description,
  imgsrc,
  link,
}: CardPropsType) => {
  return (
    <div key={id} className="first:ml-[10%] mx-12 text-center max-w-sm bg-[#ffffff] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-[25%]">
      <form>
        <img className="rounded-t-md w-full h-[50%]" src={imgsrc} alt="" />
      <div className="p-5">
          <h5 id="title" className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        
        <p id="description" className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <br/>
          {link}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
        
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        
      </div>
      </form>
    </div>
  );
}

export default AdminCard;
