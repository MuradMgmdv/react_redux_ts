import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../store/action-creators/user'


export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreators, dispatch )
}


// связываем action-creators с dispatch, чтоб они сами прокидывались в dispatch
