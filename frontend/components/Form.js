import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div id='todos'>
        <h2>Todos:</h2>
        {
          this.props.todos.reduce((acc, td) => {
            if (this.props.displaycompleteds || !td.completed) {
              return acc.concat(
                <div
                  onClick={() => this.props.toggleCompleted(td.id)}
                  key={td.id}
                >
                  {td.name} {td.completed ? 'Completed' : ''}
                </div>
              )
            }
            return acc
          }, [])
        }
      </div>
    )
  }
}
