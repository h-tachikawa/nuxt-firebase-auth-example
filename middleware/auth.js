export default function ({ redirect, route }) {
  const currentUserIdToken = localStorage.getItem('jwt')

  const redirecting = localStorage.getItem('redirecting')
  if (!redirecting && localStorage.getItem('jwt') && route.path === '/') {
    redirect('/profile')
  }

  if (!currentUserIdToken && route.path !== '/') {
    redirect('/')
  }
}
