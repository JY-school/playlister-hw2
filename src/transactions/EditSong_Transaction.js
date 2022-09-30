import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with ediit
 * song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Jenny Yang
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, songIndex, oldSong, newTitle, newArtist, newYouTubeId, oldSongTitle, oldSongArtist, oldSongYouTubeId) {
        super();
        this.app = initApp;
        this.songIndex = songIndex;
        this.oldSong = oldSong;
        this.newTitle = newTitle;
        this.newArtist = newArtist;
        this.newYouTubeId = newYouTubeId;
        this.oldTitle = oldSongTitle;
        this.oldArtist = oldSongArtist;
        this.oldLink = oldSongYouTubeId;
    }

    doTransaction() {
        this.app.editSong(this.songIndex, this.newTitle, this.newArtist, this.newYouTubeId);
    }
    
    undoTransaction() {
        console.log(this.oldSong);
        this.app.editSong(this.songIndex, this.oldTitle, this.oldArtist, this.oldLink);
    }
}