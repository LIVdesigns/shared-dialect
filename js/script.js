const corpus = [
    // remix
"stuff ’ u friend building",
"wait ticket sorry lowkey go",
"class hanging staying ’ yet",
"lol stuff booooooo lol ’",
"r chill call cool see",
"wan crash la forgot bro",
"last either okay oh drink",
"acting ’ sorry happened right",
"unless close lose ’ ’",
"let nowish hehe sure good",
"uhh r keep tmr really",
"na cool haha la vent",
"ive honestly house look wait",
"wait uh reply lol art",
"second u get ’ na",
"something omg 4:30 free yes",
"tell way na thursday nahh",
"sorry ty reminder hella ’",
"yeaaaaa warrior tonight meet smh",
"spread awake rn coffee ’",
"spill away prep work try",
"na home na go ’",
"boooo curious gon like na",
"thought hahah go nah anxious",
"around vid rant couply bland",
"stay water ur forgot ’",
"lowkey ’ ohhh meaning wanted",
"art see meet asap sleep",
"tomorrow sound ’ bit yes",
"liked want bet okay wan",
"’ gon like srsly food",
"place uhmm yeah forgot na",
"’ stop late even also…",
"okaiiiii wanting drink would official",
"still kinda thanks 2nd prep",
"balance ’ got wait lol",
"feeling ’ 2 fine one",
"yeahhhh gon use ’ okay",
"’ ’ tea sure u",
"scheduled bit cry tomorrow get",
"’ class rn see ishhh",
"buying stay reminding ’ na",
"send lol ’ anywhere wan",
"though came liked ’ ’",
"’ wait building like get",
"idk lol lowkey get ’",
"na class ’ warrior lucky",
"good u alright dude asking",
"day good want oh wan",
"lemonade uh class ’ ta",
"ohhh talk let ’ still",
"like 6 drink sleeping ’",
"’ unless totally back day",
"got ’ like 5 ok.",
"couple mad hahaaaa bruh also",
"think yo waiting ’ yes",
"2nd nowhere far talk little",
"gon think grab waiting wait",
"use still kinda everyone inside",
"right bit ’ monday please",
"ok wan lol instead ’",
"’ bringing u ’ suck",
"academic get tmr scared said",
"15 minute kai totally 8:30",
"rn tho like cause prep",
"pack ’ like stay wan",
"class class friend sorry time",
"food late na chilling",

  ];
  
  const container = document.getElementById('container');
  const startMessage = document.getElementById('start-message');
  let index = 0;
  let isStarted = false;
  let lastActive = null;
  
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (!isStarted) {
        isStarted = true;
        startMessage.style.display = 'none';
      }
      showNextLine();
    }
  });
  
  function showNextLine() {
    if (corpus.length === 0) return;
  
    // Pick a random line & remove from array
    const randIndex = Math.floor(Math.random() * corpus.length);
    const line = corpus.splice(randIndex, 1)[0];
  
    // Alternate colors (grey / blue)
    const color = (index % 2 === 0) ? '#666' : '#007bff';
    index++;
  
    // Create element
    const textEl = document.createElement('div');
    textEl.classList.add('text-line');
    textEl.textContent = line;
    textEl.style.color = color;
  
    // Random position
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 50;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    textEl.style.left = `${x}px`;
    textEl.style.top = `${y}px`;
  
    // Add to container
    container.appendChild(textEl);
  
    // Remove highlight from previous active
    if (lastActive) lastActive.classList.remove('active');
  
    // Highlight new one
    textEl.classList.add('active');
    lastActive = textEl;
  }
  