# League of Legends - Champion Selector.
A script that accesses the Lol Client API to find the character you've locked in at the character select screen in league of legends and opens the OP.GG/Champion/name for optimal builds.

Waits 10 minutes after opening the browser once, resets the variables requires and starts scanning again for activity. Endless loop on a 2 second delay until information is provided again. Rinse and repeat.


# How to run!?

To use this script you'll have to copy all the files into a seperate folder on your computer, you want to go into your command console and direct yourself to the folder holding the files. Once in the folder type "node index.js" to run the script. It will check every few seconds weather or not a character has been locked in.

# Things I've learnt.

I learnt a lot of things along the way of creating this script. I had an extremely hard time utilising the League of Legends Live Game Data API as there is no real officially supported information for it anywhere. I learnt about basic authorization and security measures in place involved with certain APIs. I learnt a lot about nodeJS, express and NPM packages and how they get information and give it back to the user. 

## IMPORTANT!!

The script will not function if you do not have the League of Legends client OPEN. The locked file is generatored newly everytime you restart the client with a new authorization password and port number.
