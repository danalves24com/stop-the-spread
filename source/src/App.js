import React, { Component } from 'react'
import $ from 'jquery'
import md5 from 'md5-hash'
import Recommendation from './services/recommendation'
import loci from './locales'


var dloc = navigator.language || navigator.userLanguage;
dloc = dloc.split("-")[0]
console.log(dloc);
var loc = loci[0][dloc];



var conditions = loc.adj.opt;


// test data
var infected = 100000, population = 10000000, s =0.6;

class Home extends Component {


  constructor(p){
    super(p)

  }


  computeRisk() {

    var country = $("#countries").val(), size = parseInt($("#size").val());
    var encoded = [], conditionsMet = [], conditionsMetVal = 0, conditionsMetProp = 0;
    for(var c in conditions) {
      c = conditions[c];
      encoded.push(md5((c)))
    }
    for(var e in encoded) {
      e = encoded[e];
      conditionsMet.push($("#"+e).prop('checked'))
    }
    for(var cb in conditionsMet) {
      cb = conditionsMet[cb];
      conditionsMetVal += cb ? 1 : 0;
    }
    conditionsMetProp = conditionsMetVal/conditionsMet.length;
    console.log(country, size, conditionsMet)


    // compute score using recommendation service

    var res = new Recommendation(infected, population)
        .compute(size, conditionsMetProp, s);

    // display score

    var score = parseInt(res*100);
    var scoreColor = 'green'
    if(score >= 90) {
      scoreColor="red-800";
    }
    else if (score < 90 && score >= 75) {
      scoreColor="red-500"
    }
    else if ( score < 75 && score >= 50 ) {
      scoreColor="yellow-500"
    }
    else if ( score < 50 && score >= 25 ) {
      scoreColor="green-500"
    }
    else {
      scoreColor="green-800"
    }
    var classVal = ` border-${scoreColor}`;

    $("#score").html(score);


    var borderClass = $("#border").attr("class");

    $("#border").attr("class", borderClass + classVal)


    $("#result").show();

  }


  componentDidMount() {
    $("#result").toggle()
  }

  render() {
      return (
    <>

      <div class="mx-auto bg-red-100 h-screen min-h-screen">
        <div class="m-0 text-center  h-1/4 items-center justify-center flex">
          <div class="items-center text-center">
            <div class="text-4xl tracking-widest">{loc.title}</div>
            <div class="text-sm tracking-small px-5  text-center">
              {loc.prompt}
            </div>
          </div>
        </div>
        <div class="h-3/4 my-0">
          <div class="flex items-center justify-center py-2">
            <div class="text-lx tracking-wide mx-2">
              {loc.config.p1}
            </div>
            <select class="outline-none bg-red-200 rounded p-1" id="countries">
              <option>
                ----
              </option>
              <option>
                Czechia
              </option>
            </select>
          </div>
          <div class="flex items-center justify-center py-2">
            <div class="text-lx tracking-wide mx-2">
              {loc.config.p2}
            </div>
            <div class="w-1/4">
              <input type="number" class="outline-none w-full bg-red-200 text-center rounded p-1" id="size">
              </input>
            </div>
          </div>
          <div class=" my-5">
            <div class="text-2xl tracking-wide  text-center py-5">
              {loc.adj.title2}
            </div>
            {
              conditions.map(x => {
                return (

                  <div class="flex items-center justify-center py-2">
                    <div class="">
                      <input type="checkbox" class="outline-none bg-red-200 text-center rounded p-1"
                             id={md5(x)}
                      >
                      </input>
                    </div>
                    <div class="text-lx tracking-wide mx-2">
                      <label for={md5(x)}>
                        {x}
                      </label>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div class="flex items-center justify-center my-20">
            <button class="bg-red-200 rounded p-2 outline-none" onClick={this.computeRisk}>
              Calculate Risk
            </button>
          </div>

        </div>
      </div>

      <div class="mx-auto  h-screen" id="result">
        <div class="flex items-center justify-center h-1/3">
          <div class="border-2 p-10 border-yellow-600 rounded-full" id="border">
            <div class="text-5xl text-center color-yellow-500" id="score">
              56
            </div>
            <div class="text-sm tracking-smallest">
              Risk Score
            </div>
          </div>
        </div>
        <div class="h-1/3 m-2 border-2 rounded-lg">
          <div class="mx-5">
              <div class="text-3xl tracking-wide py-3">
                Recommendations
              </div>
              <div class="mx-2">
                <ul class="list-decimal list-inside">
                  <li>
                    ---
                  </li>
                  <li>
                    ---
                  </li>
                </ul>
              </div>

          </div>
        </div>
        <div class="h-auto m-2 border-2 border-bottom-none rounded-lg">
        </div>

      </div>

    </>
  );

  }
}


export default Home;
