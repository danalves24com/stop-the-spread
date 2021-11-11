
function App() {
  return (
    <>

      <div class="mx-auto bg-red-100 h-screen">
        <div class=" text-center py-10 h-1/4 items-center justify-center flex">
          <div>
            <div class="text-4xl tracking-widest">Stop The Spread</div>
            <div class="text-sm tracking-small px-5">Use this tool to help you decide if you should attend an event or not</div>
          </div>
        </div>
        <div class="h-3/4">
          <div class="flex items-center justify-center my-2">
            <div class="text-lx tracking-wide mx-2">
              Select Your Country:
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
          <div class="flex items-center justify-center my-2">
            <div class="text-lx tracking-wide mx-2">
              Event Size:
            </div>
            <div class="">
              <input type="number" class="outline-none bg-red-200 text-center rounded p-1" id="size">
              </input>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto  h-screen">
        <div class="flex items-center justify-center h-1/3">
          <div class="border-4 p-6 border-red-600 rounded-full">
            <div class="text-5xl color-red-500">
              8.2
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
                    Attend but with a respirator
                  </li>
                  <li>
                    Do not consume food
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

export default App;
