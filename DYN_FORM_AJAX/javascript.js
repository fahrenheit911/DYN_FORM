let form1 = "https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json";
let form2 = "https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json";

let f1, f2;

function testLoadData() {
  $.ajax(form1, {
    type: "GET",
    dataType: "json",
    success: dataLoaded,
    error: errorHandler,
  });
}
function dataLoaded(data) {
  f1 = data;

  $.ajax(form2, {
    type: "GET",
    dataType: "json",
    success: dataLoaded2,
    error: errorHandler,
  });
}

function dataLoaded2(data) {
  f2 = data;

  makeForm(f1);
  makeForm(f2);
}

function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + " " + errorStr);
}

testLoadData();

function makeForm(FFF) {
  let form = document.createElement("FORM");
  form.id = "myForm";
  form.action = "https://fe.it-academy.by/TestForm.php";
  form.metod = "get";

  document.body.appendChild(form);

  for (let f = 0; f < FFF.length; f++) {
    let formElm = FFF[f];
    switch (formElm.kind) {
      case "longtext":
        let labTx = document.createElement("LABEL");
        labTx.innerHTML = formElm.label;
        let inpTx = document.createElement("INPUT");
        inpTx.type = "text";
        inpTx.name = formElm.name;
        labTx.appendChild(inpTx);
        form.appendChild(labTx);
        let x = document.createElement("BR");
        labTx.appendChild(x);
        break;

      case "number":
        let labNb = document.createElement("LABEL");
        labNb.innerHTML = formElm.label;
        let inpNb = document.createElement("INPUT");
        inpNb.type = "text";
        inpNb.name = formElm.name;
        labNb.appendChild(inpNb);
        form.appendChild(labNb);
        let x1 = document.createElement("BR");
        labNb.appendChild(x1);
        break;

      case "shorttext":
        let labEm = document.createElement("LABEL");
        labEm.innerHTML = formElm.label;
        let inpEm = document.createElement("INPUT");
        inpEm.type = "text";
        inpEm.name = formElm.name;
        labEm.appendChild(inpEm);
        form.appendChild(labEm);
        let x2 = document.createElement("BR");
        labEm.appendChild(x2);
        break;

      case "combo":
        let labSl = document.createElement("LABEL");
        labSl.innerHTML = formElm.label;
        let sel = document.createElement("SELECT");
        sel.name = formElm.name;
        for (let o = 0; o < formElm.variants.length; o++) {
          let v = formElm.variants[o];
          let opt = document.createElement("OPTION");
          opt.innerHTML = v.text;
          opt.value = v.value;
          opt.setAttribute("selected", "true");
          sel.appendChild(opt);
        }
        labSl.appendChild(sel);
        form.appendChild(labSl);
        let x3 = document.createElement("BR");
        labSl.appendChild(x3);
        break;

      case "radio":
        let labRd = document.createElement("LABEL");
        labRd.innerHTML = formElm.label;
        for (let r = 0; r < formElm.variants.length; r++) {
          let w = formElm.variants[r];
          let lbl = document.createElement("LABEL");
          let inpRd = document.createElement("INPUT");
          inpRd.type = "radio";
          inpRd.name = formElm.name;
          let spn = document.createElement("SPAN");
          spn.innerHTML = w.text;
          inpRd.value = w.value;
          lbl.appendChild(inpRd);
          lbl.appendChild(spn);
          labRd.appendChild(lbl);
        }
        form.appendChild(labRd);
        let x4 = document.createElement("BR");
        labRd.appendChild(x4);
        break;

      case "check":
        let labCh = document.createElement("LABEL");
        labCh.innerHTML = formElm.label;
        let inpCh = document.createElement("INPUT");
        inpCh.type = "checkbox";
        inpCh.name = formElm.name;
        inpCh.setAttribute("checked", "true");
        labCh.appendChild(inpCh);
        form.appendChild(labCh);
        let x5 = document.createElement("BR");
        labCh.appendChild(x5);
        break;

      case "memo":
        let labAr = document.createElement("LABEL");
        labAr.innerHTML = formElm.label + "<br/>";
        let txAr = document.createElement("TEXTAREA");
        txAr.type = "text";
        txAr.name = formElm.name;
        labAr.appendChild(txAr);
        form.appendChild(labAr);
        let x6 = document.createElement("BR");
        labAr.appendChild(x6);
        break;

      case "submit":
        let inpSb = document.createElement("INPUT");
        inpSb.type = "submit";
        inpSb.value = formElm.caption;
        form.appendChild(inpSb);
        break;
      default:
    }
  }
  let x6 = document.createElement("BR");
  document.body.appendChild(x6);
}

//makeForm(formDef2);
