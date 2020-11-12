
export default () => `
<div class="main">
    <h2>Quote of The Day</h2>
    <h5>November 4, 2020</h5>
    <p>Quote of The Day:</p>
  <p id="Quote1"></p>
  <button onClick="getRandomQuote()"></button>
    <br>
    <h2>Photo of The Day</h2>
    <h5>November 12th, 2020</h5>
    <div class="fakeimg" style="height:200px;"></div>
    <p></p>
    <p></p>
  </div>
  <span style="z-index:50;font-size:0.9em; font-weight: bold;">
  <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
  <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #ccc; margin-left: 4px; vertical-align: middle;">
    They Said So®
  </a>
</span>
`;