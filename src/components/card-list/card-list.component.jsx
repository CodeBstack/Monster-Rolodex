// import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const Cardlist = ({ monsters }) => {
  // const { monsters } = props; // we destructured in the parentheses

  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

// class Cardlist extends Component {
//   render() {
//     // console.log(this.props);

//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map(monster => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default Cardlist;
