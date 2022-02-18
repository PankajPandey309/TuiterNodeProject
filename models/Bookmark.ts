import Tuit from './Tuit';
import User from './User';

export default class Bookmark {
    private tuitBookmarked : Tuit | null = null;
    private tuitBookmarkedBy : User | null = null;
}