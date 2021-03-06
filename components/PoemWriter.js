const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
    this.handleValue = this.handleValue.bind(this)
  }

  handleValue(event){
    var content = event.target.value
    if(content){
      this.setState({
        text: content,
        isValid: isValidPoem(content)
      })
    }
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleValue} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }

}

function countWords(line){
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem){
  var poemLines = poem.split('\n').filter(l => l);
  var validPoemLineCount = poemLines.length === 3;
  var validLineWordCount = (
    countWords(poemLines[0]) === 5 &&
    countWords(poemLines[1]) === 3 &&
    countWords(poemLines[2]) === 5
  )
  return validPoemLineCount && validLineWordCount;
}

module.exports = PoemWriter;
