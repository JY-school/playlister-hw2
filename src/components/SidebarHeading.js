import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className="toolbar-button" 
                    onClick={this.handleClick}
                    disabled={!this.props.canAddList}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}