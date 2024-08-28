import CardPropsType from "../interfaces/CardType";


export const Card = ({id, title, description, imgsrc, link}: CardPropsType) => {
  return (
    <div key={id} className="first:ml-[10%] mx-12 text-center max-w-sm bg-[#ffffff] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-[25%]">
      <a href={link}>
        <img className="rounded-t-md w-full h-[50%]" src={imgsrc} alt="" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 id="title" className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p id="description" className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center mt-8 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;