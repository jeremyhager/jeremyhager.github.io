---
title: "Powerbook 140 Pi - Part 1"
date: 2021-12-31T15:20:11-08:00
slug: 2021-12-31-powerbook-140-pi
type: posts
draft: false
categories:
  - default
tags:
  - powerbook 
  - pi
---

I was watching Bill Nye The Science Guy one day, and noticed something interesting: he started talking about the Nobel Prize, and was using a cool retro notebook! I had to pause it and take another look:  
![bill-nye](/bill-nye-zoomed-out.png)
![powebook](/powerbook.png)

Then I thought _hey, what if I repurposed one of these?_. Thus I fell down the rabbit hole of trying to figure out what macintosh he had (probably some sort of powerbook, as the episode came out in 1993 and filming would have been done within a year so maybe powerbook in 1992?), then if anyone else had taken it apart and tried to use a powerbook with a raspberry pi and even looking online for repairs and guides.

Turns out someone had done this before, just with a different powerbook. Someone going by "Dan Jilek" on [hackaday](https://hackaday.io/project/173252-raspberry-pi-powerbook) had done a lot of this work. I followed along and bought all the parts I could think of that he mentioned, including of course the laptop. I spent about $100 on the laptop, really the case was what I was after. I found one that was in what I could see great condition, just missing the back door. Eventually, it arrived and appeared in good condition:  
![](/powerbook-140.jpg)

Now it was time to start taking the laptop apart. The battery was in suprisingly good condition, just a little bit of corrosion but otherwise no swelling:
![](/battery.jpg)

The back of the laptop looked a little concerning, and in the picture you can see the hinges are bent a bit indicating they may be broken:
![](/rear.jpg)

The hinges on the other hand definitly needed some help. Only one screw was coming out and the other kept spinning until I finally gave up and (carefully as I could) pried open the display:
![](/hinges-external.jpg)

And would you look at that, the plastic is completely destroyed:
![](/hinge-left.jpg)
![](/hinge-right.jpg)

Fortunetly someone has already gone through the trouble of [3-d modeling](https://www.thingiverse.com/thing:4391026) these mounts, so I added that to the list of things I need printed. As for the inside of the hinges, well...
![](hinges-internal)

Also note, the ribbon cable in the background to the display was broken when I opened the display. Could have been when I was opening the case, but oh well.

Moving on to the case, I took off the bottom and revealed a 6MB upgrade to the RAM! Now it has a total of 8MB, which was pretty cool.
![](/powerbook-inside.jpg)

I felt a little conflicted tearing this all out without even trying to boot it, but without a screen I wouldn't be able to tell if I could boot it or not fully. So I kept on tearing it down and taking out its parts. The hard drive appears to be original, with the mac logo and all on it which is pretty neat!
![](/hdd.jpg)

After removing more of boards I saw something I didn't notice right away: a thermal sensor for the battery. Somewhere online I read or saw someone saying this was likely a thermal sensor for the battery, originally I thought it was a battery sensor (just if it was plugged in or not) but a thermal sensor makes a little more sense.
![](/thermal-sensor.jpg)

Finally, I had removed everything from the main case. All that remained were standoffs and a few broken standoffs I needed to add to the list to print.
![](/powerbook-stripped.jpg)

Now that those parts were removed, I took the mouse trackball apart and cleaned it off. I had to take the entire thing out in order to open the ball, annoyingly it seemed to have jammed shut after all these years.
![](/mouse.jpg)

Now it was time to move to the display. Taking a look at the display, seemed in good condition at least initially. Too bad the ribbon broke.
![](/display-ribbon.jpg)

Taking the cover off the display revealed that at some point the display got some sort of water damage on it. Perhaps a spilt coffee, beer or even good old water. Whatever the case, it's possible it's repairable but I am going to replace the screen anyway so out it goes!
![](/display-connection.jpg)

Taking a small break from all the screws, I needed to know if I would have to do some fancy manuvering to get the raspberry pi in it or not. Fortunetly, it seems to fit with room overhead!
![](/powebook-pi-room.jpg)

I finally had the 2 devices I wanted to keep original and not replace or change if I could: the keyboard and mouse.
![](/keyboard-and-mouse.jpg)

After all that, I landed with quite a bit of screws:
![](/screws.jpg)

Now it was time to test the keyboard. I got a teensy 3.2, a bad soldering job, and a cheap breadboard.  
For whatever reason it took me several tries before I realized I needed both the ribbon cable from the top and bottom connected to the teensy. According to the only other person I can find on the internet who has done this, the first 3 pins on the bottom membrane don't actually do anything, nor does the 16th pin of the top membrane. Looking at his picture though I eventually realized we had two different connections.  
Mine:
![](/kbmpinouts.jpg)

His:
![](https://cdn.hackaday.io/images/7579171594415140370.jpg)

I gave it a try anyway, and it worked! The keys were wrong, I would push the `;` key and it would give me `.`, but after days of trying to figure out (well, 20 minutes every few days) why it wasn't working I was finally getting some output. Now I need to test each pin or just manually trace them and figure out what each one does what. I am low on wires so it may come to manually tracing. Not a big deal, but something to think about.

## Sources
* [Raspberry Pi Powerbook](https://hackaday.io/project/173252-raspberry-pi-powerbook)
* [Restoring a Macintosh Powerbook 145B](https://www.youtube.com/watch?v=SRScacZP2G4) (great teardown resource)
* [3d model standoffs - extended the size as well for taller standoffs](https://www.thingiverse.com/thing:4948187)
* [3d model powerbook 180 battery. Should be compatible with the 140 as well.](https://www.thingiverse.com/thing:2634681)
* [powerbook 100 series hinge fix](https://www.thingiverse.com/thing:4391026)
* [ifixit teardown of 165c, rather compatible with the 140 and 100 series overall](https://www.ifixit.com/Device/Macintosh_PowerBook_165c)
