import React from 'react'
import PropTypes from 'prop-types'
// Material core
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Contact from 'components/Contact/Contact.jsx'

const ContactList = ({...props}) => {
  const { classes, contacts } = props
  let contactItems = (
    contacts.map((prop, key) => {
      return (
        <Contact
          contactName={prop.contactName}
          address={prop.address}
          pubkey={prop.pubkey}
        />
      )
    })
  )
  return (
    <div>
      {contactItems}
    </div>
  )
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
}

export default withStyles()(ContactList)
