import Bookmark from "../models/Bookmark";
import Tuit from "../models/Tuit";


/**
 * @file Declares API for Bookmarks related data access object methods
 */

export default interface BookmarkDao {
    findAllTuitsBookmarkedByUser (uid : string): Promise<Tuit[]>;
    bookmarkTuitByUser (uid: string ,tid : string) : Promise<any>;
    deleteBookmarkedTuit (uid: string ,tid : string) : Promise<any>;
};