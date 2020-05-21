import React, {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;
const continents = [
    { key:1, value:'Africa'},
    { key:2, value:'Antartica'},
    { key:3, value:'Asia'},
    { key:4, value:'Australia'},
    { key:5, value:'Europe'},
    { key:6, value:'North America'},
    { key:7, value:'SouthAmerica'},
];

export default function UploadProduct() {
    const [TitleValue, setTitleValue] = useState("");
    const [DescValue, setDescValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [ContinentValue, setContinentValue] = useState(1);
    const [Images, setImages] = useState([]);

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescChange = (event) => {
        setDescValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onContinentSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }
    const updateImages = (newImage) => {
        setImages(newImage)
    }
    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center',marginBottom:'2rem'}}>
                <Title level={2}>Upload Travel Product</Title>
            </div>

                <Form onSubmit>
                    {/* {DropZone} */}
                    <FileUpload refreshFunction={ updateImages } />
                    <br />
                    <br />
                    <label>Title</label>
                    <Input 
                        onChange={onTitleChange}
                        value={TitleValue}
                    />

                    <br />
                    <br />
                    <label>Description</label>
                    <TextArea 
                        onChange={onDescChange}
                        value={DescValue}
                    />

                    <br />
                    <br />
                    <label>Price</label>
                    <Input 
                        onChange={onPriceChange}
                        value={PriceValue}
                        type="number"
                    />
                    <br />
                    <br />
                    <select onChange={onContinentSelectChange}>
                        {continents.map(item => (
                            <option key={item.key} value={item.key}>{item.value}</option>
                        ))}
                    </select>

                    <br />
                    <br />
                    <Button 
                        onClick
                        value
                    >
                        Submit
                    </Button>
                </Form>
        </div>
    )
}
