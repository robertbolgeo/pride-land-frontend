import { useEffect } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

const AdminTextEditor = () => {
    const { quill, quillRef } = useQuill();
   
    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
              console.log(quill.getText()); // Get text only
              console.log(quill.getContents()); // Get delta contents
              console.log(quill.root.innerHTML); // Get innerHTML using quill
              console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        });
      }
    }, [quill]);
  
    return (
      <div style={{ width: 500, height: 300, marginBottom: 70}}>
        <div ref={quillRef} />
      </div>
    );
  };

  export default AdminTextEditor