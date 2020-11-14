import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { HeadsetMicTwoTone } from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles(theme => ({
	title: {
		marginLeft: theme.spacing(2)
	}
}))

function Header() {
	const classes = useStyle()

	return (
		<AppBar color='primary' position='fixed'>
			<Toolbar>
				<HeadsetMicTwoTone />
				<Typography className={classes.title} variant='h6' component='h1'>
					Apollo Music Share
				</Typography>
			</Toolbar>
		</AppBar>
	)
}


export default Header
