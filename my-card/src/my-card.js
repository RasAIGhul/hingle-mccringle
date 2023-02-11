import { LitElement, html, css } from 'lit';


class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .outsidediv{
    border: 8px solid #000;
    display: inline-block;
    vertical-align: middle;
    width: 400px;
  }
  .hingle {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400;
  }
  .titleCardHingle{
    text-align: center;
    font-family: "Copperplate",fantasy;
    font-size: 200%; 
    width: 400px;
    margin: auto;
  }
  .outside{
      text-align: center;
  } 
  .buttons button:hover,
  .buttons button:focus{
    background: red; 
  }
  .buttons{
    font-size: 20px;
    background: white;
  }
  
  @media (max-width: 600px) {
    .outsidediv {
      transform: scale(.9);
    }
  }
  
  .basic{
    background: orange;
  }
  
  .information{
    padding-inline-start: 0px;
    margin-block-end: 0em;
  }
  
  p{
      margin-block-end: 0;
  }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
 <div>
  <div class='buttons'>
    <button id="addToButton" class="buttons" v-on:click="duplicate"> Add Onto </button>
    <button id="deleteButton" class='buttons' v-on:click="deleter"> Delete Last</button>
    <button id="changeBackgroundButton" class='buttons' v-on:click="background"> Change Background</button>
    <button id="changeHeadingButton" class='buttons' v-on:click="heading"> Change Heading</button>
    <button data-toggle-button class = 'buttons'  v-on:click="toggleDetails"> Toggle Details </button>
  </div>
  
  <div class="outsidediv">
      <img alt='hingle-mccringleberry' class="hingle" src="https://pbs.twimg.com/profile_images/1288205058585300992/eH8L4MYG_400x400.jpg" />
      <div id='toChange'>
        <h1 class="titleCardHingle" id='title'> Hingle McCringleberry </h1>
        <div class="outside">
          <details class ='details'>
            <summary>Details</summary>
            <ul class="information">
              <p> Hingle McCringleberry is the 2012 Heisman-winning tight end out of Penn State University, selected No. 1 overall by the Rhinos in the 2016 NFL Draft.
              </p>
            </ul>
            </details>
        </div>
      </div>
  </div>
</div>

    `;
  }
}

customElements.define('my-card', MyCard);