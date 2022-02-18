import {Request, Response} from "express";

export default interface BookmarkController {
    findAllTuitsBookmarkedByUser (req : Request , res : Response ) : void;
    bookmarkTuitByUser (req : Request , res : Response) : void;
    deleteBookmarkedTuit (req : Request , res : Response) : void;
}
