import { Component } from "react";

class TableHead extends Component {
  override render() {  
  return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Passenger count</th>
          <th>Crew count</th>
        </tr>
      </thead>
  )
}
}
export default TableHead;