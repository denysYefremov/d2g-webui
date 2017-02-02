import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/filterActions';
import { getVisibilityFilter } from '../selectors/filterSelectors';
import Link from '../../components/link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === getVisibilityFilter(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
