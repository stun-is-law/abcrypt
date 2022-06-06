import React, { Component } from "react";
import "../styles/Main.css";

const alphabet = [
  "a",
  "#",
  "d",
  "C",
  "b",
  "'",
  "c",
  "1",
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

  render() {
    return (
      <main>
        <div className="left-column">
          <span className="vertical-line"></span>
          <div className="description">
            <h1>
              Your secrets are safe with{" "}
              <span className="text-gradient">abcrypt</span>
            </h1>
            <ul>
              <li>
                <p>
                  <span className="bold">advanced crypting technology</span> so
                  hard to crack
                </p>
              </li>
              <li>
                <p>
                  create <span className="bold">random, personal key</span> and
                  maximize security
                </p>
              </li>
              <li>
                <p>
                  choose from <span className="bold">one hundred</span> pre-made
                  key templates
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <h1>
            Try <span className="text-gradient">it</span> yourself!
          </h1>
          <textarea
            value={this.state.decryptedMessage}
            onChange={this.handleEncrypt}
            placeholder="type or paste text to encrypt here"
          ></textarea>
          <textarea
            value={this.state.encryptedMessage}
            onChange={this.handleDecrypt}
            placeholder="encrypted text will appear here"
          ></textarea>
        </div>
      </main>
    );
  }
}

export default Main;
