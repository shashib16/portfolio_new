import React from 'react'
import TodoApp from './index'

describe('<TodoApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoApp />)
  })
})