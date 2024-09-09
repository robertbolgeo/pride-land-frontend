import { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
export default function Home() {

  const endpoint = process.env.backend_url;
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  function handleTitle(e) {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }
  
 const handleSubmit = async (e) => {
 
      const formData = {
        title,
        description,
        content,
      };
    console.log(formData);

    if (!formData.title || !formData.description || !formData.description) {
      alert('Please fill out all required fields');
  }

    try{
        const response = await axios.post( endpoint + 'blogs/' , formData);
        console.log("Form submitted!", response);
      } catch (error){
        console.log("error:" , error)
      }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
        {/* Blog Editor */}
        <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
            Blog Post
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleTitle}
                    type="text"
                    value={title}
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Course title"
                  />
                </div>
      
              </div>
              {/* Description */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              {/* Content */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Body
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-500 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Create Blog Post</span>
            </button>
          </form>
        </div>


        <div className=" blog-view w-full max-w-3xl p-8 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
           Preview
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Title */}
            <div className="sm:col-span-2">
      
              <div className="mt-2">
                <p className="text-2xl font-bold">{title}</p>
              </div>
            </div>
            <div className="sm:col-span-2">
            </div>
            {/* Description */}
            <div className="sm:col-span-2">
            
              <p>{description}</p>
            </div>
            <div className="sm:col-span-full">
          
              {parse(content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


