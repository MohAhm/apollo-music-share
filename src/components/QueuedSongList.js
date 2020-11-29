import { Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import QueuedSong from './QueuedSong'


function QueuedSongList({ queue }) {
	const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

	return (
		greaterThanMd && (
			<div style={{ margin: '10px 0' }}>
				<Typography color="textSecondary" variant="button">
					QUEUE ({queue.length})
				</Typography>
				{queue.map((song, i) => (
					<QueuedSong key={i} song={song} />
				))}
			</div>
		)
	)
}


export default QueuedSongList
