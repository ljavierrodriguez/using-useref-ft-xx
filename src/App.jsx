import { useRef, useState } from 'react'
import { FaEye, FaEyeSlash, FaPrint } from 'react-icons/fa';
function App() {
  /* const [name, setName] = useState(""); */
  const [show, setShow] = useState(false);
  const refName = useRef();
  const refPassword = useRef();
  const refGallery = useRef();

  const [images, setImages] = useState([
    "https://picsum.photos/id/100/300/200",
    "https://picsum.photos/id/200/300/200",
    "https://picsum.photos/id/300/300/200",
    "https://picsum.photos/id/400/300/200",
    "https://picsum.photos/id/500/300/200",
  ])


  const printName = () => {
    console.log("Llamando a la funcion print");
    console.log(refName.current.value);
  }

  const showPassword = (show) => {
    /* 
    let pass = document.querySelector('[type=password]');
    if (show) {
      pass.type = "text";
    } else {
      pass.type = "password";
    } 
    */
    if (show) {
      refPassword.current.type = "text";
    } else {
      refPassword.current.type = "password";
    }
    setShow(show);
  }

  const changeImage = img => {
    refGallery.current.src = img;
  }

  return (
    <>
      <div className="input-group">
        <input type="text" ref={refName} />
        <button className="btn btn-info btn-sm" onClick={printName}>
          <FaPrint />
        </button>
      </div>

      <div className="input-group">
        <input type="password" ref={refPassword} />
        <button className="btn btn-info btn-sm" onClick={() => showPassword(!show)}>
          {
            show ? <FaEyeSlash /> : <FaEye />
          }
        </button>
      </div>

      <div className="flex">
        <div className='image'>
        <img ref={refGallery} width={300} height={200}/>
        </div>
        <div className="gallery d-flex justify-content-between">
          {
            images.map((img, i) => <img src={img} key={i} width={200} height={100} onClick={() => changeImage(img)}/>)
          }
        </div>
      </div>
    </>
  )

}

export default App
