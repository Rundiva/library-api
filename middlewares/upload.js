import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest:"/upload"})

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessKey:process.env.SAVEFILESORG_API_KEY,
        relativePath: "/uploads/*"
    }),
    preservePath: true
})