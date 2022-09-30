import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with remove
 * song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Jenny Yang
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, songIndex, song) {
        super();
        this.app = initApp;
        this.songIndex = songIndex
        this.song = song
    }

    doTransaction() {
        this.app.removeSong(this.songIndex);
    }
    
    undoTransaction() {
        this.app.state.currentList.songs.splice(this.songIndex, 0, this.song);
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}