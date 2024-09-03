import {AdminCardPropsType} from "../admin-interface/AdminGalleryTypes";

export const AdminCard = ({
  id,
  title,
  description,
  imgsrc,
  link,
  setCardEditView
}: AdminCardPropsType) => {
  return (
    <div key={id} className="first:ml-[10%] mx-12 text-center max-w-sm bg-[#ffffff] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-[25%]">
        <img className="rounded-t-md w-full h-[50%]" src={imgsrc} alt="" onClick={() => setCardEditView("imgsrc")}/>
      <div className="p-5">
          <h5 id="title" className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={() => setCardEditView("title")}>
            {title}
          </h5>
        
        <p id="description" className="mb-4 font-normal text-gray-700 dark:text-gray-400" onClick={() => setCardEditView("description")}>
          {description}
        </p>
        <br/>
        <div className="w-full border-2 border-black" onClick={() => setCardEditView("link")}>
          {link}
        </div>
        
      </div>
    </div>
  );
}

export default AdminCard;
