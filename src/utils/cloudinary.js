import {v2 as cloudinary} from "cloudinary" // basically we have typedef v2 as cloudinary
import fs from "fs"


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded 
        console.log("file has been uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        /// removed  the locally saved temporary file as the upload operation got failed 
        return null
    }
}


export {uploadOnCloudinary}
    