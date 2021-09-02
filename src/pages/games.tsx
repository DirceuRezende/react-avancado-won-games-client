import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 10 }
  })
  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
