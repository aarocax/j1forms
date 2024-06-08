document.addEventListener("DOMContentLoaded", e => {
    //Load language
    let loading = true;

    let select = document.getElementById("langSelect");
    if(select) select.value = (window.location.href.indexOf("?lang=en") === -1) ? "0" : "1";
    loading = false;

    select.addEventListener("change", languageChange);

    //Load switch
    let switchItems = document.querySelectorAll('.switch-wrap .item');
    if(switchItems) {
        switchItems.forEach(el=> {
            el.addEventListener("click", e => {
                let name = e.target.getAttribute('data-name');
                if(name == 'form') {
                    showForm();
                    switchItems.forEach(el=>el.classList.remove("active"));
                    e.target.classList.add("active");
                } else if (name === 'docs') {
                    showDocs();
                    switchItems.forEach(el=>el.classList.remove("active"));
                    e.target.classList.add("active");
                }
            })

            function showForm(){
              document.getElementById('form-candidate').style.display = 'block';
              document.getElementById('documents').style.display = 'none';
            }

            function showDocs() {
                document.getElementById('form-candidate').style.display = 'none';
                document.getElementById('documents').style.display = 'block';
            }
        

            if (el.classList.contains('active')) {
                let name = el.getAttribute('data-name');
                if (name === 'form') {showForm()} else if (name === 'docs') {showDocs()}
            }
        })
    }

    //Input type file custom
    let files = document.querySelectorAll(".upload-doc");
    if(files) {
        files.forEach(el=> {
            el.addEventListener('change', function() {
                console.log(this.files[0]);
                let fileName = this.files[0].name;
                el.parentNode.parentNode.classList.add("uploaded");
                el.parentNode.parentNode.parentNode.querySelector(".filename").textContent = fileName;
                el.parentNode.parentNode.parentNode.parentNode.querySelector(".wrap-replace").style.display = "flex";
                let tag = el.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".tag");
                tag.querySelector(".text").textContent = "Done";
                tag.classList.remove("pending");
                tag.classList.add("done");
            });
        })
    }

    //Autoupload file on uploaded file AJAX
    if (files.length > 0) {
        files.forEach(input => {
            input.addEventListener('change', function() {
                const form = this.closest("form");
                if (form) {
                    let formData = new FormData(form);
                    let xhr = new XMLHttpRequest();
                    xhr.open('POST', form.getAttribute('data-action'), true);

                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                console.log("El archivo se ha subido correctamente.");
                                const fileName = input.files[0].name;
                                
                                const wrapReplace = document.querySelector('.wrap-replace');
                                if(wrapReplace) {
                                    wrapReplace.setAttribute('href', `uploads/${fileName}`);
                                    wrapReplace.setAttribute('target', '_blank');
                                }
                            } else {
                                console.error("Hubo un error al subir el archivo.");
                            }
                        }
                    };

                    xhr.send(formData);
                }
            });
        });
    }

    
            

})


function languageChange() {
    
  if (loading) {
    return;
  }

  let lang = document.getElementById("langSelect").value;
  if (lang == "0") {
    window.location.href = window.location.pathname + "?lang=es";
  }

  if (lang == "1") {
    window.location.href = window.location.pathname + "?lang=en";
  }
}


function translator(phrase) {
  let t = window.location.href.indexOf("?lang=en") === -1 ? language_es : language_en;
  return phrase in t ? t[phrase] : phrase;
}