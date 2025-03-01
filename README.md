# Learn React

# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
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

/*
*Header
---Logo
---Nav items (Home, About us, Cart)
*Body
---Search 
---RestaurantContainer
---RestaurantCard ---img, name of restaurant, star rating, cuisine, delivery time
*Footer
---Copyright
---Links
---Address
---Contact info
*/

# 2 Types of export

default export/import & named export/import

/*
---default export => if you want to export a single thing from your file. => export default <name of variable/component> => export default Header;
---importing => import <name of variable/component> from "path"; => import Header from "./components/Header";
---if you try to export multiple things from your file then use named export
--- => export const CDN_URL = "xyz"; 
--- => export const LOGO_URL = "xyz";
---importing => import { CDN_URL } from "../utils/constants";
*/

# React Hooks
(Normal JS Utility functions)
---useState() - superpowerful State variables in react
---useEffect() - It is a hook provided by react which is nothing but a normal js function. It takes 2 arguments one is a callback function and second is a dependency array. useEffect(()=>{}, []); will be called after the main component is rendered. Then callback function of useEffect will be executed and react will rerender the page again after fetching data from the API call made. 


# async - await
---The async keyword in JavaScript is used to define an asynchronous function. This means the function always returns a Promise, even if you don’t explicitly return one.
---The await keyword can only be used inside async functions and is used to pause execution until a Promise is resolved.