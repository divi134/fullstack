import image1 from './image1.jfif'
import wallpaper from '../wal.jfif'

const Image=()=>{
    return(
        <div>
            <p>Image</p>
            <img src={image1}  style={{width:"300px", height:"300px"}}/>&nbsp;
            <img src={wallpaper} alt='img' style={{width:"300px", height:"300px"}}/>&nbsp;
            <img src="/cat.jfif" alt='img' style={{width:"300px", height:"300px"}}/>
        </div>
    )
}
export default Image;