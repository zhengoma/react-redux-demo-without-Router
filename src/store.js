import { connect } from 'react-redux';
import {
    changeTextAction, buttonClickAction
} from './action.js';
import demo from './sonpage';

//映射Redux state到组件的属性  
function mapStateToProps(state) {
    return { text: state.text }
}

//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction)
    }
}

//连接组件  
export default connect(mapStateToProps, mapDispatchToProps)(demo)  