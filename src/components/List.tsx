import {Sub} from '../../types'

interface Props {
  subs: Array<Sub>
}

const List = ({subs}: Props) => {
  return (
          <ul>
        {
          subs.map(sub => {
            return (
            <li key={sub.avatar}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nickname}`} />
              <h4>{sub.nickname} (<small>{sub.monthSubs}</small>)</h4>
              <p>{sub.description}</p>
            </li>)
          })
        }
      </ul>
  )
}

export default List
