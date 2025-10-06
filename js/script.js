const corpus = [
    // (same combined corpus as before)
    "Bruh I need to stop sleeping",
    "yes but its due on Sunday night rip",
    "did you get your rhinestones yet?",
    "wait have you seen it?",
    "how long is it?",
    "I have been in n out of sleep all day",
    "KMS i havent started learning it yet",
    "i havent asked my teacher yet",
    "my key dont work no more",
    "idk how i feel about it lwk",
    "thouhts?",
    "OMG YES",
    "nahhh hes getting tea for me",
    "i feel like they call people duing finals",
    "i only made it to semis",
    "like ex head coach",
    "you wont bruh",
    "i dont think ill make it that far",
    "cute i trust the art major",
    "but like thats odd asf",
    "oh shoot i forgot my shoes",
    "valid",
    "damnnnn 5 bucks????",
    "i see how it could come off as mad",
    "the scrunch is really cute",
    "my belly button out",
    "i fear im too fat to be pulling that shiz",
    "actually that might be clear",
    "i wanna see it",
    "for what?",
    "play it safe dude",
    "send it bruh",
    "cutteeeeee",
    "I LOVE ITTT",
    "im coming",
    "i just got mineeee",
    "did you buy your ticket already?",
    "if you were then yea",
    "betttt",
    "im down if youre down",
    "I FORGOT TO REPLY",
    "IM SORRy",
    "i fear I may be in SO cal again that weekend",
    "ughhh i wanna go thoughhh",
    "I snore too",
    "you da goat forrr reaallll",
    "Why did you have to stop working at the bank?",
    "okiieeee",
    "fireeeee",
    "okay what time would you get to my place",
    "take your time",
    "same",
    "mad but happy",
    "im so emotional i literally cant",
    "i have to remind myself why I quit",
    "i just know things are getting better and better",
    "i wonder how the seasoning is gonna be",
    "she wasnt god",
    "happy for her",
    "IKKK i got so emo",
    "i wont be home until 6:30",
    "unfortuanately but she will be there",
    "im buying now",
    "wait dont buy yet",
    "can you do my nails",
    "bless your soullll",
    "oh yes yes",
    "sorry i forgot",
    "do u want to stay over ???",
    "i do want to drink a bit",
    "r u gonna pack sleeping stuff?",
    "lets do it",
    "r u awake",
    "ok cool",
    "i’m waiting for my lemonade",
    "i’m waiting for my lemonade",
    "i’m still feeling scared",
    "it’s on thursday at 8:30",
    "okay. and me too please",
    "yeaaaaa",
    "okaiiiii",
    "wait why",
    "uh ohhh",
    "hahaaaa i’ll tell u about it tmr lol",
    "unless u wanna talk tmr",
    "like now ishhh",
    "i wanted to try academic coffee but they close at 6",
    "so i’m not sure",
    "he said he’ll stay away from the water then lol",
    "After 2. I have class at 4:30 so do u mind meeting me at the art building cause I get out of class then lol",
    "ive been wanting to use them",
    "nahh your chill",
    "booooooo",
    "we’re hella couply",
    "i lwk liked it",
    "both at the same time",
    "and EVERRRYYYONNEEE IS ASKIMG IF WE ARE OFFICIAL YET",
    "yes but it’s ok. to rant a bit more but i see ur in LA",
    "or wanna get food",
    "like far in",
    "he’s also just hanging out with his friends",
    "i’ll go to the second prep class with you hehe",
    "uhh i don’t see you",
    "15 mins from my house",
    "wait when?? monday???",
    "IM DOWN",
    "wait dude. isn’t the 2nd prep class for warriors that day too",
    "sorry i forgot !! but ty for reminding me",
    "i’ll send them asap when i get back home",
    "i’m down to go to either class with u bruh",
    "uhmm also",
    "for tmr",
    "i won’t hahaha",
    "srsly",
    "i’m buying my ticket rn",
    "that’s totally fine !!",
    "i’m gonna cry",
    "but i wonder how good they’re gonna be",
    "WHY DIDNT WE GET A VID LIKE THAT",
    "SMH",
    "i’m gonna lose balance",
    "wait r u on call with kai",
    "but you did last time !",
    "and just kinda spread it around",
    "ohhhh i sis t even think about that",
    "came out of no where",
    "i’ll think of something",
    "it would look bland",
    "so i’m gonna have to stay up late hahah",
    "righttt?? i got lucky. $5",
    "omg i lwk thought u were mad at me",
    "You da man"
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
  