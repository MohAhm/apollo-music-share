import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws"
import { GET_QUEUED_SONGS } from './queries'

const client = new ApolloClient({
	link: new WebSocketLink({
		uri: 'ws://graphql-apollo.hasura.app/v1/graphql',
		options: {
			reconnect: true
		}
	}),
	cache: new InMemoryCache(),
	typeDefs: gql`
		type Song {
			id: uuid!
			title: String!
			artist: String!
			thumbnail: String!
			duration: Float!
			url: String!
		}

		type SongInput {
			id: uuid!
			title: String!
			artist: String!
			thumbnail: String!
			duration: Float!
			url: String!
		}

		type Query {
			queue: [Song]!
		}

		type Mutation {
			addOrRemoveFromQueue(input: SongInput!): [Song]!
		}
	`,
	resolvers: {
		Mutation: {
			addOrRemoveFromQueue: (_, { input }, { cache }) => {
				const queryResult = cache.readQuery({
					query: GET_QUEUED_SONGS
				})

				if (queryResult) {
					const { queue } = queryResult
					const isInQueue = queue.some(song => song.id === input.id)
					const newQueue = isInQueue
						? queue.filter(song => song.id !== input.id)
						: [ ...queue, input ]

					cache.writeQuery({
						query: GET_QUEUED_SONGS,
						data: { queue: newQueue }
					})

					return newQueue
				}

				return []
			}
		}
	}
})

const hasQueue = Boolean(localStorage.getItem('queue'))

client.writeQuery({
	query: GET_QUEUED_SONGS,
	data: {
		queue: hasQueue ? JSON.parse(localStorage.getItem('queue')) : []
	}
})

export default client