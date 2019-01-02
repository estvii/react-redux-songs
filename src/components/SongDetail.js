import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    const {song} = props;

    if (!song) {
        return <div>Please Select Song</div>
    }

    return(
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
            
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);