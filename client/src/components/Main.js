import React from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { cats } = useCats()
  return (
    <div>
      <div className="leftside">
        <h1>craigslist</h1>
        <h3>create a posting</h3>
        <h3>my account</h3>
      </div>
      <div className="cat">
        {cats.map(cat => (
          <div className="subcat">
            <h2>{cat.name}</h2>
            {cat.sub.map(item => (
              <Link key={`subcat-${item.id}`} to={`/listing/${item.id}`}>
                <h5>{item.name}</h5>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
