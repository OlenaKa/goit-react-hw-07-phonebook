import PropTypes from "prop-types"
import ContactItem from "../ContactItem"
import { connect } from "react-redux"
import operations from "../../redux/operations"
import { Component } from "react"
import selectors from "../../redux/selectors"

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }
  render() {
    return (
      <>
        {this.props.loader && <h1>Loading...</h1>}
        {!this.props.loader && (
          <ul>
            <ContactItem contacts={this.props.contacts} />
          </ul>
        )}
      </>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    contacts: selectors.getFilteredContacts(state),
    loader: selectors.getloading(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
