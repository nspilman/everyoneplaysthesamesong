import React from "react"
import { Link } from "gatsby"

const roundDisplay = ({post}) => {
  const { title } = post.frontmatter;
  const {slug, playlist, song } = post.fields;
  return (
    <div className="card">
    <Link className="round-link" to={ slug }>
      <h3>
        <p className='song-name'>{ song }</p>
      </h3>
      <p className="song-round">
        { title }
      </p>
    </Link>
    <div>
      {
        playlist ? <div dangerouslySetInnerHTML={{ __html: playlist }}/> : ''
      }
    </div>
  </div>
    )
}

export default roundDisplay
