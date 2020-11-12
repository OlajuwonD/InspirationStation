
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";
const request = require('request');

const router = new Navigo(window.location.origin);
router
  .on({
    ":view": params => render(state[capitalize(params.view)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
}

render(state.Home);

const options = {
  method: "GET",
  url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
  headers: {
    'x-rapidapi-key': "5f7d2c691bmsh49730c1a26bb7acp1f89e9jsne94f614c3c09"
  }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
