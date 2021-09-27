import Profile from 'templates/Profile'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function ProfileCards() {
  return (
    <Profile>
      <h1>Em desenvolvimento</h1>
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session
    }
  }
}
