import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
	avatar: {
		height: 44,
		width: 44
	},
	text: {
		textOverflow: 'ellipsis',
		overflow: 'hidden'
	},
	container: {
		display: 'grid',
		gridAutoFlow: 'column',
		gridTemplateColumns: '50px auto 50px',
		gridGap: 12,
		alignItems: 'center',
		marginTop: 10
	},
	songInfoContainer: {
		overflow: 'hidden',
		whiteSpace: 'nowrap'
	}
})

function QueuedSong({ song }) {
	const classes = useStyles()
	const { title, artist, thumbnail } = song

	return (
		<div className={classes.container}>
			<Avatar src={thumbnail} variant="body2" className={classes.avatar} />
			<div className={classes.songInfoContainer}>
				<Typography variant="subtitle2" className={classes.text}>
					{title}
				</Typography>
				<Typography color="textSecondary" variant="body2" className={classes.text}>
					{artist}
				</Typography>
			</div>
			<IconButton>
				<Delete color="error" />
			</IconButton>
		</div>
	)
}

export default QueuedSong
