import React, { Component } from 'react';

export default class EditSongModal extends Component {
    handleEditSong = (event) => {
        event.preventDefault();
        this.props.editSongCallback(this.props.editSongIndex, this.props.oldSong);
    }

    render() {
        const {hideEditSongModalCallback} = this.props;
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Title:
                                <input type="text" id="edit-song-title"></input><br></br>
                                Artist:
                                <input type="text" id="edit-song-artist"></input><br></br>
                                YouTube Id:
                                <input type="text" id="edit-song-id"></input><br></br>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={this.handleEditSong}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}