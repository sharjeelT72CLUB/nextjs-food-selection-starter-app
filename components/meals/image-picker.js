'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label, name}) {

    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();
    function handlePickClick(){
        imageInputRef.current.click();
    }

    function handlePickedImage(event){
        const file = event.target.files[0];
        if(!file){
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file) //it does nothing onload has image
        setPickedImage(file);

        //preview of image should show complete file
    }

    // console.log(pickedImage)

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <div className={classes.placeholder}>No image picked</div>}
                {pickedImage && <Image
                fill
                src={pickedImage} alt='Preview'/>}
            </div>
            <input 
            className={classes.input}
            type="file" 
            id={name}
            ref={imageInputRef}
            accept='image/png, image/jpeg' 
            onChange={handlePickedImage}
            required
            name={name} />
            <button onClick={handlePickClick} className={classes.button} type='button'>
                Pick an Image
            </button>
        </div>
    </div>
  )
}
