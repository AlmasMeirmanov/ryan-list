import React from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { cats } = useCats()
  return (
    <div className="box">
      <div className="leftside">
        <h1>RYAN'S LIST</h1>
        <h3>create a posting</h3>
        <h3>my account</h3>
        <h5>help, faq, abuse, legal</h5>
        <h5>avoid scams and fraud</h5>
        <h5>personal safety tips</h5>
        <h5>terms of use</h5>
        <h5>privacy policy</h5>
        <h5>system status</h5>
        <br></br>
        <h5>about ryanslist</h5>
        <h5>ryanslist is hiring in sf</h5>
        <h5>ryanslist open source</h5>
        <h5>ryanslist blog</h5>
        <h5>best-of-ryanslist</h5>
        <h5>ryanslist TV</h5>
        <h5>“ryanslist joe”</h5>
        <h5>ryan newmark philanthropies</h5>
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
