import { Grid, Hidden, useMediaQuery } from '@material-ui/core'
import React, { createContext, useContext, useReducer } from 'react'
import AddSong from './components/AddSong'
import Header from './components/Header'
import SongList from './components/SongList'
import SongPlayer from './components/SongPlayer'
import songReducer from './reducer'

export const SongContext = createContext({
	song: {
		id: '2f47f93d-24b1-4606-b064-065153248a80',
		title: 'GRAEDA - Dopamine',
		artist: 'Test',
		thumbnail: 'https://img.youtube.com/vi/q89IEmr1YyY/0.jpg',
		url: 'https://www.youtube.com/watch?v=q89IEmr1YyY',
		duration: 204
	},
	isPlaying: false
})


function App() {
	const initialSongState = useContext(SongContext)
	const [state, dispatch] = useReducer(songReducer, initialSongState)
	const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'))
	const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

	return (
		<SongContext.Provider value={{ state, dispatch }}>
			<Hidden only="xs">
				<Header />
			</Hidden>
			<Grid container spacing={3} style={{ margin: 0, width: '100%', }}>
				<Grid
					style={{
						paddingTop: greaterThanSm ? 80 : 10
					}}
					item
					xs={12}
					md={7}
				>
					<AddSong />
					<SongList />
				</Grid>
				<Grid
					style={
						greaterThanMd
						?	{
								position: "fixed",
								width: "100%",
								right: 0,
								top: 70
							}
						:  {
								position: "fixed",
								width: "100%",
								left: 0,
								bottom: 0
							}
					}
					item
					xs={12}
					md={5}
				>
					<SongPlayer />
				</Grid>
			</Grid>
		</SongContext.Provider>
	)
}


export default App
