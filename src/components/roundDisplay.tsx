import React, { ReactElement } from "react"
import { Link } from "gatsby"

type RoundProps = {
  round:{
    frontmatter :{
      title: string
    }
    fields: {
      slug: string,
      song: string,
      playlist: string
    }
  }
}

const roundDisplay = ({round}: RoundProps) : ReactElement => {
  const { title } = round.frontmatter;
  const { slug, playlist, song } = round.fields;
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
        playlist && <div dangerouslySetInnerHTML={{ __html: playlist }}/>
      }
    </div>
  </div>
    )
}

export default roundDisplay
