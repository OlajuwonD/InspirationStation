import getQuote from "../../lib/getQuote"
export default () => `
<div class="main">
    <h2>Quote of The Day</h2>
    <h5>November 4, 2020</h5>
    <p>Quote of The Day:</p>
  <p>${getQuote}</p>
    <br>
    <h2>Photo of The Day</h2>
    <h5>November 12th, 2020</h5>
    <div class="fakeimg" style="height:200px;"></div>
    <p></p>
    <p>${getQuote}</p>
  </div>
`;