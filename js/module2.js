const word = prompt("Enter value");
if (word === null || word.trim() === '') {
    alert("Invalid value");
  } else {
    const wordLength = word.length;
    if (wordLength % 2 === 0) {
      const firstIndex = wordLength / 2 - 1;
      const lastIndex = wordLength / 2 + 1;
      alert(word.slice(firstIndex, lastIndex));
    } else{
      const firstIndex = wordLength + 1 / 2 - 1;
      const lastIndex = wordLength + 1 / 2;
      alert(word.slice(firstIndex, lastIndex));
    }
  }
  