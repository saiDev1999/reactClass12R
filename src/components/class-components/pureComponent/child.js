

import React, { Component, PureComponent } from 'react'

export default class ChildCompo extends PureComponent {
  render() {
    console.log("rendering child...")
    return (
      <div>
        <h3>Child component</h3>
      </div>
    )
  }
}
