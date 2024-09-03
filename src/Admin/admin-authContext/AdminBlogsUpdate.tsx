import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import BlogsTypes from '../../interfaces/BlogsType'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export const AdminBlogsUpdate = () => {


  const [open, setOpen] = useState(false)
  const [blogs, setBlogs] = useState<BlogsTypes[]>([]);
  const { id } = useParams();

    useEffect(()=> {
     getData();
    },[]);

    const getData = async (id) => {
      let response = await axios.get(process.env.backend_url  + `blogs/${id}/`, formData)
          try{
              setBlogs(response.data)
              console.log(blogs)
          } catch (error){
           console.log('error:' , error);
          }
    }

    console.log(blogs)


    // const fetchAllBlogs = async() => {
    //   const response = await blogsApi.postBlogs(formData);
    //     setBlogs(response)
    // }

    return (
    <>
    <Dialog open={open} onClose={setOpen} className="relative z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  Edit Blog
                </DialogTitle>
                <div className="mt-2">
                  <form>
                   {/*  Blog Titles  choose events or blogs*/}
                        <div> 
                            <label htmlFor='name'>Title:</label>
                            <div>
                            <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={blogs.name}
                                    >
                                    </input>
                            </div>
                        </div>
                        
                        {/* Blog Post */}
                        <div>
                            <label htmlFor='title'>Blog post:</label>
                            <div>
                            <textarea 
                                        id="title" 
                                        name="title"
                                        value={blogs.title}
                                        >
                            </textarea>
                            </div>
                        </div>

                        {/* Upload Photo */}
                        <div>
                            <label htmlFor='images'></label>
                            <h2> Add image:</h2>
                            <input type="file" 
                                    id="images" 
                                    accept="image/*"
                                    name="images"
                                    value={blogs.images}
                                    >
                            </input>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
             Update
            </button>
            <button
              type="button"
              data-autofocus
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  </>
    )
}

export default AdminBlogsUpdate