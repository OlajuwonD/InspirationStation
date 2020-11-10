import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";

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

var unirest = require("unirest");

var req = unirest("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/");

req.query({
	"id": "731",
	"t": "Wisdom",
	"maxR": "1",
	"size": "medium"
});

req.headers({
	"x-rapidapi-host": "healthruwords.p.rapidapi.com",
	"x-rapidapi-key": "5f7d2c691bmsh49730c1a26bb7acp1f89e9jsne94f614c3c09",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

