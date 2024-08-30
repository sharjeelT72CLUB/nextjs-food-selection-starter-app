'use client'
export default function error({error}) {
  return (
    <main className="error">
      <h1>Meal not found!</h1>
      <p>Failed to fetch meal data. please try again</p>
    </main>
  )
}
