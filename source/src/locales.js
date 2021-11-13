export default [
  {

    "en":
      {
        "title":"Stop The Spread",
        "prompt": "STS is here to help you decive wheather you should attend / host an event",
        "config":
        {
          "p1": "Select your country",
          "p2": "Event size:"
        },
        "adj":
        {
          "optionsCount": 5,
          "title2": "Select all that apply",
          "opt": [
            "I will wear a facemask all the time",
            "Everyone will be Antigen tested",
            "Everyone will be PCR tested",
            "Everyone will be vaccinated",
            "Everyone will be distancing"
          ]
        },
        "button": "Calculate Risk",
        "gen_reco": [
          "Do not attend",
          "Attend but follow recommendations",
          "Attend but be cautious",
          "Attend but be cautious",
          "Event should be safe to attend"
        ],
        "res": {
          "t1": "Risk Score",
          "t2": "Recommendations",
          "t3": "",
          "reco": [

            ["Wear a facemask at all times",
             "Test before attending",
             "Avoid touching surfaces",
             "Keep a 2m distance from others",
             "Sanitize and wash your hands before doing anything",
             "Stay outdoors as much as possible"],
            ["Wear a facemask at all times",
             "Test before attending",
             "Wash / Sanitize",
             "Keep a 2m min distance"],
            ["Wear a fecemask when you can",
             "Try to keep a distance of 2m as much as possible",
             "Wash / Sanitize"],
            ["Wear a fecemask when you can",
             "Try to keep a distance of 2m as much as possible",
             "Wash / Sanitize"],
            ["Try to keep a distance of 2m as much as possible"]

          ]
        }
      },

    "cs":
      {
        "title":"Zastavte šíření",
        "prompt": "STS je tu, aby vám pomohl rozhodnout, kdy byste se měli zúčastnit / pořádat událost",
        "config":
        {
          "p1": "Vyberte svou zemi",
          "p2": "Velikost události:"
        },
        "adj":
        {
          "optionsCount": 5,
          "title2": "Vyberte vše, co se hodí",
          "opt": [
            "Budu nosit masku celou dobu",
            "Každý bude testován na antigen",
            "Každý bude testován PCR",
            "Všichni budou očkováni",
            "Všichni se budou distancovat"
          ]
        },
        "button": "Vypočítat riziko",
        "gen_reco": [
          "Neúčastnit se",
          "Zúčastněte se, ale dodržujte doporučení",
          "Zúčastněte se, ale buďte opatrní",
          "Zúčastněte se, ale buďte opatrní",
          "Účast na akci by měla být bezpečná"
        ],
        "res": {
          "t1": "Skóre rizika",
          "t2": "Doporučení",
          "t3": "",
          "reco": [

            ["Vždy používejte obličejovou masku",
             "Test před účastí",
             "Vyvarujte se dotyku povrchů",
             "Dodržujte vzdálenost 2 m od ostatních",
             "Vydezinfikujte si a umyjte si ruce, než cokoli uděláte",
             "Zůstaňte co nejvíce venku"],
            ["Vždy používejte obličejovou masku",
             "Test před účastí",
             "Umýt / dezinfikovat",
             "Dodržujte minimální vzdálenost 2 m"],
            ["Noste fecemask, když můžete",
             "Snažte se dodržet co největší vzdálenost 2 m",
             "Umýt / dezinfikovat"],
            ["Noste fecemask, když můžete",
             "Snažte se dodržet co největší vzdálenost 2 m",
             "Umýt / dezinfikovat"],
            ["Snažte se udržet co největší vzdálenost 2 m"]

          ]
        }
      }

  }
]
