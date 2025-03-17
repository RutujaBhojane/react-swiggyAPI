# Learn React

# parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differnetial Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - removes unused code
- Different dev and prod bundles

# Grubify design


# Header
- Logo
- Nav items (Home, About us, Cart)
# Body
- Search 
- RestaurantContainer
- RestaurantCard -img, name of restaurant, star rating, cuisine, delivery time
# Footer
-Copyright
- Links
- Address
- Contact info


# 2 Types of export

default export/import & named export/import

- default export => if you want to export a single thing from your file. => export default <name of variable/component> => export default Header;
- importing => import <name of variable/component> from "path"; => import Header from "./components/Header";
- if you try to export multiple things from your file then use named export
- => export const CDN_URL = "xyz"; 
- => export const LOGO_URL = "xyz";
- importing => import { CDN_URL } from "../utils/constants";
*/

# React Hooks

(Normal JS Utility functions)
- useState() - superpowerful State variables in react
- useEffect() - It is a hook provided by react which is nothing but a normal js function. It takes 2 arguments one is a callback function and second is a dependency array. useEffect(()=>{}, []); will be called after the main component is rendered. Then callback function of useEffect will be executed and react will rerender the page again after fetching data from the API call made. 


# async - await

- The async keyword in JavaScript is used to define an asynchronous function. This means the function always returns a Promise, even if you don’t explicitly return one.
- The await keyword can only be used inside async functions and is used to pause execution until a Promise is resolved.

# optional chaining 

- Optional chaining (?.) is a feature in JavaScript that safely accesses nested object properties without throwing an error if a property is null or undefined.
- If address is undefined or null, it stops and returns undefined instead of throwing an error.

# Git commands

-  git pull origin main
-  git add .
-  git commit -m "message"
-  git push origin main

# 2 types of routing

 client side routing 

- Handled by the browser using JavaScript.
- Pages don’t fully reload; only parts of the content change.
- Faster after the initial load since no new page request is made.
- Used in Single Page Applications (SPAs) like React.
- Example: Clicking a link updates the URL but doesn’t reload the page.

server side routing

- Every time a user clicks a link, a request is sent to the server.
- The server processes the request and sends a new HTML page.
- Slower because the whole page reloads, but better for SEO and initial load time.
- Used in traditional websites (PHP, Django, Ruby on Rails, etc.).
- Example: Clicking a link loads a completely new page from the server.