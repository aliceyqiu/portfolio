// Favorite books data, sourced from book-covers.json.
// Add an optional `quote` to any book to show favorite quotes in its modal, e.g.
//   "quote": "a favorite quote"
//   "quote": ["first favorite quote", "second favorite quote"]
const BOOKS = [
  {
    "title": "Being Mortal: Medicine and What Matters in the End",
    "author": "Atul Gawande",
    "isbn": "0805095152",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0805095152-L.jpg",
    "quote": "\“We end up with institutions that address any number of societal goals…but never the goal that matters to the people who reside in them: how to make life worth living when we’re weak and frail and can’t fend for ourselves anymore.\” (pg. 77)"
  },
  {
    "title": "Martyr!",
    "author": "Kaveh Akbar",
    "isbn": "0593537610",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0593537610-L.jpg",
    "quote": [
      "\"The first baby didn’t come out speaking Farsi or Arabic or English or anything. We invented it, this language where one man is called Iraqi and one man is called Iranian and so they kill each other. Where one man is called an officer so he sends other men, with heads and hearts the size of his own, to split their stomachs open over barbed wire. Because of language, this sound stands for this thing, that sound stands for that thing, all these invented sounds strutting around, certain as roosters. It is no wonder we got it so wrong.\" (pg. 125)",
      "\"Eight of the ten commandments are about what thou shalt not. But you can live a whole life not doing any of that stuff and still avoid doing any good. That’s the whole crisis. The rot at the root of everything. The belief that goodness is built on a constructed absence, not-doing. That belief corrupts everything, has everyone with any power sitting on their hands.\" (pg. 270)"
    ]
  },
  {
    "title": "Crying in H Mart",
    "author": "Michelle Zauner",
    "isbn": "9781984898951",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781984898951-L.jpg",
    "quote": "\"In fact, she was both my first and second words: Umma, then Mom. I called to her in two languages. Even then I must have known that no one would ever love me as much as she would.\""
  },
  {
    "title": "The Martian",
    "author": "Andy Weir",
    "isbn": "9780553418026",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg"
  },
  {
    "title": "The Secret History",
    "author": "Donna Tartt",
    "isbn": "1400031702",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/1400031702-L.jpg",
    "quote": "\“Could it be because it (that obstinate little voice in our head) reminds us that we are alive, of our mortality, of our individual souls—which, after all, we are too afraid to surrender but yet make us feel more miserable than any other thing? But isn’t it also pain that often makes us most aware of self? It is a terrible thing to learn as a child that one is a being separate from all the world, that no one and no thing hurts along with one’s burned tongues and skinned knees, that one’s aches and pains are all one’s own. Even more terrible, as we grow older, to learn that no person, no matter how beloved, can ever truly understand us. Our own selves make us most unhappy, and that’s why we’re so anxious to lose them, don’t you think?\” (pg. 36)"
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "isbn": "0062315005",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0062315005-L.jpg",
    "quote": [
      "\“You will never be able to escape from your heart, so it’s better to listen to what it has to say. That way, you’ll never have to fear an unanticipated blow.\” (pg. 134)",
      "\“When I have been truly searching for my treasure, every day has been luminous, because I’ve known that every hour was a part of the dream that I would find it. When I have been truly searching for my treasure, I’ve discovered things along the way that I never would have seen had I not had the courage to try things that seemed impossible for a shepard to achieve.\” (pg. 134)"
    ]
  },
  {
    "title": "The Unbearable Lightness of Being",
    "author": "Milan Kundera",
    "isbn": "0571224385",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0571224385-L.jpg",
    "quote": [
      "\"Tereza would listen and believe that being a mother was the highest value in life and that being a mother was a great sacrifice. If a mother was Sacrifice personified, then a daughter was Guilt, with no possibility of redress.\" (pg. 44)",
      "\"A girl who longs for marriage longs for something she knows nothing about. The boy who hankers after fame has no idea what fame is. The thing that gives our every move its meaning is always totally unknown to us.\" (pg. 122)",
      "\"Human time does not turn in a circle; it runs ahead in a straight line. That is why man cannot be happy; happiness is the longing for repetition.\” (pg. 298)"
    ]
  },
  {
    "title": "Their Eyes Were Watching God",
    "author": "Zora Neale Hurston",
    "isbn": "0061120065",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/0061120065-L.jpg",
    "quote": "\"…Love ain’t somethin’ lak uh grindstone dat’s de same thing everywhere and do de same thing tuh everything it touch. Love is lak de sea. It’s uh movin’ thing, but still and all, it takes its shape from da shores it meets, and it’s different with every shore.\" (pg. 191)"
  },
  {
    "title": "Exhalation",
    "author": "Ted Chiang",
    "isbn": "9781101947883",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781101947883-L.jpg",
    "quote": [
      "\"\""
    ]
  },
  {
    "title": "The Paper Menagerie",
    "author": "Ken Liu",
    "isbn": "9781481424363",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781481424363-L.jpg"
  },
  {
    "title": "The Glass Castle",
    "author": "Jeannette Walls",
    "isbn": "9780743247542",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780743247542-L.jpg"
  },
  {
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "isbn": "9780553213508",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780553213508-L.jpg"
  },
  {
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "isbn": "9780062838629",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062838629-L.jpg"
  },
  {
    "title": "Giovanni's Room",
    "author": "James Baldwin",
    "isbn": "9780345806567",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345806567-L.jpg",
    "quote": [
      "\"People are full of dirty words. The only time they do not use them, most people I mean, is when they are describing something dirty.\" (pg. 81)",
      "\"Well, isn’t it true? You don’t have a home until you leave it and then, when you have left it, you can never go back.\" (pg. 116)",
      "\"She fitted in my arms, she always had, and the shock of holding her caused me to feel that my arms had been empty since she had been away.\" (pg. 120)"
    ]
  },
  {
    "title": "The Complete Persepolis",
    "author": "Marjane Satrapi",
    "isbn": "9780375714832",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375714832-L.jpg"
  },
  {
    "title": "Almond",
    "author": "Won-Pyung Sohn",
    "isbn": "9780062961389",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062961389-L.jpg",
    "quote": "\"“Even though my brain was a mess, what kept my soul whole was the warmth of the hands holding mine on both sides.\” (pg. 164)"
  },
  {
    "title": "The Autobiography of Malcolm X",
    "author": "Malcolm X, Alex Haley",
    "isbn": "9780345376718",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780345376718-L.jpg",
    "quote": "\"You have sweated blood to help him build a country so rich that he can today afford to give away millions—even to his enemies! And when those enemies have gotten enough from him to then be able to attack him, you have been his brave soldiers, dying for him.\” (pg. 277)"
  },
  {
    "title": "The Hot Zone",
    "author": "Richard Preston",
    "isbn": "9780385479561",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385479561-L.jpg"
  },
  {
    "title": "Project Hail Mary",
    "author": "Andy Weir",
    "isbn": "9780593135228",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780593135228-L.jpg"
  },
  {
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "isbn": "9780375842207",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg"
  },
  {
    "title": "Someone Who Will Love You in All Your Damaged Glory: Stories",
    "author": "Raphael Bob-Waksburg",
    "isbn": "9780525432722",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525432722-L.jpg",
    "quote": "\“And we will realize that Friday 18 July, like every day in history before it, was a moment, a twenty four-hour trick of the light, a thing that happened once and never again. And that sad truth will just about swallow us whole.\” (pg. 242)"
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "isbn": "9780307588364",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780307588364-L.jpg"
  },
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "isbn": "9780441172719",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    "quote": "\“Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.\” (pg. 363)"
  },
  {
    "title": "A Little Life",
    "author": "Hanya Yanagihara",
    "isbn": "9780804172707",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9780804172707-L.jpg"
  },
  {
    "title": "The Little Friend",
    "author": "Donna Tartt",
    "isbn": "9781400031696",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781400031696-L.jpg"
  },
  {
    "title": "Anxious People",
    "author": "Fredrik Backman",
    "isbn": "9781501160844",
    "coverUrl": "https://covers.openlibrary.org/b/isbn/9781501160844-L.jpg",
    "quote": [
      "\“They trust us, which is a crushing responsibility, because they haven’t yet realized that we don’t actually know what we’re doing…Then they get older. Sometimes he managed to forget that for a moment and found himself reaching to hold their hands. They were so embarrassed. Him too. It’s hard to explain to a 12-year-old that when you were little and I walked too fast, you would run to catch up with me and take hold of my hand, and those were the best moments of my life.\” (pg. 22)",
      "\“You don’t have to like all children. Just one. And children don’t need the world’s best parents, just their own parents. To be perfectly honest with you, what they need most of the time is a chauffeur.\” (pg. 258)"
    ]
  }
];
