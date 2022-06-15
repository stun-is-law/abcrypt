import React, { Component } from "react";
import "../styles/Main.css";

const alphabet = [
  "#",
  "d",
  "C",
  "b",
  "'",
  "c",
  "1",
  "a",
  "e",
  "(",
  "n",
  "3",
  "g",
  "G",
  "0",
  "D",
  "P",
  "9",
  "2",
  "p",
  "@",
  "v",
  "M",
  "6",
  "q",
  ";",
  "L",
  "N",
  ")",
  "o",
  "t",
  "}",
  ",",
  "R",
  "!",
  "l",
  "[",
  "$",
  "r",
  "4",
  "s",
  "F",
  "I",
  "J",
  "7",
  "m",
  "]",
  " ",
  "5",
  "E",
  "k",
  "y",
  "{",
  ".",
  "z",
  "i",
  "j",
  "8",
  "S",
  "T",
  "u",
  "&",
  "x",
  "U",
  "O",
  "w",
  "W",
  "X",
  "?",
  "Y",
  "B",
  "%",
  "h",
  "K",
  "H",
  "f",
  "V",
  "Z",
];

class Main extends Component {
  state = {
    encryptedMessage: "",
    decryptedMessage: "",
  };

  handleEncrypt = (e) => {
    const input = e.target.value; // get input
    const seed = Math.floor(Math.random() * 10 + 3); // create random seed
    let encryptedMessage = alphabet[seed].toString(); // choose starting letter
    input.split("").forEach((char) => {
      const oldIndex = alphabet.indexOf(char);
      if (oldIndex === -1) alert(`Sorry, you can't use "${char}"!`); // unregistered char alert
      const newIndex =
        oldIndex + seed < alphabet.length
          ? oldIndex + seed
          : oldIndex + seed - alphabet.length;
      encryptedMessage += alphabet[newIndex];
    });
    this.setState({ encryptedMessage, decryptedMessage: input });
  };

  handleDecrypt = (e) => {
    const input = e.target.value;
    const seed = alphabet.indexOf([...input].splice(0, 1).toString());
    let decryptedMessage = "";
    input.split("").forEach((char) => {
      const oldIndex = alphabet.indexOf(char);
      if (oldIndex === -1) alert(`Sorry, you can't use "${char}"!`);
      const newIndex =
        oldIndex - seed >= 0
          ? oldIndex - seed
          : oldIndex - seed + alphabet.length;
      decryptedMessage += alphabet[newIndex];
    });
    decryptedMessage = decryptedMessage.slice(1);
    this.setState({ decryptedMessage, encryptedMessage: input });
  };

  componentDidUpdate() {
    if (
      this.state.decryptedMessage === "" &&
      this.state.encryptedMessage !== ""
    )
      this.setState({ encryptedMessage: "" });
  }

  render() {
    return (
      <main className="encrypt">
        <div className="left-column">
          <span className="vertical-line"></span>
          <div className="description">
            <h2>
              Your secrets are safe with{" "}
              <span className="text-gradient">abcrypt</span>
            </h2>
            <ul>
              <li>
                <p>
                  <span className="bold">unlimited and free access</span> to all
                  functions
                </p>
              </li>
              <li>
                <p>
                  chat and{"  "}
                  <span className="bold">have fun</span> with your friends
                </p>
              </li>
              <li>
                <p>
                  <span className="bold">no more annoying ads</span> popping up
                  everywhere
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <h2>
            Try <span className="text-gradient">it</span> yourself!
          </h2>
          <textarea
            value={this.state.decryptedMessage}
            onChange={this.handleEncrypt}
            placeholder="type or paste text to ENCRYPT here"
          ></textarea>
          <textarea
            value={this.state.encryptedMessage}
            onChange={this.handleDecrypt}
            placeholder="type or paste text to DECRYPT here"
          ></textarea>
        </div>
      </main>
    );
  }
}

export default Main;
