function get_color(word) {
  long_code = data[word]
  return long_code
}
function changeBodyBg(color){
  document.body.style.background = color;
  document.getElementById("content").style.backgroundColor = color;
  document.getElementById("myTextarea").style.backgroundColor = color;
  document.getElementById("content").style.borderColor = color;
  document.getElementById("myTextarea").style.borderColor = color;
}
function changeChat(color){
  document.getElementById("colorStyle").style.backgroundColor = color;
}

function changeBodyBack(){
  document.body.style.background = 'white';
  document.getElementById("content").style.backgroundColor = '#f1f1f1';
  document.getElementById("myTextarea").style.backgroundColor = 'white';
  document.getElementById("content").style.borderColor = '#f4e4e9';
  document.getElementById("myTextarea").style.borderColor = 'white';
}

let container = {'content' : ''}


function encode(text,update,change) {
  const text_split = text.split(" ")
  const block = []
  // console.log(text_split)
  

  text_split.forEach((element) => {
    if (element.match("^.*[\n]")){
      element = element.match("([a-z]*)[\n]")[1]
      // block.push("<span style='color:rgb"+get_rbg_code(extracted)+";'>█</span>")
      block.push("<span style='color:"+get_color(element)+";'>█</span>")
      block.push("<br>")      
    } else{
      // block.push("<span style='color:rgb"+get_rbg_code(element)+";'>█</span>")
      block.push("<span style='color:"+get_color(element)+";'>█</span>")
    }
    if (update){
      change(get_color(element))
    }
  })

  
  return block.join('')

}



function handleInput(e) {
  currentText = e.target.value.toLowerCase()
  container['content'] = encode(currentText,true,changeBodyBg)
  document.getElementById("content").innerHTML = container['content']
}
function submit() {
  db.collection('posts').add({
      post: container['content'],
  });
}

function handleInput_2(e) {
  currentText = e.target.value.toLowerCase()
  container['content'] = encode(currentText,true,changeChat)
  // document.getElementById("content").innerHTML = container['content']
}
function submit() {
  db.collection('posts').add({
      post: container['content'],
  });
}
// console.log(container)