import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h1>Fetch Like a PRO</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="card">
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
