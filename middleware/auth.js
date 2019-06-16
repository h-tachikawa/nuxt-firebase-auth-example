export default function ({ redirect }) {
  const currentUserIdToken = localStorage.getItem('jwt')
  if (!currentUserIdToken) {
    redirect('/')
  }
}
