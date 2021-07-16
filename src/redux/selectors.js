import { createSelector } from "@reduxjs/toolkit"

const getContacts = (state) => state.items
const getFilter = (state) => state.filter
const getloading = (state) => state.loader

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
)
const selectors = { getContacts, getFilter, getFilteredContacts, getloading }
export default selectors
