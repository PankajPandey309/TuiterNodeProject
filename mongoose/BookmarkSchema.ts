import mongoose , {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";


const BookmarkSchema = new mongoose.Schema<Bookmark> ({
    tuitBookmarked : {type: Schema.Types.ObjectId, ref: "TuitModel"},
    tuitBookmarkedBy : {type: Schema.Types.ObjectId, ref: "UserModel"}
},{collection : "bookmarks"});
export default BookmarkSchema;