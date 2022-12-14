import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that adds a song.
 * It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Jenny Yang
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        this.app.addSong();
    }
    
    undoTransaction() {
        this.app.state.currentList.songs.pop();
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}