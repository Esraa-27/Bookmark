
var bookmarkList ;
var bookmarkName=document.getElementById("siteName");
var bookmarkURL=document.getElementById("siteURL");

var bookmark ={
    name:null,
    url:null
}
if(localStorage.getItem("bookmarks")!=null){
    bookmarkList=JSON.parse(localStorage.getItem("bookmarks"))
    Display();
}
else{
    bookmarkList=[];
}
function clearForm(){
    bookmarkName.value="";
    bookmarkURL.value="";
}
function addBookmark(){
     bookmark ={
        name:siteName.value,
        url:siteURL.value
    }
    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList))
    clearForm()
    Display();
}
function  Display(){
    var temp="";
    for(var i=0;i<bookmarkList.length;i++){
        temp+=`<div class="bookmark row">
        <div class="col">
            <h2>`+bookmarkList[i].name +`</h2>
        </div>
        <div class="col">
            <button class="m-1 px-3 py-2 btn btn-primary" onclick="visitBookmark(`+i+`)">
                Visit
            </button>
            <button class="m-1 px-3 py-2 btn btn-danger" onclick="DeleteBookmark(`+i+`)">
                Delete
            </button>
            <button class="m-1 px-3 py-2 btn btn-warning" onclick="updateBookmark(`+i+`)">
                Update
            </button>
        </div>
    </div>`
    }
    document.getElementById("bookmarkData").innerHTML=temp;
}

function visitBookmark(i){
    window.open(bookmarkList[i].url, "_blank");
}
function DeleteBookmark(i){
    //for remember
    // pop - Removes from the End of an Array
    // shift - Removes from the beginning of an Array
    // splice - removes from a specific Array index
    // filter - allows you to programatically remove elements from an Array
    bookmarkList.splice(i,1)
  
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList))
    Display();
}

var indexUpdate;

function addUpdate(){
    bookmarkList[indexUpdate].name=bookmarkName.value;
    bookmarkList[indexUpdate].url=bookmarkURL.value;


    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    clearForm()
    Display();
}

function updateBookmark(i){
    indexUpdate=i;
    bookmarkName.value=bookmarkList[i].name;
    bookmarkURL.value=bookmarkList[i].url;
    
    document.getElementById("addupdateBtn").style.display="inline" ;
    document.getElementById("addBtn").style.display="none" ;
   
}
