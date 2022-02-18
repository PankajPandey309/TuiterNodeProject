import Bookmark from "../models/Bookmark";
import BookmarkDaoI from "../Interfaces/BookmarkDao";
import BookmarkModel from "../mongoose/BookmarkModel";
import Tuit from "../models/Tuit";

export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao : BookmarkDao | null = null;
    private static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}
    findAllTuitsBookmarkedByUser = async(uid : string) : Promise<Tuit[]> => BookmarkModel.find({tuitBookmarkedBy : uid});
    bookmarkTuitByUser = async(uid : string , tid : string) : Promise<any> => BookmarkModel.create({tuitBookmarked :tid, tuitBookmarkedBy: uid});
    deleteBookmarkedTuit = async(uid : string , tid : string) : Promise<any> => BookmarkModel.deleteOne({tuitBookmarked :tid, tuitBookmarkedBy: uid});
}