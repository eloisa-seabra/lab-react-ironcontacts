import React from 'react';
import './IronContacts.css';
import contacts from '../contacts.json';

class IronContacts extends React.Component {
  constructor() {
    super();
    this.state = {
      data: contacts.slice(0, 5),
    };
  }

  addRandomContact = () => {
    const unusedContacts = contacts.filter((item) => {
      const ContactIslareadyPresent = this.state.data.includes(item);
      return !ContactIslareadyPresent;
    });
    if (unusedContacts.length) {
      const random =
        unusedContacts[Math.floor(Math.random() * unusedContacts.length)];
      const list = [...this.state.data, random];
      this.setState({
        data: list,
      });
    }
  };

  sortByName = () => {
    const list = [...this.state.data];
    list.sort((firstItem, SecondItem) => {
      return firstItem.name > SecondItem.name ? 1 : -1;
    });
    this.setState({
      data: list,
    });
  };

  sortByPopularity = () => {
    const list = [...this.state.data];
    list.sort((firstItem, SecondItem) => {
      return firstItem.popularity > SecondItem.popularity ? -1 : 1;
    });
    this.setState({
      data: list,
    });
  };

  handleContactRemoval = (index) => {
    const list = [...this.state.data];
    list.splice(index, 1);
    this.setState({
      list,
    });
  };

  render() {
    return (
      <div className="width">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName} className="difbtn">
          Sort by name
        </button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table className="table">
          <thead>
            <tr className="header">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((contact, index) => {
              return (
                <tr>
                  <div className="row" key={contact.id}>
                    <div className="details">
                      <td>
                        <img
                          style={{ width: '100px' }}
                          src={contact.pictureUrl}
                        />
                      </td>
                      <td> {contact.name}</td>
                      <td>{parseFloat(contact.popularity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => this.handleContactRemoval(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </div>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IronContacts;
