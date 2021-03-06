// @material-ui/icons
import Message from '@material-ui/icons/Message'
import Forum from '@material-ui/icons/Forum'
import Contacts from '@material-ui/icons/Contacts'
import AccountCircle from '@material-ui/icons/AccountCircle'

// Views
import SendMessages from 'views/SendMessage/SendMessage.jsx'
import Messages from 'views/Messages/Messages.jsx'
import ContactsView from 'views/Contacts/Contacts.jsx'
import Accounts from 'views/Accounts/Accounts.jsx'


const eToERoutes = [
  {
    path: "/send",
    sidebarName: "Send Message",
    navbarName: "Send Message",
    icon: Message,
    component: SendMessages,
  },
  {
    path: "/messages",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Forum,
    component: Messages,
  },
  {
    path: "/contacts",
    sidebarName: "Contacts",
    navbarName: "Contacts",
    icon: Contacts,
    component: ContactsView,
  },
  {
    path: "/accounts",
    sidebarName: "Accounts",
    navbarName: "Accounts",
    icon: AccountCircle,
    component: Accounts,
  },
  { redirect: true, path: "/", to: "/messages", navbarName: "Redirect" }
];

export default eToERoutes;
