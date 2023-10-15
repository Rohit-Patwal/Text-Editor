const editor = document.getElementById("editor");
const wordCount = document.getElementById("word");
const charCount = document.getElementById("char");

// active button background~~~~~~~~~~~~`
const buttons = document.querySelectorAll(".active-btn");
buttons.forEach(function(button) {
  let isActive = false;
  
  button.addEventListener("click", function () {
    if (isActive) {
      button.style.backgroundColor = ""; 
    } else {
      button.style.backgroundColor = "#a8a8a8";
    }
    
    // Toggle the state
    isActive = !isActive;
  });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function bold() {
    document.execCommand('bold', false, null);
}


function italic() {
    document.execCommand("italic", false, null);
}

    
    function underline() {
        document.execCommand("underline", false, null);
    }

 

    function alignLeft() {
            document.execCommand("justifyLeft", false, null);
    }

    function alignRight() {
        document.execCommand("justifyRight", false, null);
    }

    function alignCenter() {
        document.execCommand("justifyCenter", false, null);
    }

    function alignJustify() {
        document.execCommand("justifyFull", false, null);
    }

    function outdent() {
        document.execCommand("outdent", false, null);
    }

    function indent() {
    document.execCommand("indent", false, null);
}

function insertLink() {
    const url = prompt("Enter a URL:");
    if (url) {
        document.execCommand("createLink", false, url);
    }
}

// for link clicking
editor.addEventListener("click", function(e) {
    const target = e.target;

    if (target.tagName === "A") {
        const linkUrl = target.getAttribute("href");

        if (linkUrl) {
            window.open(linkUrl, "_blank");
        }
    }
});




// // for word and character counter
editor.addEventListener("input", function counter() {
    const text = editor.textContent;
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const cleanText = text.replace(/\s{2,}/g, " "); // Remove extra spaces
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
});






