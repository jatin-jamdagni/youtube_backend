import { v2 as cloudinary } from "cloudinary"
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (pathToLocalFile) => {

    try {
        if (!pathToLocalFile) return null

        // uploading file to cloudinary 
        const response = await cloudinary.uploader.upload(pathToLocalFile, {
            resource_type: "auto"
        })

        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);

        // unlinking local file
        fs.unlinkSync(pathToLocalFile)
        return response;
    } catch (error) {
        fs.unlinkSync(pathToFileURL); // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary };