import React, {useState} from 'react'
import DropZone from 'react-dropzone';
import {Icon} from 'antd'
import Axios from 'axios';
export default function FileUpload(props) {

    const [Images, setImages] = useState([]);

    const onDrop = (files) => {
        console.log("drop")
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);

        //save image on server
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if(response.data.success){
                    setImages([...Images], response.data.image)
                    props.refreshFunction([...Images], response.data.image)
                } else {
                    alert('failed to save image')
                }
            })
    } 
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <DropZone
                onDrop={onDrop}
                multiple={false}
                maxSize={100000000000000}   
            >
                {({getRootProps,getInputProps}) => (
                    <div style={{ width:'300px', height:'240px', border:'1px solid lightgray', display:'flex', alignItems:'center'}}
                        {...getRootProps()}
                    >
                    {/* <input {...getInputProps} /> */}
                    <Icon type="plus" style={{fontSize:'3rem'}}></Icon>    
                    </div>
                )}
            </DropZone>

            <div style={{display:'flex', width:'350px', height:'240px', overflowX:'scroll'}}>
                    <div onClick>
                        <img />
                    </div>
            </div>
        </div>
    )
}
