// Task API

import { ApiCore } from "../../utilities/core";


const url = 'repos';

const reposTask = new ApiCore({
  get : true, getRepositories : true,  post : true, url
});

console.log({reposTask});


// reposTask.massUpdate = () => {
//   // Add custom api call logic here
// }


export default reposTask;