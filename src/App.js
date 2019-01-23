import React, { Component } from 'react';
import TreeTable from './components/TreeTable/TreeTable';

const items = [
  {
    id: 1,
    priority: <span>1</span>,
    from: 'xuankhanhyb1@gmail.com',
    subject: 'Lorem Ipsum is simply dummy text of the printing',
    sentDate: '12/01/2019'
  },
  {
    id: 2,
    priority: <span>2</span>,
    from: 'xuankhanhyb2@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 1
  },
  {
    id: 3,
    priority: <span>3</span>,
    from: 'xuankhanhyb3@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 1
  },
  {
    id: 4,
    priority: <span>4</span>,
    from: 'xuankhanhyb4@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 3
  },
  {
    id: 5,
    priority: <span>5</span>,
    from: 'xuankhanhyb5@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019'
  },
  {
    id: 6,
    priority: <span>6</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019'
  },
  {
    id: 7,
    priority: <span>7</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 3
  },
  {
    id: 8,
    priority: <span>8</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 3
  },
  {
    id: 9,
    priority: <span>9</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 3
  },
  {
    id: 10,
    priority: <span>10</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 8
  },
  {
    id: 11,
    priority: <span>11</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 8
  },
  {
    id: 12,
    priority: <span>12</span>,
    from: 'xuankhanhyb6@gmail.com',
    subject: 'It is a long established fact that a reader will be distracted',
    sentDate: '12/01/2019',
    parentId: 10
  }];

const columns = [
  {
    key: 'id',
    name: "#"
  },
  {
    key: 'from',
    name: "From",
    width: '200px',
  },
  {
    key: 'subject',
    name: "Subject",
  },
  {
    key: 'sentDate',
    name: "Sent date",
    width: '150px',
  },
  {
    key: 'action',
    name: "##",
    width: '100px',
  }
];

class App extends Component {
  state = {isCloseAll: false};

  render() {
    return (
        <div className="page-container">
          <button className="btn" onClick={() => this.treeTable.closeAll()}>Close all</button>
          <button className="btn" onClick={() => this.treeTable.openAll()}>Open all</button>
          <TreeTable
              items={items}
              columns={columns}
              ref={instance => { this.treeTable = instance; }}
          />
        </div>
    );
  }
}

export default App;
