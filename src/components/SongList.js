import { CircularProgress } from '@material-ui/core'
import React from 'react'
import Song from './Song';


function SongList() {
	let loading = false

	const song = {
		title: "LUNE",
		artist: "MÖÖN",
		thumbnail: "https://ems-media-prod.s3.amazonaws.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/50/1398/35822/70126/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg/OQeOfxOTGwDHa1wxiw1bB1zXRhzCbcrGO1Lm9K5Znvo.jpg?itok=CvqVGEFU"
	}

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: 50
				}}
			>
				<CircularProgress />
			</div>
		)
	}

	return (
		<div>
			{Array.from({ length: 10 }, () => song).map((song, i) => (
				<Song key={i} song={song} />
			))}
		</div>
	)
}


export default SongList
