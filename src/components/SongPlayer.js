import { Card, CardContent, CardMedia, IconButton, makeStyles, Slider, Typography } from '@material-ui/core'
import { PlayArrow, SkipPrevious, SkipNext } from '@material-ui/icons'
import React from 'react'
import QueuedSongList from './QueuedSongList'


const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0 15px'
	},
	content: {
		flex: '1 0 auto'
	},
	thumbnail: {
		width: 150
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1)
	},
	playIcon: {
		height: 38,
		width: 38
	}
}))

function SongPlayer() {
	const classes = useStyles()

	return (
		<>
			<Card variant="outlined" className={classes.container}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography variant="h5" component="h3">
							Title
						</Typography>
						<Typography variant="subtitle1" component="p" color="textSecondary">
							Artist
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton>
							<SkipPrevious />
						</IconButton>
						<IconButton>
							<PlayArrow className={classes.playIcon}/>
						</IconButton>
						<IconButton>
							<SkipNext />
						</IconButton>
						<Typography variant="subtitle1" component="p" color="textSecondary">
							00:01:30
						</Typography>
					</div>
					<Slider
						type="range"
						min={0}
						max={1}
						step={0.01}
					/>
				</div>
				<CardMedia
					className={classes.thumbnail}
					image="https://ems-media-prod.s3.amazonaws.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU"
				/>
			</Card>
			<QueuedSongList />
		</>
	)
}


export default SongPlayer
