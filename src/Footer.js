import React from 'react'
import './Footer.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumlogo"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjYs1_lJcLE-tabrsEkUj5YoiuJ46zMFSVltT48-RoyCZ9yM&s" alt="" />
                <div className="footer_songinfo">
                    <h4>yeah!!</h4>
                    <p>usher</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon classname="footer_icon" />
                <SkipPreviousIcon classname="footer_icon" />
                <PlayCircleFilledIcon fontSize="large" classname="footer_icon" />
                <SkipNextIcon classname="footer_icon" />
                <RepeatIcon classname="footer_icon" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2} >
                    <Grid item >
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item >
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs >
                        <Slider/>
                    </Grid>
                </Grid>
                
            </div>

        </div>
    )
}

export default Footer
