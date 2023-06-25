<<<<<<< HEAD
/**
 *  <div id="root">
 *    <h1>Hello World from React !!! </h1>
 *  </div>
 * 
 * 
 */




// const heading=React.createElement("h1",{id:"head", abc:"xyz"}, "Hello World from React !!!");

// console.log(heading);  
// // heading is a normal JS object, with props key -> value = {id:"head", abc:"xyz", children :"Hello World from React !!!"}
   
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// //taking the JS object and converting it to <h1> tag that the browser understands



/**
 * ----------------------------------Nested HTML Structure-------------------------------------
 * <div id="parent">
 *   <div id="child">
 *    <h1>Hello World from React !!! </h1>
 *   </div>
 * </div>
 * 
 */
// const heading=React.createElement("h1", {id:"head"}, "Hello World from React !!!");
// const child=React.createElement("div", {id:"child"}, heading);
// const parent=React.createElement("div", {id:"parent"}, child);

// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



/**
 * --------------------------Nested HTML Str + Siblings --------------------------------------
 * <div id="parent">
 *   <div id="child">
 *    <h1>Im h1 tag </h1>
 *    <h2>Im h2 tag </h2>
 *  </div>
 * </div>
 * 
 */

// const parent=React.createElement("div", {id:"parent"}, 
//                     React.createElement("div", {id:"child"}, 
//                     [React.createElement("h1",{},"Im h1 tag"), React.createElement("h2",{}, "Im h2 tag")]));

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/**
 * --------------------------Nested HTML Str + Siblings --------------------------------------
 * <div id="parent">
 *   <div id="child1">
 *    <h1>Im h1 tag </h1>
 *    <h2>Im h2 tag </h2>
 *  </div>
 * 
 *   <div id="child2">
 *    <h1>Im h3 tag </h1>
 *    <h2>Im h4 tag </h2>
 *  </div>
 * </div>
 * 
 */



const parent=React.createElement("div", {id:"parent"}, 
                    [React.createElement("div", {id:"child1"}, 
                    [React.createElement("h1",{},"Im h1 tag"), React.createElement("h2",{}, "Im h2 tag")]),
                    
                    React.createElement("div", {id:"child2"}, 
                    [React.createElement("h1",{},"Im h3 tag"), React.createElement("h2",{}, "Im h4 tag")])
                
                ]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
=======
/**** 
 * 
 *   <div id ="root">
 *      <h1>Hello World from React !</h1>
 *   </div>
 * 
 * 
 * 
 * 
*/

 
 //created <h1> with "Hello World from React" inside 
//   const heading=React.createElement("h1", {id:"head"}, "Hello World from React !");

//   console.log(heading);
     
//   const root=ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);



/**** 
 * 
 * 
 *   <div id ="parent">
 *    <div id="child">
 *        <h1>I'm h1 tag</h1>
 *      </div>
 *      </div>
 * 
 * 
*/


// const heading=React.createElement("h1", {}, "I'm h1 tag");

// const child=React.createElement("div",{id:"child"},heading);

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1", {}, "I'm h1 tag")));

// console.log(parent);  // ReactElement( JS Object) => HTML tag (Browser Understands) 

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);  // while rendering to the DOM, 


/**
 * 
 *  <div id="parent">
 *      <div id="child1">
 *       <h1 id="head1">I am h1 tag</h1>
 *       <h2 id="head2">I am h2 tag</h2>
 *      </div>
 *      
 *      <div id="child2">
 *       <h3 id="head1">I am h3 tag</h3>
 *       <h4 id="head2">I am h4 tag</h4>
 *      </div>
 *  </div>
 */

const parent=React.createElement("div", {id:"parent"}, 
               [ React.createElement("div", {id:"child1"}, 
                            [React.createElement("h1",{id:"head1"}, "I am h1 tag"), React.createElement("h2", {id:"head2"}, "I am h2 tag ")]), 
                React.createElement("div", {id:"child2"}, 
                            [React.createElement("h3",{id:"head1"}, "I am h3 tag"), React.createElement("h4", {id:"head2"}, "I am h4 tag ")])]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

>>>>>>> 53f103c40033defd031393a8dbcfbf350a00e53f
