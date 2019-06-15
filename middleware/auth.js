export default function ({ route, redirect }) {
  const currentUserIdToken = localStorage.getItem('jwt')
  if (!currentUserIdToken && route.path !== '/') {
    redirect('/')
  }
  if (currentUserIdToken && route.path === '/') {
    redirect('/profile')
  }
}
