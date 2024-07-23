import {useSearchParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState , createRef } from 'react';
import Text from '../components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image';


export default function Edit(){

    const [params]=useSearchParams();
    // console.log(params.get("url"));
    const [count,setCount]=useState(0);

    function addText(){
        setCount((prev)=>{
            return (prev+1);
        })
    }

    const memeRef=createRef();

    function handleSave(){
        exportComponentAsJPEG(memeRef);
    }

    return (
    <div style={{textAlign:'center'}} className='meme mt-5 mb-5' ref={memeRef}>
        <div >
        <h2>Edit Page</h2>
        <img src={params.get("url")} height='500px' width='500px'/><br/>
        {Array(count).fill(0).map((ele)=>{
            return (<Text/>)
        })}
    </div>
    <Button style={{margin:'3.5px'}} onClick={addText}>Add Text</Button>
    <Button style={{margin:'3.5px'}} variant="success" onClick={handleSave}>Save</Button>

    </div>)
}


