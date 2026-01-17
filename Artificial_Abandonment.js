// Artificial Abandonment Tabs
const AAthumbnail = document.getElementById("AAthumbnail");
const AAunusedSingleArt = document.getElementById("AAunusedSingleArt");

const AAthumbnailLabel = document.getElementById("AAthumbnailLabel");
const AAunusedSingleArtLabel = document.getElementById("AAunusedSingleArtLabel");

const AAimage = document.getElementById("AAimg");
const AAimageLink = document.getElementById("AAimgLink");

AAthumbnail.addEventListener("click", function () {
  AAthumbnailLabel.classList.add('active');
  AAunusedSingleArtLabel.classList.remove('active');

  AAimage.src = "ArtificialAbandonment.png";
  AAimageLink.href = "ArtificialAbandonment.png";
});

AAunusedSingleArt.addEventListener("click", function () {
  AAunusedSingleArtLabel.classList.add('active');
  AAthumbnailLabel.classList.remove('active');

  AAimage.src = "ArtificialAbandonmentStem.png";
  AAimageLink.href = "ArtificialAbandonmentStem.png";
});

// Artificial Abandonment Lyric Tabs
const lyrics = document.getElementById("lyrics");
const OG = document.getElementById("OG");
const NEW = document.getElementById("2024");

const ogLabel = document.getElementById("ogLabel");
const newLabel = document.getElementById("2024Label")

OG.addEventListener("click", function () {
  ogLabel.classList.add('active');
  newLabel.classList.remove('active');

  lyrics.innerHTML = `If I was really a treasure to you
I'm deserted by the one I trusted the most
Knowing you'll do the same as everyone
I'll be removed and you will be gone

"Please, don't ever try to leave me behind"
But clearly, I know from the start, it's a lie
Seeing you laugh with the figures you love
To all you call 'precious', replace me now

In this world, we keep lusting for something new
One day slowly all will forget with it too
Finally, we'll crave for abandonment
Then end up discarding ourselves

If I was really a treasure to you
I'm deserted by the one I trusted the most
Scared that you'll do the same as everyone
I have left you before it is done

"Please, don't ever try to leave me behind"
But clearly, I know from the start, it's a lie
That time you smiled next to me who you loved
As you called me 'precious', don't leave me now

And somehow your hand is now out of my reach
My voice can be heard, but there's no way to speak
I lied that seeing your smile from afar
Will always be enough for me

And though,
In this world we keep lusting for something new
One day slowly all will forget with it too
In the end, who craved for abandonment
Was this creature I call 'myself'`
});

NEW.addEventListener("click", function () {
  newLabel.classList.add('active');
  ogLabel.classList.remove('active');

  lyrics.innerHTML = `If I were really a treasure to you
I'm deserted by someone I trusted the most
Knowing you'll end up just like everyone
I'll be removed and you will be gone

"Please, don't forget me and leave me behind"
But clearly, I knew from the start, it's a lie
Seeing you laugh with the figures you love
To all you call 'precious', replace me now

In this world, we keep searching for something new
One day slowly all will forget with it too
Finally, we'll crave for abandonment
And end up discarding ourselves

If I were really a treasure to you
I'm deserted by someone I trusted the most
Scared that you'll end up just like everyone
I have left you before it is done

"Please, don't forget me and leave me behind"
But clearly, I knew from the start, it's a lie
Showing your warmth next to me who you loved
You're more than just 'precious', don't leave me now

And somehow your hand is now out of my reach
My voice can be heard, but there's no way to speak
I lied that seeing your smile from afar
Will always be enough for me

And though,
In this world we keep searching for something new
One day slowly all will forget with it too
And the one who craved for abandonment
Was this creature I call 'myself'`
});