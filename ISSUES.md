## Old Firbase Hosting Code
When I run `firebase init hosting` it generates old legacy code that isn't too compatible with modern browsers. 
**Solution**: Initilizign the project with Next.JS will automatically modernize it (implementation later)

## NOTICE
Project was initialized to Version 8 of firebase (compact SDK) as a disclaimer because docs are using Version 9

Version 8: (in /public/index.html)
```html
<script src="/__/firebase/12.0.0/firebase-firestore-compat.js"></script>
```
Version 9: 
```html
import { collection, addDoc } from "firebase/firestore";
```
Since project was initilized to Version 8 the Version 9 import functions are not neccessary due to Version 8 just making these functions available through the global `firebase` object

## PUBLIC API KEY 
As of now the API key is public for ease of development but later WILL be moved to `.env` file to be ignored by git when its time for PRODUCTION