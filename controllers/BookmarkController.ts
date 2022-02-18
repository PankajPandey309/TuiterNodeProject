import BookmarkDao from "../daos/BookmarkDao";
import BookmarkControllerI from "../Interfaces/BookmarkController";
import {Express, Request, Response} from "express";
import Tuit from "../models/Tuit";

export default class BookmarkController implements BookmarkControllerI {
    private static bookmarkDao : BookmarkDao | null = null;
    private static bookmarkController : BookmarkController | null =null;
    public static getInstance = (app: Express) : BookmarkController => {
        if(BookmarkController.bookmarkController == null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.get("/api/users/:uid/bookmarks",BookmarkController.bookmarkController.findAllTuitsBookmarkedByUser);
            app.post("/api/users/:uid/bookmark/:bid",BookmarkController.bookmarkController.bookmarkTuitByUser);
            app.delete("/api/users/:uid/bookmark/:bid",BookmarkController.bookmarkController.deleteBookmarkedTuit);
        }
        return BookmarkController.bookmarkController;
    }
    private constructor() {}

    findAllTuitsBookmarkedByUser = (req: Request, res: Response) => BookmarkController.bookmarkDao?.findAllTuitsBookmarkedByUser(req.params.uid).then((tuits: Tuit[]) => res.json(tuits));
    bookmarkTuitByUser = (req: Request, res: Response) => BookmarkController.bookmarkDao?.bookmarkTuitByUser(req.params.uid,req.params.tid).then((status) => res.send(status));
    deleteBookmarkedTuit = (req: Request, res: Response) => BookmarkController.bookmarkDao?.bookmarkTuitByUser(req.params.uid,req.params.tid).then((status) => res.send(status));

};