import { Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import QueuedSong from './QueuedSong'


function QueuedSongList() {
	const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

	const song = {
		title: "LUNE",
		artist: "MÖÖN",
		thumbnail: "https://ems-media-prod.s3.amazonaws.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU"
	}

	return (
		greaterThanMd && (
			<div style={{ margin: '10px 0' }}>
				<Typography color="textSecondary" variant="button">
					QUEUE (5)
				</Typography>
				{Array.from({ length: 5 }, () => song).map((song, i) => (
					<QueuedSong key={i} song={song} />
				))}
			</div>
		)
	)
}


export default QueuedSongList
