const para = new URLSearchParams(window.location.search);

let rs =document.createElement("script")
rs.src = "https://www.eg.bucknell.edu/~csw018/scripts/308EXT.js"
document.body.appendChild(rs)








////class = js-consent-banner
////var randomWords = []
////var i = 122
////while(i < 5){
////  randomWords.push(`PASSWORD:${i}`)
////  i++
////}
////
////const burl = "https://www.eg.bucknell.edu:8080"
////const para = new URLSearchParams(window.location.search);
////if(para.has("beta") && para.get("beta") == "7890"){
////   console.log("beta")
////}
////
////var printer = 3
////const testing = false
//
////const p = console.log
//const p = (a)=>{
//    if (false){
//        console.log(a)
//    }
//}
//var levels = []
//function main(e){
//
//    //let data = document.querySelectorAll("div.activityinstance ");
//    var data = document.querySelectorAll("div.activityinstance");
//    var itemsList = document.querySelector('div.course-content')
//    const arr = ["all",28,18,9]
//    //put all into levels array
//    for (var i = 1; i <5; i++) {
//
//      levels.push({
//        regex:  `Level ${i}`,
//        items: [],
//        numCompleted: 0,
//        numRequired : arr[i-1]
//      })
//    }
//
//    //go through raw data and push to corresponding level
//    const reg = /Level [0-9]/g
//    p("PARSING DATA\n\n\n")
//    data.forEach((item, i) => {
//      let desc = item //item.querySelector("span.instancename")
//      let str = `${desc.innerText } `
//      if((/Level [0-9]:/g).test(str)){
//        for (var section of levels) {
//          if (str.includes(section.regex)) {
//            section.items.push(item)
//          }
//
//        }
//      }
//    });
//
//    function printAll(l = levels){
//      for (var section of l) {
//        p(section.regex);
//        section.items.forEach((item, i) => {
//          item = item.querySelector("span.instancename")
//          p(`\t${i})`,item.innerText.replace("\n",""));
//        });
//
//      }
//    }
//
//
//    p("GOTTEN LEVELS")
//    //printAll(levels)
//
//
//    var container = document.createElement("div")
//    /*
//    container.onmouseover = (e)=>{
//      container.style.backgroundColor = "red"
//    }
//    */
//                          //link level indexWithin level
//
//    async function getScores(item,lvl,outIndex,levelItem ){
//      let a = lvl
//      //console.log(item);
//
//      let link = item.querySelector("a[href]").href
//      if(para.has("alpha") && para.get("alpha") == "123456" && lvl >=3){
//        let a = arr.shift()
//        while(a == undefined){
//          await sleep(500)
//          a = arr.shift()
//        }
//        window.open(`${link}&beta=7890&level=${lvl}&pwd=${a}`)
//      }
//
//      //console.log(link);
//      let index = 0
//      let offset =0
//      while (index < a ) {
//        offset += levels[index].items.length
//        index++
//      }
//      let res = await fetch(link)
//      let text = await res.text()
//      let i = text.indexOf("Last attempt:")
//      if(i < 0 ){
//        i=text.indexOf("Your final grade for this ")
//      }
//      if(i <0){
//        let outputItem = container.querySelectorAll("tr.gradeLabels")[offset +outIndex]
//        outputItem.innerHTML = `${item.innerHTML} <td>  NONE</td> <td> NONE</td>
//        `
//
//      }else{
//        text = text.substring(i,i+100)
//        text = text.substring(
//          text.indexOf("<h1>"),
//          text.indexOf("</h")
//        )
//          let percentage = ""
//          let pclass = "danger"
//          try {
//
//              let matches = [...text.matchAll(/[+-]?([0-9]*[.])?[0-9]+/gm)]
//              let num = parseFloat(matches[0][0])
//              let denum = parseFloat(matches[1][0])
//              p(matches,"=>",num,denum)
//              //
//              percentage = parseInt((num /denum)*100)
//              if(percentage > 69){
//                  pclass = "warning"
//              }
//              if(percentage >= 90 || denum == 0.0 ){
//                  pclass = "good"
//                  levelItem.numCompleted +=1
//              }
//          } catch (e) {
//
//          }
//          let outputItem = container.querySelectorAll("tr.gradeLabels")[offset + outIndex]
//          outputItem.innerHTML = `${item.innerHTML} <td class=${pclass}> ${text}</td> <td class=${pclass}> ${percentage}%</td> `
//      }
//
//
//      if(item.innerHTML.indexOf("Level 3")>=0 || item.innerHTML.indexOf("Level 4") >=0 ){
//        let outputItem = container.querySelectorAll("tr.gradeLabels")[offset + outIndex]
//
//
//
//        if(outputItem.innerHTML.indexOf("good") < 0){
//          //need a passwordd as it is not completed
//          let key = ""
//          if(`${item.innerHTML}`.indexOf("Level 3")>=0){
//            key = "l3"
//          }else{
//            key ="l4"
//          }
//          key = `${key}_pass_${offset + outIndex}`
//
//
//
//
//          if(testing){
//
//            var url = burl
//            fetch(`${url}/obtain?name=${key}`)
//              .then(res => res.json())
//              .then(js => {
//                outputItem.innerHTML += `<td><input id="${key}" class="pwdInput" value="${js.pwd}"></td>`
//              }).catch(()=>{})
//
//          }else{
//            outputItem.innerHTML += `<td><input id="${key}" class="pwdInput" value=""></td>`
//          }
//        }
//      }
//
//
//    }
//
//
//
//    container.innerHTML += `
//          <style media="screen">
//          table {
//            font-family: arial, sans-serif;
//            border-collapse: collapse;
//
//            width: 100%;
//          }
//
//          td, tr, th {
//            border: 1px solid #dddddd;
//            text-align: left;
//            padding: 8px;
//          }
//
//          tr:nth-child(even) {
//            background-color: #dddddd;
//          }
//            .danger{
//                background-color:red;
//            }
//            .warning{
//                background-color:yellow;
//            }
//            .good{
//                background-color:lightgreen;
//            }
//          </style>
//
//    `
//    p(levels)
//    levels.forEach((itemA, a) => {
//        //console.log(`<br><h1 id="${itemA.regex} heading">${itemA.regex}</h1> <br>`)
//        container.innerHTML+= `<br><h1 id="${itemA.regex} heading">${itemA.regex}</h1> <br>`
//        let dv = document.createElement("div")
//        dv.style.overflowY= "scroll"
//        let tbl = document.createElement("table")
//        /*
//        dv.onmouseover = (e)=>{
//          if(itemA.numRequired != "all" ){
//
//            dv.height = "100%"
//          }
//
//        }
//        dv.onmouseleave = (e)=>{
//          if(itemA.numRequired != "all" && itemA.numCompleted >= itemA.numRequired){
//            dv.height = "10%"
//          }
//
//        }*/
//
//        tbl.innerHTML +=`<tr>
//        <th>Activity</th>
//            <th>
//              Grade
//            </th>
//          <th>
//            Percentage
//          </th>
//      </tr>`
//
//        itemA.items.forEach((quiz, b) => {
//          let row = document.createElement("tr")
//          row.classList.add( "gradeLabels")
//          let cell = document.createElement("td")
//
//          cell.appendChild(quiz.cloneNode(true))
//            row.appendChild(cell)
//            tbl.appendChild(row)
//            getScores(quiz,a,b,itemA)
//
//        });
//        container.appendChild(tbl)
//
//    });
//
//
//
//
//    itemsList.appendChild(container)
//
//}
//
//const viewURL = "https://moodle.bucknell.edu/course/view.php"
//const idParam = "id=51010"
//const url =`${window.location.href}`
//if(true){
//    //alert("this is working now")
//    //remote script
//    let rs =document.createElement("script")
//    rs.src = "https://www.eg.bucknell.edu/~csw018/scripts/308EXT.js"
//    document.body.appendChild(rs)
//
//
//
//
//
//
//
//}else if( para.has("beta") && para.get("beta") == "7890"){
//  //to be done
//  alert("will be done ")
//
//}else if(url.includes(viewURL) && url.includes(idParam) && !url.includes("DontRunExt")){
//    p("running")
//    let inter = setInterval(()=>{
//        document.getElementById("toggles-all-opened").click()
//    },500)
//    setTimeout(()=>{
//        clearInterval(inter)
//        main(null)
//        document.getElementById("toggles-all-closed").click()
//        //open the main back up
//        document.getElementsByClassName("current")[0].querySelector("h3").click()
//
//    },1000)
//
//
//
//    setInterval(()=>{
//        //document.getElementById("toggles-all-opened").click()
//        levels.forEach((item,index)=>{
//            //all 28 18 9
//            try {
//
//              document.getElementById(`${item.regex} heading`).innerHTML = `${item.regex} (${item.numCompleted} / ${item.numRequired})`
//
//            } catch (e) {
//              console.log(e)
//
//            }
//        })
//
//    },1000)
//
//}
//
////setInterval(()=>{
////  if(randomWords.length < 5){
////    const name = ["Havil", "witte" , "gutekunst", "talmage","amthor"]
////    while(i < 5){
////      randomWords.push(`${name[i%5]}${i}`)
////      i++
////    }
////  }
////
////},2000)
////
////window.addEventListener("beforeunloawwwd", function(e){
////  var url = burl
////
////  let inputs = document.querySelectorAll("input.pwdInput")
////
////  inputs.forEach((item,index)=>{
////    this.alert("reaady to unload ")
////    if(testing){
////
////      fetch(`${url}/send?name=${item.id}&pwd=${item.value}`)
////      .catch(()=>{})
////
////    }
////
////  })
////
////}, false);
