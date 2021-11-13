import React, { Component } from 'react'
import $ from 'jquery'
import md5 from 'md5-hash'
import Recommendation from './services/recommendation'
import loci from './locales'


var dloc = navigator.language || navigator.userLanguage;
dloc = dloc.split("-")[0]
var q = window.location.search.split("=")[1];
dloc = q!=undefined?q:dloc;
console.log(dloc);
var loc = loci[0][dloc];



var conditions = loc.adj.opt, recommendations = [];


// test data
var infected = 100000, population = 10000000, s =0.6;

class Home extends Component {


  constructor(p){
    super(p)
    this.state = {
      "conditions": loc.adj.opt,
      "recommendations": [],
      "color": "",
      "message": "",
      "score": 0
    }
    this.computeRisk = this.computeRisk.bind(this)
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
    var recommendationSetIndex = 0;
    if(score >= 90) {
      scoreColor="red-800";
      recommendationSetIndex = 0;
    }
    else if (score < 90 && score >= 75) {
      scoreColor="red-500"
      recommendationSetIndex = 1;
    }
    else if ( score < 75 && score >= 50 ) {
      scoreColor="yellow-500"
      recommendationSetIndex = 2;
    }
    else if ( score < 50 && score >= 25 ) {
      scoreColor="green-500"
      recommendationSetIndex = 3;
    }
    else {
      scoreColor="green-800"
      recommendationSetIndex = 4;
    }
    var classVal = ` border-${scoreColor}`;
    var states = this.state;
    states.recommendations = loc.res.reco[recommendationSetIndex]
    states.color = classVal;
    states.message = loc.gen_reco[recommendationSetIndex];
    states.score = score;


    this.setState(states);


    // show and scroll to
    $("#result").show();
    window.location = "#score"
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
              this.state.conditions.map(x => {
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
          <div class="flex items-center justify-center my-5">
            <button class="bg-red-200 rounded p-2 outline-none" onClick={this.computeRisk}>
              Calculate Risk
            </button>
          </div>

        </div>
      </div>

      <div class="mx-auto  h-screen" id="result">
        <div class="items-center justify-center h-1/3 flex">
          <div class="">
            <div class={"border-2 p-10 " + this.state.color} id="border">
              <div>
                <div class={"text-5xl text-center "} id="score">
                  {this.state.score}
                </div>
                <div class="text-sm tracking-smallest text-center">
                  {loc.res.t1}
                </div>
              </div>
              <div>
                <div class=" mx-10 text-center text-xl">
                  {this.state.message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-1/3 m-2">
          <div class="mx-5">
              <div class="text-3xl tracking-wide py-3">
                {loc.res.t2}
              </div>
              <div class="mx-2">
                <ul class="list-decimal list-inside">

                  {
                    this.state.recommendations.map(r => {
                      return ( <li>
                                 {r}
                              </li>)
                    })
                  }
                </ul>
              </div>

          </div>
        </div>
        <div class="h-auto m-2">
        </div>

      </div>

    </>
  );

  }
}


export default Home;
