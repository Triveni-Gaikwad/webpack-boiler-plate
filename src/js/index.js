const grt =require('./greeter');

const g = new grt.Greeter('Sapient');
import "../scss/style.scss";

document.write(`<h1>Hi ${g.greet()}</h1>`);